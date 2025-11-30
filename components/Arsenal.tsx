import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, PenTool, Target, DollarSign, CheckCircle2 } from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    title: "Foundation: Mindset & Logika",
    subtitle: "Pondasi Berpikir",
    desc: "Benahi mindset. AI bukan magic, tapi alat bisnis. Pahami logikanya, bukan sekedar hafal prompt.",
    icon: Brain,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    id: 2,
    title: "Core Creator Skill",
    subtitle: "Rahasia Profit",
    desc: "Bongkar metode tersembunyi. Ubah output AI standar menjadi aset digital bernilai tinggi yang siap dijual.",
    icon: PenTool,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    id: 3,
    title: "Specialize Your Skill",
    subtitle: "Dominasi Niche",
    desc: "Jangan jadi generalis. Pertajam skill spesifik Anda. Jadilah top 1% expert yang dicari klien mahal.",
    icon: Target,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20"
  },
  {
    id: 4,
    title: "Monetize Your Skill",
    subtitle: "Penguasa Market",
    desc: "Kuasai pasar. Biarkan sistem marketing otomatis bekerja, sementara Anda menikmati hasilnya.",
    icon: DollarSign,
    color: "text-gold-400",
    bg: "bg-gold-500/10",
    border: "border-gold-500/20"
  }
];

export const Arsenal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 px-4 bg-obsidian relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent opacity-50" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-gold-500/30 rounded-full bg-gold-500/5">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-sm font-bold text-gold-400 tracking-widest uppercase">The Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Stop Jadi Korban <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">Hype AI.</span><br />
            Mulai Bangun Karir Nyata.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Gak perlu background IT. Gak perlu pinter coding. <span className="text-white font-medium">Kita mulai dari nol putul sampai Anda bisa jualan.</span>
          </p>
        </motion.div>

        {/* Workflow Timeline */}
        <div className="relative">
          {/* Vertical Line (Background) */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full" />

          {/* Vertical Line (Animated Fill) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[28px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-gold-500 via-amber-500 to-gold-600 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.5)] origin-top"
          />

          <div className="space-y-12 md:space-y-24">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full pl-16 md:pl-0 md:px-12">
                  <div className={`p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border ${step.border} hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden`}>
                    {/* Glow Effect */}
                    <div className={`absolute -right-10 -top-10 w-32 h-32 ${step.bg} blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-700`} />

                    <div className="relative z-10">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg ${step.bg} ${step.color} text-xs font-bold tracking-wider uppercase mb-4`}>
                        {step.subtitle}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                  <div className="w-14 h-14 rounded-full bg-obsidian border-4 border-gray-800 flex items-center justify-center relative shadow-xl">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (idx * 0.2), type: "spring" }}
                      className={`w-full h-full rounded-full flex items-center justify-center ${step.bg}`}
                    >
                      <step.icon size={24} className={step.color} />
                    </motion.div>
                    {/* Pulse Effect */}
                    <div className={`absolute inset-0 rounded-full ${step.bg} animate-ping opacity-20`} />
                  </div>
                </div>

                {/* Empty Space for Layout Balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};