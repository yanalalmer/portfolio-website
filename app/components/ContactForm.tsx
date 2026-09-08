'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm as useFormspree, ValidationError } from '@formspree/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';

const FORMSPREE_FORM_ID = 'xvkowjbn';
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

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

type ContactFormData = z.infer<typeof formSchema>;

const inputClassName =
  'w-full focus:bg-transparent active:bg-transparent border-b py-2 bg-transparent main-transition placeholder:text-darkGrey placeholder:opacity-50 focus:border-b-secondary focus:border-b active:border-b-secondary active:border-b outline-none';

export const ContactForm = () => {
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const turnstileTokenRef = useRef('');
  const [turnstileToken, setTurnstileToken] = useState('');

  const updateTurnstileToken = (token: string) => {
    turnstileTokenRef.current = token;
    setTurnstileToken(token);
  };

  const [formspreeState, submitToFormspree, resetFormspree] = useFormspree(
    FORMSPREE_FORM_ID,
    {
      data: {
        'cf-turnstile-response': async () => {
          if (!turnstileTokenRef.current) {
            throw new Error('Turnstile is not ready');
          }
          return turnstileTokenRef.current;
        },
      },
    }
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: ContactFormData) => submitToFormspree(data);

  useEffect(() => {
    if (!formspreeState.succeeded) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      reset();
      resetFormspree();
      updateTurnstileToken('');
      turnstileRef.current?.reset();
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, [formspreeState.succeeded, reset, resetFormspree]);

  if (!TURNSTILE_SITE_KEY) {
    console.error(
      'NEXT_PUBLIC_TURNSTILE_SITE_KEY is missing. Add the Turnstile site key to .env.local.'
    );
  }

  if (formspreeState.succeeded) {
    return (
      <div className="w-full relative pt-16">
        <p className="text-green-500 mb-16">
          Thank you for reaching out! I will get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full relative pt-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            id="name"
            type="text"
            placeholder="What is your name?"
            autoComplete="name"
            className={`${inputClassName} ${
              errors.name ? 'border-b-red' : 'border-b-darkGrey'
            }`}
            {...register('name')}
          />
          <span className="text-red-500">
            {errors.name?.message || '\u00A0'}
          </span>
          <ValidationError
            prefix="Name"
            field="name"
            errors={formspreeState.errors}
            className="text-red-500"
          />
        </div>
        <div className="mb-4">
          <input
            id="email"
            type="email"
            placeholder="What is your email?"
            autoComplete="email"
            className={`${inputClassName} appearance-none ${
              errors.email ? 'border-b-red' : 'border-b-darkGrey'
            }`}
            {...register('email')}
          />
          <span className="text-red-500 mb-4">
            {errors.email?.message || '\u00A0'}
          </span>
          <ValidationError
            prefix="Email"
            field="email"
            errors={formspreeState.errors}
            className="text-red-500 mb-4"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            placeholder="Type your message here"
            rows={4}
            className={`resize-none ${inputClassName} ${
              errors.message ? 'border-b-red' : 'border-b-darkGrey'
            }`}
            {...register('message')}
          />
          <span className="text-red-500 mb-4">
            {errors.message?.message || '\u00A0'}
          </span>
          <ValidationError
            prefix="Message"
            field="message"
            errors={formspreeState.errors}
            className="text-red-500 mb-4"
          />
        </div>

        {TURNSTILE_SITE_KEY ? (
          <div className="mb-6">
            <Turnstile
              ref={turnstileRef}
              siteKey={TURNSTILE_SITE_KEY}
              onSuccess={updateTurnstileToken}
              onExpire={() => updateTurnstileToken('')}
              onError={() => updateTurnstileToken('')}
              options={{ theme: 'auto' }}
            />
          </div>
        ) : null}

        <ValidationError
          errors={formspreeState.errors}
          className="text-red mb-4 block min-h-[1.5rem]"
        />
        <div>
          <button
            type="submit"
            className={`mb-16 flex items-center rounded-full bg-secondary text-white px-4 py-2 text-xs font-bold leading-5 capitalize cursor-pointer hover:opacity-80 transition-all ease-in-out ${
              formspreeState.submitting || !turnstileToken
                ? 'opacity-40 cursor-not-allowed'
                : ''
            }`}
            disabled={formspreeState.submitting || !turnstileToken}
          >
            {formspreeState.submitting ? 'sending...' : 'send a message'}
          </button>
        </div>
      </form>
    </div>
  );
};
