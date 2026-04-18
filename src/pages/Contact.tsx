import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SERVICE_TYPES = [
  "Regular Cleaning",
  "Deep Cleaning",
  "End of Lease Cleaning",
  "Office Cleaning",
  "Carpet Cleaning",
  "Window Cleaning",
  "Other",
];

const PROPERTY_TYPES = ["House", "Apartment", "Office", "Commercial", "Other"];

const FREQUENCIES = ["One-time", "Weekly", "Fortnightly", "Monthly"];

const WHATSAPP_NUMBER = "61433142450";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    propertyType: "",
    propertySize: "",
    preferredDate: "",
    frequency: "",
    address: "",
    message: "",
    newsletter: false,
  });

  const buildWhatsAppMessage = () => {
    const lines = [
      `📋 *New Quote Request*`,
      ``,
      `*Client:* ${form.firstName} ${form.lastName}`,
      `*Email:* ${form.email}`,
      form.phone ? `*Phone:* ${form.phone}` : "",
      ``,
      `*Service:* ${form.serviceType}`,
      form.propertyType ? `*Property:* ${form.propertyType}` : "",
      form.propertySize ? `*Size:* ${form.propertySize}` : "",
      form.preferredDate ? `*Preferred Date:* ${form.preferredDate}` : "",
      form.frequency ? `*Frequency:* ${form.frequency}` : "",
      form.address ? `*Address:* ${form.address}` : "",
      form.message ? `\n*Notes:* ${form.message}` : "",
    ];
    return lines.filter(Boolean).join("\n");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Save to database
      const { error } = await supabase.from("quote_requests").insert({
        full_name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        phone: form.phone || null,
        service_type: form.serviceType,
        property_type: form.propertyType || null,
        property_size: form.propertySize || null,
        preferred_date: form.preferredDate || null,
        frequency: form.frequency || null,
        address: form.address || null,
        message: form.message || null,
        newsletter: form.newsletter,
      });

      if (error) throw error;

      // 2. Send WhatsApp notification
      const whatsappMsg = encodeURIComponent(buildWhatsAppMessage());
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`,
        "_blank"
      );

      // 3. TODO: Email notification (requires email domain setup)
      // Will be wired after email domain is configured

      toast({
        title: "Quote request submitted!",
        description:
          "Your request has been saved. A WhatsApp message has been prepared for you.",
      });

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceType: "",
        propertyType: "",
        propertySize: "",
        preferredDate: "",
        frequency: "",
        address: "",
        message: "",
        newsletter: false,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-input border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring";
  const labelClasses =
    "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5";

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Request a <span className="text-gradient-gold">Quote</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a free quote
            within 24 hours.
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
              MLF{" "}
              <span className="text-gradient-gold">Professional Services</span>
            </h2>
            <p className="text-muted-foreground text-xs mb-6">
              ABN: 65 767 927 637
            </p>

            <div className="space-y-5 text-sm">
              <a
                href="tel:1300038243"
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone size={18} className="text-primary" /> 1300 038 243
              </a>
              <a
                href="mailto:info@mlfprofessionalservices.com.au"
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
              >
                <Mail size={18} className="text-primary" />{" "}
                info@mlfprofessionalservices.com.au
              </a>
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin size={18} className="text-primary" /> Metropolitan
                Sydney
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                <Clock size={16} /> Business Hours
              </h3>
              <div className="space-y-2 text-sm text-foreground/80">
                <div className="flex justify-between max-w-xs">
                  <span>Mon – Fri</span>
                  <span>8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Saturday</span>
                  <span>8:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
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
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  required
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Last Name <span className="text-primary">*</span>
                </label>
                <input
                  required
                  value={form.lastName}
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className={inputClasses}
                  placeholder="+61 4XX XXX XXX"
                />
              </div>
            </div>

            {/* Service & Property */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  Service Type <span className="text-primary">*</span>
                </label>
                <select
                  required
                  value={form.serviceType}
                  onChange={(e) =>
                    setForm({ ...form, serviceType: e.target.value })
                  }
                  className={inputClasses}
                >
                  <option value="">Select a service</option>
                  {SERVICE_TYPES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClasses}>Property Type</label>
                <select
                  value={form.propertyType}
                  onChange={(e) =>
                    setForm({ ...form, propertyType: e.target.value })
                  }
                  className={inputClasses}
                >
                  <option value="">Select property</option>
                  {PROPERTY_TYPES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Size & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Property Size</label>
                <input
                  value={form.propertySize}
                  onChange={(e) =>
                    setForm({ ...form, propertySize: e.target.value })
                  }
                  className={inputClasses}
                  placeholder="e.g. 3-bedroom, 2-bathroom"
                />
              </div>
              <div>
                <label className={labelClasses}>Preferred Date/Time</label>
                <input
                  type="date"
                  value={form.preferredDate}
                  onChange={(e) =>
                    setForm({ ...form, preferredDate: e.target.value })
                  }
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Frequency */}
            <div>
              <label className={labelClasses}>Frequency</label>
              <select
                value={form.frequency}
                onChange={(e) =>
                  setForm({ ...form, frequency: e.target.value })
                }
                className={inputClasses}
              >
                <option value="">Select frequency</option>
                {FREQUENCIES.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Address */}
            <div>
              <label className={labelClasses}>Address</label>
              <input
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
                className={inputClasses}
                placeholder="Full street address"
              />
            </div>

            {/* Message */}
            <div>
              <label className={labelClasses}>Additional Notes</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className={`${inputClasses} resize-none`}
                placeholder="Any special requirements or details..."
              />
            </div>

            {/* Newsletter */}
            <label className="flex items-center gap-2 text-sm text-foreground/70 cursor-pointer">
              <input
                type="checkbox"
                checked={form.newsletter}
                onChange={(e) =>
                  setForm({ ...form, newsletter: e.target.checked })
                }
                className="rounded border-border accent-primary"
              />
              Sign up for news and updates
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold-gradient text-primary-foreground py-3 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {loading ? "Submitting..." : "Request a Quote"}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-2xl font-bold mb-2 text-center">
            We Service <span className="text-gradient-gold">Metropolitan Sydney</span>
          </h2>
          <p className="text-center text-sm text-muted-foreground mb-6">
            Servicing homes and businesses across the greater Sydney region.
          </p>
          <div className="rounded-lg overflow-hidden border border-border aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.10282287!2d150.65178895!3d-33.847927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MLF Professional Services Location"
            />
          </div>
          <p className="text-center mt-4">
            <a
              href="https://maps.app.goo.gl/JaKdA9wBWdKq2FTc7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              View on Google Maps →
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
