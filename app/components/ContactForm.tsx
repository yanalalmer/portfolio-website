'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import React from 'react';
import {
  sendContactEmail,
  type ContactFormData as ServerContactFormData,
} from '../lib/actions';

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
});

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [successMessage, setSuccessMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  type ContactFormData = {
    name: string;
    email: string;
    message: string;
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const formData: ServerContactFormData = {
        ...data,
      };

      const result = await sendContactEmail(formData);

      if (result.success) {
        setSuccessMessage(result.message);
        setErrorMessage('');
        reset();
      } else {
        console.error('Failed to send email:', result.message);
        setSuccessMessage('');
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      setErrorMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  return (
    <div className="w-full relative pt-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            type="text"
            {...register('name')}
            placeholder="What is your name?"
            className={`w-full focus:bg-transparent active:bg-transparent border-b py-2 bg-transparent main-transition placeholder:text-darkGrey placeholder:opacity-50 focus:border-b-secondary focus:border-b active:border-b-secondary active:border-b outline-none ${
              errors.name ? 'border-b-red' : 'border-b-darkGrey'
            }`}
            onChange={handleInputChange}
          />
          <span className="text-red-500">
            {errors.name?.message || '\u00A0'}
          </span>
        </div>
        <div className="mb-4">
          <input
            type="text"
            {...register('email')}
            placeholder="What is your email?"
            className={`w-full focus:bg-transparent active:bg-transparent border-b py-2 bg-transparent main-transition placeholder:text-darkGrey placeholder:opacity-50 focus:border-b-secondary focus:border-b active:border-b-secondary active:border-b outline-none appearance-none ${
              errors.email ? 'border-b-red' : 'border-b-darkGrey'
            }`}
            onChange={handleInputChange}
          />
          <span className="text-red-500 mb-4">
            {errors.email?.message || '\u00A0'}
          </span>
        </div>
        <div className="mb-4">
          <textarea
            {...register('message')}
            placeholder="Type your message here"
            rows={4}
            className={`resize-none w-full focus:bg-transparent active:bg-transparent border-b outline-none py-2 main-transition bg-transparent placeholder:text-darkGrey placeholder:opacity-50 focus:border-b-secondary focus:border-b active:border-b-secondary active:border-b ${
              errors.message ? 'border-b-red' : 'border-b-darkGrey'
            }`}
            onChange={handleInputChange}
          />
          <span className="text-red-500 mb-4">
            {errors.message?.message || '\u00A0'}
          </span>
        </div>

        {errorMessage && (
          <span className="text-red mb-4 block min-h-[1.5rem]">
            {errorMessage}
          </span>
        )}
        <span className="text-green-500 mb-4 block min-h-[1.5rem]">
          {successMessage || '\u00A0'}
        </span>
        <div>
          <button
            className={`mb-16 flex items-center rounded-full bg-secondary text-white px-4 py-2 text-xs font-bold leading-5 capitalize cursor-pointer hover:opacity-80 transition-all ease-in-out ${
              isSubmitting ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'sending...' : 'send a message'}
          </button>
        </div>
      </form>
    </div>
  );
};
