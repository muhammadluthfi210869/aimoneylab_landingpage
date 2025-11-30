import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const scrollToReality = () => {
    const element = document.getElementById('reality-check');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Memoize particles untuk performa
  const particles = useMemo(() => {
    return [...Array(60)].map((_, i) => {
      const size = Math.random() * 3 + 1;
      const startX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920);
      const startY = Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080);
      const duration = Math.random() * 10 + 8;
      const delay = Math.random() * 5;

      // Variasi warna gold
      const colors = ['#FFD700', '#FDB931', '#FFED4E', '#F4C430', '#FFB800'];
      const color = colors[i % colors.length];

      return {
        id: i,
        size,
        startX,
        startY,
        duration,
        delay,
        color,
        endY: startY - 200 - Math.random() * 150,
        endX: startX + (Math.random() - 0.5) * 80,
      };
    });
  }, []);

  return (
    <section
      className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Fallback Background - Static Gold Texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/5 via-transparent to-transparent opacity-30" aria-hidden="true" />

      {/* Enhanced Gold Dust Particles */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 z-0 hidden sm:block" aria-hidden="true">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full pointer-events-none"
              initial={{
                x: particle.startX,
                y: particle.startY,
                scale: Math.random() * 0.8 + 0.4,
                opacity: Math.random() * 0.7 + 0.3,
              }}
              animate={{
                y: [particle.startY, particle.endY],
                x: [particle.startX, particle.endX],
                opacity: [Math.random() * 0.7 + 0.3, 0],
                scale: [Math.random() * 0.8 + 0.4, 0.1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94], // Bezier curve untuk gerakan natural
                delay: particle.delay,
              }}
              style={{
                width: particle.size + 'px',
                height: particle.size + 'px',
                background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
                boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
                filter: 'blur(0.5px)',
              }}
            />
          ))}
        </div>
      )}

      {/* Mobile: Reduced particles */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 z-0 block sm:hidden opacity-40" aria-hidden="true">
          {particles.slice(0, 20).map((particle) => (
            <motion.div
              key={`mobile-${particle.id}`}
              className="absolute rounded-full pointer-events-none"
              initial={{
                x: particle.startX,
                y: particle.startY,
                opacity: 0.5,
              }}
              animate={{
                y: [particle.startY, particle.endY],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeOut",
                delay: particle.delay,
              }}
              style={{
                width: particle.size + 'px',
                height: particle.size + 'px',
                background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 flex flex-col items-center">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.95] tracking-tighter drop-shadow-2xl max-w-6xl"
        >
          Jago Prompting,{' '}
          <span className="block mt-2 md:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] animate-[shimmer_3s_ease-in-out_infinite]">
            Tapi Dompet Masih Kering?
          </span>
        </motion.h1>

        {/* Subheadline - Structured for Readability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto text-center leading-relaxed font-light space-y-6"
        >
          <p>
            99% pengguna AI terjebak hype karena cuma jago teknis tapi <span className="text-red-400 font-semibold">buta cara menjual</span>.
            <br className="hidden md:block" /> Jadilah 1% yang beda.
          </p>
          <p className="text-white font-medium border-l-2 border-gold-500 pl-4 md:pl-0 md:border-none">
            Kami tidak ajarkan prompt baru, kami ajarkan cara <span className="text-gold-400 font-bold underline decoration-gold-500/30 underline-offset-4">memaksa pasar membeli</span> hasil prompt Anda.
          </p>
          <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest">
            Tanpa teori rumit • 100% Strategi Jualan
          </p>
        </motion.div>

        {/* CTA Button - Discovery Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="pt-10 w-full flex flex-col items-center gap-6"
        >
          <button
            onClick={scrollToReality}
            className="group relative px-10 py-5 bg-transparent border border-gold-500/30 hover:border-gold-400 rounded-full transition-all duration-500 hover:bg-gold-950/30 backdrop-blur-sm"
          >
            <div className="absolute inset-0 rounded-full bg-gold-500/5 blur-md group-hover:bg-gold-500/10 transition-all duration-500" />
            <div className="flex items-center gap-4">
              <span className="text-xl md:text-2xl font-bold text-gold-400 tracking-widest uppercase group-hover:text-gold-300 transition-colors">
                Bongkar Rahasianya
              </span>
              <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/30 group-hover:border-gold-400 transition-colors">
                <ChevronDown className="w-5 h-5 text-gold-400 group-hover:translate-y-1 transition-transform duration-300" />
              </div>
            </div>
          </button>

          <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
            Pelajari kenapa 99% gagal
          </p>
        </motion.div>

      </div>

      {/* Visual Connector - Scroll Indicator */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100px", opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-gold-500 to-gold-400 z-50 shadow-[0_0_15px_rgba(255,215,0,0.8)] hidden md:block"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-16 bg-gold-300 blur-sm" />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 text-gold-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
        >
          <ChevronDown size={32} strokeWidth={3} />
        </motion.div>
      </motion.div>
    </section>
  );
};