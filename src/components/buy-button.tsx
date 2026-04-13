"use client";

import { Button } from "@/components/ui/button";
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
    <Button
      size="lg"
      className="w-full text-base py-6"
      onClick={handleCheckout}
      disabled={loading}
    >
      {loading ? "Redirecting to checkout..." : "Buy Now \u2014 $2,599"}
    </Button>
  );
}
