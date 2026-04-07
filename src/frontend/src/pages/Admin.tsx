import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useDeleteLead,
  useLeads,
  useUpdateLeadStatus,
} from "@/hooks/use-leads";
import { LEAD_STATUS_LABELS } from "@/types";
import type { Lead, LeadStatus } from "@/types";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import {
  Bell,
  CheckCircle,
  FileText,
  LogOut,
  PhoneCall,
  Shield,
  Sun,
  Trash2,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const STATUSES: LeadStatus[] = ["new", "contacted", "quoted", "closed"];

// Summary card config
const SUMMARY_CARDS = [
  {
    key: "total",
    label: "एकूण Leads",
    sublabel: "Total Leads",
    icon: Users,
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
  },
  {
    key: "new",
    label: "नवीन",
    sublabel: "New",
    icon: Bell,
    colorClass: "text-accent",
    bgClass: "bg-accent/15",
  },
  {
    key: "contacted",
    label: "संपर्क केला",
    sublabel: "Contacted",
    icon: PhoneCall,
    colorClass: "text-secondary",
    bgClass: "bg-secondary/10",
  },
  {
    key: "quoted",
    label: "कोटेशन दिले",
    sublabel: "Quoted",
    icon: FileText,
    colorClass: "text-chart-3",
    bgClass: "bg-chart-3/10",
  },
  {
    key: "closed",
    label: "बंद",
    sublabel: "Closed",
    icon: CheckCircle,
    colorClass: "text-muted-foreground",
    bgClass: "bg-muted",
  },
] as const;

function LeadRow({ lead }: { lead: Lead }) {
  const updateStatus = useUpdateLeadStatus();
  const deleteLead = useDeleteLead();
  const isNew = lead.status === "new";

  const handleStatusChange = (val: string) => {
    updateStatus.mutate(
      { id: lead.id, status: val as LeadStatus },
      {
        onSuccess: () =>
          toast.success(
            `Status updated to "${LEAD_STATUS_LABELS[val as LeadStatus]}"`,
          ),
        onError: () => toast.error("Failed to update status"),
      },
    );
  };

  const handleDelete = () => {
    deleteLead.mutate(lead.id, {
      onSuccess: () => toast.success("Lead deleted"),
      onError: () => toast.error("Failed to delete lead"),
    });
  };

  const date = new Date(lead.submittedAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <tr
      data-ocid="lead-row"
      className={`border-b border-border transition-colors hover:bg-muted/30 ${
        isNew ? "bg-accent/5 border-l-4 border-l-accent" : ""
      }`}
    >
      <td className="px-3 py-3 text-xs text-muted-foreground whitespace-nowrap">
        {date}
      </td>
      <td className="px-3 py-3">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm text-foreground">
            {lead.name}
          </span>
          {isNew && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-accent text-accent-foreground uppercase tracking-wide">
              New
            </span>
          )}
        </div>
      </td>
      <td className="px-3 py-3 text-sm text-foreground whitespace-nowrap">
        {lead.phone}
      </td>
      <td className="px-3 py-3 text-sm text-muted-foreground max-w-[160px] truncate">
        {lead.email}
      </td>
      <td className="px-3 py-3 text-sm text-foreground">{lead.city}</td>
      <td className="px-3 py-3 text-sm text-foreground text-right">
        {lead.roofSize} sq.ft
      </td>
      <td className="px-3 py-3 text-xs text-muted-foreground whitespace-nowrap">
        {lead.preferredDate}
      </td>
      <td className="px-3 py-3 text-sm text-muted-foreground max-w-[180px]">
        <span className="line-clamp-2">{lead.message || "—"}</span>
      </td>
      <td className="px-3 py-3">
        <Select
          value={lead.status}
          onValueChange={handleStatusChange}
          disabled={updateStatus.isPending}
        >
          <SelectTrigger
            data-ocid="status-dropdown"
            className="h-8 text-xs w-[130px] border-input"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {STATUSES.map((s) => (
              <SelectItem key={s} value={s} className="text-xs">
                {LEAD_STATUS_LABELS[s]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </td>
      <td className="px-3 py-3">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              data-ocid="delete-lead-trigger"
              className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete lead</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Lead Delete करायचे?</AlertDialogTitle>
              <AlertDialogDescription>
                <strong>{lead.name}</strong> यांची inquiry permanently delete
                होईल. हे undone करता येणार नाही.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>रद्द करा</AlertDialogCancel>
              <AlertDialogAction
                data-ocid="confirm-delete"
                onClick={handleDelete}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Delete करा
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </td>
    </tr>
  );
}

function LoadingTable() {
  return (
    <div className="space-y-2 p-4">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-12 w-full rounded-md" />
      ))}
    </div>
  );
}

function LoginGate() {
  const { login, loginStatus } = useInternetIdentity();
  const isLoading = loginStatus === "logging-in";

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-elevated">
            <Sun className="w-9 h-9 text-primary-foreground" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-foreground">
              Udayasham Solar Tech
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Admin Dashboard
            </p>
          </div>
        </div>

        {/* Login card */}
        <Card className="border-border shadow-elevated">
          <CardHeader className="pb-3 text-center">
            <div className="mx-auto w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <CardTitle className="text-lg font-display">
              Secure Admin Access
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              Internet Identity वापरून login करा
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button
              type="button"
              data-ocid="login-btn"
              onClick={() => login()}
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11 transition-smooth"
            >
              {isLoading ? (
                "Logging in…"
              ) : (
                <>
                  <Shield className="w-4 h-4 mr-2" />
                  Internet Identity ने Login करा
                </>
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Only authorized admins can access the dashboard.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function Admin() {
  const { loginStatus, clear, identity } = useInternetIdentity();
  const isLoggedIn = loginStatus === "success" || !!identity;

  const { data: leads, isLoading } = useLeads();
  const [filterStatus, setFilterStatus] = useState<LeadStatus | "all">("all");

  if (!isLoggedIn) return <LoginGate />;

  // Compute counts
  const total = leads?.length ?? 0;
  const countByStatus = (s: LeadStatus) =>
    leads?.filter((l) => l.status === s).length ?? 0;

  const summaryValues: Record<string, number> = {
    total,
    new: countByStatus("new"),
    contacted: countByStatus("contacted"),
    quoted: countByStatus("quoted"),
    closed: countByStatus("closed"),
  };

  // Sort by newest first, then apply filter
  const sortedLeads = [...(leads ?? [])].sort(
    (a, b) => b.submittedAt - a.submittedAt,
  );
  const filteredLeads =
    filterStatus === "all"
      ? sortedLeads
      : sortedLeads.filter((l) => l.status === filterStatus);

  const newCount = countByStatus("new");

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Admin header */}
      <header className="bg-primary border-b border-primary/20 shadow-subtle sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <Sun className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="text-primary-foreground font-display font-bold text-base leading-tight block">
                Udayasham Solar Tech
              </span>
              <span className="text-primary-foreground/60 text-xs">
                Admin Dashboard
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {newCount > 0 && (
              <span className="hidden sm:flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                <Bell className="w-3 h-3" />
                {newCount} नवीन Lead{newCount > 1 ? "s" : ""}
              </span>
            )}
            <Button
              type="button"
              data-ocid="logout-btn"
              variant="ghost"
              size="sm"
              onClick={() => clear()}
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
            >
              <LogOut className="w-4 h-4 mr-1.5" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {SUMMARY_CARDS.map(
            ({ key, label, sublabel, icon: Icon, colorClass, bgClass }) => (
              <Card
                key={key}
                data-ocid={`summary-${key}`}
                className={`border-border shadow-card cursor-pointer transition-smooth hover:shadow-elevated ${
                  filterStatus === key ? "ring-2 ring-accent" : ""
                }`}
                onClick={() =>
                  setFilterStatus(
                    key === "total"
                      ? "all"
                      : filterStatus === (key as LeadStatus)
                        ? "all"
                        : (key as LeadStatus),
                  )
                }
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${bgClass}`}
                  >
                    <Icon className={`w-5 h-5 ${colorClass}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-2xl font-display font-bold text-foreground leading-none">
                      {isLoading ? "—" : summaryValues[key]}
                    </p>
                    <p
                      className={`text-xs font-semibold mt-0.5 truncate ${colorClass}`}
                    >
                      {label}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {sublabel}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ),
          )}
        </div>

        {/* Leads table */}
        <Card className="border-border shadow-card">
          <CardHeader className="pb-3 flex flex-row items-center justify-between gap-2">
            <div>
              <CardTitle className="text-base font-display font-bold">
                Customer Leads &amp; Enquiries
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">
                {filterStatus === "all"
                  ? `All ${total} leads`
                  : `${filteredLeads.length} ${LEAD_STATUS_LABELS[filterStatus as LeadStatus]} leads`}
              </p>
            </div>
            {filterStatus !== "all" && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                data-ocid="clear-filter"
                onClick={() => setFilterStatus("all")}
                className="text-xs"
              >
                सर्व दाखवा
              </Button>
            )}
          </CardHeader>
          <CardContent className="p-0">
            {isLoading ? (
              <LoadingTable />
            ) : filteredLeads.length === 0 ? (
              <div
                data-ocid="empty-leads"
                className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground"
              >
                <Users className="w-10 h-10 opacity-30" />
                <p className="text-sm">अजून कोणतेही leads नाहीत</p>
                <p className="text-xs">No leads found</p>
              </div>
            ) : (
              <ScrollArea className="w-full">
                <div className="min-w-[900px]">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="px-3 py-2.5 text-xs font-semibold text-muted-foreground">
                          दिनांक
                        </th>
                        <th className="px-3 py-2.5 text-xs font-semibold text-muted-foreground">
                          नाव / Name
                        </th>
                        <th className="px-3 py-2.5 text-xs font-semibold text-muted-foreground">
                          फोन
                        </th>
                        <th className="px-3 py-2.5 text-xs font-semibold text-muted-foreground">
                          Email
                        </th>
                        <th className="px-3 py-2.5 text-xs font-semibold text-muted-foreground">
                          शहर
                        </th>
                        <th className="px-3 py-2.5 text-xs font-semibold text-muted-foreground text-right">
                          छत
                        </th>
                        <th className="px-3 py-2.5 text-xs font-semibold text-muted-foreground">
                          तारीख
                        </th>
                        <th className="px-3 py-2.5 text-xs font-semibold text-muted-foreground">
                          संदेश
                        </th>
                        <th className="px-3 py-2.5 text-xs font-semibold text-muted-foreground">
                          Status
                        </th>
                        <th className="px-3 py-2.5 text-xs font-semibold text-muted-foreground">
                          &nbsp;
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLeads.map((lead) => (
                        <LeadRow key={lead.id} lead={lead} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
