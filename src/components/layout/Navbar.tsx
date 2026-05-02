import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const links = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Sobre', href: '#about' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Processo', href: '#process' },
  { label: 'Contato', href: '#contact' },
];

export function Navbar() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-white/80">
        <a className="text-lg font-semibold uppercase tracking-[0.3em] text-gold" href="#home">
          Fernandes Pinturas
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <Button variant="ghost" size="sm" href="https://wa.me/5511978305530">
          Orçamento
        </Button>
      </div>
    </motion.header>
  );
}
