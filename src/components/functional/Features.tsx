import { motion } from 'motion/react';
import { BarChart3, Zap, Shield, Users, TrendingUp, Database } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get real-time insights into your sales performance with powerful analytics dashboard.',
      color: '#3a6ef2',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and focus on what matters - closing deals.',
      color: '#6927DA',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption to protect your sensitive customer data.',
      color: '#F23D94',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team using built-in collaboration tools.',
      color: '#21CCEE',
    },
    {
      icon: TrendingUp,
      title: 'Growth Tracking',
      description: 'Monitor your growth metrics and KPIs in beautiful dashboards.',
      color: '#3a6ef2',
    },
    {
      icon: Database,
      title: 'Centralized Data',
      description: 'Keep all your customer data in one secure, accessible place.',
      color: '#6927DA',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Scale Sales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you manage, track, and grow your sales pipeline
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="p-8 bg-white rounded-2xl border border-gray-100 cursor-pointer transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <Icon size={28} style={{ color: feature.color }} />
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 text-sm font-medium flex items-center gap-2"
                  style={{ color: feature.color }}
                >
                  Learn more →
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
