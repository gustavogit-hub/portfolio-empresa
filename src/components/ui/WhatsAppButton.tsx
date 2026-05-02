type WhatsAppButtonProps = {
  phone: string;
};

export function WhatsAppButton({ phone }: WhatsAppButtonProps) {
  return (
    <a
      className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-glow transition hover:scale-105"
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-2xl">💬</span>
      <span className="sr-only">Chamar no WhatsApp</span>
    </a>
  );
}
