import { motion } from 'motion/react';

export function Footer() {
  const links = {
    Product: ['Features', 'Pricing', 'Security', 'Integrations', 'Changelog'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Community', 'API', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses', 'Contact'],
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.h3 
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#21CCEE] to-[#6927DA] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Salix
            </motion.h3>
            <p className="text-white/70 text-sm">
              The smarter way to manage sales and grow your business.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="text-white/70 hover:text-white text-sm transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 Salix. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="text-white/50 hover:text-white text-sm transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient line */}
      <div className="h-2 w-full bg-gradient-to-r from-[#21CCEE] via-[#1470EF] via-[#6927DA] to-[#F23D94] mt-8" />
    </footer>
  );
}
