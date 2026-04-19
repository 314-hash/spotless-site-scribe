import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Sofa,
  ChefHat,
  Bath,
  MapPin,
  Clock,
  Leaf,
  DollarSign,
  Phone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMusic } from "@/contexts/MusicContext";
import hookVideo from "@/assets/western-sydney-hook.mp4";

const reasons = [
  "Trusted local cleaning professionals",
  "Flexible weekly, fortnightly, or monthly cleaning",
  "Same-day cleaning service available",
  "Eco-friendly cleaning products",
  "Consistent and reliable results",
];

const includes = [
  {
    icon: Sofa,
    title: "Living Areas & Bedrooms",
    items: ["Dusting surfaces and furniture", "Vacuuming carpets and rugs", "Mopping hard floors"],
  },
  {
    icon: ChefHat,
    title: "Kitchen Cleaning",
    items: ["Wiping benchtops and surfaces", "Cleaning sinks and appliances (external)", "Removing grease and buildup"],
  },
  {
    icon: Bath,
    title: "Bathroom Cleaning",
    items: ["Toilet, shower, and sink cleaning", "Mirror polishing", "Sanitizing high-touch areas"],
  },
];

const suburbs = ["Schofields", "Tallawong", "Kellyville", "Melonba", "Plumpton", "Rooty Hill"];

const faqs = [
  {
    q: "How much does house cleaning cost in Western Sydney?",
    a: "Prices vary depending on property size, condition, and frequency. Contact us for an accurate quote.",
  },
  { q: "Do you offer regular cleaning schedules?", a: "Yes, we provide weekly, fortnightly, and monthly cleaning options." },
  { q: "Can I book same-day cleaning?", a: "Yes, same-day service is available depending on availability." },
  { q: "Do I need to provide cleaning supplies?", a: "No, our team brings all necessary equipment and products." },
];

const WesternSydneyHouseCleaning = () => {
  const { pauseMusic, resumeMusic } = useMusic();
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
    telephone: "+611300038243",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Western Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    areaServed: "Western Sydney",
    priceRange: "$$",
    description:
      "Professional house cleaning across Western Sydney — same-day service, eco-friendly products, fully insured local cleaners.",
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>Western Sydney House Cleaning | Reliable Local Cleaners | MLF Professional Services</title>
        <meta
          name="description"
          content="Professional house cleaning in Western Sydney. Reliable, affordable, and same-day cleaning available. Book your local cleaners today."
        />
        <link rel="canonical" href="https://mlfprofessionalservices.com.au/western-sydney-house-cleaning" />
        <meta property="og:title" content="Western Sydney House Cleaning | MLF Professional Services" />
        <meta
          property="og:description"
          content="Reliable local cleaners across Western Sydney — Schofields, Tallawong, Kellyville, Melonba, Plumpton, Rooty Hill. Same-day service available."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-4">
              <Sparkles size={14} /> Western Sydney Local Cleaners
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Western Sydney <span className="text-gradient-gold">House Cleaning</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Looking for dependable house cleaning in Western Sydney? MLF Professional Services delivers professional,
              high-quality cleaning tailored to busy households across the region. Whether you need regular cleaning or
              a one-off service, our team ensures your home stays clean, fresh, and stress-free.
            </p>

            {/* Video */}
            <div className="relative max-w-3xl mx-auto mb-10 rounded-lg overflow-hidden border border-border bg-card shadow-2xl">
              <video
                ref={videoRef}
                src={hookVideo}
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto"
                onPlay={pauseMusic}
                onPause={resumeMusic}
                onEnded={resumeMusic}
              />
            </div>

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

      {/* Why choose us */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              ✅ Why Choose Our <span className="text-gradient-gold">Western Sydney Cleaning</span> Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on delivering a cleaning service you can rely on every time.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              🧽 What's Included in Our <span className="text-gradient-gold">House Cleaning</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our regular house cleaning service covers all essential areas of your home.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {includes.map((block, i) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <block.icon className="text-primary mb-4" size={32} />
                <h3 className="font-heading text-xl font-semibold mb-4">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
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

      {/* Areas */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <MapPin className="text-primary mx-auto mb-4" size={32} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            📍 Areas We <span className="text-gradient-gold">Service</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            We provide house cleaning across Western Sydney and surrounding suburbs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {suburbs.map((s) => (
              <span key={s} className="border border-border bg-card text-sm px-5 py-2.5 rounded-full text-foreground/80">
                {s}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-6">We also service surrounding suburbs and nearby communities.</p>
        </div>
      </section>

      {/* Same-day & Eco */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-8">
            <Clock className="text-primary mb-4" size={32} />
            <h3 className="font-heading text-2xl font-semibold mb-3">⏱️ Same-Day House Cleaning</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Need urgent help? Our same-day house cleaning in Western Sydney is perfect for last-minute cleaning needs.
              We respond quickly and deliver efficient, high-quality results.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <Leaf className="text-primary mb-4" size={32} />
            <h3 className="font-heading text-2xl font-semibold mb-3">🌱 Eco-Friendly Cleaning</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We use eco-friendly cleaning products that are safe for your home, your family, and the environment —
              without compromising performance.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <DollarSign className="text-primary mx-auto mb-4" size={40} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            💰 Affordable <span className="text-gradient-gold">House Cleaning</span> in Western Sydney
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We offer competitive pricing tailored to your home size and cleaning requirements. Contact us today for a
            free quote and transparent pricing.
          </p>
          <Link
            to="/contact"
            className="bg-gold-gradient text-primary-foreground px-10 py-4 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Request a Free Quote <ArrowRight size={16} />
          </Link>
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

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            📞 Book Your <span className="text-gradient-gold">Western Sydney</span> House Cleaning Today
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Stop searching for "Western Sydney house cleaning." MLF Professional Services is ready to help.
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

export default WesternSydneyHouseCleaning;
