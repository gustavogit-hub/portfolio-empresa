import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type CarouselProps = {
  children: ReactNode[];
};

export function Carousel({ children }: CarouselProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909]/80 p-4 shadow-premium">
      <motion.div className="flex gap-4" drag="x" dragConstraints={{ left: -200, right: 0 }} whileTap={{ cursor: 'grabbing' }}>
        {children.map((child, index) => (
          <div key={index} className="min-w-[220px] flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
