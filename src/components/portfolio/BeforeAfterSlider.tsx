import { useEffect, useRef, useState } from 'react';

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  label: string;
};

export function BeforeAfterSlider({ before, after, label }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!draggingRef.current || !sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const next = Math.min(100, Math.max(0, (x / rect.width) * 100));
      setPosition(next);
    };

    const handlePointerUp = () => {
      draggingRef.current = false;
      document.body.style.cursor = '';
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    draggingRef.current = true;
    document.body.style.cursor = 'grabbing';
    sliderRef.current.setPointerCapture(event.pointerId);
    const rect = sliderRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const next = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(next);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/60 p-6 shadow-premium">
      <div className="grid gap-6 md:grid-cols-[0.4fr,0.6fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-gold/80">Antes</p>
          <p className="text-xl font-semibold text-white">{label}</p>
          <p className="text-sm leading-6 text-white/70">
            Clique e arraste o marcador dourado no centro da imagem para comparar o antes e o depois.
          </p>
        </div>
        <div className="space-y-4">
          <div
            ref={sliderRef}
            onPointerDown={handlePointerDown}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 cursor-grab"
          >
            <img src={before} alt={`${label} antes`} className="h-96 w-full object-cover" />
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-y-0 right-0 overflow-hidden" style={{ width: `${100 - position}%` }}>
                <img src={after} alt={`${label} depois`} className="h-96 w-full object-cover" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute inset-y-0 h-full w-px bg-gold/70"
                style={{ left: `${position}%` }}
              />
              <div
                className="absolute top-1/2 grid h-12 w-12 -translate-y-1/2 -translate-x-1/2 place-items-center rounded-full bg-gold text-black shadow-glow"
                style={{ left: `${position}%` }}
              >
                ↔
              </div>
            </div>
            <div className="absolute left-4 top-4 flex gap-2">
              <span className="rounded-full bg-black/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-gold">
                Antes
              </span>
              <span className="rounded-full bg-black/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-white">
                Depois
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
