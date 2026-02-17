import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-2xl shadow-2xl p-4 border border-black/10 max-w-sm"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 hover:bg-black/5 rounded-full transition-colors"
        >
          <X size={16} />
        </button>

        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-white border border-black/10 rounded-lg text-sm font-medium hover:shadow-md transition-shadow"
          >
            Get This Template
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-[#3a6ef2] text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            Unlock 200+ Templates
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-[#141414] text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            Access 4200+ Components
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
