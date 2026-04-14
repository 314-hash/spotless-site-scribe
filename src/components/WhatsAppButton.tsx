import { MessageCircle } from "lucide-react";

const PHONE = "61433142450";
const whatsappUrl = `https://wa.me/${PHONE}?text=Hi%20MLF%20Professional%20Services%2C%20I%27d%20like%20to%20enquire%20about%20your%20cleaning%20services.`;

const WhatsAppButton = () => (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform group"
  >
    <MessageCircle size={24} className="fill-white" />
    <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
  </a>
);

export default WhatsAppButton;
