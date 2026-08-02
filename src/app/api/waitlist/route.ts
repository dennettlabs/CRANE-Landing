import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    // 1. Insert into Supabase
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert([{ full_name: fullName, email }]);

    if (dbError) {
      console.error('Supabase Error:', dbError);

      // If it's a unique constraint violation (like email already exists)
      if (dbError.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist.' },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to add to waitlist. Please try again later.' },
        { status: 500 }
      );
    }

    // 2. Send email via Resend
    const { error: emailError } = await resend.emails.send({
      from: 'Dennett Labs <welcome@mail.dennettlabs.com>',
      to: email,
      subject: 'Welcome to the CRANE Waitlist',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1a1d2e; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; margin-top: 40px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1a1d2e; font-size: 24px; font-weight: 800; margin: 0; letter-spacing: -0.02em; text-transform: uppercase;">DENNETT LABS</h1>
          </div>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Hi ${fullName.split(' ')[0]},</p>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Thank you for your interest in CRANE. You have been successfully added to our exclusive waitlist.</p>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 30px;">We are currently rolling out access to select enterprise partners. We will be in touch with next steps as soon as a spot opens up for you.</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 30px;" />
          <p style="font-size: 14px; color: #64748b; margin: 0;">Best,<br/>The Dennett Labs Team</p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Resend Error:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
