import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  Sofa,
  ChefHat,
  Bath,
  DoorOpen,
  Wind,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sections = [
  {
    icon: Sofa,
    title: "Living Areas & Bedrooms",
    items: [
      "Dust all surfaces, shelves, skirting boards",
      "Vacuum carpets and steam clean if required",
      "Mop hard floors thoroughly",
      "Clean windows, sills, and tracks",
      "Wipe light switches, power points, door handles",
      "Remove cobwebs from ceilings and corners",
      "Clean wardrobes inside and out",
    ],
  },
  {
    icon: ChefHat,
    title: "Kitchen",
    items: [
      "Degrease and clean oven inside and out",
      "Clean stovetop, rangehood, and filters",
      "Wipe inside/outside of all cupboards and drawers",
      "Clean fridge and freezer (if vacated)",
      "Scrub sink, taps, and benchtops",
      "Clean splashback and remove grease buildup",
      "Mop floors and clean kickboards",
    ],
  },
  {
    icon: Bath,
    title: "Bathroom & Laundry",
    items: [
      "Descale shower screens, tiles, and grout",
      "Clean and disinfect toilet (inside, outside, base)",
      "Polish mirrors and chrome fittings",
      "Wipe vanity, drawers, and cabinets",
      "Clean exhaust fans and vents",
      "Wipe down washing machine and dryer exterior",
      "Mop floors and clean drains",
    ],
  },
  {
    icon: DoorOpen,
    title: "Doors, Walls & Windows",
    items: [
      "Spot-clean walls (marks, scuffs, fingerprints)",
      "Wipe doors, frames, and door handles",
      "Clean window glass inside (and outside if accessible)",
      "Vacuum and wipe window tracks",
      "Dust blinds and curtains",
    ],
  },
  {
    icon: Wind,
    title: "Outdoor & Extras",
    items: [
      "Sweep balcony, patio, or courtyard",
      "Clean garage floor (if applicable)",
      "Empty and clean bins",
      "Remove all rubbish from property",
      "Replace any blown light bulbs",
    ],
  },
];

const faqs = [
  {
    q: "What is end of lease cleaning?",
    a: "Also called bond cleaning or vacate cleaning, it's a deep clean performed when moving out of a rental property to meet the standards required for the bond to be returned in full.",
  },
  {
    q: "Is end of lease cleaning the same as a deep clean?",
    a: "It's similar but more comprehensive — it follows a strict checklist mandated by real estate agents in NSW and includes areas like ovens, walls, and window tracks.",
  },
  {
    q: "Do I need a cleaning receipt for my bond?",
    a: "Most Sydney real estate agents require a professional cleaning receipt as proof. Always book a cleaner who provides one.",
  },
  {
    q: "How long does end of lease cleaning take?",
    a: "A 2-bedroom apartment typically takes 4–6 hours; a 4-bedroom home can take 8–10+ hours depending on condition.",
  },
  {
    q: "Does MLF Professional Services offer a bond-back guarantee?",
    a: "Yes, we offer a re-clean guarantee — if your agent isn't satisfied with our work, we return to fix it free of charge.",
  },
];

const EndOfLeaseCleaningChecklistSydney = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "End of Lease Cleaning Checklist Sydney",
    author: { "@type": "Organization", name: "MLF Professional Services" },
    publisher: { "@type": "Organization", name: "MLF Professional Services" },
    description:
      "The complete end of lease cleaning checklist for Sydney renters — every room, every task, designed to help you get your full bond back.",
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>End of Lease Cleaning Checklist Sydney | Get Your Bond Back</title>
        <meta
          name="description"
          content="The ultimate end of lease cleaning checklist for Sydney renters. Room-by-room tasks to help you secure your full bond refund."
        />
        <link
          rel="canonical"
          href="https://mlfprofessionalservices.com.au/end-of-lease-cleaning-checklist-sydney"
        />
        <meta property="og:title" content="End of Lease Cleaning Checklist Sydney" />
        <meta
          property="og:description"
          content="Room-by-room bond cleaning checklist for Sydney rentals — designed to help you get 100% of your bond back."
        />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-4">
              <ClipboardCheck size={14} /> Sydney Renters Guide
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              End of Lease Cleaning <span className="text-gradient-gold">Checklist</span> Sydney
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Moving out of a Sydney rental? Use this room-by-room end of lease cleaning checklist to make sure nothing
              gets missed — and to maximise your chance of a full bond refund.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bond guarantee callout */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border rounded-lg p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <ShieldCheck className="text-primary shrink-0" size={48} />
            <div>
              <h2 className="font-heading text-2xl font-semibold mb-2">
                🛡️ Bond-Back Re-Clean Guarantee
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If your real estate agent isn't satisfied with our end of lease clean, we return to fix it — free of
                charge. Cleaning receipts provided for all bond cleans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist sections */}
      <section className="py-12 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              📝 The Complete <span className="text-gradient-gold">Room-by-Room Checklist</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every task your agent will check before returning your bond.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <s.icon className="text-primary mb-4" size={32} />
                <h3 className="font-heading text-xl font-semibold mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            ❓ Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            📞 Book Your <span className="text-gradient-gold">End of Lease Clean</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Get your bond back stress-free. MLF Professional Services delivers agent-approved end of lease cleans across
            Sydney.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:1300038243"
              className="bg-gold-gradient text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Phone size={16} /> Call 1300 038 243
            </a>
            <Link
              to="/contact"
              className="border border-border bg-card px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:border-primary/50 transition-colors inline-flex items-center gap-2"
            >
              Request a Free Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EndOfLeaseCleaningChecklistSydney;
