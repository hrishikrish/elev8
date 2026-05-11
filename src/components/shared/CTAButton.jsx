import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/59175973183?text=Hola%20Hrishi%2C%20me%20interesa%20tomar%20clases%20de%20ingl%C3%A9s.';

export default function CTAButton({ text, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center gap-2.5 font-display font-semibold transition-all duration-300 rounded-full';
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90 px-7 py-3.5 text-base',
    secondary: 'bg-secondary text-secondary-foreground hover:brightness-95 px-7 py-3.5 text-base',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-7 py-3.5 text-base',
    small: 'bg-primary text-primary-foreground hover:opacity-90 px-5 py-2.5 text-sm',
  };

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {text}
    </a>
  );
}