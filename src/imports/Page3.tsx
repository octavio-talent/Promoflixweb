import imgFrame21 from "figma:asset/bba183522eaa8757bbbc15913f6b2300b43fc473.png";

function Frame() {
  return (
    <div className="h-[650px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[rgba(14,49,93,0.4)] inset-0 rounded-[12px]" />
        <iframe 
          className="absolute max-w-none object-cover rounded-[12px] size-full" 
          src="https://www.youtube.com/embed/NQqd6KVBBTY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[1.2] left-[601px] text-[52px] text-white top-[269px] tracking-[-1.04px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀊄
      </p>
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.2] left-[1215px] text-[17px] text-white top-[606px] tracking-[-0.34px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀅊
      </p>
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[1.2] left-[16px] text-[17px] text-white top-[606px] tracking-[-0.34px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀊧
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center px-[130px] py-[60px] relative size-full" data-name="Page 3">
      <p className="font-['Geist:regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#70707b] text-[0px] text-[20px] text-center w-[520px] whitespace-pre-wrap">
        <span className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.5] text-[#18181b]">From one recording to many.</span>
        <span className="leading-[1.5]">{` Discover how PromoFlix personalizes every video for every customer.`}</span>
      </p>
      <Frame />
    </div>
  );
}