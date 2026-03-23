import svgPaths from "./svg-3e670um79h";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
      <div className="font-['Geist:Bold',sans-serif] font-['Geist:SemiBold',sans-serif] font-bold font-semibold leading-[1.1] min-w-full relative shrink-0 text-[#0a0d12] text-[0px] text-[72px] tracking-[-1.44px] w-[min-content]">
        <p className="mb-[8px]">Record one video</p>
        <p className="text-[#0d121c]">Personalize it for everyone</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#717680] text-[20px] tracking-[-0.4px] w-[593px]">{`Our AI personalizes and delivers your video to every lead, client, and past customer - at scale. `}</p>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Start free →</p>
    </div>
  );
}

function ButtonsButton() {
  return (
    <div className="bg-black relative rounded-[8px] shrink-0" data-name="Buttons/Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[18px] py-[12px] relative rounded-[inherit]">
        <TextPadding />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function PlayCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="play-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_19_2161)" id="play-circle">
          <g id="Icon">
            <path d={svgPaths.p14d24500} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p10ee6280} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_19_2161">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px]">Demo</p>
    </div>
  );
}

function ButtonsButton1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[18px] py-[12px] relative rounded-[inherit]">
        <PlayCircle />
        <TextPadding1 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Actions">
      <ButtonsButton />
      <ButtonsButton1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame />
      <Actions />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <Frame1 />
    </div>
  );
}