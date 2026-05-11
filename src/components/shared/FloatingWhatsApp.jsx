import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/59175973183?text=Hola%20Hrishi%2C%20me%20interesa%20tomar%20clases%20de%20ingl%C3%A9s.';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}