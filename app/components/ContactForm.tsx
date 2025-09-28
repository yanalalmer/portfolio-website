"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";
import {
  sendContactEmail,
  type ContactFormData as ServerContactFormData,
} from "../lib/actions";

declare global {
  interface Window {
    turnstile?: {
      reset: () => void;
      render: (
        container: Element,
        options: { sitekey: string; callback: string; theme: string }
      ) => void;
    };
    handleTurnstileCallback?: (token: string | null) => void;
  }
}

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
  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(
    null
  );
  const [isClient, setIsClient] = React.useState(false);

  type ContactFormData = {
    name: string;
    email: string;
    message: string;
  };

  const handleTurnstileChange = React.useCallback((token: string | null) => {
    setTurnstileToken(token);
  }, []);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (isClient) {
      window.handleTurnstileCallback = handleTurnstileChange;
    }

    return () => {
      if (isClient) {
        delete window.handleTurnstileCallback;
      }
    };
  }, [handleTurnstileChange, isClient]);

  React.useEffect(() => {
    if (!isClient) return;

    const renderTurnstile = () => {
      if (typeof window !== "undefined" && window.turnstile) {
        const widgetContainer = document.querySelector(".cf-turnstile");
        if (widgetContainer && widgetContainer.children.length === 0) {
          try {
            window.turnstile.render(widgetContainer, {
              sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
              callback: "handleTurnstileCallback",
              theme: "light",
            });
          } catch (error) {
            console.error("Turnstile render failed:", error);
          }
        }
      }
    };

    renderTurnstile();
    const timer = setTimeout(renderTurnstile, 1000);

    return () => clearTimeout(timer);
  }, [isClient]);

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      setErrorMessage("Please complete the security verification");
      return;
    }

    setIsSubmitting(true);
    try {
      const formData: ServerContactFormData = {
        ...data,
        turnstileToken,
      };

      const result = await sendContactEmail(formData);

      if (result.success) {
        setSuccessMessage(result.message);
        setErrorMessage("");
        reset();
        setTurnstileToken(null);
        if (isClient && typeof window !== "undefined" && window.turnstile) {
          window.turnstile.reset();
        }
      } else {
        console.error("Failed to send email:", result.message);
        setSuccessMessage("");
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("");
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
          {isClient ? (
            <div
              className="cf-turnstile mt-4"
              data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
              data-callback="handleTurnstileCallback"
              data-theme="light"
            />
          ) : (
            <div className="mt-4" style={{ minHeight: "65px" }}>
              <div className="flex items-center justify-center h-full text-gray-500">
                Loading security verification...
              </div>
            </div>
          )}
          {!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
            <div className="text-red text-sm mt-2">
              Turnstile site key not configured. Please add
              NEXT_PUBLIC_TURNSTILE_SITE_KEY to your environment variables.
            </div>
          )}
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
            className={`mb-16 flex items-center rounded-full bg-secondary text-white px-4 py-2 text-xs font-bold leading-5 capitalize cursor-pointer hover:opacity-80 transition-all ease-in-out ${
              isSubmitting ? "opacity-40 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "sending..." : "send a message"}
          </button>
        </div>
      </form>
    </div>
  );
};
