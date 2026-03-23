import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import imgCard from "figma:asset/5d8f57ee4941b650c85279eaadd6bb33b2bc9e13.png";
import imgCard1 from "figma:asset/63009462ad19defa07d94dd82a2f3e74960b61c2.png";
import imgCard2 from "figma:asset/5bf3272c40ece984daf4895a6dea0a31319e6bd6.png";
import imgCard3 from "figma:asset/c966e74ab3f8f0aebe590359645736dd02146ef4.png";
import imgCard4 from "figma:asset/f38e4cc31ea6c9d6fde38f5af824d752abee16ed.png";
import imgCard5 from "figma:asset/a06262fe2ea05c8beb973d432f11447dacfa4019.png";

const industries = [
  {
    industry: 'Coaches & Consultants',
    title: '"We Miss You!" Offer',
    description: 'Send an exclusive offer to past patients to bring them back through your doors.',
    images: [imgCard, imgCard1, imgCard2],
  },
  {
    industry: 'Dental Clinic',
    title: 'Welcoming a New Policyholder',
    description: "Personally thank clients and reassure them you'll be there for every step ahead.",
    images: [imgCard3, imgCard4, imgCard5],
  },
  {
    industry: 'Legal',
    title: 'Lead Follow-Up',
    description: 'Instantly respond to online inquiries with a personal video that stands out.',
    images: [imgCard3, imgCard4, imgCard5],
  },
  {
    industry: 'Mortgage Brokers',
    title: 'Welcoming a New Policyholder',
    description: "Personally thank clients and reassure them you'll be there for every step ahead.",
    images: [imgCard3, imgCard4, imgCard5],
  },
];

// Auto-scrolling single image with 16:9 ratio
function AutoImageSlider({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2800);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length]);

  const goTo = (idx: number) => {
    setActiveIndex(idx);
    startTimer();
  };

  return (
    <div className="flex flex-col gap-3">
      {/* 16:9 image container */}
      <div
        className="relative w-full rounded-[14px] overflow-hidden shadow-[0px_4px_24px_0px_rgba(0,0,0,0.14)]"
        style={{ paddingBottom: '56.25%' /* 16:9 */ }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/20 backdrop-blur-[6px] rounded-full w-14 h-14 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <path d="M6.5 4.5l10 5.5-10 5.5V4.5z" />
            </svg>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20">
          <motion.div
            key={activeIndex}
            className="h-full bg-white"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.8, ease: 'linear' }}
          />
        </div>
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex gap-2 justify-center">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === activeIndex ? 20 : 8,
                height: 8,
                background: i === activeIndex ? '#2952e8' : '#d4d4d8',
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface HowTeamsSectionProps {
  onSendExampleClick?: () => void;
}

export default function HowTeamsSection({ onSendExampleClick }: HowTeamsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i - 1 + industries.length) % industries.length);
  const next = () => setCurrentIndex((i) => (i + 1) % industries.length);

  const visibleCount = 3;
  const visibleIndustries = Array.from(
    { length: visibleCount },
    (_, i) => industries[(currentIndex + i) % industries.length]
  );

  return (
    <div className="bg-white w-full py-[88px] px-6 md:px-10">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-[600px]">
            <p className="font-['Geist:semibold',sans-serif] leading-[1.5] text-[#2952e8] text-[14px] uppercase">
              Industries
            </p>
            <h2
              className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] text-[#18181b] tracking-[-2px]"
              style={{ fontSize: 'clamp(28px, 3.2vw, 44px)' }}
            >
              See how teams like yours use Promoflix
            </h2>
            <p className="font-['Geist:regular',sans-serif] leading-[1.5] text-[#70707b] text-[16px] max-w-[400px]">
              100+ industries. Any business that relies on outreach can transform with personalized video.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-4 items-start shrink-0 mt-1">
            <button
              onClick={prev}
              className="bg-white rounded-[12px] w-[56px] h-[56px] flex items-center justify-center border border-[#131316] hover:bg-gray-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-[#131316]" strokeWidth={2.5} />
            </button>
            <button
              onClick={next}
              className="bg-[#2952e8] rounded-[12px] w-[56px] h-[56px] flex items-center justify-center hover:bg-[#1e3fb8] transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleIndustries.map((item, i) => (
              <motion.div
                key={`${currentIndex}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4"
              >
                <AutoImageSlider images={item.images} />
                <div className="flex flex-col gap-1">
                  <p className="font-['Geist:medium',sans-serif] text-[#2952e8] text-[16px] leading-[1.5]">
                    {item.industry}
                  </p>
                  <p className="font-['Geist:medium',sans-serif] text-[#18181b] text-[16px] leading-[1.5]">
                    {item.title}
                  </p>
                  <p className="font-['Geist:regular',sans-serif] text-[#70707b] text-[16px] leading-[1.5]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#fafafa] rounded-[12px] border border-[#3a6ef2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
          <div className="flex flex-col gap-1">
            <p className="font-['Geist:medium',sans-serif] text-[#182053] text-[16px] leading-[1.5]">
              Don't see your industry?
            </p>
            <p className="font-['Geist:regular',sans-serif] text-[#70707b] text-[16px] leading-[1.5]">
              Get a real example of a Promoflix-enhanced email.
            </p>
          </div>
          <button
            onClick={onSendExampleClick}
            className="relative bg-[#2952e8] rounded-[8px] shrink-0 cursor-pointer hover:bg-[#1e3fb8] transition-colors"
          >
            <div className="flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit]">
              <span className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic text-[#fcfcfc] text-[16px] whitespace-nowrap">
                Send me example
              </span>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          </button>
        </div>
      </div>
    </div>
  );
}
