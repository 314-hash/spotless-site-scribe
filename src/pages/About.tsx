import { motion } from "framer-motion";
import { Shield, Star, Leaf, DollarSign, Clock, CheckCircle, Award } from "lucide-react";
import ownerImage from "@/assets/mlf-owner.webp";

const values = [
  { icon: Shield, label: "Fully insured and ABN registered" },
  { icon: CheckCircle, label: "Police‑checked, trusted cleaners" },
  { icon: Award, label: "High‑quality products & professional equipment" },
  { icon: Leaf, label: "Eco‑friendly cleaning options available" },
  { icon: DollarSign, label: "Affordable, transparent pricing — no hidden fees" },
  { icon: Clock, label: "Reliable, punctual, and detail‑focused service" },
  { icon: Star, label: "100% satisfaction guarantee on every clean" },
];

const About = () => (
  <div className="pt-20">
    <section className="py-24 px-4 bg-secondary">
      <div className="container mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
          Who <span className="text-gradient-gold">We Are</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Dedicated to delivering a premium cleaning experience built on trust, professionalism, and exceptional attention to detail.
        </p>
      </div>
    </section>

    {/* Owner section with image */}
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-2/5 shrink-0"
          >
            <div className="relative rounded-lg overflow-hidden shadow-gold">
              <img src={ownerImage} alt="MLF Professional Services founder" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-3/5 space-y-6 text-foreground/80 text-sm leading-relaxed"
          >
            <p>
              At MLF Professional Services, we believe every home and business deserves a space that feels fresh, organised, and truly cared for — and we take pride in creating that experience for our clients across Western Sydney.
            </p>
            <p>
              We specialise in high‑quality residential, commercial, and end‑of‑lease cleaning, with every service carried out with precision, respect, and a commitment to excellence. Our team is trained to notice the details others overlook, ensuring every clean reflects the highest standard of quality.
            </p>
            <p>
              At MLF Professional Services, we don't just clean — we elevate your space. Our goal is to provide a seamless, stress‑free experience that leaves your home or business looking immaculate and feeling refreshed, every time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          What Sets Us <span className="text-gradient-gold">Apart</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-start gap-4 bg-card border border-border rounded-lg p-5"
            >
              <Icon className="text-primary shrink-0 mt-0.5" size={22} />
              <span className="text-sm text-foreground/80">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
