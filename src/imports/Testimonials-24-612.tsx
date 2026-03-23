function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[48px] relative shrink-0 text-[44px] text-black tracking-[-2px] w-full">What our clients say.</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#535862] text-[20px] tracking-[-0.4px] w-full">Real stories from brands that use Promoflix.AI to scale faster and achieve measurable results.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#3a6ef2] text-[14px] tracking-[-0.28px] uppercase w-full">OUR CLIENTS</p>
      <Frame1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[16px] tracking-[2px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">★★★★★</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[23.8px] not-italic relative shrink-0 text-[#374151] text-[14px] w-full whitespace-pre-wrap">
          <p className="mb-0">{`"Promoflix helped us personalise email`}</p>
          <p className="mb-0">{`responses at a scale we couldn't have`}</p>
          <p className="mb-0">imagined before. Our reply rate tripled in the</p>
          <p>{`first week."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Lucas Bennett</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">CEO, Acme Corp</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[4.8px] relative w-full">
        <div className="bg-[#e5e7eb] rounded-[18px] shrink-0 size-[36px]" data-name="Background" />
        <Container4 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f3f4f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[15.2px] items-start p-[29px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.33px_0.01px_0] rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05)]" data-name="Overlay+Shadow" />
        <Container1 />
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[16px] tracking-[2px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">★★★★★</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[23.8px] not-italic relative shrink-0 text-[#374151] text-[14px] w-full whitespace-pre-wrap">
          <p className="mb-0">{`"Promoflix helped us personalise email`}</p>
          <p className="mb-0">responses and our outbound team saw</p>
          <p className="mb-0">immediate results — this is the future of cold</p>
          <p>{`outreach."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Lucas Bennett</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Head of Sales, TechFlow</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[4.8px] relative w-full">
        <div className="bg-[#e5e7eb] rounded-[18px] shrink-0 size-[36px]" data-name="Background" />
        <Container10 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f3f4f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[15.2px] items-start p-[29px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.33px_0.01px_0] rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05)]" data-name="Overlay+Shadow" />
        <Container7 />
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[16px] tracking-[2px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">★★★★★</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[23.8px] not-italic relative shrink-0 text-[#374151] text-[14px] w-full whitespace-pre-wrap">
          <p className="mb-0">{`"Promoflix helped us personalise email`}</p>
          <p className="mb-0">responses in ways that feel authentic and</p>
          <p className="mb-0">human. Our clients actually respond thinking</p>
          <p>{`we recorded for them."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Lucas Bennett</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">Founder, GrowthLab</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[4.8px] relative w-full">
        <div className="bg-[#e5e7eb] rounded-[18px] shrink-0 size-[36px]" data-name="Background" />
        <Container16 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f3f4f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[15.2px] items-start p-[29px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.33px_0.01px_0] rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05)]" data-name="Overlay+Shadow" />
        <Container13 />
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[51px] items-end px-[130px] py-[60px] relative size-full" data-name="testimonials">
      <Frame />
      <Container />
    </div>
  );
}