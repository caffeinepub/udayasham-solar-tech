import type { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";

const SEEDED_PRODUCTS: Product[] = [
  {
    id: "prod-001",
    name: "Tata Power Solar Panel 540W",
    category: "Solar Panels",
    description:
      "High-efficiency monocrystalline solar panel by Tata Power. Ideal for residential and commercial rooftop installations. 25-year performance warranty.",
    imageUrl: "/assets/generated/product-solar-panel.jpg",
    price: "₹18,500",
    brand: "Tata Power Solar",
    wattage: "540W",
  },
  {
    id: "prod-002",
    name: "Luminous NXG 3kVA Solar Inverter",
    category: "Inverters",
    description:
      "Pure sine wave solar inverter with MPPT charge controller. Supports both on-grid and off-grid configurations. LCD display with battery management.",
    imageUrl: "/assets/generated/product-inverter.jpg",
    price: "₹24,000",
    brand: "Luminous",
    wattage: "3kVA",
  },
  {
    id: "prod-003",
    name: "Amara Raja 200Ah Tubular Battery",
    category: "Batteries",
    description:
      "Deep-cycle tubular battery designed for solar energy storage. Low maintenance, long lifespan up to 7 years, and excellent charge retention.",
    imageUrl: "/assets/generated/product-battery.jpg",
    price: "₹15,800",
    brand: "Amara Raja",
  },
  {
    id: "prod-004",
    name: "GI Mounting Structure for 10 Panels",
    category: "Mounting Structures",
    description:
      "Hot-dip galvanized iron mounting structure suitable for RCC and tin rooftops. Supports 10 panels, wind-resistant up to 150 km/h.",
    imageUrl: "/assets/generated/product-mounting.jpg",
    price: "₹12,000",
    brand: "SolarMont India",
  },
  {
    id: "prod-005",
    name: "Havells DC Solar Cable 4mm² (100m)",
    category: "Cables & Connectors",
    description:
      "UV-resistant, double-insulated DC solar cable for outdoor rooftop installations. TÜV certified, rated for 1500V DC systems.",
    imageUrl: "/assets/generated/product-cables.jpg",
    price: "₹3,200",
    brand: "Havells",
  },
  {
    id: "prod-006",
    name: "Solarman Smart Monitoring System",
    category: "Monitoring Systems",
    description:
      "WiFi-enabled solar monitoring device with real-time production tracking via mobile app. Compatible with most string inverters.",
    imageUrl: "/assets/generated/product-monitoring.jpg",
    price: "₹4,500",
    brand: "Solarman",
  },
  {
    id: "prod-007",
    name: "5kW On-Grid Solar System Package",
    category: "Complete Systems",
    description:
      "Complete 5kW on-grid solar system including 10 panels, grid-tie inverter, MC4 connectors, mounting structure, AC/DC cables, and installation support.",
    imageUrl: "/assets/generated/product-complete-system.jpg",
    price: "₹2,20,000",
    brand: "Udayasham Solar",
    wattage: "5kW",
  },
  {
    id: "prod-008",
    name: "Vikram Solar 400W Polycrystalline Panel",
    category: "Solar Panels",
    description:
      "Cost-effective polycrystalline solar panel by Vikram Solar. Best suited for large-scale commercial installations. PID resistant technology.",
    imageUrl: "/assets/generated/product-solar-panel-poly.jpg",
    price: "₹11,200",
    brand: "Vikram Solar",
    wattage: "400W",
  },
];

export function useProducts(category?: string) {
  return useQuery<Product[]>({
    queryKey: ["products", category],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 200));
      if (category && category !== "All") {
        return SEEDED_PRODUCTS.filter((p) => p.category === category);
      }
      return SEEDED_PRODUCTS;
    },
  });
}

export function useProduct(id: string) {
  return useQuery<Product | undefined>({
    queryKey: ["product", id],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 100));
      return SEEDED_PRODUCTS.find((p) => p.id === id);
    },
    enabled: !!id,
  });
}
