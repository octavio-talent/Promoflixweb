import svgPaths from "./svg-fdgifcb44t";

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Watch demo video</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-[693px]">Record one video, let AI personalize and deliver it to every lead</p>
      <div className="bg-white relative rounded-[8px] shrink-0 w-[182px]" data-name="Button">
        <div className="content-stretch flex items-center overflow-clip px-[18px] py-[12px] relative rounded-[inherit] w-full">
          <TextPadding />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2952e8] text-[14px] uppercase whitespace-nowrap">How it works</p>
      <Frame17 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-white border-[#e7e5e4] border-[1.899px] border-solid col-1 h-[100.018px] ml-0 mt-0 rounded-[22.789px] row-1 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] w-[153.193px]" />
      <div className="col-1 ml-[56.97px] mt-[30.39px] overflow-clip relative row-1 size-[40.514px]" data-name="play-circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-2.81%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.6605 35.6605">
              <g id="Icon">
                <path d={svgPaths.p24286a40} stroke="var(--stroke-0, #78716B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.89908" />
                <path d={svgPaths.p3c73a00} stroke="var(--stroke-0, #78716B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.89908" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#e9e7e6] col-1 h-[5.064px] ml-0 mt-0 rounded-[2.532px] row-1 w-[313.982px]" />
      <div className="bg-[#78716b] col-1 h-[5.064px] ml-0 mt-0 rounded-[2.532px] row-1 w-[89.89px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[32.917px] items-center leading-[0] left-[calc(50%-0.01px)] top-[calc(50%+20px)] w-[313.982px]">
      <Group />
      <Group1 />
    </div>
  );
}

function Img() {
  return (
    <div className="bg-[#f9f9f9] h-[286px] min-h-[286px] relative shrink-0 w-full" data-name="img">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start relative shrink-0 w-[186px]">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">01</p>
      <p className="leading-[1.3] relative shrink-0 text-[#18181b] text-[20px] tracking-[-1px] w-full">Upload your video</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
      <Frame1 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[#70707b] text-[16px] w-[min-content]">Record your message once and upload it. One video ia all you need</p>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="text">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[32px] py-[24px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] self-stretch shrink-0 w-[432px]" data-name="card">
      <Img />
      <Text />
    </div>
  );
}

function Variable() {
  return (
    <div className="bg-[#171717] content-stretch flex items-center justify-center px-[4.341px] py-[2.17px] relative rounded-[4.341px] shrink-0" data-name="variable">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[15.193px] text-white whitespace-nowrap">{`{{name}}`}</p>
    </div>
  );
}

function Variable1() {
  return (
    <div className="bg-[#171717] content-stretch flex items-center justify-center px-[4.341px] py-[2.17px] relative rounded-[4.341px] shrink-0" data-name="variable">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[15.193px] text-white whitespace-nowrap">{`{{company}}`}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-center flex flex-wrap gap-[8px_4.341px] items-center relative shrink-0 w-full">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#717680] text-[15.193px] whitespace-nowrap">Hey</p>
      <Variable />
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#717680] text-[15.193px] whitespace-pre">{`I wanted  to reach out about`}</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#717680] text-[15.193px] whitespace-nowrap">{`the role at `}</p>
      <Variable1 />
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#717680] text-[15.193px] whitespace-nowrap">{`I think could be a `}</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[#717680] text-[15.193px] text-ellipsis w-[312.545px] whitespace-nowrap">good fit based on your background. We’re</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] overflow-hidden relative shrink-0 text-[#717680] text-[15.193px] text-ellipsis w-[312.545px] whitespace-nowrap">currently exploring profiles with experience similar</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-start left-[calc(50%+100.33px)] p-[34.727px] rounded-tl-[19.534px] rounded-tr-[19.534px] top-[61.66px] w-[382px]">
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-l-[1.628px] border-r-[1.628px] border-solid border-t-[1.628px] inset-0 pointer-events-none rounded-tl-[19.534px] rounded-tr-[19.534px]" />
      <Frame4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+177.33px)] top-[61.66px]">
      <Frame5 />
      <div className="absolute bg-gradient-to-t from-[#f9f9f9] h-[76px] left-0 to-[rgba(249,249,249,0)] top-[180px] w-[612px]" />
    </div>
  );
}

function Img1() {
  return (
    <div className="bg-[#f9f9f9] h-[286px] min-h-[286px] overflow-clip relative shrink-0 w-full" data-name="img">
      <Group2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">02</p>
      <p className="leading-[1.3] relative shrink-0 text-[#18181b] text-[20px] tracking-[-1px] w-full">Select variables to replace</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="text">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end pb-[32px] pt-[24px] px-[32px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[16px] self-stretch" data-name="card">
      <Img1 />
      <Text1 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[-14.34px] top-[145px]">
      <div className="absolute h-[58.52px] left-[122.66px] top-[145px] w-0">
        <div className="absolute inset-[-0.85%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 59.5203">
            <path d="M0.5 59.0203V0.5" id="Vector 1" stroke="url(#paint0_linear_94_1073)" strokeLinecap="round" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_94_1073" x1="1" x2="1" y1="0.5" y2="59.0203">
                <stop offset="0.0673077" stopColor="#F9F9F9" />
                <stop offset="1" stopColor="#2952E8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[48.447px] left-[136.66px] top-[150px] w-[123px]">
        <div className="absolute inset-[-1.03%_-0.41%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 49.4474">
            <path d={svgPaths.p118a9b00} id="Vector 2" stroke="url(#paint0_linear_94_1085)" strokeLinecap="round" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_94_1085" x1="62.0001" x2="62.0001" y1="0.500114" y2="48.9473">
                <stop offset="0.0673077" stopColor="#F9F9F9" />
                <stop offset="1" stopColor="#2952E8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[48.447px] items-center justify-center left-[-14.34px] top-[150px] w-[123px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[48.447px] relative w-[123px]">
            <div className="absolute inset-[-1.03%_-0.41%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 49.4474">
                <path d={svgPaths.p118a9b00} id="Vector 3" stroke="url(#paint0_linear_94_1080)" strokeLinecap="round" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_94_1080" x1="62.0001" x2="62.0001" y1="0.500114" y2="48.9473">
                    <stop offset="0.0673077" stopColor="#F9F9F9" />
                    <stop offset="1" stopColor="#2952E8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[25.45px] place-items-start relative row-1">
      <div className="bg-white border-[#e7e5e4] border-[1.414px] border-solid col-1 h-[74.456px] ml-0 mt-0 rounded-[15.08px] row-1 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] w-[114.04px]" />
      <div className="col-1 ml-[42.41px] mt-[22.62px] overflow-clip relative row-1 size-[30.159px]" data-name="play-circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0178 27.0178">
              <g id="Icon">
                <path d={svgPaths.p141d9500} stroke="var(--stroke-0, #E7E5E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.88496" />
                <path d={svgPaths.p24c1e4f0} stroke="var(--stroke-0, #E7E5E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.88496" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#e7e5e4] col-1 h-[75.399px] ml-0 mt-0 rounded-[11.31px] row-1 w-[114.04px]" />
      <Group4 />
      <p className="col-1 font-['Geist:Regular',sans-serif] font-normal leading-[1.5] ml-[7.54px] mt-[4.55px] relative row-1 text-[#989797] text-[13.649px] whitespace-nowrap">Maxim</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[25.45px] place-items-start relative row-1">
      <div className="bg-white border-[#e7e5e4] border-[1.414px] border-solid col-1 h-[74.456px] ml-0 mt-0 rounded-[15.08px] row-1 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] w-[114.04px]" />
      <div className="col-1 ml-[42.41px] mt-[22.62px] overflow-clip relative row-1 size-[30.159px]" data-name="play-circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0178 27.0178">
              <g id="Icon">
                <path d={svgPaths.p141d9500} stroke="var(--stroke-0, #E7E5E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.88496" />
                <path d={svgPaths.p24c1e4f0} stroke="var(--stroke-0, #E7E5E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.88496" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#e7e5e4] col-1 h-[75.399px] ml-0 mt-0 rounded-[11.31px] row-1 w-[114.04px]" />
      <Group5 />
      <p className="col-1 font-['Geist:Regular',sans-serif] font-normal leading-[1.5] ml-[7.54px] mt-[4.55px] relative row-1 text-[#78716b] text-[13.649px] whitespace-nowrap">Sarah</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[25.45px] place-items-start relative row-1">
      <div className="bg-white border-[#e7e5e4] border-[1.414px] border-solid col-1 h-[74.456px] ml-0 mt-0 rounded-[15.08px] row-1 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] w-[114.04px]" />
      <div className="col-1 ml-[42.41px] mt-[22.62px] overflow-clip relative row-1 size-[30.159px]" data-name="play-circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0178 27.0178">
              <g id="Icon">
                <path d={svgPaths.p141d9500} stroke="var(--stroke-0, #E7E5E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.88496" />
                <path d={svgPaths.p24c1e4f0} stroke="var(--stroke-0, #E7E5E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.88496" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#e7e5e4] col-1 h-[75.399px] ml-0 mt-0 rounded-[11.31px] row-1 w-[114.04px]" />
      <Group7 />
      <p className="col-1 font-['Geist:Regular',sans-serif] font-normal leading-[1.5] ml-[7.54px] mt-[4.55px] relative row-1 text-[#78716b] text-[13.649px] whitespace-nowrap">James</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[25.45px] place-items-start relative row-1">
      <div className="bg-white border-[#e7e5e4] border-[1.414px] border-solid col-1 h-[74.456px] ml-0 mt-0 rounded-[15.08px] row-1 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] w-[114.04px]" />
      <div className="col-1 ml-[42.41px] mt-[22.62px] overflow-clip relative row-1 size-[30.159px]" data-name="play-circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0178 27.0178">
              <g id="Icon">
                <path d={svgPaths.p141d9500} stroke="var(--stroke-0, #E7E5E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.88496" />
                <path d={svgPaths.p24c1e4f0} stroke="var(--stroke-0, #E7E5E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.88496" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#e7e5e4] col-1 h-[75.399px] ml-0 mt-0 rounded-[11.31px] row-1 w-[114.04px]" />
      <Group11 />
      <p className="col-1 font-['Geist:Regular',sans-serif] font-normal leading-[1.5] ml-[7.54px] mt-[4.55px] relative row-1 text-[#78716b] text-[13.649px] whitespace-nowrap">Maria</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[25.45px] place-items-start relative row-1">
      <div className="bg-white border-[#e7e5e4] border-[1.414px] border-solid col-1 h-[74.456px] ml-0 mt-0 rounded-[15.08px] row-1 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] w-[114.04px]" />
      <div className="col-1 ml-[42.41px] mt-[22.62px] overflow-clip relative row-1 size-[30.159px]" data-name="play-circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0178 27.0178">
              <g id="Icon">
                <path d={svgPaths.p141d9500} stroke="var(--stroke-0, #E7E5E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.88496" />
                <path d={svgPaths.p24c1e4f0} stroke="var(--stroke-0, #E7E5E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.88496" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#e7e5e4] col-1 h-[75.399px] ml-0 mt-0 rounded-[11.31px] row-1 w-[114.04px]" />
      <Group13 />
      <p className="col-1 font-['Geist:Regular',sans-serif] font-normal leading-[1.5] ml-[7.54px] mt-[4.55px] relative row-1 text-[#78716b] text-[13.649px] whitespace-nowrap">Alex</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[18.198px] items-center leading-[0] left-[calc(50%-5.5px)] top-[48px]">
      <Group3 />
      <Group8 />
      <Group6 />
      <Group10 />
      <Group12 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[71.66px] top-[204px]">
      <div className="absolute bg-white border-[#e7e5e4] border-[1.243px] border-solid h-[65.462px] left-[71.66px] rounded-[13.258px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] top-[204px] w-[100.265px]" />
      <div className="absolute left-[108.95px] overflow-clip size-[26.516px] top-[223.89px]" data-name="play-circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.7543 23.7543">
              <g id="Icon">
                <path d={svgPaths.p3d8bfe00} stroke="var(--stroke-0, #E7E5E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65728" />
                <path d={svgPaths.p1e570700} stroke="var(--stroke-0, #E7E5E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65728" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[71.66px] top-[204px]">
      <Group15 />
    </div>
  );
}

function Group9() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-5.5px)] top-[48px]">
      <Group17 />
      <Frame8 />
      <Group14 />
    </div>
  );
}

function Img2() {
  return (
    <div className="bg-[#f9f9f9] h-[286px] min-h-[286px] overflow-clip relative shrink-0 w-full" data-name="img">
      <Group9 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">03</p>
      <p className="leading-[1.3] relative shrink-0 text-[#18181b] text-[20px] tracking-[-1px] w-full">Get customized videos</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="text">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end pb-[32px] pt-[24px] px-[32px] relative size-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[16px] self-stretch" data-name="card">
      <Img2 />
      <Text2 />
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="absolute bg-white border border-[#e7e5e4] border-solid left-[27.33px] overflow-clip rounded-[10px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] size-[48px] top-[119px]" data-name="Featured icon">
      <div className="absolute left-[11px] overflow-clip size-[24px] top-[11px]" data-name="mail-02">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-4.69%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5001 17.5">
              <path d={svgPaths.p3bd60df0} id="Icon" stroke="var(--stroke-0, #78716B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f6f6f3] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0edec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[7px] items-center px-[12px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #85E13A)" id="Ellipse 8" r="4" />
            </svg>
          </div>
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#78716b] text-[14px] whitespace-nowrap">sarah@acme.co</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#f6f6f3] content-stretch flex gap-[7px] items-center px-[12px] py-[4px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f0edec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #85E13A)" id="Ellipse 8" r="4" />
        </svg>
      </div>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#78716b] text-[14px] whitespace-nowrap">james@corp.io</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f6f6f3] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f0edec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[7px] items-center px-[12px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #F79009)" id="Ellipse 8" r="4" />
            </svg>
          </div>
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#78716b] text-[14px] whitespace-nowrap">maria@start.com</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f6f6f3] content-stretch flex gap-[7px] items-center px-[12px] py-[4px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f0edec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D4CEC9)" id="Ellipse 8" r="4" />
        </svg>
      </div>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#78716b] text-[14px] whitespace-nowrap">alex@design.co</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[160.33px] top-[61px] w-[149px]">
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[27.33px] top-[61px]">
      <FeaturedIcon />
      <div className="absolute h-[60px] left-[75.33px] top-[76px] w-[86px]">
        <div className="absolute inset-[-0.83%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.0278 60.9999">
            <path d={svgPaths.p2d7f2f00} id="Vector 4" stroke="var(--stroke-0, #D0F8AB)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[58px] items-center justify-center left-[75.33px] top-[154px] w-[86px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[58px] relative w-[86px]">
            <div className="absolute inset-[-0.86%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.0268 58.9999">
                <path d={svgPaths.p1035d400} id="Vector 6" stroke="var(--stroke-0, #D4CEC9)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[21px] left-[75.33px] top-[121px] w-[86px]">
        <div className="absolute inset-[-2.38%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.0151 22">
            <path d={svgPaths.pf9e3e80} id="Vector 7" stroke="var(--stroke-0, #D0F8AB)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[18px] items-center justify-center left-[75.33px] top-[148px] w-[86px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[18px] relative w-[86px]">
            <div className="absolute inset-[-2.78%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 19">
                <path d={svgPaths.p1de46400} id="Vector 8" stroke="var(--stroke-0, #FEDF89)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame15 />
    </div>
  );
}

function Img3() {
  return (
    <div className="bg-[#f9f9f9] h-[286px] min-h-[286px] relative shrink-0 w-full" data-name="img">
      <Group16 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[1.5] min-w-full relative shrink-0 text-[#2952e8] text-[14px] uppercase w-[min-content]">04</p>
      <p className="leading-[1.3] relative shrink-0 text-[#18181b] text-[20px] tracking-[-1px] w-[130px]">Auto-send via email</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#f9f9f9] h-[181px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-end pb-[32px] pt-[24px] px-[32px] relative size-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[467px] items-start min-h-px min-w-px overflow-clip relative rounded-[16px]" data-name="card">
      <Img3 />
      <Text3 />
    </div>
  );
}

function Tiles() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="tiles">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center max-w-[1240px] relative shrink-0 w-full" data-name="container">
      <Frame16 />
      <Tiles />
    </div>
  );
}

export default function HowItWorksAkaSolution() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-end p-[120px] relative size-full" data-name="How it works aka solution">
      <Container />
    </div>
  );
}