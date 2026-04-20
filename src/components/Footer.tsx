import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-heading text-gradient-gold mb-4">MLF Professional Services</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium cleaning services across Metropolitan Sydney. Fully insured, ABN registered, and committed to excellence.
          </p>
          <p className="text-muted-foreground text-xs mt-3">ABN: 65 767 927 637</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Quick Links</h4>
          <div className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "House Cleaning Sydney", path: "/house-cleaning-sydney" },
              { label: "Western Sydney Cleaning", path: "/western-sydney-house-cleaning" },
              { label: "Find Reliable Cleaners", path: "/how-to-find-reliable-cleaners-western-sydney" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a href="tel:1300038243" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> 1300 038 243
            </a>
            <a href="mailto:info@mlfprofessionalservices.com.au" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> info@mlfprofessionalservices.com.au
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} /> Metropolitan Sydney
            </div>
            <a href="https://wa.me/61433142450" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#25D366] transition-colors">
              <MessageCircle size={14} /> WhatsApp: +61 433 142 450
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MLF Professional Services. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
