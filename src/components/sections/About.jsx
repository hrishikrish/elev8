import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import CTAButton from '@/components/shared/CTAButton';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();
  const items = t('about.items');

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-accent/40 rounded-3xl blur-xl" />
              <img
                src="/images/about.jpg"
                alt="Language learning materials"
                className="relative w-full rounded-2xl object-cover aspect-[3/2]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-8">
              {t('about.headline')}
            </h2>
            <div className="space-y-4 mb-8">
              {Array.isArray(items) && items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-foreground" />
                  </div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <CTAButton text={t('about.cta')} variant="secondary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}