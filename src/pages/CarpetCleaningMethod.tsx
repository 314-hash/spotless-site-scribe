import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Wind,
  Sparkles,
  ShieldCheck,
  Phone,
  Home,
  Building,
  Hotel,
  School,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Briefcase,
  Search,
  Flame,
  SprayCan,
  Clock,
} from "lucide-react";
import commercialVideo from "@/assets/commercial-steam-transit.mp4.asset.json";
import terminatorImage from "@/assets/terminator-plus.jpeg.asset.json";
import mlfServiceVideo from "@/assets/mlf-cleaning-service.mp4.asset.json";
import newMethodVideo from "@/assets/new-cleaning-method.mp4.asset.json";

const benefits = [
  {
    icon: Droplets,
    title: "Deep Steam Cleaning Technology",
    description: "Removes dirt trapped deep within carpet fibres — not just surface debris.",
  },
  {
    icon: Flame,
    title: "Powerful Hot Water Extraction",
    description: "Professional equipment extracts embedded soil, contaminants, and excess moisture for a thorough clean.",
  },
  {
    icon: SprayCan,
    title: "Stain & Odour Treatment",
    description: "Helps tackle common stains while reducing unpleasant odours, leaving carpets looking and smelling fresher.",
  },
  {
    icon: Wind,
    title: "Healthier Indoor Environment",
    description: "By removing dust, allergens, and other contaminants, deep cleaning can contribute to improved indoor hygiene.",
  },
  {
    icon: Clock,
    title: "Faster Drying Performance",
    description: "Our professional extraction system removes more moisture than basic cleaning methods, helping carpets dry more efficiently.",
  },
];

const idealFor = [
  { icon: Home, label: "Residential Homes" },
  { icon: Building, label: "Offices & Workspaces" },
  { icon: Hotel, label: "Hotels & Accommodation" },
  { icon: School, label: "Schools & Childcare Centres" },
  { icon: Stethoscope, label: "Medical & Healthcare Facilities" },
  { icon: UtensilsCrossed, label: "Restaurants & Hospitality" },
  { icon: Warehouse, label: "Commercial Buildings" },
  { icon: Briefcase, label: "Property Managers & Real Estate" },
];

const processSteps = [
  { title: "Detailed Carpet Inspection", description: "We assess fibre type, condition, and any problem areas before cleaning." },
  { title: "Fibre Assessment", description: "Identifying the safest and most effective cleaning approach for your carpet." },
  { title: "Pre-Treatment for High-Traffic Areas", description: "Targeted application to loosen stubborn soil and stains." },
  { title: "Deep Steam Cleaning", description: "Advanced hot water extraction penetrates deep into carpet fibres." },
  { title: "Powerful Hot Water Extraction", description: "Soil, moisture, and contaminants are removed in one continuous process." },
  { title: "Spot & Stain Treatment", description: "Specialist attention for remaining marks and discolouration." },
  { title: "Deodorising", description: "Leaves carpets smelling fresh and clean." },
  { title: "Final Grooming & Quality Inspection", description: "Every clean is finished with a quality check for consistency." },
];

const mlfDifference = [
  "Professional-Grade Equipment",
  "Experienced Cleaning Specialists",
  "Residential & Commercial Services",
  "Attention to Detail",
  "Reliable & Friendly Service",
  "Modern Deep Steam Cleaning Technology",
];

const faqs = [
  {
    q: "What is deep steam carpet cleaning?",
    a: "Deep steam carpet cleaning uses hot water extraction to penetrate carpet fibres, removing embedded dirt, allergens, bacteria, stains, and odours that regular vacuuming cannot reach.",
  },
  {
    q: "Is hot water extraction safe for all carpets?",
    a: "Our trained technicians assess carpet fibre and condition before cleaning. Most synthetic and wool carpets can be safely cleaned with professional hot water extraction when performed correctly.",
  },
  {
    q: "How long do carpets take to dry?",
    a: "Drying times vary depending on carpet type, humidity, and airflow. Our extraction system removes more moisture than basic methods, typically allowing carpets to dry within 4–8 hours.",
  },
  {
    q: "Can deep steam cleaning remove pet stains and odours?",
    a: "It can significantly reduce or eliminate many common pet stains and odours. Severe or older stains may require additional specialist treatment.",
  },
  {
    q: "Do you clean carpets in offices and commercial properties?",
    a: "Yes. We service offices, hotels, schools, medical facilities, restaurants, and commercial buildings across Metropolitan Sydney.",
  },
];

const CarpetCleaningMethod = () => {
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
    "@type": "Service",
    name: "Deep Steam Carpet Cleaning Sydney",
    provider: {
      "@type": "LocalBusiness",
      name: "MLF Professional Services",
      telephone: "+611300038243",
      url: "https://mlfprofessionalservices.com.au",
    },
    areaServed: { "@type": "City", name: "Sydney" },
    description:
      "Professional deep steam carpet cleaning using hot water extraction. Residential and commercial carpet cleaning across Sydney.",
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>Deep Steam Carpet Cleaning Sydney | MLF Professional Services</title>
        <meta
          name="description"
          content="Introducing our new Deep Steam Carpet Cleaning Method in Sydney. Hot water extraction removes deep dirt, stains, and allergens. Residential & commercial. Free quote."
        />
        <link rel="canonical" href="https://mlfprofessionalservices.com.au/deep-steam-carpet-cleaning-sydney" />
        <meta property="og:title" content="Deep Steam Carpet Cleaning Sydney | MLF Professional Services" />
        <meta
          property="og:description"
          content="New Deep Steam Carpet Cleaning Method powered by Polivac Terminator Plus. Professional hot water extraction for homes and businesses across Sydney."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      </Helmet>

      {/* Hero with video background */}
      <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={commercialVideo.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-4">
                <Sparkles size={14} /> New Cleaning Method
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Introducing Our New{" "}
                <span className="text-gradient-gold">Deep Steam Carpet Cleaning</span> Method
              </h1>
              <p className="text-lg text-foreground/80 mb-6">
                A New Standard in Professional Carpet Cleaning
              </p>
              <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed">
                Powered by the Polivac Terminator Plus, our advanced hot water extraction system
                penetrates deep into carpet fibres to remove embedded dirt, allergens, bacteria,
                stains, and odours that regular vacuuming and surface cleaning simply cannot reach.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-gold-gradient text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  Book a Clean <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:1300038243"
                  className="border border-border bg-card/80 backdrop-blur-sm px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:border-primary/50 transition-colors inline-flex items-center gap-2"
                >
                  <Phone size={16} /> 1300 038 243
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Search className="text-primary mx-auto mb-4" size={32} />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              A Deeper, Healthier, More Effective Clean
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need to refresh your family home, maintain a busy office, or restore carpets
              in hospitality or commercial spaces, our new cleaning process is designed to deliver
              exceptional results while helping extend the life and appearance of your carpets.
              Professional hot water extraction is widely recognised as an effective method for removing
              deep-seated contaminants from carpets when performed correctly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our New <span className="text-gradient-gold">Cleaning Method</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets experienced technique for results you can see and feel.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <b.icon className="text-primary mb-4" size={32} />
                <h3 className="font-heading text-xl font-semibold mb-3">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminator Plus Showcase */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-3">
              <Sparkles size={14} /> Powered By
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              The <span className="text-gradient-gold">Polivac Terminator Plus</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Commercial-grade deep steam cleaning machine — built for professionals, engineered for results.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border shadow-2xl"
          >
            <img
              src={terminatorImage.url}
              alt="Polivac Terminator Plus professional deep steam carpet cleaning machine used by MLF Professional Services"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              See The <span className="text-gradient-gold">Method In Action</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch our new Deep Steam Carpet Cleaning process delivering professional results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden border border-border bg-card">
              <video controls playsInline preload="metadata" className="w-full h-auto">
                <source src={newMethodVideo.url} type="video/mp4" />
              </video>
              <div className="p-4">
                <h3 className="font-heading font-semibold">Introducing Our New Cleaning Method</h3>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border bg-card">
              <video controls playsInline preload="metadata" className="w-full h-auto">
                <source src={mlfServiceVideo.url} type="video/mp4" />
              </video>
              <div className="p-4">
                <h3 className="font-heading font-semibold">MLF Professional Cleaning Services</h3>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Ideal For */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ideal <span className="text-gradient-gold">For</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored carpet cleaning solutions for every kind of property.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {idealFor.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors"
              >
                <item.icon className="text-primary mb-3" size={28} />
                <span className="text-sm font-medium text-foreground/80">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Professional <span className="text-gradient-gold">Cleaning Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A thorough, step-by-step approach designed for consistent, premium results.
            </p>
          </div>
          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MLF Difference */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <ShieldCheck className="text-primary mx-auto mb-4" size={40} />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              The MLF <span className="text-gradient-gold">Difference</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Why property owners across Sydney choose MLF Professional Services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {mlfDifference.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
              >
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Experience a <span className="text-gradient-gold">Deeper Clean</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Don't settle for surface cleaning.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Experience the next generation of carpet care with MLF Professional Services' New Deep
            Steam Carpet Cleaning Method. Restore freshness, improve cleanliness, and give your carpets
            the professional treatment they deserve.
          </p>
          <Link
            to="/contact"
            className="bg-gold-gradient text-primary-foreground px-10 py-4 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Book Your Professional Carpet Cleaning <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="font-medium mb-2">{f.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Book Your Professional Carpet Cleaning Today
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            MLF Professional Services — New Deep Steam Carpet Cleaning Method, powered by the Polivac
            Terminator Plus.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
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
          <p className="text-sm text-muted-foreground">
            Visit: <a href="https://mlfprofessionalservices.com.au" className="text-primary hover:underline">mlfprofessionalservices.com.au</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default CarpetCleaningMethod;
