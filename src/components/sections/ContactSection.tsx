import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl space-y-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-gold/80">Contato</p>
          <h2 className="section-heading">Vamos pintar seu próximo projeto?</h2>
          <p className="max-w-2xl mx-auto text-base leading-8 text-white/70">
            Resposta rápida, orçamento sem compromisso e atendimento direto pelo WhatsApp.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-premium">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Telefone</p>
            <p className="mt-4 text-xl font-semibold text-white">(11) 97830-5530</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-premium">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">E-mail</p>
            <p className="mt-4 text-xl font-semibold text-white">fernandespinturas_@outlook.com</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-premium">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Instagram</p>
            <p className="mt-4 text-xl font-semibold text-white">@fernandespintura</p>
          </div>
        </div>
      </div>
    </section>
  );
}
