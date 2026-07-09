import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Plane, MapPin, Clock, ShieldCheck, Phone, ArrowRight, CheckCircle2, Car } from "lucide-react";
import airportImage from "@/assets/airport-transfers-hero.jpg.asset.json";

const features = [
  { icon: Plane, title: "Airport Pickup & Drop-off", desc: "Reliable transfers to and from Sydney Airport, day or night." },
  { icon: MapPin, title: "Sydney Metro Coverage", desc: "Servicing all Metropolitan Sydney suburbs door-to-door." },
  { icon: Clock, title: "24/7 Availability", desc: "Early flights, late arrivals — we operate around the clock." },
  { icon: ShieldCheck, title: "Reliable & Comfortable", desc: "Clean, professional vehicles with punctual, trusted drivers." },
];

const AirportTransfersSydney = () => (
  <div>
    <Helmet>
      <title>Airport Transfers Sydney — 24/7 Metro Service | MLF Professional</title>
      <meta
        name="description"
        content="24/7 Sydney Metro airport transfers by MLF Professional Services. Reliable, comfortable pickups and drop-offs to and from Sydney Airport."
      />
      <link rel="canonical" href="https://spotless-site-scribe.lovable.app/airport-transfers-sydney" />
      <meta property="og:title" content="Airport Transfers Sydney — 24/7 Metro Service" />
      <meta
        property="og:description"
        content="Reliable 24/7 airport transfers across Sydney Metro. Book with MLF Professional Services."
      />
      <meta property="og:url" content="https://spotless-site-scribe.lovable.app/airport-transfers-sydney" />
      <meta property="og:image" content={airportImage.url} />
    </Helmet>

    {/* Hero */}
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">New Service</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mt-4 mb-6">
            Airport Transfers <span className="text-gradient-gold">Available</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sydney Metro • 24/7 Service • Reliable & Comfortable transfers to and from Sydney Airport.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden border border-border shadow-2xl"
        >
          <img
            src={airportImage.url}
            alt="MLF Professional Services Airport Transfers — Sydney Metro, 24/7 Service"
            className="w-full h-auto"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our <span className="text-gradient-gold">Airport Transfers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're catching an early flight or returning home late, we make Sydney Airport travel effortless.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="text-primary" size={22} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Details */}
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-heading text-3xl font-bold mb-6">
            Sydney Metro <span className="text-gradient-gold">Coverage</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We provide door-to-door airport transfer services across the greater Sydney Metropolitan area — including
            the CBD, Eastern Suburbs, Inner West, Western Sydney, North Shore, and Sutherland Shire.
          </p>
          <ul className="space-y-3">
            {[
              "Sydney Kingsford Smith Airport (SYD) — all terminals",
              "Hotel, home & office pickups",
              "Flight tracking for on-time arrivals",
              "Luggage assistance included",
              "Fixed, transparent pricing",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <Car className="text-primary mb-4" size={32} />
          <h3 className="font-heading text-2xl font-bold mb-3">Book Your Transfer</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Available 24 hours a day, 7 days a week. Call or message us to reserve your airport transfer today.
          </p>
          <div className="space-y-3">
            <a
              href="tel:0433142450"
              className="w-full bg-gold-gradient text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Call 0433 142 450
            </a>
            <Link
              to="/contact"
              className="w-full border border-primary text-primary px-6 py-3 rounded-md font-semibold text-sm uppercase tracking-wider hover:bg-primary/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Fly Stress-Free with <span className="text-gradient-gold">MLF</span>
        </h2>
        <p className="text-muted-foreground mb-8">
          Punctual, comfortable, and reliable airport transfers across Sydney Metro — 24/7.
        </p>
        <Link
          to="/contact"
          className="bg-gold-gradient text-primary-foreground px-10 py-4 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
        >
          Book Now <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </div>
);

export default AirportTransfersSydney;
