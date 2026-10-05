"use client";

/*
 * Adapted from Kibo UI: https://github.com/shadcnblocks/kibo
 * Kibo UI MIT license follows. Keep this notice with the source.
 *
 * Copyright (c) 2023 — Present shadcnblocks
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { useId, useRef, useState } from "react";
import { Globe, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};
export type ContactProps = {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
  className?: string;
  disabled?: boolean;
  onSubmit?: (data: ContactFormData) => void | Promise<void>;
};

/** The application supplies the delivery callback. No message is sent by this source. */
export function Contact({
  title = "Contact us",
  description = "Have a question or want to work together? Send us a message.",
  phone = "+82 10 0000 0000",
  email = "hello@example.com",
  web = { label: "example.com", url: "https://example.com" },
  className,
  disabled,
  onSubmit,
}: ContactProps) {
  const id = useId();
  const lock = useRef(false);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const fields = [
    {
      name: "firstName",
      label: "First name",
      type: "text",
      autoComplete: "given-name",
    },
    {
      name: "lastName",
      label: "Last name",
      type: "text",
      autoComplete: "family-name",
    },
    { name: "email", label: "Email", type: "email", autoComplete: "email" },
    { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      autoComplete: "off",
    },
  ] as const;
  return (
    <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
      <div className="mx-auto grid w-full min-w-0 max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="min-w-0 space-y-8">
          <div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="space-y-5 text-sm">
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 break-all underline-offset-4 hover:underline"
            >
              <Phone
                aria-hidden="true"
                className="size-5 shrink-0 text-muted-foreground"
              />
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 break-all underline-offset-4 hover:underline"
            >
              <Mail
                aria-hidden="true"
                className="size-5 shrink-0 text-muted-foreground"
              />
              {email}
            </a>
            <a
              href={web.url}
              className="flex items-center gap-3 break-all underline-offset-4 hover:underline"
            >
              <Globe
                aria-hidden="true"
                className="size-5 shrink-0 text-muted-foreground"
              />
              {web.label}
            </a>
          </div>
        </div>
        <form
          aria-label="Contact form"
          aria-busy={pending}
          className="min-w-0 space-y-6 rounded-xl bg-muted/50 p-4 sm:p-8"
          onSubmit={async (event) => {
            event.preventDefault();
            if (!onSubmit || disabled || lock.current) return;
            const form = event.currentTarget;
            const values = new FormData(form);
            const data = Object.fromEntries(
              fields.map((field) => [
                field.name,
                String(values.get(field.name) ?? "").trim(),
              ]),
            ) as ContactFormData;
            const missing = fields.filter((field) => !data[field.name]);
            if (missing.length) {
              setInvalid(
                Object.fromEntries(
                  missing.map((field) => [
                    field.name,
                    `${field.label} is required.`,
                  ]),
                ),
              );
              const firstMissing = form.elements.namedItem(missing[0]!.name);
              if (firstMissing instanceof HTMLElement) firstMissing.focus();
              return;
            }
            lock.current = true;
            setPending(true);
            setSuccess(false);
            setError("");
            try {
              await onSubmit(data);
              form.reset();
              setSuccess(true);
              setInvalid({});
            } catch (cause) {
              setError(
                cause instanceof Error
                  ? cause.message
                  : "Unable to send your message. Please try again.",
              );
            } finally {
              lock.current = false;
              setPending(false);
            }
          }}
        >
          <h3 className="text-xl font-semibold">Send us a message</h3>
          {success && (
            <p role="status" className="text-sm">
              Message submitted.
            </p>
          )}
          {error && (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          )}
          {!onSubmit && (
            <p className="text-sm text-muted-foreground">
              Connect your application’s submission callback to enable sending.
            </p>
          )}
          <fieldset
            disabled={disabled || pending}
            className="grid min-w-0 gap-5 sm:grid-cols-2"
          >
            {fields.map((field) => {
              const shared = {
                id: `${id}-${field.name}`,
                name: field.name,
                required: true,
                autoComplete: field.autoComplete,
                "aria-invalid": !!invalid[field.name],
                "aria-describedby": invalid[field.name]
                  ? `${id}-${field.name}-error`
                  : undefined,
                onInvalid: (
                  event: React.InvalidEvent<
                    HTMLInputElement | HTMLTextAreaElement
                  >,
                ) => {
                  const message = event.currentTarget.validationMessage;
                  setInvalid((current) => ({
                    ...current,
                    [field.name]: message,
                  }));
                },
                onChange: () => {
                  setInvalid((current) => ({
                    ...current,
                    [field.name]: undefined,
                  }));
                  setSuccess(false);
                },
              };
              return (
                <div
                  key={field.name}
                  className={cn(
                    "min-w-0 space-y-2",
                    (field.name === "email" ||
                      field.name === "subject" ||
                      field.name === "message") &&
                      "sm:col-span-2",
                  )}
                >
                  <Label htmlFor={shared.id}>
                    {field.label}
                    <span aria-hidden="true"> *</span>
                  </Label>
                  {field.type === "textarea" ? (
                    <Textarea {...shared} rows={4} />
                  ) : (
                    <Input {...shared} type={field.type} />
                  )}{" "}
                  {invalid[field.name] && (
                    <p
                      id={`${id}-${field.name}-error`}
                      className="text-sm text-destructive"
                    >
                      {invalid[field.name]}
                    </p>
                  )}
                </div>
              );
            })}
          </fieldset>
          <Button
            type="submit"
            className="w-full"
            disabled={disabled || !onSubmit || pending}
            loading={pending}
          >
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
}
