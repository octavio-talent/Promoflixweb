import svgPaths from "./svg-0mmfg0wtoe";
import imgImgPlaceholder from "figma:asset/d1ce0c8ed4ba32b0cb22f4484e4c90649ff6e50b.png";
import imgTopContainer from "figma:asset/4082fab549dc89b83375e04762877da0d51b6d60.png";
import imgImgPlaceholder1 from "figma:asset/e280a99005b9bb91b1d04d38ce2c62feeae447bb.png";
import imgImgPlaceholder2 from "figma:asset/c06da22c98853aa9dd4ede926c7f56cbf166968e.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start relative shrink-0 w-full">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">Testimonials</p>
      <p className="leading-[1.3] relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-full">What our clients say</p>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[560px] not-italic relative shrink-0 text-center w-full" data-name="top">
      <Frame />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] relative shrink-0 text-[#70707b] text-[20px] w-full">Real stories from brands that use Promoflix.AI to scale faster and achieve measurable results.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[16px] tracking-[2px] w-full">
        <p className="leading-[normal]">★★★★★</p>
      </div>
    </div>
  );
}

function TopContainer() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full" data-name="Top container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Container2 />
        <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] w-full">
          <p className="leading-[1.5]">{`"Promoflix helped us personalize email responses at a scale we couldn't have imagined before. Our reply rate tripled in the first week."`}</p>
        </div>
      </div>
    </div>
  );
}

function ImageWrap() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[9999px] shrink-0 size-[47px]" data-name="Image wrap">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[999px]" data-name="img placeholder">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
          <div className="absolute bg-[#e5e7eb] inset-0 rounded-[999px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgImgPlaceholder} />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Geist:medium',sans-serif] justify-center relative shrink-0 text-[#18181b] text-[16px]">
        <p className="leading-[1.5]">Lucas Bennett</p>
      </div>
      <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center relative shrink-0 text-[#70707b] text-[14px]">
        <p className="leading-[1.5]">CEO, Acme Corp</p>
      </div>
    </div>
  );
}

function Author() {
  return (
    <div className="relative shrink-0 w-full" data-name="Author">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <ImageWrap />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Testimonial card">
      <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
        <TopContainer />
        <Author />
      </div>
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="play">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="play">
          <path clipRule="evenodd" d={svgPaths.p933d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center left-1/2 rounded-[9999px] size-[64px] top-[calc(50%+0.5px)]" data-name="Button">
      <Play />
    </div>
  );
}

function TopContainer1() {
  return (
    <div className="h-[267px] relative rounded-[16px] shrink-0 w-full" data-name="Top container">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#d9d9d9] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[16px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[16px] size-full" src={imgTopContainer} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Button />
      </div>
    </div>
  );
}

function ImageWrap1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[9999px] shrink-0 size-[47px]" data-name="Image wrap">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[999px]" data-name="img placeholder">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
          <div className="absolute bg-[#e5e7eb] inset-0 rounded-[999px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgImgPlaceholder1} />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Geist:medium',sans-serif] justify-center relative shrink-0 text-[#18181b] text-[16px]">
        <p className="leading-[1.5]">Anna Bennett</p>
      </div>
      <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center relative shrink-0 text-[#70707b] text-[14px]">
        <p className="leading-[1.5]">CEO, Acme Corp</p>
      </div>
    </div>
  );
}

function Author1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Author">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <ImageWrap1 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start p-[4px] relative rounded-[20px] shrink-0 w-[405.333px]" data-name="Testimonial card">
      <TopContainer1 />
      <Author1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[16px] tracking-[2px] w-full">
        <p className="leading-[normal]">★★★★★</p>
      </div>
    </div>
  );
}

function TopContainer2() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full" data-name="Top container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Container5 />
        <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] w-full">
          <p className="leading-[1.5]">{`"Promoflix helped us personalize email responses at a scale we couldn't have imagined before. Our reply rate tripled in the first week. Our reply rate tripled in the first week."`}</p>
        </div>
      </div>
    </div>
  );
}

function ImageWrap2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[9999px] shrink-0 size-[47px]" data-name="Image wrap">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[999px]" data-name="img placeholder">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
          <div className="absolute bg-[#e5e7eb] inset-0 rounded-[999px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgImgPlaceholder2} />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Geist:medium',sans-serif] justify-center relative shrink-0 text-[#18181b] text-[16px]">
        <p className="leading-[1.5]">Lucas Bennett</p>
      </div>
      <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center relative shrink-0 text-[#70707b] text-[14px]">
        <p className="leading-[1.5]">CEO, Acme Corp</p>
      </div>
    </div>
  );
}

function Author2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Author">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <ImageWrap2 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard2() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Testimonial card">
      <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
        <TopContainer2 />
        <Author2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <TestimonialCard />
      <TestimonialCard1 />
      <TestimonialCard2 />
      <div className="absolute bg-gradient-to-l bottom-0 from-[rgba(255,255,255,0)] left-0 to-white top-0 w-[120px]" data-name="gradient left" />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[120px]">
        <div className="-scale-y-100 flex-none h-[346px] rotate-180 w-[120px]">
          <div className="bg-gradient-to-l from-[rgba(255,255,255,0)] size-full to-white" data-name="gradient right" />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1240px] relative shrink-0 w-full" data-name="Container">
      <Top />
      <Container1 />
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center py-[88px] relative size-full" data-name="Testimonials">
      <Container />
    </div>
  );
}