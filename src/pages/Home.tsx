import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, Clock, Sparkles } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Fully Insured" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Clock, label: "Reliable & Punctual" },
  { icon: Sparkles, label: "Eco-Friendly Options" },
];

const Home = () => {
  return (
    <div>
      {/* Hero with video background */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Text positioned at the bottom so it doesn't cover the video */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4">
          <div className="container mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl"
            >
              Exceptional Cleaning Services{" "}
              <span className="text-gradient-gold">for Your Home & Business</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link
                to="/contact"
                className="bg-gold-gradient text-primary-foreground px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Book a Clean <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="border border-primary text-primary px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wider hover:bg-primary/10 transition-colors"
              >
                Get a Free Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="bg-secondary py-8 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 text-sm text-foreground/80">
                <Icon size={20} className="text-primary" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            From regular house cleaning to commercial offices, we deliver premium results every time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Residential Cleaning", desc: "Weekly, fortnightly, or deep cleaning for a spotless home." },
              { title: "Commercial Cleaning", desc: "Professional office cleaning across Western Sydney." },
              { title: "End-of-Lease", desc: "Bond-back guarantee with real-estate approved standards." },
            ].map((s) => (
              <motion.div
                key={s.title}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg p-8 text-left hover:border-primary/50 transition-colors"
              >
                <Sparkles className="text-primary mb-4" size={28} />
                <h3 className="font-heading text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 mt-12 text-primary font-semibold text-sm uppercase tracking-wider hover:underline"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready for a <span className="text-gradient-gold">Spotless Space</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Get a personalised quote based on your property. Transparent pricing, no hidden fees.
          </p>
          <Link
            to="/contact"
            className="bg-gold-gradient text-primary-foreground px-10 py-4 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
