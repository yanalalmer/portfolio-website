import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message, recaptcha } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 },
      );
    }

    // Validate reCAPTCHA token
    if (!recaptcha) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 },
      );
    }

    // Verify reCAPTCHA token with Google
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`,
      { method: 'POST' },
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 },
      );
    }

    // If using Formspree, forward the validated data
    const formspreeResponse = await fetch(
      `https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      },
    );

    if (!formspreeResponse.ok) {
      const formspreeError = await formspreeResponse.text();
      console.error('Formspree error:', formspreeError);
      return NextResponse.json(
        { error: 'Failed to send email through Formspree' },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
