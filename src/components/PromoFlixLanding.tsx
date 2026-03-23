import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import Navbar from './Navbar';
import HeroNew from './HeroNew';
import PainPointsSection from './PainPointsSection';
import HowTeamsSection from './HowTeamsSection';
import HowItWorksSection from './HowItWorksSection';
import ByTheNumbersNew from './ByTheNumbersNew';
import PricingSection from './PricingSection';
import TestimonialsNew from './TestimonialsNew';
import Cta from '../imports/Cta';
import Footer from '../imports/Footer-58-1400';
import { LoginModal } from './LoginModal';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export function PromoFlixLanding() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginMode, setLoginMode] = useState<'login' | 'signup'>('login');
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    const setupInteractivity = () => {
      const buttons = document.querySelectorAll('button, [role="button"], a, [data-name*="Button"], [data-cta-button]');
      
      buttons.forEach((btn) => {
        if (!btn.getAttribute('data-interactive-added')) {
          btn.setAttribute('data-interactive-added', 'true');
          
          btn.addEventListener('click', (e) => {
            const btnText = btn.textContent?.trim() || '';
            const isCtaButton = btn.getAttribute('data-cta-button');
            
            if (isCtaButton === 'login' || btnText.includes('Login')) {
              e.preventDefault();
              e.stopPropagation();
              setLoginMode('login');
              setShowLoginModal(true);
            } else if (
              btnText.includes('Start free') ||
              btnText.includes('free') ||
              btnText.includes('Choose Plan') ||
              btnText.includes('Demo')
            ) {
              e.preventDefault();
              e.stopPropagation();
              setLoginMode('signup');
              setShowLoginModal(true);
            }
            
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
            
            createParticles(e as MouseEvent);
          });
        }
      });
    };

    const createParticles = (e: MouseEvent) => {
      const colors = ['#FFC107', '#4A9EFF', '#FF6B6B', '#4ECDC4'];
      for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.className = 'click-particle';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (Math.PI * 2 * i) / 6;
        const velocity = 100 + Math.random() * 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
      }
    };

    setTimeout(setupInteractivity, 300);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openSignup = () => {
    setLoginMode('signup');
    setShowLoginModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC107] via-[#4A9EFF] to-[#FFC107] origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ 
            background: 'radial-gradient(circle, rgba(255, 193, 7, 0.3) 0%, transparent 70%)',
            top: '10%',
            left: '-10%'
          }}
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Navigation */}
      <motion.div 
        className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-4 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Navbar 
          onLoginClick={() => { setLoginMode('login'); setShowLoginModal(true); }}
          onStartFreeClick={openSignup}
        />
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        className="relative z-10 pt-24 pb-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <HeroNew
          onTryFreeClick={openSignup}
          onSeeExampleClick={openSignup}
        />
      </motion.div>

      {/* Pain Points */}
      <motion.div
        className="relative z-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <PainPointsSection />
      </motion.div>

      {/* How It Works */}
      <motion.div
        id="how-it-works"
        className="relative z-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <HowItWorksSection onWatchDemoClick={openSignup} />
      </motion.div>

      {/* How Teams Use Promoflix */}
      <motion.div
        id="industries"
        className="relative z-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <HowTeamsSection onSendExampleClick={openSignup} />
      </motion.div>

      {/* By the Numbers */}
      <motion.div
        className="relative z-10"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ByTheNumbersNew onEstimateROIClick={openSignup} />
      </motion.div>

      {/* Pricing */}
      <motion.div
        id="pricing"
        className="relative z-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <PricingSection
          onTryFreeClick={openSignup}
          onChoosePlanClick={openSignup}
        />
      </motion.div>

      {/* Testimonials */}
      <motion.div
        className="relative z-10"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <TestimonialsNew />
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Cta />
      </motion.div>

      {/* Footer */}
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <LoginModal onClose={() => setShowLoginModal(false)} initialMode={loginMode} />
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 p-4 bg-black text-white rounded-full shadow-2xl z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}