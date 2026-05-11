import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  nav: {
    home: { es: 'Inicio', pt: 'Início', en: 'Home' },
    about: { es: 'Sobre Mí', pt: 'Sobre Mim', en: 'About' },
    pricing: { es: 'Precios', pt: 'Preços', en: 'Pricing' },
    why: { es: '¿Por Qué Elev8?', pt: 'Por Que Elev8?', en: 'Why Elev8?' },
    payment: { es: 'Pago', pt: 'Pagamento', en: 'Payment' },
    contact: { es: 'Contacto', pt: 'Contato', en: 'Contact' },
  },
  hero: {
    headline: {
      es: 'Clases de Inglés Online',
      pt: 'Aulas de Inglês Online',
      en: 'Online English Lessons',
    },
    sub: {
      es: 'Aprende inglés con un hablante nativo de EE.UU. Con base en Bolivia. Enseñando a estudiantes en toda Latinoamérica.',
      pt: 'Aprenda inglês com um falante nativo dos EUA. Baseado na Bolívia. Ensinando alunos em toda a América Latina.',
      en: 'Learn English with a native speaker from the USA. Based in Bolivia. Teaching students across Latin America.',
    },
    cta: {
      es: 'Reserva una Clase de Prueba',
      pt: 'Reserve uma Aula Experimental',
      en: 'Book a Trial Class',
    },
  },
  about: {
    headline: {
      es: 'Sobre Elev8 by Hrishi',
      pt: 'Sobre Elev8 by Hrishi',
      en: 'About Elev8 by Hrishi',
    },
    items: {
      es: [
        'Hablante nativo de inglés de Phoenix, Arizona',
        'Con base en Santa Cruz, Bolivia',
        'Enfocado en ayudar a profesionales latinoamericanos a mejorar su inglés para el trabajo y oportunidades internacionales',
        'Experiencia enseñando tanto en línea como en academias de idiomas',
      ],
      pt: [
        'Falante nativo de inglês de Phoenix, Arizona',
        'Baseado em Santa Cruz, Bolívia',
        'Focado em ajudar profissionais latino-americanos a melhorar o inglês para trabalho e oportunidades internacionais',
        'Experiência ensinando online e em academias de idiomas',
      ],
      en: [
        'Native English speaker from Phoenix, Arizona',
        'Based in Santa Cruz, Bolivia',
        'Focused on helping Latin American professionals improve English for work and international opportunities',
        'Experienced teaching both online and in language academies',
      ],
    },
    cta: {
      es: 'Chatea por WhatsApp',
      pt: 'Converse no WhatsApp',
      en: 'Chat on WhatsApp',
    },
  },
  pricing: {
    headline: {
      es: 'Cursos y Precios',
      pt: 'Cursos e Preços',
      en: 'Courses & Pricing',
    },
    single: {
      title: { es: 'Clases Individuales', pt: 'Aulas Individuais', en: 'Single Classes' },
      items: {
        es: ['1 hora — 150 BOB', '1.5 horas — 200 BOB', '2 horas — 250 BOB'],
        pt: ['1 hora — 150 BOB', '1.5 horas — 200 BOB', '2 horas — 250 BOB'],
        en: ['1 hour — 150 BOB', '1.5 hours — 200 BOB', '2 hours — 250 BOB'],
      },
    },
    weekly: {
      title: { es: 'Clases Semanales', pt: 'Aulas Semanais', en: 'Weekly Classes' },
      items: {
        es: ['1 hora/semana — 450 BOB/mes', '1.5 horas/semana — 700 BOB/mes', '2 horas/semana — 800 BOB/mes'],
        pt: ['1 hora/semana — 450 BOB/mês', '1.5 horas/semana — 700 BOB/mês', '2 horas/semana — 800 BOB/mês'],
        en: ['1 hour/week — 450 BOB monthly', '1.5 hours/week — 700 BOB monthly', '2 hours/week — 800 BOB monthly'],
      },
    },
    intensive: {
      title: { es: 'Programa Intensivo', pt: 'Programa Intensivo', en: 'Intensive Program' },
      items: {
        es: ['1 hora 2x/semana — 550 BOB/mes', '1.5 horas 2x/semana — 850 BOB/mes', '2 horas 2x/semana — 900 BOB/mes'],
        pt: ['1 hora 2x/semana — 550 BOB/mês', '1.5 horas 2x/semana — 850 BOB/mês', '2 horas 2x/semana — 900 BOB/mês'],
        en: ['1 hour 2x/week — 550 BOB monthly', '1.5 hours 2x/week — 850 BOB monthly', '2 hours 2x/week — 900 BOB monthly'],
      },
    },
    note: {
      es: 'Precios en BOB para Bolivia. Contáctame para precios en USD.',
      pt: 'Preços em BOB para Bolívia. Entre em contato para preços em USD.',
      en: 'Prices in BOB for Bolivia. Contact me for USD pricing.',
    },
    cta: {
      es: 'Reservar Ahora',
      pt: 'Reservar Agora',
      en: 'Book Now',
    },
  },
  why: {
    headline: {
      es: '¿Por Qué Aprender con Hrishi?',
      pt: 'Por Que Aprender com Hrishi?',
      en: 'Why Learn With Hrishi?',
    },
    features: {
      es: [
        { title: 'Certificado Cambridge CELTA', desc: 'Formación profesional reconocida internacionalmente en enseñanza de inglés.' },
        { title: 'Inglés Americano Nativo', desc: 'Aprende pronunciación y expresiones naturales directamente de un nativo.' },
        { title: 'Enfoque en Inglés de Negocios', desc: 'Prepárate para entrevistas, reuniones y trabajo remoto en inglés.' },
        { title: 'Basado en Bolivia', desc: 'Entiendo las necesidades de los estudiantes latinoamericanos.' },
        { title: 'Clases Online Globales', desc: 'Estudia desde cualquier lugar con horarios flexibles.' },
      ],
      pt: [
        { title: 'Certificado Cambridge CELTA', desc: 'Formação profissional reconhecida internacionalmente no ensino de inglês.' },
        { title: 'Inglês Americano Nativo', desc: 'Aprenda pronúncia e expressões naturais diretamente de um nativo.' },
        { title: 'Foco em Inglês para Negócios', desc: 'Prepare-se para entrevistas, reuniões e trabalho remoto em inglês.' },
        { title: 'Baseado na Bolívia', desc: 'Entendo as necessidades dos alunos latino-americanos.' },
        { title: 'Aulas Online Globais', desc: 'Estude de qualquer lugar com horários flexíveis.' },
      ],
      en: [
        { title: 'Cambridge CELTA Certified', desc: 'Internationally recognized professional English teaching qualification.' },
        { title: 'Native American English', desc: 'Learn natural pronunciation and expressions from a native speaker.' },
        { title: 'Business English Focus', desc: 'Prepare for interviews, meetings, and remote work in English.' },
        { title: 'Based in Bolivia', desc: 'I understand the needs of Latin American learners.' },
        { title: 'Online Classes Globally', desc: 'Study from anywhere with flexible scheduling.' },
      ],
    },
  },
  payment: {
    headline: {
      es: 'Información de Pago',
      pt: 'Informações de Pagamento',
      en: 'Payment Information',
    },
    instruction: {
      es: 'Después de pagar, envía tu comprobante por WhatsApp para programar tu clase.',
      pt: 'Após o pagamento, envie seu comprovante pelo WhatsApp para agendar sua aula.',
      en: 'After payment, send your receipt via WhatsApp to schedule your class.',
    },
    methods: {
      qr: { es: 'Pago QR (Bolivia)', pt: 'Pagamento QR (Bolívia)', en: 'QR Payment (Bolivia)' },
      wise: { es: 'Wise (Internacional)', pt: 'Wise (Internacional)', en: 'Wise (International)' },
      paypal: { es: 'PayPal (Internacional)', pt: 'PayPal (Internacional)', en: 'PayPal (International)' },
      usdt: { es: 'USDT (Crypto)', pt: 'USDT (Crypto)', en: 'USDT (Crypto)' },
    },
  },
  contact: {
    headline: {
      es: '¿Listo para Elev8 tu Inglés?',
      pt: 'Pronto para Elev8 seu Inglês?',
      en: 'Ready to Elev8 Your English?',
    },
    sub: {
      es: 'Envía un mensaje y reserva tu primera clase.',
      pt: 'Envie uma mensagem e reserve sua primeira aula.',
      en: 'Send a message and book your first class.',
    },
    availability: {
      es: 'Clases disponibles para estudiantes en toda Latinoamérica y el mundo.',
      pt: 'Aulas disponíveis para alunos em toda a América Latina e no mundo.',
      en: 'Classes available for students across Latin America and globally.',
    },
    form: {
      name: { es: 'Nombre Completo', pt: 'Nome Completo', en: 'Full Name' },
      country: { es: 'País', pt: 'País', en: 'Country' },
      email: { es: 'Correo Electrónico', pt: 'E-mail', en: 'Email' },
      whatsapp: { es: 'Número de WhatsApp', pt: 'Número do WhatsApp', en: 'WhatsApp Number' },
      level: { es: 'Nivel de Inglés', pt: 'Nível de Inglês', en: 'English Level' },
      goals: { es: 'Objetivos', pt: 'Objetivos', en: 'Goals' },
      message: { es: 'Mensaje', pt: 'Mensagem', en: 'Message' },
      submit: { es: 'Enviar Mensaje', pt: 'Enviar Mensagem', en: 'Send Message' },
    },
    levels: {
      es: ['Principiante', 'Básico', 'Intermedio', 'Avanzado'],
      pt: ['Iniciante', 'Básico', 'Intermediário', 'Avançado'],
      en: ['Beginner', 'Basic', 'Intermediate', 'Advanced'],
    },
  },
  footer: {
    tagline: {
      es: 'Elev8 tu inglés. Abre puertas globales.',
      pt: 'Elev8 seu inglês. Abra portas globais.',
      en: 'Elev8 your English. Open global doors.',
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  const t = (path) => {
    const keys = path.split('.');
    let result = translations;
    for (const key of keys) {
      result = result?.[key];
    }
    if (result && typeof result === 'object' && result[lang] !== undefined) {
      return result[lang];
    }
    return result || path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}