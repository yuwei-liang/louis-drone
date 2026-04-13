import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold tracking-tight">Order Confirmed</h1>
      <p className="text-muted-foreground mt-4 text-lg">
        Thank you for your purchase. Your X8 Cine-Lifter is being prepared for
        shipment. You&apos;ll receive a confirmation email shortly.
      </p>
      <p className="text-muted-foreground mt-2 text-sm">
        Questions? Reach out at hello@dronedontcare.com
      </p>
      <a href="/">
        <Button className="mt-8">Back to Shop</Button>
      </a>
    </div>
  );
}
