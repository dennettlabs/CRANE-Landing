import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  // Block any requests in production to prevent unauthorized email sending
  if (process.env.NODE_ENV !== 'development') {
    return new NextResponse('Not Found', { status: 404 });
  }

  try {
    const { to, from, subject, body } = await request.json();

    if (!to || !from || !subject || !body) {
      return NextResponse.json({ error: { message: 'Missing required fields' } }, { status: 400 });
    }

    const data = await resend.emails.send({
      from,
      replyTo: 'daniel@dennettlabs.com',
      to: [to],
      subject,
      text: body,
    });

    if (data.error) {
      console.error('Resend API Error:', data.error);
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    console.log('Resend Email Sent Successfully. ID:', data.data?.id);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: { message: error.message } }, { status: 500 });
  }
}
