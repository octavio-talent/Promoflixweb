import svgPaths from "./svg-3srqy56b4c";
import imgOriginalLogo from "figma:asset/c2b10a66c9a06b0bf91cd7f627bcbb337569e1e6.png";
import imgGradient from "figma:asset/7f055f3a7cbeac14cb7fda6b0358859ef36d7ecc.png";

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[84px]" data-name="column">
      <p className="relative shrink-0 text-[#a0a0ab] w-full">ABOUT</p>
      <p className="relative shrink-0 text-[#fafafa] w-full">How it works</p>
      <p className="relative shrink-0 text-[#fafafa] w-full">Pricing</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[48px]" data-name="column">
      <p className="relative shrink-0 text-[#a0a0ab] w-full">LEGAL</p>
      <p className="relative shrink-0 text-[#fafafa] w-full">Privacy</p>
      <p className="relative shrink-0 text-[#fafafa] w-full">{`Terms `}</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[135px]" data-name="column">
      <p className="relative shrink-0 text-[#a0a0ab] w-full">CONTACT</p>
      <p className="relative shrink-0 text-[#fafafa] w-full">hello@promoflix.com</p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="col-3 content-stretch flex font-['Geist:regular',sans-serif] items-start justify-between justify-self-stretch leading-[1.5] not-italic relative row-1 self-start shrink-0 text-[14px] whitespace-pre-wrap" data-name="footer links">
      <Column />
      <Column1 />
      <Column2 />
    </div>
  );
}

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
            <g filter="url(#filter0_ddiii_58_1439)" id="Ellipse 1">
              <mask fill="white" id="path-1-inside-1_58_1439">
                <path d={svgPaths.p35349600} />
              </mask>
              <path d={svgPaths.p35349600} fill="var(--fill-0, #3D70F2)" />
              <path d={svgPaths.p35349600} mask="url(#path-1-inside-1_58_1439)" stroke="url(#paint0_linear_58_1439)" strokeWidth="3.33333" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.9805" id="filter0_ddiii_58_1439" width="44.4805" x="-1.19209e-07" y="-2.5">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.833333" />
                <feGaussianBlur stdDeviation="0.416667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_58_1439" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect2_dropShadow_58_1439" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.66667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0" />
                <feBlend in2="effect1_dropShadow_58_1439" mode="normal" result="effect2_dropShadow_58_1439" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_58_1439" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="-2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="shape" mode="normal" result="effect3_innerShadow_58_1439" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                <feBlend in2="effect3_innerShadow_58_1439" mode="normal" result="effect4_innerShadow_58_1439" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect5_innerShadow_58_1439" />
                <feOffset />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="effect4_innerShadow_58_1439" mode="normal" result="effect5_innerShadow_58_1439" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_58_1439" x1="22.2403" x2="22.2403" y1="1.19209e-07" y2="39.4805">
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

function LogoWrap1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[40px]" data-name="Logo wrap">
      <Logo />
    </div>
  );
}

function LogoWrap() {
  return (
    <div className="col-[1/span_2] content-stretch flex gap-[12px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="logo wrap">
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo">
        <LogoWrap1 />
      </div>
      <div className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#fafafa] text-[14px] w-[237px] whitespace-pre-wrap">
        <p className="mb-0">{`Record once. `}</p>
        <p>Send personalized videos at scale.</p>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="gap-x-[12px] gap-y-[459px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="main content">
      <FooterLinks />
      <LogoWrap />
    </div>
  );
}

function PromoflixGradient() {
  return (
    <div className="absolute bottom-[-23px] contents left-0 right-[-6px]" data-name="Promoflix gradient">
      <p className="absolute bottom-[253px] font-['Geist:SemiBold',sans-serif] font-semibold leading-none left-[9px] right-[-6px] text-[276px] text-[transparent] tracking-[-5.52px] translate-y-full">Promoflix</p>
      <div className="absolute bottom-0 h-[213px] left-0 right-0" data-name="gradient">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#131316] content-stretch flex flex-col h-[445px] items-center justify-between overflow-clip pb-[12px] relative rounded-[32px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[1240px]" data-name="container">
      <MainContent />
      <PromoflixGradient />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#a0a0ab] text-[14px]">© 2026 Promoflix. All rights reserved.</p>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#131316] content-stretch flex flex-col items-center pt-[80px] px-[130px] relative size-full" data-name="Footer">
      <Container />
    </div>
  );
}