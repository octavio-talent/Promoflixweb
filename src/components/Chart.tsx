import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Chart() {
  const [activeBar, setActiveBar] = useState<number | null>(null);
  
  const data = [
    { month: 'Jan', value: 45, color: '#6927DA' },
    { month: 'Feb', value: 70, color: '#1470EF' },
    { month: 'Mar', value: 35, color: '#F23D94' },
    { month: 'Apr', value: 85, color: '#21CCEE' },
    { month: 'May', value: 60, color: '#6927DA' },
    { month: 'Jun', value: 95, color: '#1470EF' },
    { month: 'Jul', value: 50, color: '#F23D94' },
    { month: 'Aug', value: 80, color: '#21CCEE' },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-black/5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-black">Revenue Growth</h3>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[rgba(108,111,118,0.12)]" />
          <div className="w-3 h-3 rounded-full bg-[rgba(108,111,118,0.12)]" />
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-[#46484d]">
          <span>100K</span>
          <span>70K</span>
          <span>60K</span>
          <span>50K</span>
          <span>40K</span>
          <span>30K</span>
          <span>20K</span>
          <span>0</span>
        </div>

        {/* Chart bars */}
        <div className="ml-12 h-full flex items-end justify-between gap-4">
          {data.map((item, index) => {
            const heightPercent = item.value;
            
            return (
              <motion.div
                key={item.month}
                className="flex-1 relative cursor-pointer"
                onHoverStart={() => setActiveBar(index)}
                onHoverEnd={() => setActiveBar(null)}
                initial={{ height: 0 }}
                animate={{ height: `${heightPercent}%` }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-full rounded-t-lg relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(180deg, ${item.color} 0%, ${item.color}CC 100%)`,
                    height: '100%'
                  }}
                  animate={{
                    opacity: activeBar === null || activeBar === index ? 1 : 0.5
                  }}
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Tooltip */}
                {activeBar === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-lg z-10"
                  >
                    ${item.value}K
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-black" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* X-axis labels */}
        <div className="ml-12 mt-4 flex justify-between text-xs text-[#46484d]">
          {data.map((item) => (
            <span key={item.month} className="flex-1 text-center">{item.month}</span>
          ))}
        </div>
      </div>

      {/* Animated dot indicator */}
      <motion.div
        className="absolute top-4 right-4 w-4 h-4 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
