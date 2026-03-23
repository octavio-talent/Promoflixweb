function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">BY THE NUMBERS</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-full">Small lifts Massive impact</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[560px] relative shrink-0 w-[327px]" data-name="Text">
      <Frame1 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#70707b] text-[20px] w-full">Personalized video dramatically outperforms standard email outreach.</p>
    </div>
  );
}

function TextColumn() {
  return (
    <div className="bg-white relative rounded-[16px] self-stretch shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[359px]" data-name="text column">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#18181b] text-[20px] w-full whitespace-pre-wrap">{`Engagement  `}</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] w-full" data-name="card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[32px] py-[16px] relative size-full">
          <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[12px] items-start justify-center not-italic overflow-clip relative shrink-0 w-[217px] whitespace-nowrap" data-name="numbers: typical">
            <p className="leading-[1.3] relative shrink-0 text-[#d92d20] text-[44px] tracking-[-2px]">1.6%</p>
            <p className="leading-[1.5] relative shrink-0 text-[#18181b] text-[20px]">Email conversion</p>
          </div>
          <div className="bg-[#f4f4f5] h-full shrink-0 w-px" />
          <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[12px] items-start justify-center not-italic relative shrink-0 w-[217px]" data-name="numbers: promoflix">
            <p className="leading-[1.3] relative shrink-0 text-[#079455] text-[44px] tracking-[-2px] whitespace-nowrap">6-8%</p>
            <p className="leading-[1.5] min-w-full relative shrink-0 text-[#18181b] text-[20px] w-[min-content]">Promoflix conversion</p>
          </div>
          <div className="bg-[#f4f4f5] h-full shrink-0 w-px" />
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[217px]" data-name="numbers: engagement">
            <p className="font-['Geist:semibold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#2952e8] text-[44px] tracking-[-2px] w-full">3-6x</p>
            <Frame />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Estimate your ROI</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[112px] relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full" data-name="card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[32px] relative size-full">
          <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#18181b] text-[20px] whitespace-nowrap">Typical Promoflix campaigns generate about $5,000 in ROI</p>
          <div className="bg-[#2952e8] relative rounded-[8px] shrink-0" data-name="Button">
            <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit]">
              <TextPadding />
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
            <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-h-px min-w-px relative self-stretch">
      <Card />
      <Card1 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[12px] h-[325px] items-start p-[12px] relative rounded-[24px] shrink-0 w-[1240px]" data-name="content">
      <TextColumn />
      <Frame2 />
    </div>
  );
}

export default function ByTheNumbers() {
  return (
    <div className="bg-[#2952e8] content-stretch flex flex-col items-center justify-center py-[88px] relative size-full" data-name="By the numbers">
      <Content />
    </div>
  );
}