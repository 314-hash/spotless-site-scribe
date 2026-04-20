import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  Home,
  Sparkles,
  KeyRound,
  Building2,
  Phone,
  CheckCircle2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const priceTable = [
  { type: "1 Bedroom Apartment", regular: "$120 – $180", deep: "$220 – $320" },
  { type: "2 Bedroom Home", regular: "$160 – $240", deep: "$280 – $400" },
  { type: "3 Bedroom Home", regular: "$200 – $300", deep: "$350 – $500" },
  { type: "4+ Bedroom Home", regular: "$260 – $400", deep: "$450 – $700" },
];

const factors = [
  {
    icon: Home,
    title: "Property Size",
    text: "Larger homes take longer and require more products and labour.",
  },
  {
    icon: Sparkles,
    title: "Type of Clean",
    text: "Regular maintenance cleans cost less than deep or end-of-lease cleans.",
  },
  {
    icon: KeyRound,
    title: "Frequency",
    text: "Weekly and fortnightly clients usually receive lower per-visit rates.",
  },
  {
    icon: Building2,
    title: "Location & Access",
    text: "Some Sydney suburbs and apartment buildings affect travel and parking time.",
  },
];

const tips = [
  "Book recurring cleans to lock in lower rates",
  "Declutter before the cleaner arrives — you pay for cleaning, not tidying",
  "Bundle add-ons (oven, fridge, windows) into one visit",
  "Always request a written, itemised quote",
];

const faqs = [
  {
    q: "How much does a standard house clean cost in Sydney?",
    a: "Most standard 2–3 bedroom homes in Sydney cost between $160 and $300 per visit, depending on condition and frequency.",
  },
  {
    q: "Is deep cleaning more expensive?",
    a: "Yes. Deep cleans typically cost 50–80% more than a regular clean because they include detailed tasks like skirting boards, grout, and inside appliances.",
  },
  {
    q: "Are cleaning supplies included in the price?",
    a: "Most professional cleaners in Sydney bring their own equipment and products at no extra cost.",
  },
  {
    q: "Do I get a discount for regular cleaning?",
    a: "Yes. Weekly and fortnightly schedules usually attract a 10–20% lower rate per visit compared to one-off bookings.",
  },
];

const HouseCleaningCostSydney = () => {
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
    headline: "How Much Does House Cleaning Cost in Sydney?",
    author: { "@type": "Organization", name: "MLF Professional Services" },
    publisher: { "@type": "Organization", name: "MLF Professional Services" },
    description:
      "A complete pricing guide for house cleaning in Sydney — average rates, what affects cost, and how to save on regular cleans.",
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>How Much Does House Cleaning Cost in Sydney? | 2025 Pricing Guide</title>
        <meta
          name="description"
          content="Find out how much house cleaning costs in Sydney. Average prices, what affects pricing, and tips to save on regular and deep cleaning services."
        />
        <link
          rel="canonical"
          href="https://mlfprofessionalservices.com.au/house-cleaning-cost-sydney"
        />
        <meta property="og:title" content="How Much Does House Cleaning Cost in Sydney?" />
        <meta
          property="og:description"
          content="2025 pricing guide for house cleaning in Sydney — averages, factors, and savings tips."
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
              <DollarSign size={14} /> Sydney Pricing Guide
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              How Much Does <span className="text-gradient-gold">House Cleaning Cost</span> in Sydney?
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Wondering what a professional house clean should cost in Sydney? This 2025 guide breaks down average
              prices, what influences pricing, and how to get the best value from your cleaner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Price table */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              💰 Average <span className="text-gradient-gold">House Cleaning Prices</span> in Sydney
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Indicative pricing ranges — actual quotes depend on your home's condition and scope.
            </p>
          </div>
          <div className="overflow-hidden border border-border rounded-lg bg-card">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-4 font-semibold">Property</th>
                  <th className="text-left p-4 font-semibold">Regular Clean</th>
                  <th className="text-left p-4 font-semibold">Deep Clean</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row) => (
                  <tr key={row.type} className="border-t border-border">
                    <td className="p-4 font-medium">{row.type}</td>
                    <td className="p-4 text-foreground/80">{row.regular}</td>
                    <td className="p-4 text-foreground/80">{row.deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            * Prices are estimates only. Contact us for an accurate quote tailored to your home.
          </p>
        </div>
      </section>

      {/* Factors */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              📊 What <span className="text-gradient-gold">Affects the Price</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four key factors determine how much your Sydney house clean will cost.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {factors.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <f.icon className="text-primary mb-4" size={28} />
                <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              💡 How to <span className="text-gradient-gold">Save Money</span> on House Cleaning
            </h2>
          </div>
          <ul className="space-y-3">
            {tips.map((t) => (
              <li key={t} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-secondary">
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
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            📞 Get Your <span className="text-gradient-gold">Free Quote</span> Today
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Stop guessing the price — get a transparent, no-obligation quote in under 60 seconds.
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

export default HouseCleaningCostSydney;
