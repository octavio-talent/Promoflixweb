import { useRef, useState } from 'react';
import imgImgPlaceholder from "figma:asset/d1ce0c8ed4ba32b0cb22f4484e4c90649ff6e50b.png";
import imgTopContainer from "figma:asset/4082fab549dc89b83375e04762877da0d51b6d60.png";
import imgImgPlaceholder1 from "figma:asset/e280a99005b9bb91b1d04d38ce2c62feeae447bb.png";
import imgImgPlaceholder2 from "figma:asset/c06da22c98853aa9dd4ede926c7f56cbf166968e.png";

function Stars() {
  return (
    <p style={{ color: '#f59e0b', letterSpacing: '2px', fontSize: '16px' }}>★★★★★</p>
  );
}

function PlayButton() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(8px)',
          borderRadius: '50%',
          width: 64,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 3.293C4.5 2.175 5.755 1.548 6.666 2.207l10.666 7.5c.756.532.756 1.654 0 2.186L6.666 19.393C5.755 20.052 4.5 19.425 4.5 18.307V3.293z"
          />
        </svg>
      </div>
    </div>
  );
}

const testimonials = [
  {
    type: 'text' as const,
    quote:
      '"Promoflix helped us personalize email responses at a scale we couldn\'t have imagined before. Our reply rate tripled in the first week."',
    name: 'Lucas Bennett',
    role: 'CEO, Acme Corp',
    avatar: imgImgPlaceholder,
  },
  {
    type: 'video' as const,
    videoThumb: imgTopContainer,
    name: 'Anna Bennett',
    role: 'Head of Sales, GrowthLab',
    avatar: imgImgPlaceholder1,
  },
  {
    type: 'text' as const,
    quote:
      '"We went from cold to warm in seconds. Clients loved the personal touch — they had no idea it was automated. Absolute game changer."',
    name: 'James Carter',
    role: 'Founder, PipelineX',
    avatar: imgImgPlaceholder2,
  },
  {
    type: 'text' as const,
    quote:
      '"I was skeptical at first but the results spoke for themselves. We closed 3 deals in the first month that had gone cold for weeks."',
    name: 'Sarah Kim',
    role: 'Marketing Director, Elevate Co.',
    avatar: imgImgPlaceholder,
  },
  {
    type: 'video' as const,
    videoThumb: imgTopContainer,
    name: 'Michael Torres',
    role: 'VP Revenue, Vantage Group',
    avatar: imgImgPlaceholder1,
  },
  {
    type: 'text' as const,
    quote:
      '"Our outreach finally feels human again — at a scale no human could actually do. The ROI has been insane."',
    name: 'Emily Ross',
    role: 'CEO, NovaBrand',
    avatar: imgImgPlaceholder2,
  },
  {
    type: 'text' as const,
    quote:
      '"Within two weeks of using Promoflix, we had more booked calls than the entire previous quarter. The personalization is genuinely impressive."',
    name: 'David Park',
    role: 'Sales Lead, TechFlow',
    avatar: imgImgPlaceholder,
  },
];

export default function TestimonialsNew() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    if (Math.abs(walk) > 4) setHasDragged(true);
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  const cardWidth = 320;
  const gap = 16;
  const sidePad = Math.max(24, (typeof window !== 'undefined' ? (window.innerWidth - 1240) / 2 + 24 : 24));

  return (
    <div className="bg-white w-full py-[88px] overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-8 max-w-[1240px] mx-auto mb-10">
        <div className="flex flex-col gap-2 max-w-[560px]">
          <p
            className="font-['Geist:semibold',sans-serif] leading-[1.5] uppercase"
            style={{ color: '#2952e8', fontSize: 14 }}
          >
            Testimonials
          </p>
          <h2
            className="font-['Geist:semibold',sans-serif] leading-[1.3] tracking-[-2px]"
            style={{ color: '#18181b', fontSize: 'clamp(28px, 3.2vw, 44px)' }}
          >
            What our clients say
          </h2>
          <p
            className="font-['Geist:regular',sans-serif] leading-[1.5]"
            style={{ color: '#70707b', fontSize: 18 }}
          >
            Real stories from brands that use Promoflix.AI to scale faster and achieve measurable results.
          </p>
        </div>
        <p
          className="mt-4 font-['Geist:regular',sans-serif] flex items-center gap-1.5"
          style={{ color: '#a1a1aa', fontSize: 13 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
          Drag or scroll to explore
        </p>
      </div>

      {/* Scrollable track */}
      <div style={{ position: 'relative' }}>
        {/* Left fade */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 64,
            background: 'linear-gradient(to right, white, transparent)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 64,
            background: 'linear-gradient(to left, white, transparent)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />

        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          style={{
            display: 'flex',
            gap: gap,
            overflowX: 'auto',
            paddingBottom: 16,
            userSelect: 'none',
            cursor: isDragging ? 'grabbing' : 'grab',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch' as any,
            paddingLeft: 'max(24px, calc((100vw - 1240px) / 2 + 24px))',
            paddingRight: 'max(24px, calc((100vw - 1240px) / 2 + 24px))',
          }}
          className="hide-scrollbar"
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#fafafa',
                borderRadius: 20,
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0,
                width: cardWidth,
                pointerEvents: hasDragged ? 'none' : 'auto',
              }}
            >
              {item.type === 'video' ? (
                <>
                  <div style={{ position: 'relative', height: 200, borderRadius: 16, overflow: 'hidden' }}>
                    <img
                      src={item.videoThumb}
                      alt="Video testimonial"
                      draggable={false}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    <PlayButton />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px' }}>
                    <div style={{ width: 47, height: 47, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                      <img src={item.avatar} alt={item.name} draggable={false} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p className="font-['Geist:medium',sans-serif]" style={{ color: '#18181b', fontSize: 16, lineHeight: 1.5 }}>{item.name}</p>
                      <p className="font-['Geist:regular',sans-serif]" style={{ color: '#70707b', fontSize: 14, lineHeight: 1.5 }}>{item.role}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      background: 'white',
                      borderRadius: 16,
                      boxShadow: '0px 1px 4px 0px rgba(12,12,13,0.05)',
                      padding: 20,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16,
                      flex: 1,
                    }}
                  >
                    <Stars />
                    <p className="font-['Geist:regular',sans-serif]" style={{ color: '#18181b', fontSize: 15, lineHeight: 1.6 }}>
                      {item.quote}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px' }}>
                    <div style={{ width: 47, height: 47, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                      <img src={item.avatar} alt={item.name} draggable={false} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p className="font-['Geist:medium',sans-serif]" style={{ color: '#18181b', fontSize: 16, lineHeight: 1.5 }}>{item.name}</p>
                      <p className="font-['Geist:regular',sans-serif]" style={{ color: '#70707b', fontSize: 14, lineHeight: 1.5 }}>{item.role}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
