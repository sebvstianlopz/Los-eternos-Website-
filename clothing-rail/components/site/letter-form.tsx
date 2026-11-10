"use client";

import * as React from "react";

export function LetterForm() {
  const [sent, setSent] = React.useState(false);
  const id = React.useId();

  if (sent) {
    return (
      <p role="status" className="text-[15px] leading-relaxed">
        Thank you. The winter letter goes out in the first week of December.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label htmlFor={id} className="text-[13px] text-background/70">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={id}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="h-11 min-w-0 flex-1 rounded-full border border-background/25 bg-transparent px-5 text-base text-background outline-none transition-colors placeholder:text-background/40 focus-visible:border-background focus-visible:ring-2 focus-visible:ring-background/40 motion-reduce:transition-none sm:text-sm"
        />
        <button
          type="submit"
          className="h-11 shrink-0 rounded-full bg-background px-6 text-sm font-medium text-foreground outline-none transition-transform hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Send me the letter
        </button>
      </div>
      <p className="text-xs leading-relaxed text-background/55">
        Four letters a year, one per rail. Nothing in between.
      </p>
    </form>
  );
}
