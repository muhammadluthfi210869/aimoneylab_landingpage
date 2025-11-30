import React from 'react';
import { motion } from 'framer-motion';
import { GoldButton } from './ui/GoldButton';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden flex items-center justify-center text-center">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-gold-600/10 blur-[120px] rounded-full" />
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white mb-12"
            >
                DUA PILIHAN DI DEPAN MATA.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Option 1 */}
                <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-bold text-gray-400 mb-2">PILIHAN 1</h3>
                    <p className="text-gray-500">Tutup tab ini. Balik scroll TikTok. Tonton orang lain jadi kaya dari AI sementara Anda cuma jadi penonton.</p>
                </div>

                 {/* Option 2 */}
                 <div className="p-6 rounded-2xl border border-gold-500/30 bg-gold-900/10 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gold-500" />
                    <h3 className="text-xl font-bold text-white mb-2">PILIHAN 2</h3>
                    <p className="text-gray-200">Klik tombol di bawah. Ambil jalan pintas. Bangun aset digital pertama Anda <span className="text-gold-400 font-bold">MALAM INI JUGA.</span></p>
                </div>
            </div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <GoldButton className="w-full md:w-auto text-xl md:text-2xl py-6 px-12 shadow-[0_0_50px_rgba(255,215,0,0.4)]">
                    [SAYA SIAP UBAH TARAF HIDUP SAYA SEKARANG]
                </GoldButton>
            </motion.div>
            
            <p className="mt-8 text-sm text-gray-600">
                &copy; {new Date().getFullYear()} AIMoneyLab. All Rights Reserved.
            </p>
        </div>
    </section>
  );
};