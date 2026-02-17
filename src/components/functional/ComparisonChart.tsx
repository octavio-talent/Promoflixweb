import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export function ComparisonChart() {
  const features = [
    { name: 'Real-time Analytics', us: true, others: false },
    { name: 'Unlimited Users', us: true, others: false },
    { name: 'Advanced Automation', us: true, others: true },
    { name: 'Custom Integrations', us: true, others: true },
    { name: 'Priority Support', us: true, others: false },
    { name: 'Mobile App', us: true, others: true },
    { name: 'API Access', us: true, others: false },
    { name: 'White Label', us: true, others: false },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Organizations Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            See how we compare to the competition
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="grid grid-cols-3 bg-gradient-to-r from-[#3a6ef2] to-[#6927DA] text-white p-6">
            <div className="text-lg font-semibold">Features</div>
            <div className="text-center text-lg font-semibold">Salix</div>
            <div className="text-center text-lg font-semibold">Others</div>
          </div>

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`grid grid-cols-3 p-6 border-b border-gray-100 ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } hover:bg-blue-50 transition-colors`}
            >
              <div className="font-medium text-gray-900">{feature.name}</div>
              
              <div className="flex justify-center">
                {feature.us ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                    className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                  >
                    <Check size={20} className="text-green-600" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                    className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"
                  >
                    <X size={20} className="text-red-600" />
                  </motion.div>
                )}
              </div>

              <div className="flex justify-center">
                {feature.others ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                    className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                  >
                    <Check size={20} className="text-green-600" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                    className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"
                  >
                    <X size={20} className="text-red-600" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
