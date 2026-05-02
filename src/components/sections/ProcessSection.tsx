import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Avaliação',
    description: 'Visita técnica gratuita, escuta atenta e proposta clara, sem surpresas.',
  },
  {
    number: '02',
    title: 'Preparação',
    description: 'Proteção de móveis, lixamento, massa corrida e correção total da superfície.',
  },
  {
    number: '03',
    title: 'Pintura',
    description: 'Aplicação técnica com tintas premium, demãos uniformes e cantos perfeitos.',
  },
  {
    number: '04',
    title: 'Finalização',
    description: 'Revisão minuciosa, limpeza completa e entrega do ambiente pronto.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gold/80">Processo</p>
          <h2 className="section-heading">Quatro etapas. Resultado de outro nível.</h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="flex gap-6 rounded-[2rem] border border-white/10 bg-[#090909]/80 p-8 shadow-premium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: Number(step.number) * 0.05 }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-black/70 text-lg font-semibold text-gold">
                {step.number}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.26em] text-gold/70">Etapa {step.number}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
