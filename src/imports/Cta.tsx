function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#fafafa] text-[20px] tracking-[-1px] w-full whitespace-pre-wrap">{`Still wandering if Promoflix is for you? `}</p>
    </div>
  );
}

function TextWrap() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[250px]" data-name="text wrap">
      <Frame />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#a0a0ab] text-[16px] w-full whitespace-pre-wrap">Enter your email and we’ll send you a real example.</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#26272b] h-full relative rounded-[8px] shrink-0 w-[296.333px]" data-name="input">
      <div aria-hidden="true" className="absolute border border-[#3f3f46] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#70707b] text-[16px] text-ellipsis whitespace-nowrap">email@example.com</p>
        </div>
      </div>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px]">↗</p>
    </div>
  );
}

function EmailInputWrap() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full" data-name="email input wrap">
      <div className="flex flex-row items-center self-stretch">
        <Input />
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[8px] shrink-0 w-[40px]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        <TextPadding />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function SecondaryCta() {
  return (
    <div className="bg-[#131316] col-3 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="secondary cta">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <TextWrap />
        <EmailInputWrap />
      </div>
    </div>
  );
}

function TextWrap1() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[8px] items-start not-italic relative shrink-0 text-[#fafafa] w-full" data-name="text wrap">
      <p className="leading-[1.5] relative shrink-0 text-[14px] uppercase">GET STARTED</p>
      <p className="leading-[1.3] min-w-full relative shrink-0 text-[44px] tracking-[-2px] w-[min-content] whitespace-pre-wrap">Your customers forgot you. Promoflix helps them remember.</p>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px]">Start free →</p>
    </div>
  );
}

function MainCta() {
  return (
    <div className="bg-[#2952e8] col-[1/span_2] h-[360px] justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="main cta">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <TextWrap1 />
        <div className="bg-white content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
          <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
          <TextPadding1 />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function ContentGrid() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] h-[360px] relative shrink-0 w-[1240px]" data-name="content grid">
      <SecondaryCta />
      <MainCta />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip pb-[136px] pt-[88px] relative rounded-bl-[120px] rounded-br-[120px] shrink-0 w-full max-w-[1512px]" data-name="container">
      <ContentGrid />
    </div>
  );
}

export default function Cta() {
  return (
    <div className="bg-[#131316] content-stretch flex flex-col items-start relative size-full" data-name="CTA">
      <Container />
    </div>
  );
}