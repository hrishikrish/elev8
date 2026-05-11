import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, MapPin, Linkedin } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/59175973183';

export default function Contact() {
  const { t } = useLanguage();
  const levels = t('contact.levels');
  const [form, setForm] = useState({
    name: '', country: '', email: '', whatsapp: '', level: '', goals: '', message: '',
  });

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola Hrishi!\n\nNombre: ${form.name}\nPaís: ${form.country}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nNivel: ${form.level}\nObjetivos: ${form.goals}\nMensaje: ${form.message}`
    );
    window.open(`${WHATSAPP_LINK}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground mb-3">
            {t('contact.headline')}
          </h2>
          <p className="font-body text-base text-muted-foreground">
            {t('contact.sub')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <a
              href={`${WHATSAPP_LINK}?text=Hola%20Hrishi%2C%20me%20interesa%20tomar%20clases%20de%20ingl%C3%A9s.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-5 mb-6 hover:bg-[#25D366]/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">WhatsApp</p>
                <p className="font-body text-sm text-muted-foreground">+591 75973183</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/hrishikesh-krishnakumar-66b51216b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#0A66C2]/10 border border-[#0A66C2]/20 rounded-2xl p-5 mb-6 hover:bg-[#0A66C2]/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">LinkedIn</p>
                <p className="font-body text-sm text-muted-foreground">Hrishikesh Krishnakumar</p>
              </div>
            </a>

            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Santa Cruz, Bolivia
              </p>
            </div>

            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {t('contact.availability')}
            </p>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border/30 rounded-2xl p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="font-body text-sm">{t('contact.form.name')}</Label>
                  <Input
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="font-body text-sm">{t('contact.form.country')}</Label>
                  <Input
                    value={form.country}
                    onChange={e => handleChange('country', e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="font-body text-sm">{t('contact.form.email')}</Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="font-body text-sm">{t('contact.form.whatsapp')}</Label>
                  <Input
                    value={form.whatsapp}
                    onChange={e => handleChange('whatsapp', e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="font-body text-sm">{t('contact.form.level')}</Label>
                  <Select value={form.level} onValueChange={v => handleChange('level', v)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.isArray(levels) && levels.map(l => (
                        <SelectItem key={l} value={l}>{l}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="font-body text-sm">{t('contact.form.goals')}</Label>
                  <Input
                    value={form.goals}
                    onChange={e => handleChange('goals', e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="font-body text-sm">{t('contact.form.message')}</Label>
                <Textarea
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  rows={3}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full font-display font-semibold text-base h-12 rounded-xl gap-2"
              >
                <Send className="w-4 h-4" />
                {t('contact.form.submit')}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}