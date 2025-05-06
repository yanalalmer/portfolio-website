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
    console.log('Attempting reCAPTCHA verification with token length:', recaptcha.length);

    const recaptchaResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || '',
          response: recaptcha,
        }),
      },
    );

    const recaptchaData = await recaptchaResponse.json();
    console.log('reCAPTCHA verification response:', JSON.stringify(recaptchaData));

    if (!recaptchaData.success) {
      console.error('reCAPTCHA error details:', recaptchaData['error-codes']);
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
