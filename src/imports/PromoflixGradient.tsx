import imgGradient from "figma:asset/7f055f3a7cbeac14cb7fda6b0358859ef36d7ecc.png";

export default function PromoflixGradient() {
  return (
    <div className="relative size-full" data-name="Promoflix gradient">
      <p className="absolute bottom-[276px] font-['Geist:SemiBold',sans-serif] font-semibold leading-none left-[9px] right-0 text-[276px] text-[transparent] tracking-[-5.52px] translate-y-full">Promoflix</p>
      <div className="absolute bottom-[23px] h-[213px] left-0 right-[6px]" data-name="gradient">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient} />
      </div>
    </div>
  );
}