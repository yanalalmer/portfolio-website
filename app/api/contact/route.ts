// pages/api/contact.js

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Check if environment variables are set
    if (!process.env.TITAN_EMAIL || !process.env.TITAN_PASSWORD) {
      console.error('Missing email configuration environment variables');
      return NextResponse.json(
        { error: 'Server email configuration error' },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.titan.email',
      port: 465,
      secure: true, // true for port 465, false for 587
      auth: {
        user: process.env.TITAN_EMAIL,
        pass: process.env.TITAN_PASSWORD,
      },
    });

    try {
      // Use a generic name for the from field to avoid domain verification issues
      await transporter.sendMail({
        from: process.env.TITAN_EMAIL, // Just use the email without a custom name
        to: process.env.TITAN_EMAIL, // Your Titan inbox
        replyTo: email, // Set reply-to as the user's email
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br/>${message}</p>`,
      });

      return NextResponse.json({ success: true });
    } catch (emailError) {
      console.error('Nodemailer error:', emailError);
      return NextResponse.json(
        {
          error: `Email sending failed: ${emailError instanceof Error ? emailError.message : 'Unknown error'}`,
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
