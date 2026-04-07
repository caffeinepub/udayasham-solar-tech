import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "@/hooks/use-products";
import type { Product } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Battery,
  ChevronRight,
  HeadphonesIcon,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";

// ── Services ──────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Sun,
    title: "Rooftop Installation",
    marathi: "छत सोलर बसवणे",
    description:
      "Expert installation of solar panels on residential and commercial rooftops. Full site assessment, design, and certified installation.",
    highlight: "सर्व ब्रँड्स उपलब्ध",
  },
  {
    icon: Award,
    title: "All Brands Supported",
    marathi: "सर्व ब्रँड्स",
    description:
      "We install and service all major solar brands — Tata, Luminous, Vikram, Adani, Havells, and more. No brand restriction.",
    highlight: "Tata · Luminous · Vikram",
  },
  {
    icon: MapPin,
    title: "Pan-India Coverage",
    marathi: "संपूर्ण भारत सेवा",
    description:
      "Our certified technicians serve customers across all states of India. Urban or rural — we reach you.",
    highlight: "भारतभर सेवा",
  },
];

// ── Why Choose Us ─────────────────────────────────────────────────────────────
const TRUST_POINTS = [
  {
    icon: BadgeCheck,
    title: "MNRE Licensed",
    marathi: "परवानाधारक",
    description:
      "Certified under Ministry of New & Renewable Energy (MNRE) guidelines. Every installation meets national safety standards.",
  },
  {
    icon: Shield,
    title: "10+ Years Experience",
    marathi: "१०+ वर्षांचा अनुभव",
    description:
      "Over a decade of solar expertise, with 500+ successful installations across Maharashtra and beyond.",
  },
  {
    icon: HeadphonesIcon,
    title: "After-Sales Support",
    marathi: "विक्रीनंतर सेवा",
    description:
      "5-year AMC packages available. Dedicated support line, annual checkups, and performance monitoring.",
  },
  {
    icon: Zap,
    title: "Subsidy Assistance",
    marathi: "सबसिडी मदत",
    description:
      "We handle all paperwork for PM Surya Ghar and state subsidy schemes. Save up to ₹78,000 on residential installations.",
  },
  {
    icon: Wrench,
    title: "End-to-End Service",
    marathi: "संपूर्ण सेवा",
    description:
      "From site survey to commissioning — all in-house. No subcontractors. Faster timelines, better accountability.",
  },
  {
    icon: Battery,
    title: "Quality Products",
    marathi: "गुणवत्ता उत्पादने",
    description:
      "Only BIS-certified, Tier-1 manufacturer panels and equipment. Minimum 25-year panel performance warranty.",
  },
];

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "500+", label: "Installations", marathi: "बसवलेले सिस्टम" },
  { value: "4 MW+", label: "Capacity Added", marathi: "ऊर्जा क्षमता" },
  { value: "15+", label: "States Served", marathi: "राज्ये सेवा" },
  { value: "98%", label: "Happy Customers", marathi: "समाधानी ग्राहक" },
];

// ── Product Card ──────────────────────────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      className="group overflow-hidden shadow-card hover:shadow-elevated transition-smooth cursor-pointer"
      data-ocid={`product-card-${product.id}`}
    >
      <div className="relative h-44 overflow-hidden bg-muted">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-smooth"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/assets/images/placeholder.svg";
          }}
        />
        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-0 text-xs font-semibold">
          {product.category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-display font-bold text-foreground text-base leading-snug mb-1 line-clamp-2">
          {product.name}
        </h3>
        {product.brand && (
          <p className="text-xs text-muted-foreground mb-2">{product.brand}</p>
        )}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          {product.price ? (
            <span className="font-bold text-primary text-sm">
              {product.price}
            </span>
          ) : (
            <span className="text-xs text-muted-foreground">
              Contact for price
            </span>
          )}
          <Link to="/products">
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="text-xs gap-1 h-7 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              Enquire <ChevronRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

// ── Home Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const { data: products, isLoading: productsLoading } = useProducts();
  const featuredProducts = products?.slice(0, 3) ?? [];

  function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden min-h-[92vh] flex items-center"
        data-ocid="hero-section"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/hero-rooftop-solar.dim_1400x700.jpg"
            alt="Rooftop solar installation"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6">
              <Sun className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-semibold text-accent tracking-wide uppercase">
                MNRE Certified · Pan-India Solar Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-primary-foreground leading-[1.1] mb-4">
              <span className="block text-5xl md:text-6xl lg:text-7xl">
                Udayasham
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-gradient-accent">
                Solar Tech
              </span>
              <span className="block text-xl md:text-2xl text-primary-foreground/80 font-semibold mt-1">
                उदयशाम सोलर टेक
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-primary-foreground/85 font-medium mb-2 leading-relaxed">
              Powering India's homes and businesses with clean, affordable solar
              energy.
            </p>
            <p className="text-base text-accent font-semibold mb-8">
              सर्वोत्तम सोलर समाधान, संपूर्ण भारतात
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link to="/book" data-ocid="hero-cta-book">
                <Button
                  type="button"
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base gap-2 shadow-lg px-7"
                >
                  Book Free Site Visit <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold text-base gap-2 backdrop-blur-sm"
                onClick={scrollToContact}
                data-ocid="hero-cta-contact"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </Button>
            </div>

            {/* Quick contact */}
            <div className="flex flex-wrap gap-5 mt-8 pt-6 border-t border-primary-foreground/20">
              <a
                href="tel:9158813097"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm font-medium"
                data-ocid="hero-phone-1"
              >
                <Phone className="h-4 w-4 text-accent" />
                +91 9158813097
              </a>
              <a
                href="tel:7875612771"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm font-medium"
                data-ocid="hero-phone-2"
              >
                <Phone className="h-4 w-4 text-accent" />
                +91 7875612771
              </a>
              <a
                href="mailto:udayahambg@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm font-medium"
                data-ocid="hero-email"
              >
                <Mail className="h-4 w-4 text-accent" />
                udayahambg@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-accent py-6" data-ocid="stats-bar">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center">
                <span className="font-display font-bold text-2xl md:text-3xl text-accent-foreground">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-accent-foreground/80 uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="text-xs text-accent-foreground/60 mt-0.5">
                  {stat.marathi}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        className="py-20 bg-background"
        id="services"
        data-ocid="services-section"
      >
        <div className="container">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-3 border-accent/40 text-accent text-xs font-semibold px-3"
            >
              आमच्या सेवा · Our Services
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From consultation to commissioning — we handle everything so you
              can start saving on electricity bills sooner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group shadow-card hover:shadow-elevated transition-smooth border-border hover:border-accent/40"
                  data-ocid={`service-card-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 mb-4 group-hover:bg-accent/25 transition-smooth">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-accent mb-3">
                      {service.marathi}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                      {service.highlight}
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section
        className="py-20 bg-muted/40"
        id="why-us"
        data-ocid="why-choose-us-section"
      >
        <div className="container">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-3 border-accent/40 text-accent text-xs font-semibold px-3"
            >
              आम्हालाच का निवडावे · Why Choose Us
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              The Udayasham Advantage
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We're not just installers — we're your long-term solar partners.
              Here's what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRUST_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="flex gap-4 bg-card rounded-xl p-5 shadow-card border border-border hover:border-accent/30 transition-smooth"
                  data-ocid={`trust-point-${point.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 flex-shrink-0">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-foreground text-sm mb-0.5">
                      {point.title}
                    </h3>
                    <p className="text-xs font-semibold text-accent mb-2">
                      {point.marathi}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section
        className="py-20 bg-background"
        id="products"
        data-ocid="products-section"
      >
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <Badge
                variant="outline"
                className="mb-3 border-accent/40 text-accent text-xs font-semibold px-3"
              >
                आमची उत्पादने · Our Products
              </Badge>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Top-quality solar equipment at competitive prices.
              </p>
            </div>
            <Link to="/products" data-ocid="view-all-products-cta">
              <Button
                type="button"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground gap-1.5 font-semibold transition-smooth whitespace-nowrap"
              >
                View All Products <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {productsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-border"
                >
                  <Skeleton className="h-44 w-full rounded-none" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <Link to="/products" data-ocid="hero-products-cta">
              <Button
                type="button"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold gap-2 px-8"
              >
                Browse Full Catalog — सर्व उत्पादने पाहा{" "}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="gradient-solar py-16" data-ocid="cta-banner-section">
        <div className="container text-center">
          <h2 className="font-display font-bold text-2xl md:text-4xl text-primary-foreground mb-3">
            Ready to Switch to Solar?
          </h2>
          <p className="text-primary-foreground/85 text-lg mb-2">
            मोफत साइट व्हिजिट बुक करा — आजच सुरुवात करा!
          </p>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto text-sm">
            Our experts will assess your rooftop, calculate savings, and provide
            a free quote with no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book" data-ocid="cta-banner-book">
              <Button
                type="button"
                size="lg"
                className="bg-card text-foreground hover:bg-card/90 font-bold text-base gap-2 shadow-lg px-8"
              >
                Book Free Site Visit <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:9158813097" data-ocid="cta-banner-phone">
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold text-base gap-2"
              >
                <Phone className="h-4 w-4" /> Call Now: 9158813097
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        className="py-20 bg-muted/40"
        id="contact"
        data-ocid="contact-section"
      >
        <div className="container">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-3 border-accent/40 text-accent text-xs font-semibold px-3"
            >
              संपर्क करा · Get In Touch
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Contact Us
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Have questions? Our team is ready to help. Call, email, or book a
              free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Phone 1 */}
            <a
              href="tel:9158813097"
              className="group"
              data-ocid="contact-phone-primary"
            >
              <Card className="shadow-card hover:shadow-elevated transition-smooth border-border hover:border-accent/40 text-center p-6 h-full">
                <CardContent className="p-0 flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 group-hover:bg-accent/25 transition-smooth">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">
                      Primary · मुख्य
                    </p>
                    <p className="font-display font-bold text-foreground text-lg group-hover:text-accent transition-colors duration-200">
                      +91 9158813097
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>

            {/* Phone 2 */}
            <a
              href="tel:7875612771"
              className="group"
              data-ocid="contact-phone-support"
            >
              <Card className="shadow-card hover:shadow-elevated transition-smooth border-border hover:border-accent/40 text-center p-6 h-full">
                <CardContent className="p-0 flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 group-hover:bg-accent/25 transition-smooth">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">
                      Support · सपोर्ट
                    </p>
                    <p className="font-display font-bold text-foreground text-lg group-hover:text-accent transition-colors duration-200">
                      +91 7875612771
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>

            {/* Email */}
            <a
              href="mailto:udayahambg@gmail.com"
              className="group"
              data-ocid="contact-email"
            >
              <Card className="shadow-card hover:shadow-elevated transition-smooth border-border hover:border-accent/40 text-center p-6 h-full">
                <CardContent className="p-0 flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 group-hover:bg-accent/25 transition-smooth">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div className="min-w-0 w-full">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">
                      Email · ईमेल
                    </p>
                    <p className="font-display font-bold text-foreground text-sm group-hover:text-accent transition-colors duration-200 break-all">
                      udayahambg@gmail.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>

          {/* Service coverage note */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 shadow-subtle">
              <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">
                Serving all states across India ·{" "}
                <span className="font-semibold text-foreground">
                  संपूर्ण भारतात सेवा
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
