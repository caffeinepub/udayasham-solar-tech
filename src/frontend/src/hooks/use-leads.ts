import type { Lead, LeadStatus } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Seeded local leads (frontend-only store since backend has no lead methods yet)
const STORAGE_KEY = "udayasham_leads";

function getStoredLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Lead[];
  } catch {
    /* ignore */
  }
  // Default seed data
  return [
    {
      id: "lead-001",
      name: "Rajesh Patil",
      phone: "9876543210",
      email: "rajesh.patil@gmail.com",
      city: "Pune",
      roofSize: "500",
      preferredDate: "2026-04-20",
      message: "Looking for 5kW residential solar system for my home.",
      status: "contacted",
      submittedAt: Date.now() - 86400000 * 3,
    },
    {
      id: "lead-002",
      name: "Priya Deshmukh",
      phone: "8765432109",
      email: "priya.deshmukh@yahoo.com",
      city: "Nashik",
      roofSize: "800",
      preferredDate: "2026-04-25",
      message: "Need 10kW system for our small factory.",
      status: "quoted",
      submittedAt: Date.now() - 86400000 * 2,
    },
    {
      id: "lead-003",
      name: "Suresh Kumar",
      phone: "7654321098",
      email: "suresh.kumar@hotmail.com",
      city: "Nagpur",
      roofSize: "300",
      preferredDate: "2026-05-01",
      message: "3kW system for my house. Want to reduce electricity bill.",
      status: "new",
      submittedAt: Date.now() - 86400000,
    },
    {
      id: "lead-004",
      name: "Anita Sharma",
      phone: "6543210987",
      email: "anita.sharma@gmail.com",
      city: "Mumbai",
      roofSize: "1200",
      preferredDate: "2026-04-28",
      message: "Commercial rooftop solar for our office building.",
      status: "new",
      submittedAt: Date.now() - 43200000,
    },
  ];
}

function saveLeads(leads: Lead[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

export function useLeads() {
  return useQuery<Lead[]>({
    queryKey: ["leads"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      return getStoredLeads();
    },
  });
}

export function useSubmitLead() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, Omit<Lead, "id" | "status" | "submittedAt">>({
    mutationFn: async (data) => {
      await new Promise((r) => setTimeout(r, 500));
      const leads = getStoredLeads();
      const newLead: Lead = {
        ...data,
        id: `lead-${Date.now()}`,
        status: "new",
        submittedAt: Date.now(),
      };
      saveLeads([...leads, newLead]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}

export function useUpdateLeadStatus() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, { id: string; status: LeadStatus }>({
    mutationFn: async ({ id, status }) => {
      await new Promise((r) => setTimeout(r, 300));
      const leads = getStoredLeads();
      const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
      saveLeads(updated);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}

export function useDeleteLead() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await new Promise((r) => setTimeout(r, 300));
      const leads = getStoredLeads();
      saveLeads(leads.filter((l) => l.id !== id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}
