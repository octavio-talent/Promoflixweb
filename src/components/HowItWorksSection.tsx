import { useState } from 'react';
import { motion } from 'motion/react';
import FigmaCard3 from '../imports/Img';

type IllustrationFn = () => JSX.Element;

// ─── Illustrations ─────────────────────────────────────────────────────────────

function Card1Illustration() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        background: '#f9f9f9',
      }}
    >
      {/* Video player mock */}
      <div style={{ position: 'relative', width: 154, height: 100 }}>
        <div
          style={{
            background: 'white',
            border: '1.9px solid #e7e5e4',
            borderRadius: 22,
            boxShadow: '0 1px 4px rgba(12,12,13,0.05)',
            width: '100%',
            height: '100%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="17" stroke="#78716B" strokeWidth="1.9" />
            <path d="M14 11.5l11 6.5-11 6.5V11.5z" stroke="#78716B" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      {/* Progress bar */}
      <div
        style={{
          position: 'relative',
          height: 5,
          borderRadius: 3,
          width: 220,
          background: '#e9e7e6',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: 90,
            background: '#78716b',
            borderRadius: 3,
          }}
        />
      </div>
    </div>
  );
}

function Card2Illustration() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: '#f9f9f9',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'white',
          border: '1.6px solid #e7e5e4',
          borderRadius: '20px 20px 0 0',
          padding: '20px 28px',
          width: 340,
          maxWidth: '90%',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 6px', alignItems: 'center', fontSize: 13 }}>
          <span style={{ color: '#717680' }}>Hey</span>
          <span
            style={{
              background: '#171717',
              color: 'white',
              fontSize: 12,
              padding: '2px 6px',
              borderRadius: 4,
              fontFamily: 'monospace',
            }}
          >
            {'{{name}}'}
          </span>
          <span style={{ color: '#717680' }}>I wanted to reach out about the role at</span>
          <span
            style={{
              background: '#171717',
              color: 'white',
              fontSize: 12,
              padding: '2px 6px',
              borderRadius: 4,
              fontFamily: 'monospace',
            }}
          >
            {'{{company}}'}
          </span>
          <span style={{ color: '#717680' }}>I think could be a good fit based on your background...</span>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 64,
          background: 'linear-gradient(to top, #f9f9f9, transparent)',
        }}
      />
    </div>
  );
}

function Card3Illustration() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <FigmaCard3 />
    </div>
  );
}

function Card4Illustration() {
  const emails = [
    { dot: '#85E13A', email: 'sarah@acme.co' },
    { dot: '#85E13A', email: 'james@corp.io' },
    { dot: '#F79009', email: 'maria@start.com' },
    { dot: '#D4CEC9', email: 'alex@design.co' },
  ];
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        background: '#f9f9f9',
      }}
    >
      {/* Mail icon */}
      <div
        style={{
          background: 'white',
          border: '1px solid #e7e5e4',
          borderRadius: 10,
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 1px 4px rgba(12,12,13,0.05)',
        }}
      >
        <svg fill="none" viewBox="0 0 22 18" width="20" height="16">
          <path
            d="M20.25 14.75L13.607 8.75M7.893 8.75L1.25 14.75M0.75 3.75l8.165 5.715c.661.463.992.694 1.351.784.318.079.65.079.968 0 .36-.09.69-.321 1.351-.784L20.75 3.75M5.55 16.75h15.4c1.68 0 2.52 0 3.162-.327.564-.288 1.023-.747 1.311-1.311C26.75 14.47 26.75 13.63 26.75 11.95V5.55c0-1.68 0-2.52-.327-3.162A3 3 0 0 0 25.112 1.077C24.47.75 23.63.75 21.95.75H5.55c-1.68 0-2.52 0-3.162.327A3 3 0 0 0 1.077 2.388C.75 3.03.75 3.87.75 5.55v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C3.03 16.75 3.87 16.75 5.55 16.75z"
            stroke="#78716B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Arrow */}
      <svg width="32" height="60" fill="none" viewBox="0 0 32 80" style={{ flexShrink: 0 }}>
        {[8, 24, 44, 60].map((y, i) => (
          <path key={i} d={`M0 40 Q16 40 32 ${y}`} stroke="#2952E8" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        ))}
      </svg>

      {/* Email list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {emails.map((e, i) => (
          <div
            key={i}
            style={{
              background: '#f6f6f3',
              border: '1px solid #f0edec',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 12px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: e.dot,
                flexShrink: 0,
              }}
            />
            <span style={{ color: '#78716b', fontSize: 12, fontFamily: 'sans-serif', whiteSpace: 'nowrap' }}>{e.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Card Data ─────────────────────────────────────────────────────────────────

interface CardData {
  step: string;
  title: string;
  description: string;
  Illustration: IllustrationFn;
}

const cards: CardData[] = [
  {
    step: '01',
    title: 'Upload your video',
    description: 'Record your message once and upload it. One video is all you need.',
    Illustration: Card1Illustration,
  },
  {
    step: '02',
    title: 'Select variables to replace',
    description: 'Mark personalization tokens like {{name}} and {{company}} in your script.',
    Illustration: Card2Illustration,
  },
  {
    step: '03',
    title: 'Get customized videos',
    description: 'AI renders a unique version of your video for every lead automatically.',
    Illustration: Card3Illustration,
  },
  {
    step: '04',
    title: 'Auto-send via email',
    description: "Personalized videos are delivered to each prospect's inbox on your behalf.",
    Illustration: Card4Illustration,
  },
];

// ─── Main Component ────────────────────────────────────────────────────────────

interface HowItWorksSectionProps {
  onWatchDemoClick?: () => void;
}

export default function HowItWorksSection({ onWatchDemoClick }: HowItWorksSectionProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white w-full py-[88px] px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div className="flex flex-col gap-1 max-w-[700px]">
            <p
              className="font-['Geist:semibold',sans-serif] uppercase leading-[1.5]"
              style={{ color: '#2952e8', fontSize: 14 }}
            >
              How it works
            </p>
            <h2
              className="font-['Geist:semibold',sans-serif] leading-[1.3] tracking-[-2px]"
              style={{ color: '#18181b', fontSize: 'clamp(26px, 3.2vw, 44px)' }}
            >
              Record one video, let AI personalize<br className="hidden md:block" /> and deliver it to every lead
            </h2>
          </div>
          <button
            onClick={onWatchDemoClick}
            style={{ position: 'relative', flexShrink: 0, alignSelf: 'flex-start' }}
            className="bg-white rounded-[8px] px-[18px] py-[12px] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="font-['Geist:semibold',sans-serif] text-[#3f3f46] text-[16px] whitespace-nowrap">
              Watch demo video
            </span>
            <div className="absolute inset-0 pointer-events-none rounded-[8px] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
            <div aria-hidden="true" className="absolute border border-[#d5d7da] inset-0 pointer-events-none rounded-[8px]" />
          </button>
        </div>

        {/* Cards row */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'stretch', overflow: 'hidden' }}>
          {cards.map((card, i) => {
            const isHovered = hovered === i;
            const isShrunken = hovered !== null && !isHovered;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                initial={{
                  width: 280,
                  minWidth: 280,
                  maxWidth: 280,
                }}
                animate={{
                  width: isHovered ? 432 : isShrunken ? 200 : 280,
                  minWidth: isHovered ? 432 : isShrunken ? 200 : 280,
                  maxWidth: isHovered ? 432 : isShrunken ? 200 : 280,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 16,
                  overflow: 'hidden',
                  background: '#f9f9f9',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {/* Illustration */}
                <div style={{ position: 'relative', height: 286, flexShrink: 0, overflow: 'hidden', background: '#f9f9f9' }}>
                  <card.Illustration />
                </div>

                {/* Text */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    padding: '24px 32px 32px',
                    flex: 1,
                    justifyContent: 'flex-end',
                  }}
                >
                  <p
                    className="font-['Geist:semibold',sans-serif] uppercase leading-[1.5]"
                    style={{ color: '#2952e8', fontSize: 14 }}
                  >
                    {card.step}
                  </p>
                  <p
                    className="font-['Geist:semibold',sans-serif] leading-[1.3] tracking-[-1px]"
                    style={{
                      color: '#18181b',
                      fontSize: 20,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {card.title}
                  </p>
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p
                      className="font-['Geist:regular',sans-serif] leading-[1.5]"
                      style={{ color: '#70707b', fontSize: 15, marginTop: 4 }}
                    >
                      {card.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}