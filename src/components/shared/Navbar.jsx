import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const langLabels = { es: 'ES', pt: 'PT', en: 'EN' };

const navLinks = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'pricing', href: '#pricing' },
  { key: 'why', href: '#why' },
  { key: 'payment', href: '#payment' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground">
          Elev8
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-body font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              <Globe className="w-4 h-4" />
              {langLabels[lang]}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLang('es')}>Español</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang('pt')}>Português</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang('en')}>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
              <Globe className="w-4 h-4" />
              {langLabels[lang]}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLang('es')}>Español</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang('pt')}>Português</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang('en')}>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border/30 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="block text-base font-body font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}