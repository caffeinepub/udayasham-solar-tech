import { c as createLucideIcon, j as jsxRuntimeExports, d as Slot, e as cn, f as cva } from "./index-C8YmDU4M.js";
import { u as useQuery } from "./useQuery-BrONQZhO.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }]
];
const Battery = createLucideIcon("battery", __iconNode);
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
const SEEDED_PRODUCTS = [
  {
    id: "prod-001",
    name: "Tata Power Solar Panel 540W",
    category: "Solar Panels",
    description: "High-efficiency monocrystalline solar panel by Tata Power. Ideal for residential and commercial rooftop installations. 25-year performance warranty.",
    imageUrl: "/assets/generated/product-solar-panel.jpg",
    price: "₹18,500",
    brand: "Tata Power Solar",
    wattage: "540W"
  },
  {
    id: "prod-002",
    name: "Luminous NXG 3kVA Solar Inverter",
    category: "Inverters",
    description: "Pure sine wave solar inverter with MPPT charge controller. Supports both on-grid and off-grid configurations. LCD display with battery management.",
    imageUrl: "/assets/generated/product-inverter.jpg",
    price: "₹24,000",
    brand: "Luminous",
    wattage: "3kVA"
  },
  {
    id: "prod-003",
    name: "Amara Raja 200Ah Tubular Battery",
    category: "Batteries",
    description: "Deep-cycle tubular battery designed for solar energy storage. Low maintenance, long lifespan up to 7 years, and excellent charge retention.",
    imageUrl: "/assets/generated/product-battery.jpg",
    price: "₹15,800",
    brand: "Amara Raja"
  },
  {
    id: "prod-004",
    name: "GI Mounting Structure for 10 Panels",
    category: "Mounting Structures",
    description: "Hot-dip galvanized iron mounting structure suitable for RCC and tin rooftops. Supports 10 panels, wind-resistant up to 150 km/h.",
    imageUrl: "/assets/generated/product-mounting.jpg",
    price: "₹12,000",
    brand: "SolarMont India"
  },
  {
    id: "prod-005",
    name: "Havells DC Solar Cable 4mm² (100m)",
    category: "Cables & Connectors",
    description: "UV-resistant, double-insulated DC solar cable for outdoor rooftop installations. TÜV certified, rated for 1500V DC systems.",
    imageUrl: "/assets/generated/product-cables.jpg",
    price: "₹3,200",
    brand: "Havells"
  },
  {
    id: "prod-006",
    name: "Solarman Smart Monitoring System",
    category: "Monitoring Systems",
    description: "WiFi-enabled solar monitoring device with real-time production tracking via mobile app. Compatible with most string inverters.",
    imageUrl: "/assets/generated/product-monitoring.jpg",
    price: "₹4,500",
    brand: "Solarman"
  },
  {
    id: "prod-007",
    name: "5kW On-Grid Solar System Package",
    category: "Complete Systems",
    description: "Complete 5kW on-grid solar system including 10 panels, grid-tie inverter, MC4 connectors, mounting structure, AC/DC cables, and installation support.",
    imageUrl: "/assets/generated/product-complete-system.jpg",
    price: "₹2,20,000",
    brand: "Udayasham Solar",
    wattage: "5kW"
  },
  {
    id: "prod-008",
    name: "Vikram Solar 400W Polycrystalline Panel",
    category: "Solar Panels",
    description: "Cost-effective polycrystalline solar panel by Vikram Solar. Best suited for large-scale commercial installations. PID resistant technology.",
    imageUrl: "/assets/generated/product-solar-panel-poly.jpg",
    price: "₹11,200",
    brand: "Vikram Solar",
    wattage: "400W"
  }
];
function useProducts(category) {
  return useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 200));
      if (category && category !== "All") {
        return SEEDED_PRODUCTS.filter((p) => p.category === category);
      }
      return SEEDED_PRODUCTS;
    }
  });
}
export {
  Badge as B,
  Battery as a,
  useProducts as u
};
