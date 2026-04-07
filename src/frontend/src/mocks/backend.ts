import type { backendInterface } from "../backend";
import { UserRole } from "../backend";

export const mockBackend: backendInterface = {
  _initializeAccessControl: async () => undefined,
  assignCallerUserRole: async () => undefined,
  deleteLead: async () => true,
  getCallerUserRole: async () => UserRole.admin,
  getLeads: async () => [
    {
      id: BigInt(1),
      status: "new",
      city: "Pune",
      name: "Rajesh Patil",
      submittedAt: BigInt(Date.now() - 3600000),
      email: "rajesh.patil@email.com",
      message: "Interested in 5kW rooftop solar installation",
      preferredDate: "2026-04-15",
      phone: "9876543210",
      roofSize: "500",
    },
    {
      id: BigInt(2),
      status: "new",
      city: "Mumbai",
      name: "Sunita Sharma",
      submittedAt: BigInt(Date.now() - 7200000),
      email: "sunita.sharma@email.com",
      phone: "9123456789",
      roofSize: "800",
    },
    {
      id: BigInt(3),
      status: "contacted",
      city: "Nagpur",
      name: "Vinod Deshmukh",
      submittedAt: BigInt(Date.now() - 86400000),
      email: "vinod.d@email.com",
      phone: "9988776655",
      message: "Want quote for 3kW system",
    },
  ],
  getProducts: async () => [
    {
      id: BigInt(1),
      name: "500W Monocrystalline Solar Panel",
      category: "panels",
      description:
        "High-efficiency 500W monocrystalline silicon solar panel with anti-reflective coating. Ideal for residential and commercial rooftop installations. 25-year power output warranty.",
    },
    {
      id: BigInt(2),
      name: "400W Bifacial Solar Panel",
      category: "panels",
      description:
        "Bifacial 400W solar panel captures sunlight from both sides for up to 30% higher energy yield. Perfect for ground-mount and rooftop with reflective surfaces.",
    },
    {
      id: BigInt(3),
      name: "3kW String Inverter",
      category: "inverters",
      description:
        "Reliable 3kW string inverter with 98% peak efficiency. Compatible with all major solar panel brands. Built-in WiFi monitoring and MPPT tracking.",
    },
    {
      id: BigInt(4),
      name: "5kW Hybrid Inverter",
      category: "inverters",
      description:
        "5kW hybrid inverter supports both on-grid and off-grid operation. Integrated battery management system, dual MPPT input, and real-time monitoring.",
    },
    {
      id: BigInt(5),
      name: "10kWh LiFePO4 Battery",
      category: "batteries",
      description:
        "10kWh lithium iron phosphate (LiFePO4) battery storage with 6000+ cycle life. Safe, maintenance-free, wall-mountable design.",
    },
    {
      id: BigInt(6),
      name: "Rooftop Mounting Structure (Aluminum)",
      category: "mounting",
      description:
        "Heavy-duty anodized aluminum rooftop mounting structure for RCC and metal roofs. Adjustable tilt angle, corrosion-resistant, wind-load rated.",
    },
    {
      id: BigInt(7),
      name: "Solar Charge Controller 60A MPPT",
      category: "other",
      description:
        "60A MPPT solar charge controller with 99% tracking efficiency. Supports 12V/24V/48V battery systems. LCD display and over-charge protection.",
    },
    {
      id: BigInt(8),
      name: "5kW On-Grid Solar System Package",
      category: "other",
      description:
        "Complete 5kW on-grid solar system package including panels, string inverter, mounting structure, DC/AC cables, and installation accessories.",
    },
  ],
  isCallerAdmin: async () => true,
  submitLead: async () => BigInt(4),
  updateLeadStatus: async () => true,
};
