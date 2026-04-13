import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: 'X8 Cine-Lifter 8" with O4 Air Unit',
              description:
                "Complete custom-built X8 Cine-Lifter FPV drone. DJI O4 Air Unit, ELRS 2.4G, 5km range. Ready to fly.",
              images: [
                "https://dronedontcare.com/images/8egAAeSweUpp2032.jpg",
              ],
            },
            unit_amount: 259900, // $2,599.00
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://dronedontcare.com"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://dronedontcare.com"}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
