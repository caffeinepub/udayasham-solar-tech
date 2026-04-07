import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Menu, Phone, Sun, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home", marathi: "मुख्यपृष्ठ" },
  { to: "/products", label: "Products", marathi: "उत्पादने" },
  { to: "/book", label: "Book Service", marathi: "सेवा बुक करा" },
  { to: "/admin", label: "Admin", marathi: "व्यवस्थापन" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  function isActive(to: string) {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to);
  }

  return (
    <header
      className="sticky top-0 z-50 bg-primary shadow-elevated"
      data-ocid="site-header"
    >
      {/* Top contact bar */}
      <div className="border-b border-primary-foreground/10 bg-primary/90">
        <div className="container flex items-center justify-between py-1.5 text-xs text-primary-foreground/80">
          <span className="hidden sm:inline">
            भारतभर सेवा · Pan-India Service
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:9158813097"
              className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200"
              data-ocid="contact-phone-1"
            >
              <Phone className="h-3 w-3" />
              <span>+91 9158813097</span>
            </a>
            <span className="text-primary-foreground/30">|</span>
            <a
              href="tel:7875612771"
              className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200"
              data-ocid="contact-phone-2"
            >
              <Phone className="h-3 w-3" />
              <span>+91 7875612771</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            data-ocid="site-logo"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent shadow-sm">
              <Sun className="h-5 w-5 text-accent-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-primary-foreground text-base tracking-tight">
                Udayasham Solar Tech
              </div>
              <div className="text-[10px] text-primary-foreground/60 tracking-wider uppercase">
                उदयशाम सोलर टेक
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={[
                  "px-3 py-2 rounded-md text-sm font-medium transition-smooth",
                  isActive(link.to)
                    ? "bg-primary-foreground/15 text-accent"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground",
                ].join(" ")}
                data-ocid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/book"
              className="hidden sm:block"
              data-ocid="nav-cta-book"
            >
              <Button
                type="button"
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-1"
              >
                Request Quote <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <button
              className="md:hidden flex items-center justify-center h-9 w-9 rounded-md text-primary-foreground/80 hover:bg-primary-foreground/10 transition-smooth"
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              data-ocid="mobile-menu-toggle"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-primary-foreground/10 bg-primary pb-4"
          data-ocid="mobile-menu"
        >
          <nav className="container flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={[
                  "flex items-center justify-between px-3 py-3 rounded-md text-sm font-medium transition-smooth",
                  isActive(link.to)
                    ? "bg-primary-foreground/15 text-accent"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10",
                ].join(" ")}
                data-ocid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-primary-foreground/50">
                  {link.marathi}
                </span>
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setMobileOpen(false)}
              className="mt-2"
              data-ocid="mobile-nav-cta-book"
            >
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Request Quote — कोटेशन मागवा
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
