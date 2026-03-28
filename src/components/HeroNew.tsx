import imgProductScreenshot from "figma:asset/9616b03aaed6a5b7477a8c809cd88f81369f1f5e.png";

interface HeroNewProps {
  onTryFreeClick?: () => void;
  onSeeExampleClick?: () => void;
}

export default function HeroNew({ onTryFreeClick, onSeeExampleClick }: HeroNewProps) {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 pt-8 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-12">
        {/* Left content */}
        <div className="flex flex-col gap-6 flex-1 max-w-[582px]">
          <div className="flex flex-col gap-4">
            <h1
              className="font-['Geist:semibold',sans-serif] leading-[1.1] tracking-[-1.08px] text-[#18181b] not-italic"
              style={{ fontSize: "clamp(36px, 4vw, 54px)" }}
            >
              Turn one video into thousands of personal conversations
            </h1>
            <p className="font-['Geist:regular',sans-serif] leading-[1.5] text-[#70707b] not-italic"
              style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
            >
              Promoflix helps sales and marketing teams send personalized video outreach that actually gets replies without recording over and over again.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onTryFreeClick}
              className="relative bg-[#2952e8] rounded-[8px] shrink-0 cursor-pointer hover:bg-[#1e3fb8] transition-colors"
            >
              <div className="flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit]">
                <span className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic text-[#fcfcfc] text-[16px] whitespace-nowrap">
                  Try it free
                </span>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
              <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </button>

            <button
              onClick={onSeeExampleClick}
              className="relative bg-white rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-center overflow-clip px-[18px] py-[12px] relative rounded-[inherit]">
                <span className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic text-[#3f3f46] text-[16px] whitespace-nowrap">
                  See real example
                </span>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
              <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </button>
          </div>
        </div>

        {/* Right - Product Screenshot */}
        <div className="flex-1 w-full lg:max-w-[610px]">
          <div className="relative w-full">
            {/* Subtle background glow */}
            <div className="absolute inset-[-12px] bg-gradient-to-br from-[#f0f4ff] to-[#f8f9ff] rounded-[32px] blur-2xl opacity-60" />
            <img
              src={imgProductScreenshot}
              alt="PromoFlix product interface"
              className="relative block w-full h-auto rounded-2xl drop-shadow-xl"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0, black 8px, black calc(100% - 8px), transparent 100%)",
                maskImage: "linear-gradient(to bottom, transparent 0, black 8px, black calc(100% - 8px), transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
