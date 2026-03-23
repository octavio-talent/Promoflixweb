import { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  onTryFreeClick?: () => void;
  onChoosePlanClick?: () => void;
}

const plans = [
  {
    id: 'free',
    label: 'Free Forever',
    sublabel: 'See how easy it is before you commit.',
    tagline: 'No credit card, no pressure, just proof that this actually works the way we say it does.',
    monthlyPrice: null,
    yearlyPrice: null,
    priceLabel: '$0',
    priceUnit: '/month',
    highlighted: null,
    features: [
      { text: 'Test the full workflow', bold: false },
      { text: 'See how your videos look/sound', bold: false },
      { text: 'Zero risk, zero commitment', bold: false },
      { text: '15 Videos', bold: false },
    ],
    ctaText: 'Try it for free',
    ctaStyle: 'outline' as const,
    popular: false,
  },
  {
    id: 'explorer',
    label: 'Explorer Plan',
    sublabel: 'Perfect for testing the power of personalized video outreach.',
    tagline: null,
    monthlyPrice: 49,
    yearlyPrice: 44,
    highlighted: 'Expect 1–2 Customers Back',
    features: [
      { text: 'Test if you get an ROI fast', bold: false },
      { text: 'Good to start filling up your calendar', bold: false },
      { text: 'Start the ultimate "set-it-and-forget-it revenue engine"', bold: false },
      { text: 'Monthly Videos: 100 / month', bold: false },
    ],
    ctaText: 'Choose Plan',
    ctaStyle: 'dark' as const,
    popular: false,
  },
  {
    id: 'rainmaker',
    label: 'Rainmaker Plan',
    sublabel: 'The no-brainer choice to consistently re-engage and profit.',
    tagline: null,
    monthlyPrice: 149,
    yearlyPrice: 134,
    highlighted: 'Expect 4–5 Customers Back',
    features: [
      { text: 'Designed for consistent lead flow', bold: false },
      { text: 'Rapidly scale your outreach', bold: false },
      { text: 'Finally build a predictable outreach routine', bold: false },
      { text: 'Monthly Videos: 400 / month', bold: false },
    ],
    ctaText: 'Choose Plan',
    ctaStyle: 'dark' as const,
    popular: true,
  },
  {
    id: 'titan',
    label: 'Titan Plan',
    sublabel: 'For businesses ready to expand and take their marketing seriously.',
    tagline: null,
    monthlyPrice: 399,
    yearlyPrice: 359,
    highlighted: 'Expect 10–15 Customers Back',
    features: [
      { text: 'Best value per video generated', bold: false },
      { text: 'Dominate your market niche', bold: false },
      { text: 'Dedicated account manager support', bold: false },
      { text: 'Monthly Videos: 1,500 / month', bold: false },
    ],
    ctaText: 'Choose Plan',
    ctaStyle: 'dark' as const,
    popular: false,
  },
];

export default function PricingSection({ onTryFreeClick, onChoosePlanClick }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(true);

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) return '$0';
    return isYearly ? `$${plan.yearlyPrice}` : `$${plan.monthlyPrice}`;
  };

  const getStrikePrice = (plan: typeof plans[0]) => {
    if (!isYearly || plan.monthlyPrice === null) return null;
    return `$${plan.monthlyPrice}`;
  };

  return (
    <div className="bg-[#fafafa] w-full py-[88px] px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col gap-2">
            <p className="font-['Geist:semibold',sans-serif] leading-[1.5] text-[#2952e8] text-[14px] uppercase tracking-wide">
              OUR PRICING
            </p>
            <h2
              className="font-['Geist:semibold',sans-serif] leading-[1.3] text-[#18181b] tracking-[-2px]"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
            >
              Simple, transparent pricing
            </h2>
          </div>

          {/* Toggle */}
          <div className="bg-[#f4f4f5] flex gap-1 items-center p-1 rounded-[12px]">
            <button
              onClick={() => setIsYearly(false)}
              className={`flex items-center justify-center px-5 py-3 rounded-[10px] transition-all cursor-pointer ${
                !isYearly ? 'bg-white shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]' : ''
              }`}
            >
              <span className={`font-['Inter:Medium',sans-serif] font-medium text-[16px] tracking-[-0.32px] ${!isYearly ? 'text-black' : 'text-[#5b5c5e]'}`}>
                Monthly
              </span>
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex items-center justify-center px-5 py-3 rounded-[10px] transition-all cursor-pointer ${
                isYearly ? 'bg-white shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]' : ''
              }`}
            >
              <span className={`font-['Inter:Medium',sans-serif] font-medium text-[16px] tracking-[-0.32px] ${isYearly ? 'text-black' : 'text-[#5b5c5e]'}`}>
                Yearly <span className="text-[#2952e8]">(save 10%)</span>
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-[12px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] flex flex-col overflow-hidden ${
                plan.popular ? 'ring-2 ring-[#2952e8]' : ''
              }`}
            >
              {/* Most Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#2952e8] px-3 py-1 rounded-bl-[12px] rounded-tr-[12px]">
                  <span className="font-['Geist:semibold',sans-serif] text-[#fafafa] text-[12px] uppercase tracking-wide">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Header area */}
              <div className="flex flex-col gap-4 p-6 border-b border-[#f4f4f5]">
                <div className="flex flex-col gap-2">
                  <p className="font-['Geist:semibold',sans-serif] text-[#2952e8] text-[14px] uppercase leading-[1.5]">
                    {plan.label}
                  </p>
                  <p className="font-['Geist:regular',sans-serif] text-[#70707b] text-[15px] leading-[1.5]">
                    {plan.sublabel}
                  </p>
                </div>

                {/* Price */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    {getStrikePrice(plan) && (
                      <span className="font-['Geist:semibold',sans-serif] text-[#a0a0ab] text-[28px] tracking-[-2px] line-through">
                        {getStrikePrice(plan)}
                      </span>
                    )}
                    <span className="font-['Geist:semibold',sans-serif] text-[#111] text-[44px] tracking-[-2px] leading-[1.2]">
                      {getPrice(plan)}
                    </span>
                    <span className="font-['Geist:regular',sans-serif] text-[#a0a0ab] text-[18px]">
                      {plan.priceUnit || '/mo'}
                    </span>
                  </div>
                  {isYearly && plan.yearlyPrice !== null && (
                    <p className="font-['Geist:regular',sans-serif] text-[#2952e8] text-[13px]">
                      Billed annually · ${(plan.yearlyPrice! * 12).toLocaleString()}/year
                    </p>
                  )}
                  {plan.tagline && (
                    <p className="font-['Geist:regular',sans-serif] text-[#70707b] text-[13px] leading-[1.5] mt-1">
                      {plan.tagline}
                    </p>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-3 p-6 flex-1 border-b border-[#f4f4f5]">
                {plan.highlighted && (
                  <div className="flex items-start gap-2">
                    <div className="mt-[3px] shrink-0 w-4 h-4 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#2952e8]" strokeWidth={2.5} />
                    </div>
                    <span className="font-['Geist:medium',sans-serif] text-[#18181b] text-[15px] leading-[1.5]">
                      {plan.highlighted}
                    </span>
                  </div>
                )}
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="mt-[3px] shrink-0 w-4 h-4 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#2952e8]" strokeWidth={2.5} />
                    </div>
                    <span className="font-['Geist:regular',sans-serif] text-[#70707b] text-[15px] leading-[1.5]">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6">
                {plan.ctaStyle === 'outline' ? (
                  <button
                    onClick={onTryFreeClick}
                    className="relative w-full bg-white rounded-[8px] h-[48px] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-['Geist:semibold',sans-serif] text-[#3f3f46] text-[16px]">
                      {plan.ctaText}
                    </span>
                    <div className="absolute inset-0 pointer-events-none rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
                    <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </button>
                ) : (
                  <button
                    onClick={onChoosePlanClick}
                    className="relative w-full bg-[#131316] rounded-[8px] h-[48px] flex items-center justify-center cursor-pointer hover:bg-[#27272a] transition-colors"
                  >
                    <span className="font-['Geist:semibold',sans-serif] text-[#fcfcfc] text-[16px]">
                      {plan.ctaText}
                    </span>
                    <div className="absolute inset-0 pointer-events-none rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
                    <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
