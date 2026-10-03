import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { to, from, subject, body } = await request.json();

    if (!to || !from || !subject || !body) {
      return NextResponse.json({ error: { message: 'Missing required fields' } }, { status: 400 });
    }

    const data = await resend.emails.send({
      from,
      to: [to],
      subject,
      text: body,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: { message: error.message } }, { status: 500 });
  }
}
