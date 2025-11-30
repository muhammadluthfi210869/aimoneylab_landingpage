import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Saya gaptek, bisa ikut?",
    a: "Bisa. Kalau bisa balas chat WA dan buka YouTube, Anda bisa contek sistem ini. Materi dibuat step-by-step dari nol."
  },
  {
    q: "Butuh Laptop spek dewa?",
    a: "Tidak. 80% materi bisa dikerjakan lewat HP. Untuk materi advance, laptop standar kantor sudah cukup karena AI berjalan di cloud (server), bukan di laptop Anda."
  },
  {
    q: "Apakah ada biaya bulanan?",
    a: "Tidak ada. Cukup bayar satu kali untuk akses selamanya, termasuk update materi di masa depan."
  },
  {
    q: "Kalau bingung tanya kemana?",
    a: "Kami sediakan grup komunitas private. Mentor dan member lain aktif saling bantu setiap hari."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-obsidian border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Pertanyaan Umum</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 rounded-lg overflow-hidden bg-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-200">{faq.q}</span>
                <ChevronDown 
                    className={`text-gold-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};