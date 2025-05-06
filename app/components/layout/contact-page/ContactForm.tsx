'use client';
import { PrimaryButton } from '@components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .max(50, { message: 'Email must be less than 50 characters' }),
  message: z
    .string()
    .min(1, { message: 'Message is required' })
    .max(255, { message: 'Message must be less than 255 characters' }),
  recaptcha: z.string().optional(),
});

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [successMessage, setSuccessMessage] = React.useState('');
  const [recaptchaError, setRecaptchaError] = React.useState('');
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  type ContactFormData = {
    name: string;
    email: string;
    message: string;
    recaptcha?: string;
  };

  const handleRecaptchaChange = (token: string | null) => {
    if (token) {
      setValue('recaptcha', token);
      setRecaptchaError('');
    } else {
      setValue('recaptcha', '');
      setRecaptchaError('Please complete the reCAPTCHA');
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Email sent successfully!');
        setSuccessMessage('Your message has been sent successfully!');
        reset();
        // Reset reCAPTCHA
        recaptchaRef.current?.reset();
      } else {
        console.error('Failed to send email:', result.error);
        setSuccessMessage(''); // Clear any success message
        setRecaptchaError(
          result.error || 'Failed to send email. Please try again later.',
        );
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage(''); // Clear any success message
      setRecaptchaError('An unexpected error occurred. Please try again later.');
    }
  };

  const handleInputChange = () => {
    setSuccessMessage('');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <input
          type="text"
          {...register('name')}
          placeholder="What is your name?"
          className={`w-full focus:bg-transparent active:bg-transparent border-b py-2 bg-transparent main-transition placeholder:text-darkGrey placeholder:opacity-50 focus:border-b-purple-600 focus:border-b active:border-b-purple-600 active:border-b outline-none ${
            errors.name ? 'border-b-red' : 'border-b-darkGrey'
          }`}
          onChange={handleInputChange}
        />
        <span className="text-red">{errors.name?.message || '\u00A0'}</span>
      </div>
      <div className="mb-4">
        <input
          type="text"
          {...register('email')}
          placeholder="What is your email?"
          className={`w-full focus:bg-transparent active:bg-transparent border-b py-2 bg-transparent main-transition placeholder:text-darkGrey placeholder:opacity-50 focus:border-b-purple-600 focus:border-b active:border-b-purple-600 active:border-b outline-none appearance-none ${
            errors.email ? 'border-b-red' : 'border-b-darkGrey'
          }`}
          onChange={handleInputChange}
        />
        <span className="text-red mb-4">{errors.email?.message || '\u00A0'}</span>
      </div>
      <div className="mb-4">
        <textarea
          {...register('message')}
          placeholder="Type your message here"
          rows={4}
          className={`resize-none w-full focus:bg-transparent active:bg-transparent border-b outline-none py-2 main-transition bg-transparent placeholder:text-darkGrey placeholder:opacity-50 focus:border-b-purple-600 focus:border-b active:border-b-purple-600 active:border-b ${
            errors.message ? 'border-b-red' : 'border-b-darkGrey'
          }`}
          onChange={handleInputChange}
        />
        <span className="text-red mb-4">{errors.message?.message || '\u00A0'}</span>
      </div>
      <div className="mb-4">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          onChange={handleRecaptchaChange}
        />
        <span className="text-red mb-4">
          {recaptchaError || errors.recaptcha?.message || '\u00A0'}
        </span>
      </div>
      <span className="text-green-500 mb-4 block min-h-[1.5rem]">
        {successMessage || '\u00A0'}
      </span>
      <PrimaryButton text="send message" type="submit" className="mb-16" />
    </form>
  );
};
