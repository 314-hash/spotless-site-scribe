import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Sparkles, Key, Building, Bed, Plus } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Regular House Cleaning",
    description:
      "Weekly, fortnightly, or monthly cleaning designed to keep your home fresh and organised. Includes dusting, vacuuming, mopping, bathrooms, kitchen surfaces, and general tidy‑up.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "A top‑to‑bottom refresh for your entire home. Ideal for spring cleaning, post‑renovation, or preparing for guests.",
  },
  {
    icon: Key,
    title: "End‑of‑Lease Cleaning",
    description:
      "Real‑estate approved bond cleaning with a satisfaction guarantee. Includes kitchens, bathrooms, walls, skirting boards, windows, appliances, and more.",
  },
  {
    icon: Bed,
    title: "Airbnb / Short‑Stay Cleaning",
    description:
      "Fast, reliable turnovers with linen change, restocking, and presentation‑ready setups for hosts.",
  },
  {
    icon: Building,
    title: "Office Cleaning",
    description:
      "Professional and consistent cleaning for small to medium workplaces across Western Sydney. A clean workspace boosts productivity, supports staff wellbeing, and creates a strong first impression.",
  },
];

const officeIncludes = [
  "Desk and workstation cleaning",
  "Vacuuming and mopping",
  "Rubbish removal and bin sanitising",
  "Kitchen and break‑room cleaning",
  "Bathroom sanitising",
  "Reception and common area cleaning",
  "Glass and window spot cleaning",
  "High‑touch point disinfection",
];

const officeAddOns = [
  "Deep office sanitisation",
  "Carpet steam cleaning",
  "Fridge and microwave cleaning",
  "Meeting room reset and presentation setup",
];

const addOns = [
  "Oven cleaning",
  "Fridge cleaning",
  "Window cleaning",
  "Wall spot cleaning",
  "Blinds dusting",
  "Balcony cleaning",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Services = () => (
  <div className="pt-20">
    {/* Header */}
    <section className="py-24 px-4 bg-secondary">
      <div className="container mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
          Our <span className="text-gradient-gold">Services</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive cleaning solutions tailored to your needs.
        </p>
      </div>
    </section>

    {/* Service cards */}
    <section className="py-24 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
          >
            <s.icon className="text-primary mb-4" size={32} />
            <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Office cleaning details */}
    <section className="py-24 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl font-bold mb-12 text-center">
          Office Cleaning <span className="text-gradient-gold">Details</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">What's Included</h3>
            <ul className="space-y-2">
              {officeIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="text-primary mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Optional Add‑Ons</h3>
            <ul className="space-y-2">
              {officeAddOns.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Plus size={14} className="text-primary mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* General add-ons */}
    <section className="py-24 px-4">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold mb-8">
          <span className="text-gradient-gold">Add‑Ons</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {addOns.map((a) => (
            <span key={a} className="border border-border bg-card text-sm px-5 py-2.5 rounded-full text-foreground/80">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Quote CTA */}
    <section className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Get a <span className="text-gradient-gold">Quote</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          At MLF Professional Services, we understand that every home and business is unique. We offer personalised quotes based on your property size, number of bathrooms, and the level of cleaning required. Transparent pricing with no hidden fees.
        </p>
        <Link
          to="/contact"
          className="bg-gold-gradient text-primary-foreground px-10 py-4 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
        >
          Request a Quote <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
