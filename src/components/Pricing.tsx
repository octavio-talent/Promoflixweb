import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useState } from 'react';

export function Pricing() {
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
        'Mobile app access'
      ],
      color: '#1470EF',
      popular: false
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
        'Advanced reporting'
      ],
      color: '#6927DA',
      popular: true
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
        'Dedicated account manager'
      ],
      color: '#F23D94',
      popular: false
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-medium text-black mb-4">
            Choose the Perfect Plan
          </h2>
          <p className="text-lg text-[#46484d] mb-8">
            Start free, upgrade when you need
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-md border border-black/5">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#21CCEE] to-[#1470EF] text-white'
                  : 'text-[#46484d]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-[#6927DA] to-[#F23D94] text-white'
                  : 'text-[#46484d]'
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
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular 
                  ? 'shadow-2xl border-2 border-[#6927DA]' 
                  : 'shadow-lg border border-black/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6927DA] to-[#F23D94] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold text-black mb-2">
                {plan.name}
              </h3>
              <p className="text-[#46484d] text-sm mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-black">
                  ${plan.price[billingCycle]}
                </span>
                <span className="text-[#46484d] ml-2">
                  /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-full font-medium mb-8 transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#6927DA] to-[#F23D94] text-white shadow-lg'
                    : 'bg-black/5 text-black hover:bg-black hover:text-white'
                }`}
              >
                Get Started
              </motion.button>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: `${plan.color}20` }}
                    >
                      <Check size={14} style={{ color: plan.color }} />
                    </div>
                    <span className="text-[#46484d] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
