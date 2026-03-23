import svgPaths from "./svg-6qliq648r8";
import imgOriginalLogo from "figma:asset/c2b10a66c9a06b0bf91cd7f627bcbb337569e1e6.png";
import imgCleanShot20260310At1310112X1 from "figma:asset/9616b03aaed6a5b7477a8c809cd88f81369f1f5e.png";

function Logo() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Logo">
      <div className="absolute left-0 size-[39.481px] top-0" data-name="Original logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[201.08%] left-[-395.7%] max-w-none top-[-55.91%] w-[732.26%]" src={imgOriginalLogo} />
        </div>
      </div>
      <div className="absolute left-[0.52px] size-[39.481px] top-0">
        <div className="absolute inset-[0_-6.33%_-12.66%_-6.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.4805 44.4805">
            <g filter="url(#filter0_ddiii_94_244)" id="Ellipse 1">
              <mask fill="white" id="path-1-inside-1_94_244">
                <path d={svgPaths.p35349600} />
              </mask>
              <path d={svgPaths.p35349600} fill="var(--fill-0, #3D70F2)" />
              <path d={svgPaths.p35349600} mask="url(#path-1-inside-1_94_244)" stroke="url(#paint0_linear_94_244)" strokeWidth="3.33333" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.9805" id="filter0_ddiii_94_244" width="44.4805" x="-1.19209e-07" y="-2.5">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.833333" />
                <feGaussianBlur stdDeviation="0.416667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_94_244" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect2_dropShadow_94_244" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.66667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0" />
                <feBlend in2="effect1_dropShadow_94_244" mode="normal" result="effect2_dropShadow_94_244" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_94_244" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="-2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="shape" mode="normal" result="effect3_innerShadow_94_244" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                <feBlend in2="effect3_innerShadow_94_244" mode="normal" result="effect4_innerShadow_94_244" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect5_innerShadow_94_244" />
                <feOffset />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="effect4_innerShadow_94_244" mode="normal" result="effect5_innerShadow_94_244" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_94_244" x1="22.2403" x2="22.2403" y1="1.19209e-07" y2="39.4805">
                <stop stopColor="white" stopOpacity="0.12" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function LogoWrap() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[40px]" data-name="Logo wrap">
      <Logo />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Login</p>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Try for free →</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="bg-white content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        <TextPadding />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-[#2952e8] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[8px] relative rounded-[inherit]">
          <TextPadding1 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function NavWrap() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav wrap">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
        <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">How it works</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
        <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Pricing</p>
      </div>
      <Actions />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.1] min-w-full relative shrink-0 text-[#18181b] text-[54px] tracking-[-1.08px] w-[min-content]">Turn one video into thousands of personal conversations</p>
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] relative shrink-0 text-[#70707b] text-[20px] w-[578px]">Promoflix helps sales and marketing teams send personalized video outreach that actually gets replies without recording over and over again.</p>
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Try it free</p>
    </div>
  );
}

function TextPadding3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">See real example</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Actions">
      <div className="bg-[#2952e8] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit]">
          <TextPadding2 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip px-[18px] py-[12px] relative rounded-[inherit]">
          <TextPadding3 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[582px]">
      <Frame />
      <Actions1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[48px] items-center left-[136px] top-[149px]">
      <Frame1 />
      <div className="h-[498px] relative shrink-0 w-[610px]" data-name="CleanShot 2026-03-10 at 13.10.11@2x 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[101.64%] left-[-14.71%] max-w-none top-[-0.93%] w-[127.96%]" src={imgCleanShot20260310At1310112X1} />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="bg-white relative size-full" data-name="Hero section">
      <div className="absolute bottom-0 h-[751px] left-1/2 pointer-events-none top-[19px]">
        <div className="-translate-x-1/2 backdrop-blur-[3px] bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-between max-w-[1240px] p-[12px] pointer-events-auto rounded-[8px] sticky top-0 w-[1240px]" data-name="Navbar">
          <div aria-hidden="true" className="absolute border border-[#f4f4f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo">
            <LogoWrap />
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[25px] text-black whitespace-nowrap">Promoflix</p>
          </div>
          <NavWrap />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}