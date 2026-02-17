import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useState } from 'react';

export function PricingTable() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams',
      price: { monthly: 29, annual: 290 },
      features: [
        'Up to 10 users',
        'Basic analytics',
        'Email support',
        '5GB storage',
        'Mobile app access',
      ],
      popular: false,
      color: '#3a6ef2',
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      price: { monthly: 79, annual: 790 },
      features: [
        'Up to 50 users',
        'Advanced analytics',
        'Priority support',
        '50GB storage',
        'API access',
        'Custom integrations',
        'Advanced reporting',
      ],
      popular: true,
      color: '#6927DA',
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: { monthly: 199, annual: 1990 },
      features: [
        'Unlimited users',
        'Custom analytics',
        '24/7 dedicated support',
        'Unlimited storage',
        'Full API access',
        'Custom integrations',
        'Advanced security',
        'Dedicated account manager',
      ],
      popular: false,
      color: '#F23D94',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start free, upgrade when you need
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-gray-100 rounded-full p-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white shadow-lg text-[#3a6ef2]'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'bg-white shadow-lg text-[#6927DA]'
                  : 'text-gray-600'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              className={`relative p-8 bg-white rounded-2xl ${
                plan.popular
                  ? 'border-2 border-[#6927DA] shadow-2xl'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6927DA] to-[#F23D94] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <motion.span
                  key={billingCycle}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-5xl font-bold text-gray-900"
                >
                  ${plan.price[billingCycle]}
                </motion.span>
                <span className="text-gray-600 ml-2">
                  /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert(`Subscribing to ${plan.name} plan`)}
                className={`w-full py-4 rounded-full font-medium mb-8 transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#6927DA] to-[#F23D94] text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </motion.button>

              <ul className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <motion.li
                    key={fIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: fIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: `${plan.color}20` }}
                    >
                      <Check size={14} style={{ color: plan.color }} />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
