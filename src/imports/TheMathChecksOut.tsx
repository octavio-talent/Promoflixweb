function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[560px] relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">BY THE NUMBERS</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-full">The math checks out</p>
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#70707b] text-[20px] w-full">Personalized video dramatically outperforms standard email outreach.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-semibold items-start relative shrink-0 w-[157px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] leading-[27.2px] not-italic relative shrink-0 text-[14px] text-black w-full">RESPONSE RATE</p>
      <p className="font-['Geist:SemiBold',sans-serif] leading-[1.3] relative shrink-0 text-[#3a6ef2] text-[40px] tracking-[-1px] w-full">10-25x</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap">
      <Frame1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#535862] text-[16px] w-[min-content]">More replies than standard cold email campaigns.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f9f9f9] h-[174px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col h-[174px] items-start overflow-clip relative rounded-[16px] shrink-0 w-[700px]">
      <Frame9 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-semibold items-start relative shrink-0 w-[239px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] leading-[27.2px] not-italic relative shrink-0 text-[14px] text-black w-full">ENGAGEMENT</p>
      <p className="font-['Geist:SemiBold',sans-serif] leading-[1.3] relative shrink-0 text-[#3a6ef2] text-[40px] tracking-[-1px] w-full">3-6x</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap">
      <Frame4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#6b7280] text-[15px] w-[min-content]">Faster deal closing by warming leads on video email.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f9f9f9] h-[174px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[16px] self-stretch">
      <Frame10 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-semibold items-start relative shrink-0 w-[239px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] leading-[27.2px] not-italic relative shrink-0 text-[#253254] text-[14px] w-full">COST PER VIDEO</p>
      <p className="font-['Geist:SemiBold',sans-serif] leading-[1.3] relative shrink-0 text-[#3a6ef2] text-[40px] tracking-[-1px] w-full">$0.09</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap">
      <Frame5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#535862] text-[16px] w-[min-content]">Per personalized video at scale. Fractions per production.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f9f9f9] h-[176px] relative rounded-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Frame6 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col h-[176px] items-start relative rounded-[16px] shrink-0 w-[580px]">
      <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]" />
      <Frame11 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center not-italic relative shrink-0 text-white w-[176px] whitespace-pre-wrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[54px] leading-[normal] relative shrink-0 text-[40px] w-[38px]">∞</p>
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27.2px] min-h-px min-w-px relative text-[14px]">ROI POTENTIAL</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[10px] py-[10px] relative w-full">
          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
            <p className="mb-0">One $99 plan can generate $50k+ in</p>
            <p>engaged pipeline revenue.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[13.5px] w-[295px]">
      <Frame7 />
      <Frame21 />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px]">See ROI Calculator →</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[140px] relative shrink-0 w-full">
      <Frame19 />
      <div className="absolute bg-white h-[52px] left-[372px] rounded-[8px] top-[41.5px]" data-name="Buttons">
        <div className="content-stretch flex h-full items-center justify-end overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit]">
          <TextPadding />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#4f4f4f] h-[177px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[32px] py-[51px] relative size-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#5f5f5f] content-stretch flex flex-col h-[176px] items-center justify-center overflow-clip relative rounded-[16px] shrink-0 w-[640px]">
      <Frame8 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[24px] h-[176px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[374px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame18 />
    </div>
  );
}

export default function TheMathChecksOut() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[130px] py-[60px] relative size-full" data-name="The math checks out">
      <Frame22 />
    </div>
  );
}