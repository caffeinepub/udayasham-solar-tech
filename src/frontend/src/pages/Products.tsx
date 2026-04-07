import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "@/hooks/use-products";
import type { ProductCategory } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import {
  Battery,
  Cable,
  MonitorSmartphone,
  Package,
  Search,
  SunMedium,
  Wrench,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

// ── Category Config ────────────────────────────────────────────────────────

type FilterCategory = "All" | ProductCategory;

const CATEGORIES: {
  value: FilterCategory;
  label: string;
  icon: React.ElementType;
}[] = [
  { value: "All", label: "सर्व उत्पादने", icon: Package },
  { value: "Solar Panels", label: "सोलर पॅनेल", icon: SunMedium },
  { value: "Inverters", label: "इन्व्हर्टर", icon: Zap },
  { value: "Batteries", label: "बॅटरी", icon: Battery },
  { value: "Mounting Structures", label: "माउंटिंग स्ट्रक्चर", icon: Wrench },
  { value: "Cables & Connectors", label: "केबल्स", icon: Cable },
  { value: "Monitoring Systems", label: "मॉनिटरिंग", icon: MonitorSmartphone },
  { value: "Complete Systems", label: "Complete Systems", icon: Package },
];

const CATEGORY_GRADIENTS: Record<FilterCategory, string> = {
  All: "from-primary/30 to-accent/20",
  "Solar Panels": "from-accent/40 to-accent/10",
  Inverters: "from-secondary/40 to-secondary/10",
  Batteries: "from-primary/40 to-primary/10",
  "Mounting Structures": "from-muted to-muted/40",
  "Cables & Connectors": "from-accent/30 to-muted/30",
  "Monitoring Systems": "from-secondary/30 to-primary/20",
  "Complete Systems": "from-accent/50 to-primary/20",
};

// ── Product Card ────────────────────────────────────────────────────────────

function CategoryIcon({ category }: { category: ProductCategory }) {
  const config = CATEGORIES.find((c) => c.value === category);
  const Icon = config?.icon ?? Package;
  return <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />;
}

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: ProductCategory;
    description: string;
    imageUrl: string;
    price?: string;
    brand?: string;
    wattage?: string;
  };
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  const navigate = useNavigate();
  const catConfig = CATEGORIES.find((c) => c.value === product.category);
  const gradient =
    CATEGORY_GRADIENTS[product.category] ?? "from-muted to-muted/40";

  function handleEnquire() {
    navigate({ to: "/book", search: { product: product.name } });
  }

  return (
    <motion.article
      data-ocid="product-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="bg-card border border-border rounded-xl overflow-hidden flex flex-col shadow-card hover:shadow-elevated transition-smooth group"
    >
      {/* Image / Visual */}
      <div
        className={`relative h-44 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.classList.add("fallback-visible");
            }
          }}
        />
        {/* Fallback icon shown via sibling, always present but layered behind */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-card/60 backdrop-blur-sm flex items-center justify-center border border-border/50">
            <CategoryIcon category={product.category} />
          </div>
        </div>
        {product.price && (
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            {product.price}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-semibold text-foreground text-base leading-snug line-clamp-2 min-w-0">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Badge
            variant="secondary"
            className="text-xs bg-accent/15 text-foreground border-accent/30 font-medium"
          >
            {catConfig?.label ?? product.category}
          </Badge>
          {product.wattage && (
            <Badge variant="outline" className="text-xs border-border">
              {product.wattage}
            </Badge>
          )}
        </div>

        {product.brand && (
          <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
            {product.brand}
          </p>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {product.description}
        </p>

        <Button
          type="button"
          data-ocid="enquire-now-btn"
          onClick={handleEnquire}
          className="w-full mt-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-smooth"
        >
          Enquire Now — चौकशी करा
        </Button>
      </div>
    </motion.article>
  );
}

// ── Skeleton Grid ────────────────────────────────────────────────────────────

function ProductSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
      <Skeleton className="h-44 rounded-none" />
      <div className="p-4 flex flex-col gap-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-3 w-1/4" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-9 w-full mt-2" />
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [search, setSearch] = useState("");

  const { data: products = [], isLoading } = useProducts(
    activeCategory === "All" ? undefined : activeCategory,
  );

  const filtered = useMemo(() => {
    if (!search.trim()) return products;
    const q = search.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.brand ?? "").toLowerCase().includes(q),
    );
  }, [products, search]);

  return (
    <section className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-primary text-primary-foreground py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-accent font-semibold text-sm uppercase tracking-widest mb-2"
          >
            आमची उत्पादने
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-primary-foreground"
          >
            Solar Products Catalog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-primary-foreground/70 max-w-xl mx-auto text-base"
          >
            Premium solar panels, inverters, batteries & complete systems — सर्व
            ब्रँड्स उपलब्ध
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        {/* Search */}
        <div className="relative max-w-lg mx-auto" data-ocid="product-search">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            placeholder="उत्पाद शोधा… Search products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-card border-border focus-visible:ring-accent"
          />
        </div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap gap-2 justify-center"
          data-ocid="category-filter"
          role="tablist"
          aria-label="Product categories"
        >
          {CATEGORIES.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={activeCategory === value}
              onClick={() => setActiveCategory(value)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                activeCategory === value
                  ? "bg-accent text-accent-foreground border-accent shadow-sm"
                  : "bg-card text-foreground border-border hover:border-accent/60 hover:bg-accent/10"
              }`}
            >
              <Icon className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Results Count */}
        {!isLoading && (
          <p className="text-sm text-muted-foreground text-center">
            {filtered.length === 0
              ? ""
              : `${filtered.length} उत्पाद${filtered.length !== 1 ? "े" : ""} सापडले`}
          </p>
        )}

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["s1", "s2", "s3", "s4", "s5", "s6"].map((k) => (
              <ProductSkeleton key={k} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <AnimatePresence>
            <motion.div
              data-ocid="empty-state"
              key="empty"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center py-20 text-center gap-4"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <SunMedium
                  className="w-10 h-10 text-muted-foreground"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                कोणतेही उत्पाद सापडले नाही
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Try a different search term or select "सर्व उत्पादने" to see all
                products.
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="border-accent/50 text-foreground hover:bg-accent/10 transition-smooth"
              >
                फिल्टर साफ करा — Clear Filters
              </Button>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
