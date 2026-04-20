import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Star,
  MapPin,
  MessageSquare,
  Clock,
  Leaf,
  Home,
  Phone,
  Lightbulb,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const reliableTraits = [
  "Consistency in service quality",
  "Clear communication and punctuality",
  "Positive customer feedback",
  "Proper cleaning equipment and supplies",
  "Flexibility with scheduling",
];

const steps = [
  {
    icon: Lightbulb,
    title: "Step 1: Check Experience & Specialisation",
    points: [
      "Specialise in house cleaning or end-of-lease cleaning",
      "Have experience in residential homes",
      "Understand local expectations in Western Sydney rentals",
    ],
  },
  {
    icon: Star,
    title: "Step 2: Read Reviews Carefully",
    points: [
      "Consistency in positive feedback",
      "Mentions of punctuality and professionalism",
      "Real customer experiences",
    ],
  },
  {
    icon: MapPin,
    title: "Step 3: Look for Local Service Coverage",
    points: [
      "Schofields, Kellyville, Rooty Hill",
      "Plumpton, Tallawong, Melonba",
      "Local cleaners are more responsive and flexible",
    ],
  },
  {
    icon: MessageSquare,
    title: "Step 4: Ask What's Included",
    points: [
      "Dusting, vacuuming, mopping",
      "Kitchen and bathroom cleaning",
      "General surface cleaning — clarity is key",
    ],
  },
  {
    icon: Clock,
    title: "Step 5: Check Availability & Flexibility",
    points: [
      "Weekly or fortnightly cleaning",
      "One-off deep cleans",
      "Same-day or urgent bookings when available",
    ],
  },
  {
    icon: Leaf,
    title: "Step 6: Consider Cleaning Standards",
    points: [
      "Eco-friendly cleaning products",
      "Safe practices for homes with kids or pets",
      "Attention to detail in high-traffic areas",
    ],
  },
];

const faqs = [
  {
    q: "How do I know if a cleaner is trustworthy?",
    a: "Check reviews, experience, and consistency in service delivery.",
  },
  {
    q: "What is the average cost of house cleaning in Western Sydney?",
    a: "Pricing depends on home size and frequency. Most cleaners offer custom quotes.",
  },
  {
    q: "Should I hire local cleaners?",
    a: "Yes, local cleaners are usually more responsive and familiar with area expectations.",
  },
];

const FindReliableCleanersWesternSydney = () => {
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
    headline: "How to Find Reliable Cleaners in Western Sydney",
    author: { "@type": "Organization", name: "MLF Professional Services" },
    publisher: {
      "@type": "Organization",
      name: "MLF Professional Services",
    },
    description:
      "Learn how to find reliable cleaners in Western Sydney. Tips on choosing trustworthy, professional house cleaning services you can depend on.",
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>How to Find Reliable Cleaners in Western Sydney | Trusted Guide</title>
        <meta
          name="description"
          content="Learn how to find reliable cleaners in Western Sydney. Tips on choosing trustworthy, professional house cleaning services you can depend on."
        />
        <link
          rel="canonical"
          href="https://mlfprofessionalservices.com.au/how-to-find-reliable-cleaners-western-sydney"
        />
        <meta
          property="og:title"
          content="How to Find Reliable Cleaners in Western Sydney | Trusted Guide"
        />
        <meta
          property="og:description"
          content="A practical guide to choosing trustworthy, professional house cleaners in Western Sydney."
        />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-4">
              <Search size={14} /> Trusted Guide
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              How to Find{" "}
              <span className="text-gradient-gold">Reliable Cleaners</span> in
              Western Sydney
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Finding a reliable cleaner in Western Sydney can be difficult with
              so many options available. The key is knowing what to look for so
              you can avoid poor service and choose a cleaner you can trust
              long-term. This guide will help you select a professional cleaning
              service that delivers consistent, high-quality results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What makes reliable */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              🔍 What Makes a Cleaner{" "}
              <span className="text-gradient-gold">"Reliable"?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reliability means you can trust them to show up and deliver the
              same standard every time.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {reliableTraits.map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
              >
                <CheckCircle2
                  size={20}
                  className="text-primary mt-0.5 shrink-0"
                />
                <span className="text-sm text-foreground/80">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              The 6-Step Guide to{" "}
              <span className="text-gradient-gold">Choosing a Cleaner</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple framework for evaluating cleaning services before you
              book.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <s.icon className="text-primary mb-4" size={28} />
                <h3 className="font-heading text-lg font-semibold mb-4">
                  {s.title}
                </h3>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="text-primary mt-0.5">✓</span> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted option */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Home className="text-primary mx-auto mb-4" size={40} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            🏡 Trusted Cleaning Option in{" "}
            <span className="text-gradient-gold">Western Sydney</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            If you're looking for a reliable local option, MLF Professional
            Services provides house cleaning across Western Sydney with flexible
            scheduling and consistent service quality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/western-sydney-house-cleaning"
              className="bg-gold-gradient text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              See Western Sydney Service <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="border border-border bg-card px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:border-primary/50 transition-colors inline-flex items-center gap-2"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            ❓ Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final tip + CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Lightbulb className="text-primary mx-auto mb-4" size={32} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            🧠 Final <span className="text-gradient-gold">Tip</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            The most reliable cleaners are not always the cheapest — they are
            the ones who are consistent, transparent, and easy to communicate
            with.
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

export default FindReliableCleanersWesternSydney;
