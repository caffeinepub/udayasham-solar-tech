export type LeadStatus = "new" | "contacted" | "quoted" | "closed";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  roofSize: string;
  preferredDate: string;
  message: string;
  status: LeadStatus;
  submittedAt: number;
}

export type ProductCategory =
  | "Solar Panels"
  | "Inverters"
  | "Batteries"
  | "Mounting Structures"
  | "Cables & Connectors"
  | "Monitoring Systems"
  | "Complete Systems";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  imageUrl: string;
  price?: string;
  brand?: string;
  wattage?: string;
}

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  new: "नवीन",
  contacted: "संपर्क केला",
  quoted: "कोटेशन दिले",
  closed: "बंद",
};

export const LEAD_STATUS_COLORS: Record<LeadStatus, string> = {
  new: "bg-secondary/20 text-secondary-foreground border-secondary/30",
  contacted: "bg-accent/20 text-foreground border-accent/30",
  quoted: "bg-primary/20 text-primary-foreground border-primary/30",
  closed: "bg-muted text-muted-foreground border-border",
};
