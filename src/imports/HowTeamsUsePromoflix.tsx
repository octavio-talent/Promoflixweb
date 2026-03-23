import svgPaths from "./svg-i1driftx26";
import imgCard from "figma:asset/5d8f57ee4941b650c85279eaadd6bb33b2bc9e13.png";
import imgCard1 from "figma:asset/63009462ad19defa07d94dd82a2f3e74960b61c2.png";
import imgCard2 from "figma:asset/5bf3272c40ece984daf4895a6dea0a31319e6bd6.png";
import imgCard3 from "figma:asset/c966e74ab3f8f0aebe590359645736dd02146ef4.png";
import imgCard4 from "figma:asset/f38e4cc31ea6c9d6fde38f5af824d752abee16ed.png";
import imgCard5 from "figma:asset/a06262fe2ea05c8beb973d432f11447dacfa4019.png";

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#2952e8] text-[14px] uppercase w-[min-content]">Industries</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-[630px]">See how teams like yours use Promoflix</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame25 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#70707b] text-[16px] w-[400px] whitespace-pre-wrap">{`100+  industries. Any business that relies on outreach can transform with personalized video.`}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[13.632px] relative shrink-0 w-[16.638px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6377 13.6318">
        <g id="Group">
          <path d={svgPaths.pacaac00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="bg-[#2952e8] content-stretch flex flex-col items-center justify-center overflow-clip p-[16px] relative rounded-[12px] shrink-0 size-[56px]" data-name="arrow 2">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[13.632px] relative shrink-0 w-[16.638px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6377 13.6318">
        <g id="Group">
          <path d={svgPaths.pacaac00} fill="var(--fill-0, #131316)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrow() {
  return (
    <div className="bg-white relative rounded-[12px] size-[56px]" data-name="arrow 1">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Group1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#131316] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Arrow1 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute h-[400px] left-0 rounded-[16px] top-0 w-[332px]" data-name="card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgCard} />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute h-[400px] left-[48px] pointer-events-none rounded-[16px] top-0 w-[332px]" data-name="card">
      <div aria-hidden="true" className="absolute inset-0 rounded-[16px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgCard1} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a0a0ab] border-solid inset-0 rounded-[16px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[21.27%_21.81%_23.67%_28.97%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.1563 59.4618">
        <g id="Group">
          <path d={svgPaths.p25dafa00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[108px]" data-name="Frame">
      <Group2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute h-[400px] left-[96px] rounded-[16px] top-0 w-[332px]" data-name="card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgCard2} />
      </div>
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a0a0ab] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[400px] relative shrink-0 w-[428px]">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Geist:medium',sans-serif] relative shrink-0 text-[#2952e8] whitespace-nowrap">{`Coaches & Consultants`}</p>
      <p className="font-['Geist:medium',sans-serif] relative shrink-0 text-[#18181b] whitespace-nowrap">{`"We Miss You!" Offer`}</p>
      <div className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b] w-[528px]">
        <p className="mb-0">Send an exclusive offer to past patients to bring</p>
        <p>them back through your doors.</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[-197px] top-0 w-[428px]">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute h-[400px] left-0 rounded-[16px] top-0 w-[332px]" data-name="card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgCard3} />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute h-[400px] left-[48px] pointer-events-none rounded-[16px] top-0 w-[332px]" data-name="card">
      <div aria-hidden="true" className="absolute inset-0 rounded-[16px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgCard4} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a0a0ab] border-solid inset-0 rounded-[16px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[21.27%_21.81%_23.67%_28.97%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.1563 59.4618">
        <g id="Group">
          <path d={svgPaths.p25dafa00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[108px]" data-name="Frame">
      <Group3 />
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute h-[400px] left-[96px] rounded-[16px] top-0 w-[332px]" data-name="card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgCard5} />
      </div>
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a0a0ab] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[400px] relative shrink-0 w-full">
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:medium',sans-serif] relative shrink-0 text-[#18181b] whitespace-nowrap">Welcoming a New Policyholder</p>
      <div className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b] w-[528px]">
        <p className="mb-0">{`Personally thank clients and reassure them you'll be`}</p>
        <p>there for every step ahead.</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Geist:medium',sans-serif] relative shrink-0 text-[#2952e8] whitespace-nowrap">Dental Clinic</p>
      <Frame22 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[279px] top-0 w-[428px]">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute h-[400px] left-0 rounded-[16px] top-0 w-[332px]" data-name="card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgCard3} />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute h-[400px] left-[48px] pointer-events-none rounded-[16px] top-0 w-[332px]" data-name="card">
      <div aria-hidden="true" className="absolute inset-0 rounded-[16px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgCard4} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a0a0ab] border-solid inset-0 rounded-[16px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[21.27%_21.81%_23.67%_28.97%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.1563 59.4618">
        <g id="Group">
          <path d={svgPaths.p25dafa00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[108px]" data-name="Frame">
      <Group4 />
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute h-[400px] left-[96px] rounded-[16px] top-0 w-[332px]" data-name="card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgCard5} />
      </div>
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a0a0ab] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[400px] relative shrink-0 w-full">
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:medium',sans-serif] relative shrink-0 text-[#18181b] whitespace-nowrap">Lead Follow-Up</p>
      <div className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b] w-[528px]">
        <p className="mb-0">Instantly respond to online inquiries with a personal</p>
        <p>video that stands out.</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Geist:medium',sans-serif] h-[24px] relative shrink-0 text-[#2952e8] w-[41px]">Legal</p>
      <Frame23 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[755px] top-0 w-[428px]">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Card9() {
  return (
    <div className="absolute h-[400px] left-0 rounded-[16px] top-0 w-[332px]" data-name="card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgCard3} />
      </div>
    </div>
  );
}

function Card10() {
  return (
    <div className="absolute h-[400px] left-[48px] pointer-events-none rounded-[16px] top-0 w-[332px]" data-name="card">
      <div aria-hidden="true" className="absolute inset-0 rounded-[16px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgCard4} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a0a0ab] border-solid inset-0 rounded-[16px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[21.27%_21.81%_23.67%_28.97%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.1563 59.4618">
        <g id="Group">
          <path d={svgPaths.p25dafa00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[108px]" data-name="Frame">
      <Group5 />
    </div>
  );
}

function Card11() {
  return (
    <div className="absolute h-[400px] left-[96px] rounded-[16px] top-0 w-[332px]" data-name="card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgCard5} />
      </div>
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#a0a0ab] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[400px] relative shrink-0 w-[380px]">
      <Card9 />
      <Card10 />
      <Card11 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:medium',sans-serif] relative shrink-0 text-[#18181b] whitespace-nowrap">Welcoming a New Policyholder</p>
      <div className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b] w-[528px]">
        <p className="mb-0">{`Personally thank clients and reassure them you'll be`}</p>
        <p>there for every step ahead.</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Geist:medium',sans-serif] relative shrink-0 text-[#2952e8] whitespace-nowrap">Mortage brokers</p>
      <Frame24 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[1231px] top-0 w-[380px]">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[576px] relative shrink-0 w-[1462px]">
      <Frame6 />
      <Frame7 />
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[1.5] min-h-px min-w-px not-italic relative text-[16px]">
      <p className="font-['Geist:medium',sans-serif] relative shrink-0 text-[#182053] whitespace-nowrap">Don’t see your industry?</p>
      <p className="font-['Geist:regular',sans-serif] min-w-full relative shrink-0 text-[#70707b] w-[min-content]">Get a real example of a Promoflix-enhanced email.</p>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Send me example</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-between p-[24px] relative rounded-[12px] shrink-0 w-[672px]">
      <div aria-hidden="true" className="absolute border border-[#3a6ef2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame21 />
      <div className="bg-[#2952e8] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit]">
          <TextPadding />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

export default function HowTeamsUsePromoflix() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-center justify-center p-[120px] relative size-full" data-name="How teams use promoflix">
      <Frame11 />
      <Frame8 />
      <Frame20 />
    </div>
  );
}