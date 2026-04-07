import { c as createLucideIcon, j as jsxRuntimeExports, S as Sun, L as Link, B as Button, P as Phone, M as Mail, a as MapPin, b as Skeleton, C as ChevronRight } from "./index-C8YmDU4M.js";
import { u as useProducts, B as Badge, a as Battery } from "./use-products-CyqFD06-.js";
import { C as Card, a as CardContent, S as Shield } from "./card-DzYjPdTo.js";
import { Z as Zap, W as Wrench } from "./zap-Sbww-niv.js";
import "./useQuery-BrONQZhO.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const BadgeCheck = createLucideIcon("badge-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
];
const Headphones = createLucideIcon("headphones", __iconNode);
const SERVICES = [
  {
    icon: Sun,
    title: "Rooftop Installation",
    marathi: "छत सोलर बसवणे",
    description: "Expert installation of solar panels on residential and commercial rooftops. Full site assessment, design, and certified installation.",
    highlight: "सर्व ब्रँड्स उपलब्ध"
  },
  {
    icon: Award,
    title: "All Brands Supported",
    marathi: "सर्व ब्रँड्स",
    description: "We install and service all major solar brands — Tata, Luminous, Vikram, Adani, Havells, and more. No brand restriction.",
    highlight: "Tata · Luminous · Vikram"
  },
  {
    icon: MapPin,
    title: "Pan-India Coverage",
    marathi: "संपूर्ण भारत सेवा",
    description: "Our certified technicians serve customers across all states of India. Urban or rural — we reach you.",
    highlight: "भारतभर सेवा"
  }
];
const TRUST_POINTS = [
  {
    icon: BadgeCheck,
    title: "MNRE Licensed",
    marathi: "परवानाधारक",
    description: "Certified under Ministry of New & Renewable Energy (MNRE) guidelines. Every installation meets national safety standards."
  },
  {
    icon: Shield,
    title: "10+ Years Experience",
    marathi: "१०+ वर्षांचा अनुभव",
    description: "Over a decade of solar expertise, with 500+ successful installations across Maharashtra and beyond."
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    marathi: "विक्रीनंतर सेवा",
    description: "5-year AMC packages available. Dedicated support line, annual checkups, and performance monitoring."
  },
  {
    icon: Zap,
    title: "Subsidy Assistance",
    marathi: "सबसिडी मदत",
    description: "We handle all paperwork for PM Surya Ghar and state subsidy schemes. Save up to ₹78,000 on residential installations."
  },
  {
    icon: Wrench,
    title: "End-to-End Service",
    marathi: "संपूर्ण सेवा",
    description: "From site survey to commissioning — all in-house. No subcontractors. Faster timelines, better accountability."
  },
  {
    icon: Battery,
    title: "Quality Products",
    marathi: "गुणवत्ता उत्पादने",
    description: "Only BIS-certified, Tier-1 manufacturer panels and equipment. Minimum 25-year panel performance warranty."
  }
];
const STATS = [
  { value: "500+", label: "Installations", marathi: "बसवलेले सिस्टम" },
  { value: "4 MW+", label: "Capacity Added", marathi: "ऊर्जा क्षमता" },
  { value: "15+", label: "States Served", marathi: "राज्ये सेवा" },
  { value: "98%", label: "Happy Customers", marathi: "समाधानी ग्राहक" }
];
function ProductCard({ product }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: "group overflow-hidden shadow-card hover:shadow-elevated transition-smooth cursor-pointer",
      "data-ocid": `product-card-${product.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.imageUrl,
              alt: product.name,
              className: "h-full w-full object-cover group-hover:scale-105 transition-smooth",
              onError: (e) => {
                e.currentTarget.src = "/assets/images/placeholder.svg";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-3 left-3 bg-accent text-accent-foreground border-0 text-xs font-semibold", children: product.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base leading-snug mb-1 line-clamp-2", children: product.name }),
          product.brand && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: product.brand }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mb-3", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            product.price ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary text-sm", children: product.price }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Contact for price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                size: "sm",
                variant: "outline",
                className: "text-xs gap-1 h-7 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth",
                children: [
                  "Enquire ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
                ]
              }
            ) })
          ] })
        ] })
      ]
    }
  );
}
function Home() {
  const { data: products, isLoading: productsLoading } = useProducts();
  const featuredProducts = (products == null ? void 0 : products.slice(0, 3)) ?? [];
  function scrollToContact() {
    var _a;
    (_a = document.getElementById("contact")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden min-h-[92vh] flex items-center",
        "data-ocid": "hero-section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/hero-rooftop-solar.dim_1400x700.jpg",
                alt: "Rooftop solar installation",
                className: "h-full w-full object-cover object-center"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative z-10 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-3.5 w-3.5 text-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-accent tracking-wide uppercase", children: "MNRE Certified · Pan-India Solar Solutions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-primary-foreground leading-[1.1] mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-5xl md:text-6xl lg:text-7xl", children: "Udayasham" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-4xl md:text-5xl lg:text-6xl text-gradient-accent", children: "Solar Tech" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xl md:text-2xl text-primary-foreground/80 font-semibold mt-1", children: "उदयशाम सोलर टेक" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-primary-foreground/85 font-medium mb-2 leading-relaxed", children: "Powering India's homes and businesses with clean, affordable solar energy." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-accent font-semibold mb-8", children: "सर्वोत्तम सोलर समाधान, संपूर्ण भारतात" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", "data-ocid": "hero-cta-book", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  size: "lg",
                  className: "bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base gap-2 shadow-lg px-7",
                  children: [
                    "Book Free Site Visit ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  size: "lg",
                  variant: "outline",
                  className: "border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold text-base gap-2 backdrop-blur-sm",
                  onClick: scrollToContact,
                  "data-ocid": "hero-cta-contact",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                    " Contact Us"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-5 mt-8 pt-6 border-t border-primary-foreground/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "tel:9158813097",
                  className: "flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm font-medium",
                  "data-ocid": "hero-phone-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-accent" }),
                    "+91 9158813097"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "tel:7875612771",
                  className: "flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm font-medium",
                  "data-ocid": "hero-phone-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-accent" }),
                    "+91 7875612771"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "mailto:udayahambg@gmail.com",
                  className: "flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm font-medium",
                  "data-ocid": "hero-email",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-accent" }),
                    "udayahambg@gmail.com"
                  ]
                }
              )
            ] })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-accent py-6", "data-ocid": "stats-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 text-center", children: STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-2xl md:text-3xl text-accent-foreground", children: stat.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-accent-foreground/80 uppercase tracking-wider", children: stat.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-accent-foreground/60 mt-0.5", children: stat.marathi })
    ] }, stat.value)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        id: "services",
        "data-ocid": "services-section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "mb-3 border-accent/40 text-accent text-xs font-semibold px-3",
                children: "आमच्या सेवा · Our Services"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-3", children: "What We Offer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "From consultation to commissioning — we handle everything so you can start saving on electricity bills sooner." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: SERVICES.map((service) => {
            const Icon = service.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                className: "group shadow-card hover:shadow-elevated transition-smooth border-border hover:border-accent/40",
                "data-ocid": `service-card-${service.title.toLowerCase().replace(/\s+/g, "-")}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 mb-4 group-hover:bg-accent/25 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-1", children: service.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-accent mb-3", children: service.marathi }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: service.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20", children: service.highlight })
                ] })
              },
              service.title
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/40",
        id: "why-us",
        "data-ocid": "why-choose-us-section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "mb-3 border-accent/40 text-accent text-xs font-semibold px-3",
                children: "आम्हालाच का निवडावे · Why Choose Us"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-3", children: "The Udayasham Advantage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "We're not just installers — we're your long-term solar partners. Here's what sets us apart." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: TRUST_POINTS.map((point) => {
            const Icon = point.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex gap-4 bg-card rounded-xl p-5 shadow-card border border-border hover:border-accent/30 transition-smooth",
                "data-ocid": `trust-point-${point.title.toLowerCase().replace(/\s+/g, "-")}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-sm mb-0.5", children: point.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-accent mb-2", children: point.marathi }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: point.description })
                  ] })
                ]
              },
              point.title
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        id: "products",
        "data-ocid": "products-section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "mb-3 border-accent/40 text-accent text-xs font-semibold px-3",
                  children: "आमची उत्पादने · Our Products"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-2", children: "Featured Products" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Top-quality solar equipment at competitive prices." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", "data-ocid": "view-all-products-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                className: "border-accent text-accent hover:bg-accent hover:text-accent-foreground gap-1.5 font-semibold transition-smooth whitespace-nowrap",
                children: [
                  "View All Products ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ) })
          ] }),
          productsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl overflow-hidden border border-border",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-44 w-full rounded-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" })
                ] })
              ]
            },
            i
          )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: featuredProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }, product.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", "data-ocid": "hero-products-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              size: "lg",
              className: "bg-primary text-primary-foreground hover:bg-primary/90 font-bold gap-2 px-8",
              children: [
                "Browse Full Catalog — सर्व उत्पादने पाहा",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-solar py-16", "data-ocid": "cta-banner-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl md:text-4xl text-primary-foreground mb-3", children: "Ready to Switch to Solar?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/85 text-lg mb-2", children: "मोफत साइट व्हिजिट बुक करा — आजच सुरुवात करा!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 mb-8 max-w-xl mx-auto text-sm", children: "Our experts will assess your rooftop, calculate savings, and provide a free quote with no obligation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", "data-ocid": "cta-banner-book", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "lg",
            className: "bg-card text-foreground hover:bg-card/90 font-bold text-base gap-2 shadow-lg px-8",
            children: [
              "Book Free Site Visit ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:9158813097", "data-ocid": "cta-banner-phone", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "lg",
            variant: "outline",
            className: "border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold text-base gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
              " Call Now: 9158813097"
            ]
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/40",
        id: "contact",
        "data-ocid": "contact-section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "mb-3 border-accent/40 text-accent text-xs font-semibold px-3",
                children: "संपर्क करा · Get In Touch"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-3", children: "Contact Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md mx-auto", children: "Have questions? Our team is ready to help. Call, email, or book a free consultation." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:9158813097",
                className: "group",
                "data-ocid": "contact-phone-primary",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card hover:shadow-elevated transition-smooth border-border hover:border-accent/40 text-center p-6 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0 flex flex-col items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 group-hover:bg-accent/25 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1", children: "Primary · मुख्य" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-lg group-hover:text-accent transition-colors duration-200", children: "+91 9158813097" })
                  ] })
                ] }) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:7875612771",
                className: "group",
                "data-ocid": "contact-phone-support",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card hover:shadow-elevated transition-smooth border-border hover:border-accent/40 text-center p-6 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0 flex flex-col items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 group-hover:bg-accent/25 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1", children: "Support · सपोर्ट" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-lg group-hover:text-accent transition-colors duration-200", children: "+91 7875612771" })
                  ] })
                ] }) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "mailto:udayahambg@gmail.com",
                className: "group",
                "data-ocid": "contact-email",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card hover:shadow-elevated transition-smooth border-border hover:border-accent/40 text-center p-6 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0 flex flex-col items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 group-hover:bg-accent/25 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 w-full", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1", children: "Email · ईमेल" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-sm group-hover:text-accent transition-colors duration-200 break-all", children: "udayahambg@gmail.com" })
                  ] })
                ] }) })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 shadow-subtle", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-accent flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
              "Serving all states across India ·",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "संपूर्ण भारतात सेवा" })
            ] })
          ] }) })
        ] })
      }
    )
  ] });
}
export {
  Home as default
};
