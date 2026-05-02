import { ReactNode } from 'react';

type DialogProps = {
  open: boolean;
  onClose: () => void;
  trigger: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
};

export function Dialog({ open, onClose, trigger, title, description, children }: DialogProps) {
  return (
    <>
      {trigger}
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <div className="max-w-xl rounded-[2rem] border border-white/10 bg-[#070707]/95 p-8 shadow-premium backdrop-blur-2xl">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{description}</p>
              </div>
              <button className="text-white/70 transition hover:text-white" onClick={onClose}>
                Fechar
              </button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
