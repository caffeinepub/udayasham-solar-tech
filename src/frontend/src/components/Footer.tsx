import { Link } from "@tanstack/react-router";
import { ExternalLink, Mail, MapPin, Phone, Sun } from "lucide-react";

const FOOTER_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/book", label: "Book Service" },
  { to: "/admin", label: "Admin" },
];

const SERVICES = [
  "Residential Rooftop Solar",
  "Commercial & Industrial Solar",
  "O&M Services",
  "Solar Consultation",
  "System Upgrades",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer
      className="bg-primary text-primary-foreground"
      data-ocid="site-footer"
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent shadow-sm">
                <Sun className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-base">
                  Udayasham Solar Tech
                </div>
                <div className="text-xs text-primary-foreground/60">
                  उदयशाम सोलर टेक
                </div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
              Delivering clean, affordable solar energy solutions for homes and
              businesses across India. भारतभर स्वच्छ ऊर्जा.
            </p>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider">
              Proudly Indian · Powering Progress
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                    data-ocid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Our Services · सेवा
            </h4>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((service) => (
                <li
                  key={service}
                  className="text-sm text-primary-foreground/70"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Contact · संपर्क
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:9158813097"
                  className="flex items-start gap-2.5 group"
                  data-ocid="footer-phone-1"
                >
                  <Phone className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-primary-foreground/80 group-hover:text-accent transition-colors duration-200">
                      +91 9158813097
                    </div>
                    <div className="text-xs text-primary-foreground/40">
                      Primary
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:7875612771"
                  className="flex items-start gap-2.5 group"
                  data-ocid="footer-phone-2"
                >
                  <Phone className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-primary-foreground/80 group-hover:text-accent transition-colors duration-200">
                      +91 7875612771
                    </div>
                    <div className="text-xs text-primary-foreground/40">
                      Support
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:udayahambg@gmail.com"
                  className="flex items-start gap-2.5 group"
                  data-ocid="footer-email"
                >
                  <Mail className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80 group-hover:text-accent transition-colors duration-200 break-all">
                    udayahambg@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  Pan-India Service · संपूर्ण भारत
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container flex flex-col sm:flex-row items-center justify-between py-4 gap-2">
          <p className="text-xs text-primary-foreground/50">
            © {year} Udayasham Solar Tech. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors duration-200"
          >
            Built with love using caffeine.ai
            <ExternalLink className="h-2.5 w-2.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
