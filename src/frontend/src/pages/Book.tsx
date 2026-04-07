import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitLead } from "@/hooks/use-leads";
import {
  Building2,
  CheckCircle2,
  Home,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  city: string;
  roofSize: string;
  preferredDate: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  roofSize: "",
  preferredDate: "",
  message: "",
};

const SERVICES = [
  { icon: Home, label: "Residential Rooftop Solar", sub: "घरगुती छत सौर यंत्रणा" },
  {
    icon: Building2,
    label: "Commercial Solar Systems",
    sub: "व्यावसायिक सौर यंत्रणा",
  },
  { icon: Wrench, label: "O&M Services", sub: "देखभाल व सेवा" },
  { icon: Zap, label: "All Solar Products", sub: "सर्व सौर उत्पादने" },
];

export default function Book() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const submitLead = useSubmitLead();

  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "नाव आवश्यक आहे / Name is required";
    if (!form.phone.trim()) {
      e.phone = "फोन नंबर आवश्यक आहे / Phone is required";
    } else if (!/^\d{10,13}$/.test(form.phone.replace(/\s+/g, ""))) {
      e.phone = "वैध फोन नंबर द्या / Enter a valid phone number";
    }
    if (!form.email.trim()) {
      e.email = "ईमेल आवश्यक आहे / Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "वैध ईमेल पत्ता द्या / Enter a valid email";
    }
    if (!form.city.trim()) e.city = "शहर/पत्ता आवश्यक आहे / City is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleBlur(field: keyof FormErrors) {
    const e: FormErrors = { ...errors };
    if (field === "name" && !form.name.trim())
      e.name = "नाव आवश्यक आहे / Name is required";
    if (field === "phone") {
      if (!form.phone.trim()) e.phone = "फोन नंबर आवश्यक आहे / Phone is required";
      else if (!/^\d{10,13}$/.test(form.phone.replace(/\s+/g, "")))
        e.phone = "वैध फोन नंबर द्या / Enter a valid phone number";
      else e.phone = undefined;
    }
    if (field === "email") {
      if (!form.email.trim()) e.email = "ईमेल आवश्यक आहे / Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = "वैध ईमेल पत्ता द्या / Enter a valid email";
      else e.email = undefined;
    }
    if (field === "city" && !form.city.trim())
      e.city = "शहर/पत्ता आवश्यक आहे / City is required";
    setErrors(e);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    await submitLead.mutateAsync({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      city: form.city.trim(),
      roofSize: form.roofSize.trim(),
      preferredDate: form.preferredDate,
      message: form.message.trim(),
    });
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setErrors({});
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Page header */}
      <div className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="h-6 w-6 text-accent" />
            <span className="text-accent font-semibold text-sm tracking-wide uppercase">
              Udayasham Solar Tech
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Book a Free Site Visit
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            साइट भेट बुक करा — आमचे तज्ञ तुमच्या घरी येतील आणि योग्य यंत्रणा सुचवतील.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Booking Form ── */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-elevated p-6 md:p-8">
              <h2 className="text-xl font-display font-bold text-foreground mb-1">
                Service Booking Form
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                सेवा नोंदणी फॉर्म — खाली माहिती भरा, आम्ही लवकरच संपर्क करू.
              </p>

              {submitted && (
                <div
                  data-ocid="booking-success"
                  className="flex gap-3 items-start bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6"
                  role="alert"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Booking submitted successfully! / बुकिंग यशस्वीरित्या केली!
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      We'll contact you within 24 hours. / आम्ही २४ तासांत संपर्क
                      करू.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <Label htmlFor="name">
                    पूर्ण नाव / Full Name{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    data-ocid="input-name"
                    type="text"
                    placeholder="उदा. राजेश पाटील / Rajesh Patil"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">
                      फोन नंबर / Phone{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      data-ocid="input-phone"
                      type="tel"
                      placeholder="9158813097"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      aria-invalid={!!errors.phone}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                    />
                    {errors.phone && (
                      <p
                        id="phone-error"
                        className="text-destructive text-xs mt-1"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">
                      ईमेल / Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      data-ocid="input-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-destructive text-xs mt-1"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* City */}
                <div className="space-y-1.5">
                  <Label htmlFor="city">
                    शहर / पत्ता — City / Address{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="city"
                    data-ocid="input-city"
                    type="text"
                    placeholder="उदा. पुणे, मुंबई, नागपूर"
                    value={form.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    onBlur={() => handleBlur("city")}
                    aria-invalid={!!errors.city}
                    aria-describedby={errors.city ? "city-error" : undefined}
                  />
                  {errors.city && (
                    <p
                      id="city-error"
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* Roof Size + Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="roofSize">
                      छताचा आकार / Roof Size
                      <span className="text-muted-foreground text-xs ml-1">
                        (sq. ft., optional)
                      </span>
                    </Label>
                    <Input
                      id="roofSize"
                      data-ocid="input-roof-size"
                      type="text"
                      placeholder="उदा. 500 sq.ft."
                      value={form.roofSize}
                      onChange={(e) => handleChange("roofSize", e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="preferredDate">
                      पसंतीची तारीख / Preferred Visit Date
                      <span className="text-muted-foreground text-xs ml-1">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="preferredDate"
                      data-ocid="input-preferred-date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={form.preferredDate}
                      onChange={(e) =>
                        handleChange("preferredDate", e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message">
                    संदेश / Message / Notes
                    <span className="text-muted-foreground text-xs ml-1">
                      (optional)
                    </span>
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="input-message"
                    placeholder="तुमच्या गरजा, प्रश्न किंवा विशेष सूचना…"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  data-ocid="btn-submit-booking"
                  disabled={submitLead.isPending}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base py-3 h-auto transition-smooth"
                >
                  {submitLead.isPending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      सबमिट होत आहे… / Submitting…
                    </span>
                  ) : (
                    "Book Site Visit / साइट भेट बुक करा"
                  )}
                </Button>

                <p className="text-muted-foreground text-xs text-center">
                  * चिन्हांकित फील्ड आवश्यक आहेत / Fields marked * are required
                </p>
              </form>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-5">
            {/* Contact Card */}
            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent" />
                संपर्क करा / Contact Us
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent shrink-0" />
                  <div>
                    <a
                      href="tel:9158813097"
                      data-ocid="contact-phone-1"
                      className="font-semibold hover:text-accent transition-colors block"
                    >
                      +91 9158813097
                    </a>
                    <a
                      href="tel:7875612771"
                      data-ocid="contact-phone-2"
                      className="font-semibold hover:text-accent transition-colors block"
                    >
                      +91 7875612771
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent shrink-0" />
                  <a
                    href="mailto:udayahambg@gmail.com"
                    data-ocid="contact-email"
                    className="hover:text-accent transition-colors break-all"
                  >
                    udayahambg@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80">
                    Pan-India Service / संपूर्ण भारत
                  </span>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="bg-card rounded-xl shadow-card p-6">
              <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Sun className="h-5 w-5 text-accent" />
                आमच्या सेवा / Our Services
              </h3>
              <ul className="space-y-3">
                {SERVICES.map(({ icon: Icon, label, sub }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="bg-accent/10 rounded-md p-1.5 mt-0.5 shrink-0">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground leading-tight">
                        {label}
                      </p>
                      <p className="text-xs text-muted-foreground">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why choose us */}
            <div className="bg-muted/40 rounded-xl p-5 border border-border">
              <h3 className="font-semibold text-foreground text-sm mb-3">
                का निवडायचे आम्हाला? / Why Udayasham?
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "सर्व ब्रँड्स उपलब्ध / All Brands",
                  "मोफत साइट भेट / Free Site Visit",
                  "३ वर्षे वारंटी / 3-Year Warranty",
                  "सबसिडी मार्गदर्शन / Subsidy Guidance",
                  "24×7 Customer Support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
