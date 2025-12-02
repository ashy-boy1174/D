export const DawatLogo = () => {
  return (
    <a href="/" className="flex flex-col items-center gap-1" aria-label="Dawat Home">
      <div className="flex items-baseline gap-2">
        <span className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-[#c5a059] to-[#d4af37] bg-clip-text text-transparent">
          Dawat
        </span>
      </div>
      <span className="text-[#c5a059] text-xs md:text-sm font-light tracking-[0.2em] uppercase">
        Restaurant
      </span>
    </a>
  );
};
