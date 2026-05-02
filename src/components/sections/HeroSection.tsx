import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import image1 from '../../../fotos/animação.jpg.jfif';
import image2 from '../../../fotos/animação1.jpg.jfif';

const images = [image1, image2];

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, 42]);
  const y2 = useTransform(scrollY, [0, 400], [10, -36]);

  return (
    <section id="home" className="relative overflow-hidden bg-black px-4 pt-24 pb-20 text-white sm:px-6 sm:pt-28 sm:pb-24 md:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.75),_rgba(0,0,0,0.95))]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr,1.05fr]">
        <motion.div
          className="space-y-8 max-w-2xl lg:max-w-xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Pintura premium em Jundiaí e região
          </span>

          <p className="text-sm uppercase tracking-[0.32em] text-white/50">Premium painting studio</p>
          <div className="space-y-5">
            <h1 className="max-w-xl text-4xl font-semibold uppercase tracking-[0.2em] text-white sm:text-5xl lg:text-6xl">
              TRANSFORMAMOS AMBIENTES
            </h1>
            <p className="max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              COM COR, CUIDADO E QUALIDADE — resultados impactantes para cada espaço da sua casa ou negócio.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button className="w-full sm:w-auto" href="https://wa.me/5511978305530" target="_blank">
              Solicitar orçamento no WhatsApp
            </Button>
            <Button className="w-full sm:w-auto" variant="ghost" href="https://clinquant-froyo-67ee08.netlify.app/" target="_blank">
              Orçamento online
            </Button>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[520px] aspect-[3/4] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090909]/90 shadow-premium sm:aspect-[4/5]">
          <motion.div
            className="absolute inset-0"
            style={{ y: y1 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <img src={images[0]} alt="Fernandes Pinturas destaque" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            className="absolute -right-8 top-1/3 h-3/4 w-3/4 rounded-[2rem] border border-white/10 bg-gradient-to-br from-transparent via-black/10 to-black/90 shadow-glow"
            style={{ y: y2 }}
          />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
          <div className="absolute left-6 top-6 rounded-full border border-gold/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.26em] text-gold backdrop-blur-md">
            Visual premium
          </div>
          <div className="absolute bottom-6 right-6 hidden h-32 w-32 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#090909]/90 shadow-premium md:block">
            <img src={images[1]} alt="Rolo de pintura" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
