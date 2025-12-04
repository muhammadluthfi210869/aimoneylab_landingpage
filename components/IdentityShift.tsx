import React from 'react';
import { motion, useInView } from 'framer-motion';
import { X, Check, Skull } from 'lucide-react';

export const IdentityShift: React.FC = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section ref={ref} className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-[#080808] overflow-hidden px-4 sm:px-6">
            {/* Premium Background Effects - Smaller on mobile */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Red glow for left side */}
                <motion.div
                    className="absolute top-1/3 left-[-20%] sm:left-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-red-500/8 rounded-full blur-[100px] sm:blur-[180px]"
                    animate={{
                        opacity: [0.05, 0.1, 0.05],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                {/* Green glow for right side bottom */}
                <motion.div
                    className="absolute bottom-1/4 right-[-20%] sm:right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-emerald-500/6 rounded-full blur-[80px] sm:blur-[150px]"
                    animate={{
                        opacity: [0.04, 0.08, 0.04],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                />
            </div>

            {/* Subtle grid pattern - Hidden on mobile */}
            <div className="hidden sm:block absolute inset-0 opacity-[0.015]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: '80px 80px'
            }} />

            <motion.div
                className="relative z-10 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Main Grid: Left Text + Right Cards */}
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-start">

                    {/* LEFT SIDE - Reality Check Text */}
                    <motion.div variants={itemVariants} className="text-center lg:text-left lg:sticky lg:top-32">
                        {/* Badge with pulse animation */}
                        <motion.div
                            className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-red-500/40 bg-red-500/10 mb-6 sm:mb-10 backdrop-blur-sm"
                            whileHover={{ scale: 1.05, borderColor: 'rgba(239, 68, 68, 0.6)' }}
                        >
                            <motion.span
                                className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-500 rounded-full mr-2 sm:mr-3"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-red-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                                Reality Check
                            </span>
                        </motion.div>

                        {/* Main Headline with enhanced styling */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black leading-[1.05] mb-5 sm:mb-8 text-shadow">
                            <span className="text-white block">KENAPA</span>
                            <span className="text-white block">SALDO MASIH</span>
                            <motion.span
                                className="text-red-500 block relative inline-block"
                                animate={{
                                    textShadow: ['0 0 20px rgba(239, 68, 68, 0)', '0 0 40px rgba(239, 68, 68, 0.3)', '0 0 20px rgba(239, 68, 68, 0)']
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                NOL BESAR?
                            </motion.span>
                        </h2>

                        {/* Subtext with better typography */}
                        <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
                            Lo udah simpan ribuan tutorial, tapi nol eksekusi.
                            Apakah ada Rp 100 perak masuk rekening?{' '}
                            <motion.span
                                className="text-red-500 font-bold inline-block"
                                whileHover={{ scale: 1.1 }}
                            >
                                TIDAK.
                            </motion.span>
                        </p>
                    </motion.div>

                    {/* RIGHT SIDE - Stacked Cards */}
                    <div className="flex flex-col gap-5 sm:gap-8">

                        {/* Card 1: The Tutorial Victim */}
                        <motion.div
                            variants={cardVariants}
                            className="relative p-5 sm:p-7 md:p-9 bg-gradient-to-br from-[#121212] to-[#0d0d0d] border border-white/[0.06] rounded-2xl sm:rounded-3xl group"
                        >
                            {/* Card inner glow on hover */}
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex items-start gap-3 sm:gap-5 mb-4 sm:mb-6">
                                {/* Skull Icon */}
                                <motion.div
                                    className="flex items-center justify-center w-10 sm:w-14 h-10 sm:h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl sm:rounded-2xl flex-shrink-0"
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Skull className="w-5 sm:w-7 h-5 sm:h-7 text-white/70" />
                                </motion.div>
                                <div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                                        THE TUTORIAL VICTIM
                                    </h3>
                                    <p className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1">
                                        Situasi Lo Sekarang
                                    </p>
                                </div>
                            </div>

                            <ul className="relative z-10 space-y-3 sm:space-y-4">
                                {[
                                    'Numpuk Teori & Wacana',
                                    'Koleksi Prompt tapi Bingung Jual',
                                ].map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="flex items-center gap-3 sm:gap-4 text-white/60 group/item"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="flex items-center justify-center w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-red-500/10 border border-red-500/20 flex-shrink-0">
                                            <X className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-red-500" />
                                        </div>
                                        <span className="text-sm sm:text-base group-hover/item:text-white/80 transition-colors">{item}</span>
                                    </motion.li>
                                ))}
                                <motion.li
                                    className="flex items-center gap-3 sm:gap-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="flex items-center justify-center w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-red-500/10 border border-red-500/20 flex-shrink-0">
                                        <X className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-red-500" />
                                    </div>
                                    <span className="text-sm sm:text-base">
                                        <span className="text-red-500 font-semibold">Hasil:</span>{' '}
                                        <span className="text-red-500 font-bold">Saldo Rp 0</span>
                                    </span>
                                </motion.li>
                            </ul>
                        </motion.div>

                        {/* Card 2: The Smart Executor with Phone Mockup */}
                        <motion.div
                            variants={cardVariants}
                            className="relative p-5 sm:p-7 md:p-9 bg-gradient-to-br from-[#141414] via-[#101010] to-[#0c0c0c] border border-white/[0.06] rounded-2xl sm:rounded-3xl overflow-hidden group"
                        >
                            {/* Card inner glow on hover */}
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8">
                                {/* Left Content */}
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight mb-1">
                                        THE SMART EXECUTOR
                                    </h3>
                                    <p className="text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                                        Pakai AIMoneyLab Notion
                                    </p>

                                    <ul className="space-y-3 sm:space-y-4">
                                        {[
                                            'Tinggal Contek Roadmap Day 1-30',
                                            'Fokus Jalur Cepat Cair',
                                        ].map((item, idx) => (
                                            <motion.li
                                                key={idx}
                                                className="flex items-center gap-3 sm:gap-4 text-white/70 group/item"
                                                whileHover={{ x: 5 }}
                                            >
                                                <div className="flex items-center justify-center w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                                                    <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-400" />
                                                </div>
                                                <span className="text-sm sm:text-base group-hover/item:text-white/90 transition-colors">{item}</span>
                                            </motion.li>
                                        ))}
                                        <motion.li
                                            className="flex items-center gap-3 sm:gap-4"
                                            whileHover={{ x: 5 }}
                                        >
                                            <div className="flex items-center justify-center w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                                                <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-400" />
                                            </div>
                                            <span className="text-sm sm:text-base">
                                                <span className="text-emerald-400 font-semibold">Hasil:</span>{' '}
                                                <span className="text-emerald-400 font-bold">Pecah Telor Profit</span>
                                            </span>
                                        </motion.li>
                                    </ul>
                                </div>

                                {/* Right: Phone Mockup - Enhanced & Mobile Optimized */}
                                <div className="relative flex-shrink-0 w-full md:w-44 lg:w-52">
                                    {/* Phone Frame */}
                                    <motion.div
                                        className="relative mx-auto w-32 sm:w-40 md:w-full"
                                        whileHover={{ y: -5, rotate: 1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {/* Phone Body */}
                                        <div className="relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[1.5rem] sm:rounded-[2.5rem] p-1.5 sm:p-2.5 shadow-2xl shadow-black/60 border border-white/[0.08]">
                                            {/* Phone Notch */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-4 sm:h-7 bg-[#0a0a0a] rounded-b-xl sm:rounded-b-3xl z-10">
                                                <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-1 sm:h-1.5 bg-[#1a1a1a] rounded-full" />
                                            </div>

                                            {/* Phone Screen */}
                                            <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[2rem] bg-black aspect-[9/19]">
                                                <img
                                                    src="/notion_dashboard.jpg"
                                                    alt="AIMoneyLab Notion Dashboard"
                                                    className="w-full h-full object-cover object-top"
                                                />
                                                {/* Screen Glare Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40" />
                                                {/* Screen reflection */}
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
                                                    animate={{ y: ['100%', '-100%'] }}
                                                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                                                />
                                            </div>

                                            {/* Phone Bottom Bar */}
                                            <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-0.5 sm:h-1 bg-white/10 rounded-full" />
                                        </div>

                                        {/* Glow Effect Behind Phone */}
                                        <motion.div
                                            className="absolute -inset-4 sm:-inset-6 bg-emerald-500/25 rounded-full blur-2xl sm:blur-3xl -z-10"
                                            animate={{
                                                opacity: [0.3, 0.5, 0.3],
                                                scale: [1, 1.1, 1],
                                            }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-emerald-500/5 rounded-full blur-2xl sm:blur-3xl" />
                            <div className="absolute -top-10 -left-10 w-24 sm:w-32 h-24 sm:h-32 bg-emerald-500/3 rounded-full blur-xl sm:blur-2xl" />
                        </motion.div>

                    </div>
                </div>
            </motion.div>

            {/* Bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
};
