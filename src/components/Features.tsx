import { motion } from 'motion/react';
import { BarChart3, Database, Zap, Shield, Users, TrendingUp } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights into your sales performance with real-time analytics and reporting.',
      color: '#1470EF'
    },
    {
      icon: Database,
      title: 'Centralized Data',
      description: 'Keep all your customer data in one secure place, accessible from anywhere.',
      color: '#6927DA'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and focus on what matters - closing deals.',
      color: '#21CCEE'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security to protect your sensitive data.',
      color: '#F23D94'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team with built-in collaboration tools.',
      color: '#1470EF'
    },
    {
      icon: TrendingUp,
      title: 'Growth Tracking',
      description: 'Monitor your growth metrics and KPIs in beautiful, easy-to-understand dashboards.',
      color: '#6927DA'
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#21CCEE] to-[#1470EF] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#6927DA] to-[#F23D94] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-medium text-black mb-4">
            Everything You Need to Scale Sales
          </h2>
          <p className="text-lg text-[#46484d] max-w-2xl mx-auto">
            Powerful features designed to help you manage, track, and grow your sales pipeline
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-black/5 hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}10 100%)` 
                  }}
                >
                  <Icon size={28} style={{ color: feature.color }} />
                </motion.div>

                <h3 className="text-xl font-semibold text-black mb-3 group-hover:bg-gradient-to-r group-hover:from-[#21CCEE] group-hover:to-[#6927DA] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {feature.title}
                </h3>
                
                <p className="text-[#46484d] leading-relaxed">
                  {feature.description}
                </p>

                <motion.div
                  className="mt-6 flex items-center text-sm font-medium"
                  style={{ color: feature.color }}
                  whileHover={{ x: 5 }}
                >
                  Learn more →
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
