import { motion } from 'motion/react';
import { Chart } from './Chart';
import imgImage from "figma:asset/1c502a327a165915c618448cfa55faf0094b7365.png";

export function Hero({ opacity }: { opacity: any }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[62.5px] top-0 w-[1300px] h-full">
          <div className="absolute bg-[rgba(108,111,118,0.06)] h-full left-[50px] top-0 w-[2px]" />
          <div className="absolute bg-[rgba(108,111,118,0.06)] h-full left-[1248px] top-0 w-[2px]" />
          <div className="absolute border-t border-[rgba(108,111,118,0.06)] h-[2px] left-0 top-[62px] w-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <div className="border border-black/10 rounded-full px-6 py-2 backdrop-blur-sm">
                <p className="text-sm font-medium text-black">
                  Join +1000 scaling business
                </p>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-6xl font-medium tracking-tight text-black leading-tight">
                The Smartest Way to Bring Best ROI for Sales
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-[#46484d] leading-relaxed"
            >
              The smarter way to manage sales starts with using tools that streamline every step of the process
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-full overflow-hidden bg-gradient-to-r from-[#21CCEE] via-[#1470EF] via-[#6927DA] to-[#F23D94]"
              >
                <div className="relative z-10 flex items-center gap-2 text-white font-medium">
                  <motion.span
                    animate={{ y: [0, -40, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Get 14 Days Free Trial
                  </motion.span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#100202] to-[#100202] opacity-0 group-hover:opacity-10 transition-opacity" />
              </motion.button>
              
              <p className="text-sm text-[#46484d] text-center">
                No Credit Card Required
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Chart/Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: -5.69 }}
              className="relative"
            >
              <Chart />
              
              {/* Dashboard Preview */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-12 bg-[#fafafa] rounded-3xl p-8 shadow-xl"
              >
                <img 
                  src={imgImage} 
                  alt="Dashboard Preview" 
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
