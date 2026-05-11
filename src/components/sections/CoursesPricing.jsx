import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import CTAButton from '@/components/shared/CTAButton';
import { motion } from 'framer-motion';
import { Clock, CalendarDays, Zap } from 'lucide-react';

const icons = [Clock, CalendarDays, Zap];
const cardKeys = ['single', 'weekly', 'intensive'];

export default function CoursesPricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            {t('pricing.headline')}
          </h2>
          <p className="font-body text-base opacity-70 max-w-md mx-auto">
            {t('pricing.note')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cardKeys.map((key, idx) => {
            const Icon = icons[idx];
            const items = t(`pricing.${key}.items`);
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl p-8 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/15 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-6">
                  {t(`pricing.${key}.title`)}
                </h3>
                <div className="space-y-3 flex-1 mb-8">
                  {Array.isArray(items) && items.map((item, i) => (
                    <div
                      key={i}
                      className="font-body text-sm opacity-80 py-2.5 border-b border-primary-foreground/10 last:border-0"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <CTAButton text={t('pricing.cta')} variant="outline" className="w-full justify-center border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}