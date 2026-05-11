import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Award, Languages, Briefcase, MapPin, Wifi } from 'lucide-react';

const featureIcons = [Award, Languages, Briefcase, MapPin, Wifi];

export default function WhyChoose() {
  const { t } = useLanguage();
  const features = t('why.features');

  return (
    <section id="why" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-center mb-16"
        >
          {t('why.headline')}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(features) && features.map((feature, idx) => {
            const Icon = featureIcons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-card border border-border/30 rounded-2xl p-7 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}