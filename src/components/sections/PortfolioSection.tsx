import { motion } from 'framer-motion';
import { BeforeAfterSlider } from '../portfolio/BeforeAfterSlider';
import { portfolioItems } from '../../lib/data';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gold/80">Antes e depois</p>
          <h2 className="section-heading">Portfólio de transformação</h2>
          <p className="max-w-2xl text-base leading-8 text-white/70">
            Cada projeto é uma combinação de técnica de pintura fina, acabamento premium e foco total em resultado.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-1">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              className="card-glow"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gold/80">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
                  Projeto premium
                </span>
              </div>
              <BeforeAfterSlider before={item.beforeImage} after={item.afterImage} label={item.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
