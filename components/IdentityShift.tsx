import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Hourglass, FolderOpen, Target, Settings } from 'lucide-react';

export const IdentityShift: React.FC = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase leading-tight">
            Berhenti Jadi Budak <span className="text-red-500">Hype AI.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
              Mulai Jadi Tuan Atas Profit AI.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: THE TRAP (Jebakan Hype) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-md border border-red-500/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-900" />

            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-900/30 border border-red-500/30 rounded-full mb-6">
              <span className="text-xs font-bold text-red-400 tracking-widest uppercase">THE TRAP</span>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gray-800 rounded-full">
                <User className="text-gray-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-300">The AI "Fanboy"</h3>
                <p className="text-gray-500 text-sm">Rata-rata orang di internet</p>
              </div>
            </div>

            <ul className="space-y-4">
              <ListItem
                icon={<Hourglass className="text-red-400" size={20} />}
                text="Tiap hari stres mengejar update berita AI (FOMO)."
                isBad
              />
              <ListItem
                icon={<FolderOpen className="text-red-400" size={20} />}
                text="Koleksi 1.000+ Prompt canggih, tapi nol eksekusi."
                isBad
              />
              <ListItem
                icon={<span className="text-2xl">😵</span>}
                text="Hasil: PUAS TAPI MISKIN"
                isBad
                highlight
              />
            </ul>
          </motion.div>

          {/* Card 2: THE GOAL (Tanah Perjanjian) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-gradient-to-b from-gold-900/10 to-obsidian border border-gold-500/30 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.1)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600" />

            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-900/30 border border-gold-500/30 rounded-full mb-6">
              <span className="text-xs font-bold text-gold-400 tracking-widest uppercase">THE GOAL</span>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gold-500/20 rounded-full border border-gold-500/30">
                <Briefcase className="text-gold-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">The Smart Operator</h3>
                <p className="text-gold-500/80 text-sm">Member AIMoneyLab</p>
              </div>
            </div>

            <ul className="space-y-4">
              <ListItem
                icon={<Target className="text-gold-500" size={20} />}
                text="Masa bodoh dengan tren, fokus eksploitasi celah profit."
              />
              <ListItem
                icon={<Settings className="text-gold-500" size={20} />}
                text="Cuma butuh 1 Sistem Sederhana yang bekerja 24 jam."
              />
              <ListItem
                icon={<span className="text-2xl">💰</span>}
                text="Hasil: REKENING GENDUT & SANTAI"
                highlight
                gold
              />
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ListItem: React.FC<{ icon: React.ReactNode; text: string; isBad?: boolean; highlight?: boolean; gold?: boolean }> = ({ icon, text, isBad, highlight, gold }) => (
  <li className={`flex items-start gap-3 ${highlight ? 'mt-6 pt-6 border-t border-white/10' : ''}`}>
    <span className="shrink-0 mt-1">{icon}</span>
    <span className={`font-medium leading-relaxed ${isBad ? 'text-gray-400' : 'text-gray-200'} ${gold ? 'text-gold-400 font-bold text-lg' : ''} ${highlight && isBad ? 'text-gray-500 uppercase tracking-wide' : ''} ${highlight && gold ? 'uppercase tracking-wide' : ''}`}>
      {text}
    </span>
  </li>
);