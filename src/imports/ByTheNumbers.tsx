function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">BY THE NUMBERS</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-full">The math checks out</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[560px] relative shrink-0 w-[327px] whitespace-pre-wrap" data-name="Text">
      <Frame8 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#70707b] text-[20px] w-full">Personalized video dramatically outperforms standard email outreach.</p>
    </div>
  );
}

function TextColumn() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]" data-name="text column">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] relative shrink-0 text-[#18181b] text-[20px] tracking-[-1px] w-full">Response rate</p>
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] relative shrink-0 text-[#70707b] text-[16px] w-full">More replies than standard cold email campaigns.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] relative shrink-0 text-[#2952e8] text-[44px] tracking-[-2px] w-full">10-25x</p>
      <Frame4 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[247px] relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full" data-name="card">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] relative shrink-0 text-[#18181b] text-[20px] tracking-[-1px] w-full">Cost per video</p>
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] relative shrink-0 text-[#70707b] text-[16px] w-full">Per personalized video at scale. Fractions per production.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start not-italic relative shrink-0 w-[255px] whitespace-pre-wrap">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] relative shrink-0 text-[#2952e8] text-[44px] tracking-[-2px] w-full">$0.09</p>
      <Frame5 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[247px] relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full" data-name="card">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Frame1 />
      </div>
    </div>
  );
}

function CardColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[506px] items-start min-h-px min-w-px relative" data-name="card column">
      <Card />
      <Card1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] relative shrink-0 text-[#18181b] text-[20px] tracking-[-1px] w-full">Engagement</p>
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] relative shrink-0 text-[#70707b] text-[16px] w-full">Faster deal closing by warming leads on video email.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] relative shrink-0 text-[#2952e8] text-[44px] tracking-[-2px] w-full">3-6x</p>
      <Frame6 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[247px] relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full" data-name="card">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] relative shrink-0 text-[#fafafa] text-[20px] tracking-[-1px] w-full">ROI potential</p>
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] relative shrink-0 text-[#a0a0ab] text-[16px] w-full">One $99 plan can generate $50k+ in engaged pipeline revenue.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] relative shrink-0 text-[#6397f7] text-[44px] tracking-[-2px] w-full">∞</p>
      <Frame7 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#131316] h-[247px] relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full" data-name="card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[32px] py-[24px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function CardColumn1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-[506px] items-start min-h-px min-w-px relative" data-name="card column">
      <Card2 />
      <Card3 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[12px] h-[530px] items-center p-[12px] relative rounded-[24px] shrink-0 w-full max-w-[1240px]" data-name="content">
      <TextColumn />
      <CardColumn />
      <CardColumn1 />
    </div>
  );
}

function BlueBg() {
  return (
    <div className="bg-[#2952e8] content-stretch flex flex-col gap-[10px] items-center justify-center py-[88px] px-[16px] relative shrink-0 w-full" data-name="blue bg">
      <Content />
      <div className="bg-[#d9d9d9] h-[45px] shrink-0 w-full max-w-[1188px]" />
    </div>
  );
}

export default function ByTheNumbers() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-center justify-center p-[16px] relative size-full" data-name="By the numbers">
      <BlueBg />
    </div>
  );
}