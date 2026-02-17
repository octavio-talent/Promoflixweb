import { useState } from 'react';
import { motion } from 'motion/react';
import { Hero } from './functional/Hero';
import { Features } from './functional/Features';
import { PricingTable } from './functional/PricingTable';
import { ComparisonChart } from './functional/ComparisonChart';
import { Testimonials } from './functional/Testimonials';
import { FAQ } from './functional/FAQ';
import { CTASection } from './functional/CTASection';
import { Footer } from './functional/Footer';
import { Navigation } from './functional/Navigation';

export function FunctionalWebsite() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Features />
        <ComparisonChart />
        <PricingTable />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Footer />
      </motion.div>
    </div>
  );
}
