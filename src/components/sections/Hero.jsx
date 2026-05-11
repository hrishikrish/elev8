import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import CTAButton from '@/components/shared/CTAButton';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <p className="font-body text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Elev8 by Hrishi
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-foreground mb-6">
              {t('hero.headline')}
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
              {t('hero.sub')}
            </p>
            <CTAButton text={t('hero.cta')} variant="primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/50 rounded-3xl blur-2xl" />
              <img
                src="/images/hero.jpg"
                alt="English teacher Hrishi in a modern teaching setup"
                className="relative w-full rounded-2xl object-cover aspect-[4/3] shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative shape */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}