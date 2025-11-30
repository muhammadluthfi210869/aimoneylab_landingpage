import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, XCircle, CheckCircle, Skull } from 'lucide-react';

export const RealityCheck: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-charcoal border-b border-white/5 relative overflow-hidden">
        
        {/* Decorative Grid - Placed BEFORE connector so it sits behind */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

        {/* Connector from Hero - visual continuation - High Z-Index */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-32 bg-gradient-to-b from-gold-400 to-transparent opacity-80 z-20 shadow-[0_0_20px_rgba(255,215,0,0.4)]"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 pt-16">
        
        {/* Left: Text (The Slap) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-red-500/10 px-3 py-1 rounded text-red-500 text-xs font-bold uppercase tracking-widest border border-red-500/20">
              Reality Check
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-red-900/50 to-transparent"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
            KENAPA SALDO MASIH <span className="text-red-500">NOL BESAR?</span> <br />
            <span className="text-gray-500 text-2xl md:text-3xl font-normal block mt-2">PADAHAL LO TAU AI ITU CANGGIH?</span>
          </h2>
          
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg border-l-2 border-white/10 pl-6">
            <p>
              Lo udah simpan ribuan tutorial di TikTok/IG. Lo udah generate gambar keren di Midjourney. 
              Tapi jujur sama diri sendiri...
            </p>
            <p className="text-white text-xl font-medium">
              Apakah ada <span className="text-gold-400 border-b border-gold-500/50">Rp 100 perak pun masuk rekening?</span>
            </p>
            <p className="font-bold text-2xl text-red-500">
              TIDAK.
            </p>
            <p>
              Karena lo terjebak <strong className="text-white">"Mentalitas Kolektor"</strong>. 
              Pasar gak peduli seberapa jago lo prompting. Pasar cuma peduli seberapa jago lo 
              <span className="bg-gold-500 text-black font-bold px-2 mx-1">MENJUAL HASILNYA.</span>
            </p>
          </div>
        </motion.div>

        {/* Right: The Diagram Visual (The Mirror) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-obsidian rounded-[22px] p-8 relative overflow-hidden">
              
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/10 blur-[80px] rounded-full pointer-events-none"></div>

              {/* Diagram Content */}
              <div className="relative z-10 flex flex-col gap-6">
                  
                  {/* The Trap (Messy) */}
                  <div className="flex items-start gap-5 p-4 rounded-xl bg-red-950/10 border border-red-900/20 group hover:bg-red-950/20 transition-all">
                      <div className="w-12 h-12 bg-red-900/20 rounded-full flex items-center justify-center border border-red-500/30 shrink-0 mt-1">
                          <Skull className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                          <h3 className="text-red-400 font-bold text-lg mb-1 flex items-center gap-2">
                              SITUASI LO SEKARANG
                          </h3>
                          <ul className="text-sm text-gray-500 space-y-2">
                              <li className="flex items-center gap-2"><XCircle size={14} className="text-red-800"/> Koleksi 1TB Prompt (Gak kepake)</li>
                              <li className="flex items-center gap-2"><XCircle size={14} className="text-red-800"/> Nonton Tutorial doang (Gak praktek)</li>
                              <li className="flex items-center gap-2"><XCircle size={14} className="text-red-800"/> Saldo Rekening: <span className="text-red-500 font-mono">Rp 0</span></li>
                          </ul>
                      </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="h-8 w-px bg-white/10"></div>
                  </div>

                  {/* The Vehicle (Clean) */}
                  <div className="flex items-start gap-5 p-4 rounded-xl bg-gold-900/10 border border-gold-500/30 group hover:bg-gold-900/20 transition-all shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                      <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.4)] shrink-0 mt-1">
                          <Rocket className="w-6 h-6 text-black" />
                      </div>
                      <div>
                          <h3 className="text-gold-400 font-bold text-lg mb-1 flex items-center gap-2">
                              AIMONEYLAB SYSTEM
                          </h3>
                          <ul className="text-sm text-gray-300 space-y-2">
                              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-gold-500"/> Fokus "Cairin Duitnya"</li>
                              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-gold-500"/> Tinggal Contek System</li>
                              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-gold-500"/> Outcome: <span className="text-white font-mono font-bold">Recurring Income</span></li>
                          </ul>
                      </div>
                  </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};