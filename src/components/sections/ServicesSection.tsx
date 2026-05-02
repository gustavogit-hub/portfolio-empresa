import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

const services = [
  {
    title: 'Pintura de apartamentos',
    description: 'Acabamento residencial impecável, sem sujeira e com respeito ao seu lar.',
  },
  {
    title: 'Paredes internas e externas',
    description: 'Tintas premium aplicadas com técnica para máxima durabilidade.',
  },
  {
    title: 'Tetos e forros',
    description: 'Cobertura uniforme em tetos altos, gesso e forros sem marcas.',
  },
  {
    title: 'Serviços comerciais e residenciais',
    description: 'Atendimento para lojas, comércios e residências com acabamento premium.',
  },
  {
    title: 'Textura marmorizada realista',
    description: 'Paredes com efeito marmorizado clássico, acabamento sofisticado e elegante.',
  },
  {
    title: 'Textura marmorizada exótica',
    description: 'Texturas únicas e criativas para ambientes modernos e de alto padrão.',
  },
  {
    title: 'Qualquer tipo de textura',
    description: 'Aplicação de texturas variadas, do concreto queimado à pedras naturais.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gold/80">Nossos serviços</p>
          <h2 className="section-heading">Cada detalhe pintado com excelência</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-sm leading-6 text-white/70">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
