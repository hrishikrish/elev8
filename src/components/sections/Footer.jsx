import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { MessageCircle, Linkedin } from 'lucide-react';

const links = [
  { label: 'home', href: '#hero' },
  { label: 'pricing', href: '#pricing' },
  { label: 'payment', href: '#payment' },
  { label: 'contact', href: '#contact' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <h3 className="font-display font-bold text-2xl mb-2">Elev8 by Hrishi</h3>
            <p className="font-body text-sm opacity-70">{t('footer.tagline')}</p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {t(`nav.${link.label}`)}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} Elev8 by Hrishi
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/59175973183"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/hrishikesh-krishnakumar-66b51216b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}