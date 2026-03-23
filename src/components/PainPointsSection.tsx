import { Mail, Eye, Video, Zap } from 'lucide-react';

const painPoints = [
  {
    icon: Mail,
    title: '"Personal" emails that fool no one',
    description: 'Your emails feel "personalized," but everyone can tell they\'re mass produced.',
  },
  {
    icon: Eye,
    title: 'Opened, skimmed… and forgotten',
    description: 'Leads open your messages, skim for a second, and forget you immediately.',
  },
  {
    icon: Video,
    title: 'Personal video doesn\'t scale',
    description: 'Personal videos convert better, but recording one by one doesn\'t scale at all.',
  },
  {
    icon: Zap,
    title: 'Automation that kills authenticity',
    description: 'Automation saves time, but it strips away the authenticity people respond to.',
  },
];

export default function PainPointsSection() {
  return (
    <div className="bg-[#fafafa] w-full py-[88px] px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-8">
        {/* Section Header */}
        <h2
          className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] text-[#18181b] tracking-[-2px]"
          style={{ fontSize: "clamp(32px, 3.5vw, 44px)" }}
        >
          The problem with modern outreach
        </h2>

        {/* Cards Grid + Banner */}
        <div className="flex flex-col gap-3">
          {/* 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] p-4 flex flex-col gap-4"
                >
                  {/* Icon */}
                  <div className="bg-[#2952e8] p-[10px] rounded-[8px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] w-fit">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <p className="font-['Geist:semibold',sans-serif] not-italic text-[#18181b] text-[20px] leading-[1.5]">
                      {point.title}
                    </p>
                    <p className="font-['Geist:Regular',sans-serif] font-normal text-[#70707b] text-[15px] leading-[1.5]">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="bg-white rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] p-4 flex items-center justify-center">
            <p className="font-['Geist:semibold',sans-serif] leading-[1.3] not-italic text-[#18181b] text-[20px] tracking-[-1px] text-center whitespace-nowrap">
              You should not have to choose between scale and being human
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
