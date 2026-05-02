import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr,0.5fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-8"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-gold/80">Sobre a Fernandes</p>
          <h2 className="section-heading">Nova empresa com entrega premium</h2>
          <p className="max-w-2xl text-base leading-8 text-white/70">
            Somos uma equipe nova em Jundiaí, dedicada a transformar espaços comerciais e residenciais com pintura premium.
            O nosso foco é entregar um serviço organizado, limpo e com acabamentos impecáveis.
          </p>
          <div className="space-y-3">
            <p className="text-sm text-white/70">• Profissionalismo desde o primeiro contato</p>
            <p className="text-sm text-white/70">• Qualidade superior no acabamento</p>
            <p className="text-sm text-white/70">• Atendimento transparente e sem surpresas</p>
            <p className="text-sm text-white/70">• Respeito ao seu espaço e aos prazos</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="grid gap-6"
        >
          <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-premium">
            <p className="text-3xl font-semibold text-gold">Atendimento</p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">Personalizado e direto</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-premium">
            <p className="text-3xl font-semibold text-white">Acabamento</p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">Premium e sem imperfeições</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-premium">
            <p className="text-3xl font-semibold text-white">Confiança</p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">Transparência do início ao fim</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
