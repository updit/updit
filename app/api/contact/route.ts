import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body: unknown = await req.json();

  if (
    typeof body !== 'object' ||
    body === null ||
    !('name' in body) ||
    !('email' in body) ||
    !('message' in body)
  ) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }
  if (!email || typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
  }
  if (!message || typeof message !== 'string' || message.trim() === '') {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    return NextResponse.json({ error: 'Mail not configured' }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: 'hello@mail.updit.co',
      to,
      subject: `[updit] New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
