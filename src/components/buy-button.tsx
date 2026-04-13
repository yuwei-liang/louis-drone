"use client";

import { useState } from "react";

export function BuyButton() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full py-4 text-base font-bold font-mono uppercase tracking-widest bg-gradient-to-r from-neon-cyan to-[oklch(0.7_0.15_220)] text-black cyber-clip transition-all hover:shadow-[0_0_20px_var(--neon-cyan)] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Redirecting..." : "Buy Now \u2014 $2,599"}
    </button>
  );
}
