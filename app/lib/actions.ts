'use server';

import nodemailer from 'nodemailer';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ActionResult {
  success: boolean;
  message: string;
}

export async function sendContactEmail(
  formData: ContactFormData
): Promise<ActionResult> {
  try {
    const { name, email, message } = formData;

    // Validate required fields
    if (!name || !email || !message) {
      return {
        success: false,
        message: 'All fields are required',
      };
    }

    // Configure Nodemailer transporter for Titan email
    const transporter = nodemailer.createTransport({
      host: 'smtp.titan.email',
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.TITAN_EMAIL_USER, // Your Titan email address
        pass: process.env.TITAN_EMAIL_PASSWORD, // Your Titan email password or app password
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error('Email transporter verification failed:', error);
      return {
        success: false,
        message: 'Email service configuration error. Please try again later.',
      };
    }

    // Email content
    const mailOptions = {
      from: process.env.TITAN_EMAIL_USER, // Your verified Titan email
      to: process.env.TITAN_EMAIL_USER, // Send to yourself
      replyTo: email, // User's email for easy reply
      subject: `Portfolio Contact Form: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007acc; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(
              /\n/g,
              '<br>'
            )}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e6f3ff; border-left: 4px solid #007acc;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              This message was sent from your portfolio website contact form.
              Reply directly to this email to respond to ${name} at ${email}.
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from your portfolio website contact form.
Reply to ${email} to respond to ${name}.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message:
        'Thank you for reaching out! I will get back to you as soon as possible.',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again later.',
    };
  }
}
