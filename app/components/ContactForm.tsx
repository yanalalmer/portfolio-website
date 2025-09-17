"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .max(50, { message: "Email must be less than 50 characters" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(255, { message: "Message must be less than 255 characters" }),
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

  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [recaptchaToken, setRecaptchaToken] = React.useState<string | null>(
    null
  );
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  type ContactFormData = {
    name: string;
    email: string;
    message: string;
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const onSubmit = async (data: ContactFormData) => {
    if (!recaptchaToken) {
      setErrorMessage("Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(
          "Thank you for reaching out! I will get back to you as soon as possible."
        );
        setErrorMessage("");
        reset();
        // Reset reCAPTCHA
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
      } else {
        console.error("Failed to send email:", result.error);
        setSuccessMessage(""); // Clear any success message
        setErrorMessage(
          result.error || "Failed to send email. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage(""); // Clear any success message
      setErrorMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div className="w-full relative pt-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            type="text"
            {...register("name")}
            placeholder="What is your name?"
            className={`w-full focus:bg-transparent active:bg-transparent border-b py-2 bg-transparent main-transition placeholder:text-darkGrey placeholder:opacity-50 focus:border-b-secondary focus:border-b active:border-b-secondary active:border-b outline-none ${
              errors.name ? "border-b-red" : "border-b-darkGrey"
            }`}
            onChange={handleInputChange}
          />
          <span className="text-red">{errors.name?.message || "\u00A0"}</span>
        </div>
        <div className="mb-4">
          <input
            type="text"
            {...register("email")}
            placeholder="What is your email?"
            className={`w-full focus:bg-transparent active:bg-transparent border-b py-2 bg-transparent main-transition placeholder:text-darkGrey placeholder:opacity-50 focus:border-b-secondary focus:border-b active:border-b-secondary active:border-b outline-none appearance-none ${
              errors.email ? "border-b-red" : "border-b-darkGrey"
            }`}
            onChange={handleInputChange}
          />
          <span className="text-red mb-4">
            {errors.email?.message || "\u00A0"}
          </span>
        </div>
        <div className="mb-4">
          <textarea
            {...register("message")}
            placeholder="Type your message here"
            rows={4}
            className={`resize-none w-full focus:bg-transparent active:bg-transparent border-b outline-none py-2 main-transition bg-transparent placeholder:text-darkGrey placeholder:opacity-50 focus:border-b-secondary focus:border-b active:border-b-secondary active:border-b ${
              errors.message ? "border-b-red" : "border-b-darkGrey"
            }`}
            onChange={handleInputChange}
          />
          <span className="text-red mb-4">
            {errors.message?.message || "\u00A0"}
          </span>
        </div>

        <div className="mb-6">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={handleRecaptchaChange}
            className="mt-4"
          />
        </div>

        {errorMessage && (
          <span className="text-red mb-4 block min-h-[1.5rem]">
            {errorMessage}
          </span>
        )}
        <span className="text-green-500 mb-4 block min-h-[1.5rem]">
          {successMessage || "\u00A0"}
        </span>
        <div>
          <button
            className={`mb-16 ${
              isSubmitting ? "opacity-40 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "sending..." : "send message"}
          </button>
        </div>
      </form>
    </div>
  );
};
