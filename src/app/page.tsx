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
              <Badge variant="secondary">New</Badge>
              <Badge variant="outline">Custom Build</Badge>
              <Badge variant="outline">Ready to Fly</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
              X8 Cine-Lifter 8&quot; with O4 Air Unit
            </h1>
            <p className="text-muted-foreground mt-2">
              Complete custom build &mdash; FPV cinema drone
            </p>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold font-mono">$2,599</span>
            <span className="text-muted-foreground text-sm">.00 USD</span>
          </div>

          <Separator />

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
            <Button variant="outline" size="lg" className="w-full">
              Make an Offer
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center mt-2">
            <div className="rounded-lg border border-border p-3">
              <p className="text-2xl font-bold font-mono">15</p>
              <p className="text-xs text-muted-foreground">min flight</p>
            </div>
            <div className="rounded-lg border border-border p-3">
              <p className="text-2xl font-bold font-mono">5km</p>
              <p className="text-xs text-muted-foreground">max range</p>
            </div>
            <div className="rounded-lg border border-border p-3">
              <p className="text-2xl font-bold font-mono">2kg</p>
              <p className="text-xs text-muted-foreground">weight</p>
            </div>
          </div>

          <div className="text-xs text-muted-foreground space-y-1 mt-2">
            <p>Free shipping &mdash; 3-day delivery</p>
            <p>Ships from Irvine, California</p>
            <p>1-month warranty included</p>
          </div>
        </div>
      </div>

      {/* Specs & details tabs */}
      <div id="specs" className="mt-16">
        <Tabs defaultValue="specs">
          <TabsList>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="details">Build Details</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="mt-6">
            <div className="rounded-lg border border-border overflow-hidden">
              {SPECS.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex justify-between px-4 py-3 text-sm ${
                    i % 2 === 0 ? "bg-muted/30" : ""
                  }`}
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details" className="mt-6">
            <div className="max-w-none text-sm text-muted-foreground space-y-4">
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
            <div className="text-sm text-muted-foreground space-y-4">
              <p>
                <strong className="text-foreground">Free 3-day delivery</strong>{" "}
                to anywhere in the continental United States.
              </p>
              <p>
                <strong className="text-foreground">Free local pickup</strong>{" "}
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
