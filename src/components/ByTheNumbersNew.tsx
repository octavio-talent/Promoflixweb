interface ByTheNumbersNewProps {
  onEstimateROIClick?: () => void;
}

export default function ByTheNumbersNew({ onEstimateROIClick }: ByTheNumbersNewProps) {
  return (
    <div className="bg-[#2952e8] w-full py-[88px] px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Main Card */}
        <div className="bg-[#fafafa] rounded-[24px] p-3 flex flex-col lg:flex-row gap-3">
          {/* Left: Text Column */}
          <div className="bg-white rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 lg:w-[340px] p-8 flex flex-col gap-2">
            <p className="font-['Geist:semibold',sans-serif] leading-[1.5] text-[#2952e8] text-[14px] uppercase">
              BY THE NUMBERS
            </p>
            <h2
              className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] text-[#18181b] tracking-[-2px]"
              style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
            >
              Small lifts Massive impact
            </h2>
            <p className="font-['Geist:regular',sans-serif] leading-[1.5] text-[#70707b] text-[20px] mt-2">
              Personalized video dramatically outperforms standard email outreach.
            </p>
          </div>

          {/* Right: Stats + CTA */}
          <div className="flex flex-col gap-3 flex-1 min-w-0">
            {/* Stats Row */}
            <div className="bg-white rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] flex-1 flex items-center">
              <div className="flex flex-col sm:flex-row items-stretch w-full px-8 py-6 gap-6">
                {/* Stat 1 */}
                <div className="flex flex-col gap-3 flex-1">
                  <p className="font-['Geist:semibold',sans-serif] leading-[1.3] text-[#d92d20] tracking-[-2px]"
                    style={{ fontSize: 'clamp(32px, 3vw, 44px)' }}>
                    1.6%
                  </p>
                  <p className="font-['Geist:semibold',sans-serif] leading-[1.5] text-[#18181b] text-[20px]">
                    Email conversion
                  </p>
                </div>
                <div className="hidden sm:block bg-[#f4f4f5] w-px self-stretch" />
                {/* Stat 2 */}
                <div className="flex flex-col gap-3 flex-1">
                  <p className="font-['Geist:semibold',sans-serif] leading-[1.3] text-[#079455] tracking-[-2px]"
                    style={{ fontSize: 'clamp(32px, 3vw, 44px)' }}>
                    6–8%
                  </p>
                  <p className="font-['Geist:semibold',sans-serif] leading-[1.5] text-[#18181b] text-[20px]">
                    Promoflix conversion
                  </p>
                </div>
                <div className="hidden sm:block bg-[#f4f4f5] w-px self-stretch" />
                {/* Stat 3 */}
                <div className="flex flex-col gap-3 flex-1">
                  <p className="font-['Geist:semibold',sans-serif] leading-[1.3] text-[#2952e8] tracking-[-2px]"
                    style={{ fontSize: 'clamp(32px, 3vw, 44px)' }}>
                    3–6x
                  </p>
                  <p className="font-['Geist:semibold',sans-serif] leading-[1.5] text-[#18181b] text-[20px]">
                    Engagement
                  </p>
                </div>
              </div>
            </div>

            {/* ROI Banner */}
            <div className="bg-white rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-8 py-6">
              <p className="font-['Geist:semibold',sans-serif] leading-[1.5] text-[#18181b] text-[20px]">
                Typical Promoflix campaigns generate about $5,000 in ROI
              </p>
              <button
                onClick={onEstimateROIClick}
                className="relative bg-[#2952e8] rounded-[8px] shrink-0 cursor-pointer hover:bg-[#1e3fb8] transition-colors"
              >
                <div className="flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit]">
                  <span className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic text-[#fcfcfc] text-[16px] whitespace-nowrap">
                    Estimate your ROI
                  </span>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
                <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
