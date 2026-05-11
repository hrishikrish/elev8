import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import CTAButton from '@/components/shared/CTAButton';
import { motion } from 'framer-motion';
import { QrCode, CreditCard, DollarSign, Coins } from 'lucide-react';

const methods = [
  {
    key: 'qr',
    icon: QrCode,
    detail: 'Bolivia',
    link: null,
  },
  {
    key: 'wise',
    icon: CreditCard,
    detail: 'wise.com/pay/me/hrishikeshk66',
    link: 'https://wise.com/pay/me/hrishikeshk66',
  },
  {
    key: 'paypal',
    icon: DollarSign,
    detail: 'paypal.me/HrishiKrishnakumar',
    link: 'https://www.paypal.me/HrishiKrishnakumar',
  },
  {
    key: 'usdt',
    icon: Coins,
    detail: 'BEP-20 / Arbitrum',
    link: null,
    wallet: '0x8F6591cFf9998d672d87b7a7168c86e33D091a79',
  },
];

export default function Payment() {
  const { t } = useLanguage();

  return (
    <section id="payment" className="py-24 md:py-32 bg-card">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
            {t('payment.headline')}
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-lg mx-auto">
            {t('payment.instruction')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {methods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-background border border-border/30 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary mx-auto flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-base mb-2">
                  {t(`payment.methods.${method.key}`)}
                </h3>
                {method.link ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors break-all"
                  >
                    {method.detail}
                  </a>
                ) : method.wallet ? (
                  <p className="font-body text-xs text-muted-foreground break-all leading-relaxed">
                    {method.detail}
                    <br />
                    <span className="text-[10px] opacity-70 mt-1 block">{method.wallet}</span>
                  </p>
                ) : (
                  <p className="font-body text-xs text-muted-foreground">{method.detail}</p>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <CTAButton text={t('about.cta')} variant="primary" />
        </div>
      </div>
    </section>
  );
}