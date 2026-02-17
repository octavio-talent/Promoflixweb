import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: 'This platform has completely transformed how we manage our sales pipeline. The automation features alone have saved us countless hours.',
    },
    {
      name: 'Michael Chen',
      role: 'Sales Director, StartupXYZ',
      image: 'https://i.pravatar.cc/150?img=2',
      rating: 5,
      text: 'The analytics dashboard gives us insights we never had before. We ve increased our conversion rate by 35% since switching.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Sales, Enterprise Inc',
      image: 'https://i.pravatar.cc/150?img=3',
      rating: 5,
      text: 'Outstanding support team and powerful features. This is exactly what we needed to scale our sales operations.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Thousands of Teams
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <Quote size={40} className="text-[#3a6ef2]/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
