import { useState } from 'react';
import svgPaths from "./svg-u46g867su9";

function TopText() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-center not-italic relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="top text">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">OUR PRICING</p>
      <p className="leading-[1.3] relative shrink-0 text-[44px] text-black tracking-[-2px] w-full">Simple, transparent pricing</p>
    </div>
  );
}

function Frame19({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`${isActive ? 'bg-white shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]' : ''} content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[10px] shrink-0 transition-all cursor-pointer`}
    >
      <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] tracking-[-0.32px] ${isActive ? 'text-black' : 'text-[#5b5c5e]'}`}>Monthly</p>
    </button>
  );
}

function Frame20({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`${isActive ? 'bg-white shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]' : ''} content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[10px] shrink-0 transition-all cursor-pointer`}
    >
      <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] tracking-[-0.32px] ${isActive ? 'text-black' : 'text-[#5b5c5e]'}`}>Yearly (save 10%)</p>
    </button>
  );
}

function MonthlyYearlyToggle({ isYearly, setIsYearly }: { isYearly: boolean; setIsYearly: (value: boolean) => void }) {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[12px] shrink-0" data-name="Monthly/yearly toggle">
      <Frame19 isActive={!isYearly} onClick={() => setIsYearly(false)} />
      <Frame20 isActive={isYearly} onClick={() => setIsYearly(true)} />
    </div>
  );
}

function MainText() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Main text">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">{`Free `}</p>
      <p className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b] text-[16px] w-full">Perfect for trying out personalized video at no cost.</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Price">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#111] text-[44px] tracking-[-2px]">Free</p>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <MainText />
        <Price />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame />
    </div>
  );
}

function CheckItemText() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">Personalize videos with your prospect's name</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap1() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame1 />
    </div>
  );
}

function CheckItemText1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap1 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">Try sending up to 15 messages</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap2() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame2 />
    </div>
  );
}

function CheckItemText2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap2 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">Explore the full system before upgrading</p>
    </div>
  );
}

function CheckItems() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Check items">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <CheckItemText />
        <CheckItemText1 />
        <CheckItemText2 />
      </div>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px]">Start free</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center pl-[12px] pr-[18px] py-[8px] relative size-full">
              <TextPadding />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function PricingCard() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[555px] items-start min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]" data-name="Pricing card">
      <Content />
      <CheckItems />
      <Footer />
    </div>
  );
}

function MainText1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 w-full whitespace-pre-wrap" data-name="Main text">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">Explorer</p>
      <p className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b] text-[16px] w-full">Great for getting started with scalable outreach.</p>
    </div>
  );
}

function Price1({ isYearly }: { isYearly: boolean }) {
  const monthlyPrice = 49;
  const yearlyPrice = Math.round(monthlyPrice * 0.9 * 100) / 100;
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] relative shrink-0" data-name="Price">
      <div className="content-stretch flex font-['Geist:semibold',sans-serif] items-baseline relative shrink-0">
        {isYearly && (
          <p className="leading-[1.3] relative shrink-0 text-[#a0a0ab] text-[32px] tracking-[-2px] line-through mr-3">${monthlyPrice}</p>
        )}
        <p className="leading-[1.3] relative shrink-0 text-[#111] text-[44px] tracking-[-2px]">${isYearly ? yearlyPrice : monthlyPrice}</p>
        <p className="leading-[1.5] relative shrink-0 text-[#a0a0ab] text-[20px]">/mo</p>
      </div>
      {isYearly && (
        <p className="font-['Geist:regular',sans-serif] text-[14px] text-[#2952e8]">Billed ${(yearlyPrice * 12).toFixed(2)}/year</p>
      )}
    </div>
  );
}

function Content1({ isYearly }: { isYearly: boolean }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start not-italic p-[24px] relative w-full">
        <MainText1 />
        <Price1 isYearly={isYearly} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p5c05eb0} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap3() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame3 />
    </div>
  );
}

function CheckItemText3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap3 />
      <p className="flex-[1_0_0] font-['Geist:medium',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#18181b] text-[16px] whitespace-pre-wrap">Expect 1–2 customers back</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap4() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame4 />
    </div>
  );
}

function CheckItemText4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap4 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">Send up to 100 videos per month</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap5() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame5 />
    </div>
  );
}

function CheckItemText5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap5 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">$0.75 per video over the limit</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap6() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame6 />
    </div>
  );
}

function CheckItemText6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap6 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">Customize 2 variables (like name and company)</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap7() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame7 />
    </div>
  );
}

function CheckItemText7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap7 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">Auto-play thumbnails in inbox</p>
    </div>
  );
}

function CheckItems1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Check items">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <CheckItemText3 />
        <CheckItemText4 />
        <CheckItemText5 />
        <CheckItemText6 />
        <CheckItemText7 />
      </div>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px]">Choose Plan</p>
    </div>
  );
}

function Footer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <div className="bg-[#131316] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
              <TextPadding1 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function PricingCard1({ isYearly }: { isYearly: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[555px] items-start min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]" data-name="Pricing card">
      <Content1 isYearly={isYearly} />
      <CheckItems1 />
      <Footer1 />
    </div>
  );
}

function MainText2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 w-full whitespace-pre-wrap" data-name="Main text">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">Rainmaker</p>
      <p className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b] text-[16px] w-full">Ideal for growing outreach with higher volume.</p>
    </div>
  );
}

function Price2({ isYearly }: { isYearly: boolean }) {
  const monthlyPrice = 149;
  const yearlyPrice = Math.round(monthlyPrice * 0.9 * 100) / 100;
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] relative shrink-0" data-name="Price">
      <div className="content-stretch flex font-['Geist:semibold',sans-serif] items-baseline relative shrink-0">
        {isYearly && (
          <p className="leading-[1.3] relative shrink-0 text-[#a0a0ab] text-[32px] tracking-[-2px] line-through mr-3">${monthlyPrice}</p>
        )}
        <p className="leading-[1.3] relative shrink-0 text-[#111] text-[44px] tracking-[-2px]">${isYearly ? yearlyPrice : monthlyPrice}</p>
        <p className="leading-[1.5] relative shrink-0 text-[#a0a0ab] text-[20px]">/mo</p>
      </div>
      {isYearly && (
        <p className="font-['Geist:regular',sans-serif] text-[14px] text-[#2952e8]">Billed ${(yearlyPrice * 12).toFixed(2)}/year</p>
      )}
    </div>
  );
}

function Content2({ isYearly }: { isYearly: boolean }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start not-italic p-[24px] relative w-full">
        <MainText2 />
        <Price2 isYearly={isYearly} />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p5c05eb0} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap8() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame8 />
    </div>
  );
}

function CheckItemText8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap8 />
      <p className="flex-[1_0_0] font-['Geist:medium',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#18181b] text-[16px] whitespace-pre-wrap">Expect 4-5 customers back</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap9() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame9 />
    </div>
  );
}

function CheckItemText9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap9 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">Send up to 400 videos per month</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap10() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame10 />
    </div>
  );
}

function CheckItemText10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap10 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">$0.60 per extra video</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap11() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame11 />
    </div>
  );
}

function CheckItemText11() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap11 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">{`Customize 2 variables `}</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap12() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame12 />
    </div>
  );
}

function CheckItemText12() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap12 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">Auto-play thumbnails in inbox</p>
    </div>
  );
}

function CheckItems2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Check items">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <CheckItemText8 />
        <CheckItemText9 />
        <CheckItemText10 />
        <CheckItemText11 />
        <CheckItemText12 />
      </div>
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px]">Choose Plan</p>
    </div>
  );
}

function Footer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <div className="bg-[#131316] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
              <TextPadding2 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-[#2952e8] content-stretch flex items-center justify-center pb-[3px] pt-[4px] px-[12px] right-0 rounded-bl-[12px] rounded-tr-[12px] top-0">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#fafafa] text-[14px] uppercase">MOST POPULAR</p>
    </div>
  );
}

function PricingCard2({ isYearly }: { isYearly: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[555px] items-start min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]" data-name="Pricing card">
      <Content2 isYearly={isYearly} />
      <CheckItems2 />
      <Footer2 />
      <Frame18 />
    </div>
  );
}

function MainText3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 w-full whitespace-pre-wrap" data-name="Main text">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">Titan</p>
      <p className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b] text-[16px] w-full">Best for power users needing maximum reach.</p>
    </div>
  );
}

function Price3({ isYearly }: { isYearly: boolean }) {
  const monthlyPrice = 399;
  const yearlyPrice = Math.round(monthlyPrice * 0.9 * 100) / 100;
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] relative shrink-0" data-name="Price">
      <div className="content-stretch flex font-['Geist:semibold',sans-serif] items-baseline relative shrink-0">
        {isYearly && (
          <p className="leading-[1.3] relative shrink-0 text-[#a0a0ab] text-[32px] tracking-[-2px] line-through mr-3">${monthlyPrice}</p>
        )}
        <p className="leading-[1.3] relative shrink-0 text-[#111] text-[44px] tracking-[-2px]">${isYearly ? yearlyPrice : monthlyPrice}</p>
        <p className="leading-[1.5] relative shrink-0 text-[#a0a0ab] text-[20px]">/mo</p>
      </div>
      {isYearly && (
        <p className="font-['Geist:regular',sans-serif] text-[14px] text-[#2952e8]">Billed ${(yearlyPrice * 12).toFixed(2)}/year</p>
      )}
    </div>
  );
}

function Content3({ isYearly }: { isYearly: boolean }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start not-italic p-[24px] relative w-full">
        <MainText3 />
        <Price3 isYearly={isYearly} />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p5c05eb0} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap13() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame13 />
    </div>
  );
}

function CheckItemText13() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap13 />
      <p className="flex-[1_0_0] font-['Geist:medium',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#18181b] text-[16px] whitespace-pre-wrap">Expect 4-5 customers back</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap14() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame14 />
    </div>
  );
}

function CheckItemText14() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap14 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">Send up to 1,500 videos per month</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap15() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame15 />
    </div>
  );
}

function CheckItemText15() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap15 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">$0.40 per extra video</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap16() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame16 />
    </div>
  );
}

function CheckItemText16() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap16 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">Customize 2 variables</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap17() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame17 />
    </div>
  );
}

function CheckItemText17() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap17 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px] whitespace-pre-wrap">Auto-play thumbnails in inbox</p>
    </div>
  );
}

function CheckItems3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Check items">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <CheckItemText13 />
        <CheckItemText14 />
        <CheckItemText15 />
        <CheckItemText16 />
        <CheckItemText17 />
      </div>
    </div>
  );
}

function TextPadding3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px]">Choose Plan</p>
    </div>
  );
}

function Footer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <div className="bg-[#131316] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
              <TextPadding3 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function PricingCard3({ isYearly }: { isYearly: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[555px] items-start min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]" data-name="Pricing card">
      <Content3 isYearly={isYearly} />
      <CheckItems3 />
      <Footer3 />
    </div>
  );
}

function CardsWrap({ isYearly }: { isYearly: boolean }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="cards wrap">
      <PricingCard />
      <PricingCard1 isYearly={isYearly} />
      <PricingCard2 isYearly={isYearly} />
      <PricingCard3 isYearly={isYearly} />
    </div>
  );
}

function Container() {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1240px] relative shrink-0 w-full" data-name="container">
      <TopText />
      <MonthlyYearlyToggle isYearly={isYearly} setIsYearly={setIsYearly} />
      <CardsWrap isYearly={isYearly} />
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-center py-[88px] relative size-full" data-name="Pricing">
      <Container />
    </div>
  );
}
