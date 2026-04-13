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
            <Button
              variant="outline"
              size="lg"
              className="w-full border-neon-magenta/40 text-neon-magenta hover:bg-neon-magenta/10 hover:text-neon-magenta cyber-clip font-mono uppercase tracking-wider"
            >
              Make an Offer
            </Button>
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
              Shipping
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
                This is a complete, ready-to-fly X8 cine-lifter build. The X8
                configuration (8 motors in coaxial pairs on 4 arms) delivers
                superior thrust-to-weight ratio and redundancy compared to
                traditional quad setups.
              </p>
              <p>
                Equipped with a DJI O4 Air Unit for reliable, low-latency HD
                video transmission up to 5km. The ELRS 2.4G receiver provides
                responsive, long-range control with ultra-low latency.
              </p>
              <p>
                Built with premium components and thoroughly tested. Every solder
                joint inspected, every motor balanced, every connection secured.
                This drone is built to perform out of the box.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <div className="text-sm text-muted-foreground space-y-4 border border-neon-yellow/20 p-6 relative">
              <div className="absolute inset-0 scanline pointer-events-none" />
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
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
