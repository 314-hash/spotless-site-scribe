import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "", newsletter: false });
  };

  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reach out for a free quote or any enquiries. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl font-bold mb-6">
              MLF <span className="text-gradient-gold">Professional Services</span>
            </h2>
            <p className="text-muted-foreground text-xs mb-6">ABN: 65 767 927 637</p>

            <div className="space-y-5 text-sm">
              <a href="tel:1300038243" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                <Phone size={18} className="text-primary" /> 1300 038 243
              </a>
              <a href="mailto:info@mlfprofessionalservices.com.au" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                <Mail size={18} className="text-primary" /> info@mlfprofessionalservices.com.au
              </a>
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin size={18} className="text-primary" /> Metropolitan Sydney
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                <Clock size={16} /> Business Hours
              </h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <div className="flex justify-between max-w-xs">
                  <span>Mon – Fri</span><span>8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Saturday</span><span>8:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Sunday</span><span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  required
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full bg-input border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
                  Last Name <span className="text-primary">*</span>
                </label>
                <input
                  required
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className="w-full bg-input border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-input border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-foreground/70 cursor-pointer">
              <input
                type="checkbox"
                checked={form.newsletter}
                onChange={(e) => setForm({ ...form, newsletter: e.target.checked })}
                className="rounded border-border accent-primary"
              />
              Sign up for news and updates
            </label>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
                Subject <span className="text-primary">*</span>
              </label>
              <input
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-input border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-input border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold-gradient text-primary-foreground py-3 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
