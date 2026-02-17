import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function InteractiveWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effect
  const y = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    // Observe all sections, images, and important elements
    const elements = container.querySelectorAll(
      'section, [data-name*="Section"], [data-name*="Div"], img, button, a, [data-name*="Link"], [data-name*="Button"]'
    );
    
    elements.forEach((el, index) => {
      el.classList.add('fade-in-element');
      // Stagger delay
      (el as HTMLElement).style.animationDelay = `${index * 0.05}s`;
      observer.observe(el);
    });

    // Add hover effects to buttons and links
    const interactiveElements = container.querySelectorAll(
      'button, a, [data-name*="Link"], [data-name*="Button"]'
    );
    
    interactiveElements.forEach((el) => {
      el.classList.add('interactive-element');
    });

    // Add parallax to images
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      img.classList.add('parallax-image');
    });

    // Mouse follow effect
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateFollower = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      const cursor = document.getElementById('custom-cursor');
      if (cursor) {
        cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }

      requestAnimationFrame(animateFollower);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateFollower();

    // Cleanup
    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Custom cursor */}
      <div
        id="custom-cursor"
        className="custom-cursor"
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '2px solid rgba(58, 110, 242, 0.5)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.3s, height 0.3s',
          mixBlendMode: 'difference',
        }}
      />

      {/* Floating gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'linear-gradient(135deg, #21CCEE 0%, #1470EF 100%)',
            top: '10%',
            left: '10%',
            y,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'linear-gradient(135deg, #6927DA 0%, #F23D94 100%)',
            bottom: '10%',
            right: '10%',
            y: useTransform(scrollY, [0, 1000], [0, 100]),
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content with relative positioning */}
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          opacity: useTransform(scrollY, [0, 300], [1, 0]),
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm text-gray-500">Scroll</div>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      {/* Back to top button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#21CCEE] to-[#6927DA] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: useTransform(scrollY, [300, 400], [0, 1]).get() > 0 ? 1 : 0,
          scale: useTransform(scrollY, [300, 400], [0, 1]).get() > 0 ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          opacity: useTransform(scrollY, [300, 400], [0, 1]),
          scale: useTransform(scrollY, [300, 400], [0, 1]),
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
}
