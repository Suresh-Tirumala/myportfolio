"use client";

import { useState } from "react";

type Props = {
  email: string;
  className?: string;
  children: React.ReactNode;
};

export default function CopyEmail({ email, className, children }: Props) {
  const [show, setShow] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setShow(true);
      window.setTimeout(() => setShow(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        data-cursor="hover"
        className={className}
        aria-label={`Copy email ${email}`}
      >
        {children}
      </button>
      <div className="toast" data-show={show} role="status" aria-live="polite">
        Email copied · {email}
      </div>
    </>
  );
}
