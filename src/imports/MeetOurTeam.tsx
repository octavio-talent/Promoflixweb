function Frame() {
  return (
    <div className="content-stretch flex flex-col font-semibold gap-[4px] items-center relative shrink-0 text-center whitespace-pre-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#3a6ef2] text-[15px] tracking-[-0.3px] uppercase w-full">OUR TEAM</p>
      <p className="font-['Geist:SemiBold',sans-serif] leading-[48px] relative shrink-0 text-[44px] text-black tracking-[-2px] w-full">Meet our team.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[-0.28px]">Image</p>
    </div>
  );
}

function NameDetails() {
  return (
    <div className="bg-white h-[75px] relative shrink-0 w-full" data-name="name details">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.5] not-italic px-[12px] py-[8px] relative size-full text-center whitespace-pre-wrap">
          <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">Lucas Harris</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#5b5c5e] text-[13px] tracking-[-0.26px] w-full">Lead AI Consultant</p>
        </div>
      </div>
    </div>
  );
}

function MeetOurTeam1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[300px]" data-name="meet our team">
      <Frame1 />
      <NameDetails />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[-0.28px]">Image</p>
    </div>
  );
}

function NameDetails1() {
  return (
    <div className="bg-white h-[75px] relative shrink-0 w-full" data-name="name details">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.5] not-italic px-[12px] py-[8px] relative size-full text-center whitespace-pre-wrap">
          <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">Lucas Harris</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#5b5c5e] text-[13px] tracking-[-0.26px] w-full">Lead AI Consultant</p>
        </div>
      </div>
    </div>
  );
}

function MeetOurTeam2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[300px]" data-name="meet our team">
      <Frame3 />
      <NameDetails1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[-0.28px]">Image</p>
    </div>
  );
}

function NameDetails2() {
  return (
    <div className="bg-white h-[75px] relative shrink-0 w-full" data-name="name details">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.5] not-italic px-[12px] py-[8px] relative size-full text-center whitespace-pre-wrap">
          <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">Lucas Harris</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#5b5c5e] text-[13px] tracking-[-0.26px] w-full">Lead AI Consultant</p>
        </div>
      </div>
    </div>
  );
}

function MeetOurTeam3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[300px]" data-name="meet our team">
      <Frame4 />
      <NameDetails2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative shrink-0">
      <MeetOurTeam1 />
      <MeetOurTeam2 />
      <MeetOurTeam3 />
    </div>
  );
}

export default function MeetOurTeam() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[36px] items-center px-[130px] py-[60px] relative size-full" data-name="meet our team">
      <Frame />
      <Frame2 />
    </div>
  );
}