import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Home as HomeIcon,
  Clock,
  ShieldCheck,
  Phone,
  MapPin,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import cleaningHome from "@/assets/cleaning-home.webp";
import cleaningVacuum from "@/assets/cleaning-vacuum.webp";
import cleaningTeam from "@/assets/cleaning-team.webp";

const trustPoints = [
  "Fully insured and trained cleaners",
  "Flexible scheduling (weekly, fortnightly, monthly)",
  "Eco-friendly cleaning products available",
  "100% satisfaction guarantee",
];

const regularIncludes = [
  "Dusting all surfaces",
  "Vacuuming carpets and rugs",
  "Mopping floors",
  "Kitchen cleaning (benches, sink, exterior appliances)",
  "Bathroom cleaning (toilets, showers, mirrors)",
];

const deepIncludes = [
  "Inside appliances (oven, fridge on request)",
  "Skirting boards & detailed dusting",
  "Tile grout cleaning",
  "Spring cleaning",
  "Post-renovation cleaning",
  "Before/after events",
];

const suburbs = [
  "Parramatta",
  "Blacktown",
  "Liverpool",
  "Penrith",
  "Inner West",
  "Eastern Suburbs",
  "North Shore",
  "Hills District",
];

const reasons = [
  "Experienced & background-checked cleaners",
  "Consistent, high-quality results",
  "Friendly and professional service",
  "Easy online booking",
  "Satisfaction guaranteed or we re-clean",
];

const faqs = [
  {
    q: "How much does house cleaning in Sydney cost?",
    a: "Prices vary depending on the size of your home and type of service. Contact us for an accurate, free quote — no hidden fees.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No, many clients provide access instructions. Our cleaners are fully trusted, background-checked and insured.",
  },
  {
    q: "What cleaning products do you use?",
    a: "We use high-quality professional products, with eco-friendly and pet-safe options available upon request.",
  },
  {
    q: "How long does a cleaning service take?",
    a: "Typically 2–5 hours depending on the size and condition of your home.",
  },
];

const services = [
  {
    icon: HomeIcon,
    title: "Regular House Cleaning",
    description:
      "Keep your home consistently clean with scheduled visits. Perfect for busy households.",
    items: regularIncludes,
    image: cleaningHome,
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "A thorough, top-to-bottom clean for homes that need extra attention. Includes everything in regular cleaning plus:",
    items: deepIncludes,
    image: cleaningVacuum,
  },
  {
    icon: Clock,
    title: "One-Off Cleaning",
    description:
      "Need a quick refresh? Our one-time cleaning service is perfect when you need immediate results without ongoing commitment.",
    items: [
      "No long-term commitment",
      "Same-week availability",
      "Move-in / move-out ready",
      "Pre/post-event cleaning",
    ],
    image: cleaningTeam,
  },
];

const HouseCleaningSydney = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MLF Professional Services",
    image: "https://mlfprofessionalservices.com.au/og-image.jpg",
    telephone: "+611300038243",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    areaServed: "Metropolitan Sydney",
    priceRange: "$$",
    description:
      "Professional house cleaning services across Sydney — regular, deep and one-off cleaning by trained, insured cleaners.",
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>House Cleaning Sydney | Professional Home Cleaning Services</title>
        <meta
          name="description"
          content="Reliable house cleaning in Sydney. Trained, insured cleaners for regular, deep & one-off home cleans. Eco-friendly options. Free quote in 60 seconds."
        />
        <link
          rel="canonical"
          href="https://mlfprofessionalservices.com.au/house-cleaning-sydney"
        />
        <meta property="og:title" content="House Cleaning Sydney | MLF Professional Services" />
        <meta
          property="og:description"
          content="Professional, affordable house cleaning across Sydney. Regular, deep and one-off cleans with a 100% satisfaction guarantee."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
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
              <Sparkles size={14} /> Sydney's Trusted Cleaners
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              House Cleaning <span className="text-gradient-gold">Sydney</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-4">
              🧼 Reliable House Cleaning Services in Sydney
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Looking for professional house cleaning in Sydney you can trust? We provide
              high-quality, reliable, and affordable cleaning services tailored to your home and
              lifestyle. Whether you need a regular clean, deep cleaning, or a one-off service,
              our experienced cleaners ensure your home is spotless, fresh, and hygienic.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left mb-10">
              {trustPoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gold-gradient text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <a
                href="tel:1300038243"
                className="border border-border bg-card px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:border-primary/50 transition-colors inline-flex items-center gap-2"
              >
                <Phone size={16} /> 1300 038 243
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              🏡 Our House Cleaning <span className="text-gradient-gold">Services in Sydney</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the service that suits your home and schedule.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors`}
              >
                <div className="md:w-2/5 h-64 md:h-auto">
                  <img
                    src={s.image}
                    alt={`${s.title} in Sydney`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <s.icon className="text-primary mb-4" size={32} />
                  <h3 className="font-heading text-2xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {s.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="text-primary mt-0.5">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <MapPin className="text-primary mx-auto mb-4" size={32} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            📍 Areas We <span className="text-gradient-gold">Service in Sydney</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            We proudly provide house cleaning services across all major Sydney suburbs. Searching
            for "house cleaning near me in Sydney"? We've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {suburbs.map((s) => (
              <span
                key={s}
                className="border border-border bg-card text-sm px-5 py-2.5 rounded-full text-foreground/80"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            💰 Affordable <span className="text-gradient-gold">House Cleaning Prices</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We offer transparent, competitive pricing based on your home size and cleaning needs.
            Get a fast, free quote today — no hidden fees. Call now or request a quote online in
            under 60 seconds.
          </p>
          <Link
            to="/contact"
            className="bg-gold-gradient text-primary-foreground px-10 py-4 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Request a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Star className="text-primary mx-auto mb-4" size={32} />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              ⭐ Why Choose Us for{" "}
              <span className="text-gradient-gold">House Cleaning in Sydney</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choosing the right cleaning company matters. Here's why Sydney homeowners trust us.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {reasons.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
              >
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <ShieldCheck className="text-primary mx-auto mb-4" size={40} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            🔒 100% <span className="text-gradient-gold">Satisfaction Guarantee</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We stand behind our work. If you're not completely satisfied, we'll come back and fix
            it — no questions asked.
          </p>
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

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            📞 Book Your <span className="text-gradient-gold">House Cleaning</span> in Sydney Today
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Ready to enjoy a cleaner, healthier home? Book your cleaning in minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:1300038243"
              className="bg-gold-gradient text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Phone size={16} /> Call Now
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

export default HouseCleaningSydney;
