import imgImage21 from "figma:asset/63fbce83f9ad0c67fc60e4318d20b2a521cc77f0.png";
import imgImage25 from "figma:asset/608ebc8aade03bec9545e5277ce957036c26f3c7.png";

function Frame() {
  return (
    <div className="bg-[#e4e4e7] content-stretch flex flex-col font-['Geist:regular',sans-serif] gap-[4px] items-center leading-[1.5] not-italic relative shrink-0 text-[16px]">
      <p className="relative shrink-0 text-[#065dc5]">Why Promoflix?</p>
      <p className="relative shrink-0 text-[#0e315d]">Numbers don’t lie</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#212121] text-[20px] tracking-[-1px]">Standard E-mail</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#535862] text-[16px] w-[min-content] whitespace-pre-wrap">A standard email feels generic and mass‑sent, so it blends in, lacks personal connection, and gets low responses.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full">
      <div className="h-[347px] relative shrink-0 w-[1252px]" data-name="image 21">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage21} />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#212121] text-[96px]">7%</p>
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#007aff] text-[72px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀄨
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#cecece] text-[96px]">2%</p>
      <p className="font-['SF_Pro:Semibold',sans-serif] font-semibold relative shrink-0 text-[#cecece] text-[36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀄫
      </p>
      <Frame9 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[1.3] p-[24px] relative tracking-[-1px] w-full">
          <Frame7 />
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#696969] text-[20px]">avg reply rate</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[436px] items-start justify-center overflow-clip p-[24px] relative rounded-[16px] shrink-0 w-[600px]">
      <p className="font-['Geist:Medium',sans-serif] font-['Geist:SemiBold',sans-serif] font-medium font-semibold leading-[0] relative shrink-0 text-[0px] text-[20px] text-black tracking-[-1px] w-full whitespace-pre-wrap">
        <span className="leading-[1.3] text-[#007aff]">Promoflix AI</span>
        <span className="leading-[1.3]">{` `}</span>
        <span className="leading-[1.3] text-[#696969]">{`grabs `}</span>
        <span className="leading-[1.3] text-[#212121]">attention instantly, leverages our natural memory for faces, builds emotional connection,</span>
        <span className="leading-[1.3]">{` `}</span>
        <span className="leading-[1.3] text-[#696969]">and shows you’ve put in real effort so the recipient feels special.</span>
      </p>
    </div>
  );
}

function Img() {
  return (
    <div className="bg-white h-[436px] overflow-clip relative rounded-[16px] shrink-0 w-[644px]" data-name="img">
      <div className="absolute bottom-[-0.25px] h-[379.249px] left-[157px] pointer-events-none rounded-tl-[29.952px] rounded-tr-[29.952px] w-[323.716px]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-tl-[29.952px] rounded-tr-[29.952px] size-full" src={imgImage25} />
        <div aria-hidden="true" className="absolute border-[#f4f4f5] border-l-[11.232px] border-r-[11.232px] border-solid border-t-[11.232px] inset-[-11.232px_-11.232px_0_-11.232px] rounded-tl-[41.184px] rounded-tr-[41.184px]" />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1252px]">
      <Frame2 />
      <Img />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-[436px] items-end relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame4 />
      <Frame6 />
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[36px] items-center justify-center px-[130px] py-[60px] relative size-full" data-name="Page 2">
      <Frame />
      <Frame8 />
    </div>
  );
}