import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BuyButton } from "@/components/buy-button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageGallery } from "@/components/image-gallery";

const PRODUCT_IMAGES = [
  { src: "/images/8egAAeSweUpp2032.jpg", alt: "X8 Cine-Lifter front view" },
  { src: "/images/8gAAAeSwJyRp2032.jpg", alt: "X8 Cine-Lifter angle view" },
  { src: "/images/dc4AAeSw81tp2032.jpg", alt: "X8 Cine-Lifter top view" },
  { src: "/images/1oEAAeSwvb1p2032.jpg", alt: "X8 Cine-Lifter detail" },
  { src: "/images/oV0AAeSwmWZp2032.jpg", alt: "X8 Cine-Lifter components" },
  { src: "/images/dS4AAeSwPY9p2032.jpg", alt: "X8 Cine-Lifter with controller" },
  { src: "/images/lBsAAeSwcY5p2090.jpg", alt: "X8 Cine-Lifter build detail" },
  { src: "/images/ojYAAeSwGjRp206v.jpg", alt: "X8 Cine-Lifter electronics" },
  { src: "/images/gBsAAeSw~o5p205M.jpg", alt: "X8 Cine-Lifter in action" },
  { src: "/images/IY0AAeSw0lVp207a.jpg", alt: "X8 Cine-Lifter close-up" },
];

const SPECS = [
  { label: "Frame Size", value: '8"' },
  { label: "Type", value: "Cine-Lifter (X8 config)" },
  { label: "Weight", value: "2 kg" },
  { label: "Max Flight Time", value: "~15 min" },
  { label: "Max Range", value: "5,000 m (16,404 ft)" },
  { label: "Video System", value: "DJI O4 Air Unit" },
  { label: "Camera", value: "1080p HD Recording" },
  { label: "Connectivity", value: "Wi-Fi, Bluetooth, ELRS 2.4G, SBUS" },
  { label: "Condition", value: "Brand New — Custom Build" },
  { label: "Warranty", value: "1 Month" },
  { label: "Origin", value: "Irvine, CA, USA" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Product hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image gallery */}
        <ImageGallery images={PRODUCT_IMAGES} />

        {/* Product info */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge className="bg-neon-cyan/15 text-neon-cyan border-neon-cyan/30 neon-glow-cyan">
                New
              </Badge>
              <Badge className="bg-neon-magenta/10 text-neon-magenta border-neon-magenta/30">
                Custom Build
              </Badge>
              <Badge className="bg-neon-yellow/10 text-neon-yellow border-neon-yellow/30">
                Ready to Fly
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl font-mono uppercase">
              <span className="text-neon-cyan neon-glow-cyan">X8</span>{" "}
              <span className="text-foreground">Cine-Lifter</span>{" "}
              <span className="text-neon-magenta">8&quot;</span>
              <span className="block text-lg text-muted-foreground mt-1 tracking-widest normal-case font-sans font-normal">
                with O4 Air Unit
              </span>
            </h1>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-bold font-mono text-neon-cyan neon-glow-cyan">
              $2,599
            </span>
            <span className="text-muted-foreground text-sm font-mono">.00 USD</span>
          </div>
          <p className="text-xs font-mono text-neon-yellow/70">
            Component retail value: ~$3,400 &mdash; pre-built, pre-tuned &amp; flight-tested.
          </p>

          <Separator className="bg-neon-cyan/20" />

          <p className="text-sm text-muted-foreground leading-relaxed">
            Hand-built X8 cine-lifter designed for smooth, cinematic FPV footage.
            Running a DJI O4 Air Unit for rock-solid HD video transmission and
            ELRS 2.4G for precise, low-latency control. The X8 motor configuration
            provides exceptional lift and stability &mdash; perfect for carrying
            cinema cameras or flying heavy payloads with confidence. Built and
            tested in Irvine, California.
          </p>

          <div className="flex flex-col gap-3">
            <BuyButton />
            <a href="https://www.ebay.com/itm/236751805942" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-neon-yellow/40 text-neon-yellow hover:bg-neon-yellow/10 hover:text-neon-yellow cyber-clip font-mono uppercase tracking-wider"
              >
                Also Listed on eBay
              </Button>
            </a>
            <a href="mailto:llshopiness@gmail.com?subject=Offer%20for%20X8%20Cine-Lifter&body=Hi%2C%20I%27d%20like%20to%20make%20an%20offer%20on%20the%20X8%20Cine-Lifter.%0A%0AMy%20offer%3A%20%24%0A%0AThanks!">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-neon-magenta/40 text-neon-magenta hover:bg-neon-magenta/10 hover:text-neon-magenta cyber-clip font-mono uppercase tracking-wider"
              >
                Make an Offer
              </Button>
            </a>
            <a href="https://www.instagram.com/drone.dontcare/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-purple-400/40 text-purple-400 hover:bg-purple-400/10 hover:text-purple-400 cyber-clip font-mono uppercase tracking-wider"
              >
                DM on Instagram &nbsp;@drone.dontcare
              </Button>
            </a>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-3 gap-3 mt-2">
            <div className="border border-neon-cyan/20 bg-neon-cyan/5 p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 scanline pointer-events-none" />
              <p className="text-2xl font-bold font-mono text-neon-cyan">15</p>
              <p className="text-[10px] text-neon-cyan/60 uppercase tracking-widest font-mono mt-1">
                min flight
              </p>
            </div>
            <div className="border border-neon-magenta/20 bg-neon-magenta/5 p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 scanline pointer-events-none" />
              <p className="text-2xl font-bold font-mono text-neon-magenta">5km</p>
              <p className="text-[10px] text-neon-magenta/60 uppercase tracking-widest font-mono mt-1">
                max range
              </p>
            </div>
            <div className="border border-neon-yellow/20 bg-neon-yellow/5 p-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 scanline pointer-events-none" />
              <p className="text-2xl font-bold font-mono text-neon-yellow">2kg</p>
              <p className="text-[10px] text-neon-yellow/60 uppercase tracking-widest font-mono mt-1">
                weight
              </p>
            </div>
          </div>

          <div className="text-xs text-muted-foreground space-y-1 mt-2 font-mono">
            <p className="flex items-center gap-2">
              <span className="text-neon-cyan">&#x25B8;</span> Free shipping &mdash; 3-day delivery
            </p>
            <p className="flex items-center gap-2">
              <span className="text-neon-magenta">&#x25B8;</span> Ships from Irvine, California
            </p>
            <p className="flex items-center gap-2">
              <span className="text-neon-yellow">&#x25B8;</span> 1-month warranty included
            </p>
          </div>
        </div>
      </div>

      {/* Specs & details tabs */}
      <div id="specs" className="mt-16">
        <Tabs defaultValue="specs">
          <TabsList className="bg-background border border-neon-cyan/20">
            <TabsTrigger value="specs" className="data-[state=active]:bg-neon-cyan/10 data-[state=active]:text-neon-cyan font-mono uppercase tracking-wider text-xs">
              Specifications
            </TabsTrigger>
            <TabsTrigger value="details" className="data-[state=active]:bg-neon-magenta/10 data-[state=active]:text-neon-magenta font-mono uppercase tracking-wider text-xs">
              Build Details
            </TabsTrigger>
            <TabsTrigger value="shipping" className="data-[state=active]:bg-neon-yellow/10 data-[state=active]:text-neon-yellow font-mono uppercase tracking-wider text-xs">
              Shipping & Returns
            </TabsTrigger>
            <TabsTrigger value="policy" className="data-[state=active]:bg-red-500/10 data-[state=active]:text-red-400 font-mono uppercase tracking-wider text-xs">
              Policy & Disclaimer
            </TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="mt-6">
            <div className="border border-neon-cyan/20 overflow-hidden relative">
              <div className="absolute inset-0 scanline pointer-events-none" />
              {SPECS.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex justify-between px-4 py-3 text-sm font-mono ${
                    i % 2 === 0 ? "bg-neon-cyan/[0.03]" : ""
                  }`}
                >
                  <span className="text-muted-foreground uppercase tracking-wider text-xs">
                    {spec.label}
                  </span>
                  <span className="font-medium text-neon-cyan">{spec.value}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details" className="mt-6">
            <div className="max-w-none text-sm text-muted-foreground space-y-4 border border-neon-magenta/20 p-6 relative">
              <div className="absolute inset-0 scanline pointer-events-none" />
              <p>
                <strong className="text-neon-magenta">5:1 Thrust-to-Weight Ratio.</strong> Maximum performance unlike any other X8 cine-lifter.
              </p>
              <p>
                <strong className="text-neon-magenta">Ready to Fly — 8&quot; Cinematic Octocopter.</strong> Includes:
              </p>
              <ul className="list-none space-y-1 pl-2">
                {[
                  "T-motor V2812 KV925 motors x8",
                  "8\" 8040 3-Blade propellers x8",
                  "T-hobby F7 Pro V2 Flight Controller",
                  "50A ESC (peak 55A) x2",
                  "2.4G ELRS receiver",
                  "microAir GPS M10",
                  "Radiomaster Pocket remote controller",
                  "Tilta Ronin RS gimbal mount",
                  "DJI O4 Air Unit",
                  "XT90 power cable",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-neon-magenta mt-0.5">&#x25B8;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-neon-yellow/80">
                Battery NOT included &mdash; FPV Goggles NOT included &mdash; RS Gimbal NOT included
              </p>
              <p>
                <strong className="text-neon-magenta">Payload:</strong> 3kg / 7 lbs &nbsp;&bull;&nbsp;
                <strong className="text-neon-magenta">Frame weight:</strong> 640g &nbsp;&bull;&nbsp;
                <strong className="text-neon-magenta">Full Carbon Fiber frame</strong>
              </p>
              <p>
                <strong className="text-neon-magenta">Arms:</strong> 16mm wide x 10mm thick &nbsp;&bull;&nbsp;
                <strong className="text-neon-magenta">Landing gear:</strong> TPU bracket with 10mm CF tube
              </p>
              <p>
                Compatible with Ronin RS2/RS3/RS4 gimbal and other platforms with mounting holes 30.5x30.5mm &amp; 20x20mm. Camera plate elevation: 0&ndash;25 degrees (removable).
              </p>
              <p>
                <strong className="text-neon-magenta">Battery:</strong> 6S with XT90 plug recommended (not included) &nbsp;&bull;&nbsp;
                <strong className="text-neon-magenta">Gimbal mount battery plug:</strong> D-tap or XT60 (extra soldering required) &nbsp;&bull;&nbsp;
                <strong className="text-neon-magenta">FPV Goggles:</strong> DJI Goggle 3 recommended
              </p>
            </div>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <div className="text-sm text-muted-foreground space-y-4 border border-neon-yellow/20 p-6 relative">
              <div className="absolute inset-0 scanline pointer-events-none" />
              <p className="text-neon-yellow font-mono uppercase tracking-wider text-xs font-bold">Shipping</p>
              <p>
                <strong className="text-neon-yellow">Free 3-day delivery</strong>{" "}
                to anywhere in the continental United States.
              </p>
              <p>
                <strong className="text-neon-yellow">Free local pickup</strong>{" "}
                available in Irvine, California (92602).
              </p>
              <p>
                Each drone is carefully packaged in a custom hard case to ensure
                it arrives in perfect condition.
              </p>
              <p className="text-neon-yellow font-mono uppercase tracking-wider text-xs font-bold pt-2">Returns</p>
              <p>
                We accept returns within <strong className="text-neon-yellow">7 days</strong> of delivery. The item must be unused, unflown, and returned in its original packaging. Buyer is responsible for return shipping costs.
              </p>
              <p>
                Returns will not be accepted if the drone has been flown, modified, or damaged after delivery.
              </p>
              <p className="text-neon-yellow font-mono uppercase tracking-wider text-xs font-bold pt-2">Refunds</p>
              <p>
                Once the returned item is received and inspected, a full refund will be issued to the original payment method within <strong className="text-neon-yellow">3–5 business days</strong>. Shipping costs are non-refundable.
              </p>
              <p>
                If the item arrives damaged or defective, contact us within <strong className="text-neon-yellow">48 hours</strong> of delivery with photos and we will arrange a replacement or full refund at no cost to you.
              </p>
              <p>
                To initiate a return or refund, email{" "}
                <a href="mailto:llshopiness@gmail.com" className="text-neon-yellow underline">llshopiness@gmail.com</a>{" "}
                with your order details.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="policy" className="mt-6">
            <div className="text-sm text-muted-foreground space-y-4 border border-red-500/20 p-6 relative">
              <div className="absolute inset-0 scanline pointer-events-none" />
              <p className="text-red-400 font-mono uppercase tracking-wider text-xs font-bold">End-Use Disclaimer & Prohibited Uses</p>
              <p>
                By purchasing this product, the buyer agrees that the X8 Cine-Lifter FPV drone is intended solely for lawful civilian use, including recreational, cinematic, and commercial aerial photography and videography.
              </p>
              <p className="text-red-400 font-bold">The following uses are strictly prohibited:</p>
              <ul className="list-none space-y-2 pl-2">
                {[
                  "Any combat, military, or weaponized application",
                  "Terrorist activity of any kind",
                  "Proliferation of weapons of mass destruction (WMD) or any activity related thereto",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&#x25B8;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                The buyer is solely responsible for ensuring that any downstream dealers, resellers, or end-users of this product are made aware of and abide by these same stipulations. Resale or transfer of this product to any party for prohibited purposes is strictly forbidden.
              </p>
              <p>
                The seller assumes no liability for any misuse of this product following the point of sale. All sales are subject to applicable U.S. federal, state, and local laws governing unmanned aerial vehicles (UAVs).
              </p>
              <p className="text-neon-yellow font-mono uppercase tracking-wider text-xs font-bold pt-2">FAA Compliance</p>
              <p>
                This drone may require FAA registration and operator certification depending on intended use and weight. It is the buyer&apos;s responsibility to comply with all FAA regulations and local laws governing drone operation.
              </p>
              <p className="text-xs text-muted-foreground/60 pt-2">
                By completing a purchase, the buyer acknowledges they have read, understood, and agreed to this disclaimer in full.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* About the Builder */}
      <div className="mt-16 border border-neon-cyan/20 p-8 relative overflow-hidden">
        <div className="absolute inset-0 scanline pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Credentials column */}
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-neon-cyan/60">About the Builder</p>
            <h2 className="text-2xl font-bold font-mono uppercase">
              <span className="text-neon-cyan neon-glow-cyan">Louis</span>
            </h2>
            <div className="space-y-2">
              {[
                "5 Years FPV Builder Experience",
                "Ex-Boeing Engineer",
                "6-Year Licensed Pilot",
                "FAA Part 61 & Part 107 Certified",
              ].map((cred) => (
                <p key={cred} className="flex items-center gap-2 text-sm font-mono">
                  <span className="text-neon-cyan">&#x25B8;</span>
                  <span className="text-foreground/80">{cred}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Bio column */}
          <div className="lg:col-span-2 flex flex-col justify-center gap-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              I&apos;m deeply passionate about building UAVs that genuinely serve the people who fly them.
              Whether you&apos;re a cinematographer pushing for silky aerial shots, a civil engineer
              needing a reliable survey platform, an industrial operator, a first responder, or a
              hobbyist just getting into FPV &mdash; I build to your mission, not a spec sheet.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every drone I deliver is hand-built, flight-tested, and tuned by me personally.
              I accept custom requests from all industries and I&apos;m always looking for
              affordable engineering solutions that get the job done right.
            </p>
            <p className="text-sm font-mono text-neon-cyan/80 mt-2">
              Have a project in mind?{" "}
              <a
                href="mailto:llshopiness@gmail.com?subject=Custom%20UAV%20Build%20Request"
                className="underline hover:text-neon-cyan transition-colors"
              >
                Let&apos;s talk.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
