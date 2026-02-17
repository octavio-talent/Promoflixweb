import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Body from '../imports/Body-5-2927';
import { LoginModal } from './LoginModal';

export function InteractiveBody() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    // Custom cursor tracking
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById('cursor-trail');
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }

      // Magnetic button effect
      const buttons = document.querySelectorAll('.interactive-btn');
      buttons.forEach((btn) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        
        if (distance < 100) {
          const strength = (100 - distance) / 100;
          const moveX = distanceX * strength * 0.2;
          const moveY = distanceY * strength * 0.2;
          (btn as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          (btn as HTMLElement).style.transform = 'translate(0, 0)';
        }
      });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      // Add interactive classes and click handlers
      const buttons = document.querySelectorAll('[data-name*="Link"], [data-name*="Button"], a, button');
      buttons.forEach(btn => {
        btn.classList.add('interactive-btn');
        
        if (!btn.getAttribute('data-interactive-added')) {
          btn.setAttribute('data-interactive-added', 'true');
          btn.addEventListener('click', (e) => {
            // Ripple effect
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e as MouseEvent).clientX - rect.left - size / 2 + 'px';
            ripple.style.top = (e as MouseEvent).clientY - rect.top - size / 2 + 'px';
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);

            // Check for trial/signup buttons
            const btnText = btn.textContent?.trim();
            if (btnText && (
              btnText.includes('14') ||
              btnText.includes('free') ||
              btnText.includes('trial') ||
              btnText.includes('Get') ||
              btnText.includes('Start')
            )) {
              e.preventDefault();
              e.stopPropagation();
              setTimeout(() => setShowLoginModal(true), 100);
            }
          });
        }
      });
      
      // Fade in sections on scroll
      const sections = document.querySelectorAll('[data-name*="Section"]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          section.classList.add('fade-in');
        }
      });

      // Parallax effect for images
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
        if (scrollProgress > 0 && scrollProgress < 1) {
          const parallaxAmount = scrollProgress * 20 - 10;
          img.style.transform = `translateY(${parallaxAmount}px)`;
        }
      });
    };

    // Setup infinite logo carousel
    const setupLogoCarousel = () => {
      const logoSections = document.querySelectorAll('[data-name*="Section"]');
      
      logoSections.forEach((section) => {
        const logos = section.querySelectorAll('img[src*="figma:asset"]');
        
        // Only apply to logo sections (multiple logos)
        if (logos.length >= 3 && logos.length <= 15) {
          const container = logos[0].closest('[data-name*="Div"]');
          if (!container || container.classList.contains('logo-scroll-initialized')) return;
          
          container.classList.add('logo-scroll-initialized');
          const parent = container.parentElement;
          
          if (parent) {
            const wrapper = document.createElement('div');
            wrapper.className = 'logo-scroll-container';
            
            const track = document.createElement('div');
            track.className = 'logo-scroll-track';
            
            // Clone for seamless loop
            const clone1 = container.cloneNode(true) as HTMLElement;
            const clone2 = container.cloneNode(true) as HTMLElement;
            
            track.appendChild(container.cloneNode(true));
            track.appendChild(clone1);
            track.appendChild(clone2);
            
            wrapper.appendChild(track);
            parent.insertBefore(wrapper, container);
            container.remove();
          }
        }
      });
    };

    // Initialize
    setTimeout(() => {
      setupLogoCarousel();
      handleScroll();
    }, 500);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Background gradient animations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(58, 110, 242, 0.1) 0%, transparent 70%)',
            top: '20%',
            left: '10%'
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(242, 61, 148, 0.1) 0%, transparent 70%)',
            bottom: '20%',
            right: '10%'
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Body />
      </div>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <LoginModal onClose={() => setShowLoginModal(false)} />
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[#3a6ef2] to-[#6927DA] text-white rounded-full shadow-2xl"
            style={{ zIndex: 100 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Custom Cursor */}
      <div id="cursor-trail" className="custom-cursor" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left"
        style={{
          background: 'linear-gradient(to right, #3a6ef2, #6927DA, #F23D94)',
          scaleX: useTransform(scrollY, [0, document.documentElement.scrollHeight - window.innerHeight], [0, 1]),
          zIndex: 9999
        }}
      />
    </div>
  );
}