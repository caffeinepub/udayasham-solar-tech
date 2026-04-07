import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, g as createSlot, e as cn, S as Sun, B as Button, P as Phone, M as Mail, a as MapPin } from "./index-C8YmDU4M.js";
import { I as Input } from "./input-xJR-gQvp.js";
import { u as useSubmitLead } from "./use-leads-uvR90uvz.js";
import { W as Wrench, Z as Zap } from "./zap-Sbww-niv.js";
import "./useQuery-BrONQZhO.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  city: "",
  roofSize: "",
  preferredDate: "",
  message: ""
};
const SERVICES = [
  { icon: House, label: "Residential Rooftop Solar", sub: "घरगुती छत सौर यंत्रणा" },
  {
    icon: Building2,
    label: "Commercial Solar Systems",
    sub: "व्यावसायिक सौर यंत्रणा"
  },
  { icon: Wrench, label: "O&M Services", sub: "देखभाल व सेवा" },
  { icon: Zap, label: "All Solar Products", sub: "सर्व सौर उत्पादने" }
];
function Book() {
  const [form, setForm] = reactExports.useState(INITIAL_FORM);
  const [errors, setErrors] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  const submitLead = useSubmitLead();
  function validate() {
    const e = {};
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
  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: void 0 }));
    }
  }
  function handleBlur(field) {
    const e = { ...errors };
    if (field === "name" && !form.name.trim())
      e.name = "नाव आवश्यक आहे / Name is required";
    if (field === "phone") {
      if (!form.phone.trim()) e.phone = "फोन नंबर आवश्यक आहे / Phone is required";
      else if (!/^\d{10,13}$/.test(form.phone.replace(/\s+/g, "")))
        e.phone = "वैध फोन नंबर द्या / Enter a valid phone number";
      else e.phone = void 0;
    }
    if (field === "email") {
      if (!form.email.trim()) e.email = "ईमेल आवश्यक आहे / Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = "वैध ईमेल पत्ता द्या / Enter a valid email";
      else e.email = void 0;
    }
    if (field === "city" && !form.city.trim())
      e.city = "शहर/पत्ता आवश्यक आहे / City is required";
    setErrors(e);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    await submitLead.mutateAsync({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      city: form.city.trim(),
      roofSize: form.roofSize.trim(),
      preferredDate: form.preferredDate,
      message: form.message.trim()
    });
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setErrors({});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary text-primary-foreground py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-6 w-6 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold text-sm tracking-wide uppercase", children: "Udayasham Solar Tech" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-display font-bold mb-2", children: "Book a Free Site Visit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg", children: "साइट भेट बुक करा — आमचे तज्ञ तुमच्या घरी येतील आणि योग्य यंत्रणा सुचवतील." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl shadow-elevated p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground mb-1", children: "Service Booking Form" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "सेवा नोंदणी फॉर्म — खाली माहिती भरा, आम्ही लवकरच संपर्क करू." }),
        submitted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "booking-success",
            className: "flex gap-3 items-start bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6",
            role: "alert",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-accent mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Booking submitted successfully! / बुकिंग यशस्वीरित्या केली!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "We'll contact you within 24 hours. / आम्ही २४ तासांत संपर्क करू." })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "name", children: [
              "पूर्ण नाव / Full Name",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "name",
                "data-ocid": "input-name",
                type: "text",
                placeholder: "उदा. राजेश पाटील / Rajesh Patil",
                value: form.name,
                onChange: (e) => handleChange("name", e.target.value),
                onBlur: () => handleBlur("name"),
                "aria-invalid": !!errors.name,
                "aria-describedby": errors.name ? "name-error" : void 0
              }
            ),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                id: "name-error",
                className: "text-destructive text-xs mt-1",
                children: errors.name
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "phone", children: [
                "फोन नंबर / Phone",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "phone",
                  "data-ocid": "input-phone",
                  type: "tel",
                  placeholder: "9158813097",
                  value: form.phone,
                  onChange: (e) => handleChange("phone", e.target.value),
                  onBlur: () => handleBlur("phone"),
                  "aria-invalid": !!errors.phone,
                  "aria-describedby": errors.phone ? "phone-error" : void 0
                }
              ),
              errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  id: "phone-error",
                  className: "text-destructive text-xs mt-1",
                  children: errors.phone
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "email", children: [
                "ईमेल / Email ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "email",
                  "data-ocid": "input-email",
                  type: "email",
                  placeholder: "you@example.com",
                  value: form.email,
                  onChange: (e) => handleChange("email", e.target.value),
                  onBlur: () => handleBlur("email"),
                  "aria-invalid": !!errors.email,
                  "aria-describedby": errors.email ? "email-error" : void 0
                }
              ),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  id: "email-error",
                  className: "text-destructive text-xs mt-1",
                  children: errors.email
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "city", children: [
              "शहर / पत्ता — City / Address",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "city",
                "data-ocid": "input-city",
                type: "text",
                placeholder: "उदा. पुणे, मुंबई, नागपूर",
                value: form.city,
                onChange: (e) => handleChange("city", e.target.value),
                onBlur: () => handleBlur("city"),
                "aria-invalid": !!errors.city,
                "aria-describedby": errors.city ? "city-error" : void 0
              }
            ),
            errors.city && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                id: "city-error",
                className: "text-destructive text-xs mt-1",
                children: errors.city
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "roofSize", children: [
                "छताचा आकार / Roof Size",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs ml-1", children: "(sq. ft., optional)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "roofSize",
                  "data-ocid": "input-roof-size",
                  type: "text",
                  placeholder: "उदा. 500 sq.ft.",
                  value: form.roofSize,
                  onChange: (e) => handleChange("roofSize", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "preferredDate", children: [
                "पसंतीची तारीख / Preferred Visit Date",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs ml-1", children: "(optional)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "preferredDate",
                  "data-ocid": "input-preferred-date",
                  type: "date",
                  min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                  value: form.preferredDate,
                  onChange: (e) => handleChange("preferredDate", e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "message", children: [
              "संदेश / Message / Notes",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs ml-1", children: "(optional)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "message",
                "data-ocid": "input-message",
                placeholder: "तुमच्या गरजा, प्रश्न किंवा विशेष सूचना…",
                rows: 4,
                value: form.message,
                onChange: (e) => handleChange("message", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              "data-ocid": "btn-submit-booking",
              disabled: submitLead.isPending,
              className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base py-3 h-auto transition-smooth",
              children: submitLead.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                "सबमिट होत आहे… / Submitting…"
              ] }) : "Book Site Visit / साइट भेट बुक करा"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs text-center", children: "* चिन्हांकित फील्ड आवश्यक आहेत / Fields marked * are required" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary rounded-xl p-6 text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-lg mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-accent" }),
            "संपर्क करा / Contact Us"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-accent shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "tel:9158813097",
                    "data-ocid": "contact-phone-1",
                    className: "font-semibold hover:text-accent transition-colors block",
                    children: "+91 9158813097"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "tel:7875612771",
                    "data-ocid": "contact-phone-2",
                    className: "font-semibold hover:text-accent transition-colors block",
                    children: "+91 7875612771"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-accent shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "mailto:udayahambg@gmail.com",
                  "data-ocid": "contact-email",
                  className: "hover:text-accent transition-colors break-all",
                  children: "udayahambg@gmail.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-accent shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground/80", children: "Pan-India Service / संपूर्ण भारत" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl shadow-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5 text-accent" }),
            "आमच्या सेवा / Our Services"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: SERVICES.map(({ icon: Icon, label, sub }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-accent/10 rounded-md p-1.5 mt-0.5 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground leading-tight", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: sub })
            ] })
          ] }, label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-5 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm mb-3", children: "का निवडायचे आम्हाला? / Why Udayasham?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            "सर्व ब्रँड्स उपलब्ध / All Brands",
            "मोफत साइट भेट / Free Site Visit",
            "३ वर्षे वारंटी / 3-Year Warranty",
            "सबसिडी मार्गदर्शन / Subsidy Guidance",
            "24×7 Customer Support"
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-accent shrink-0" }),
            item
          ] }, item)) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Book as default
};
