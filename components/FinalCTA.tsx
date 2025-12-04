import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
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

    return (
        <section ref={ref} className="relative py-16 sm:py-28 md:py-36 lg:py-44 bg-[#060606] overflow-hidden px-4 sm:px-6">
            {/* Premium Background Effects - Smaller on mobile */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Central gold glow */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gold-500/8 rounded-full blur-[120px] sm:blur-[200px]"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                {/* Side glows */}
                <motion.div
                    className="absolute top-0 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-gold-600/5 rounded-full blur-[80px] sm:blur-[150px]"
                    animate={{ opacity: [0.03, 0.06, 0.03] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-gold-500/5 rounded-full blur-[100px] sm:blur-[180px]"
                    animate={{ opacity: [0.02, 0.05, 0.02] }}
                    transition={{ duration: 12, repeat: Infinity, delay: 3 }}
                />
            </div>

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(247,201,72,0.05),transparent)]" />

            {/* Subtle grid pattern - Hidden on mobile */}
            <div className="hidden sm:block absolute inset-0 opacity-[0.015]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: '80px 80px'
            }} />

            <motion.div
                className="relative z-10 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Main Headline */}
                <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16 md:mb-20">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight text-shadow"
                        animate={{
                            textShadow: ['0 0 30px rgba(255,255,255,0)', '0 0 60px rgba(255,255,255,0.1)', '0 0 30px rgba(255,255,255,0)'],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        DUA PILIHAN DI DEPAN
                        <br />
                        <span className="relative inline-block">
                            MATA.
                            <motion.span
                                className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent rounded-full"
                                animate={{ opacity: [0.3, 0.7, 0.3] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                            />
                        </span>
                    </motion.h2>
                </motion.div>

                {/* Two Choice Cards */}
                <motion.div
                    variants={itemVariants}
                    className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-14 md:mb-16"
                >
                    {/* PILIHAN 1 - Muted/Dark Card */}
                    <motion.div
                        className="relative p-5 sm:p-7 md:p-9 bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] border border-white/[0.05] rounded-2xl sm:rounded-3xl group"
                    >
                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-5">
                                <span className="text-base sm:text-lg md:text-xl font-bold text-white/60 tracking-wider">
                                    PILIHAN 1
                                </span>
                            </div>
                            <p className="text-white/40 text-xs sm:text-sm md:text-base leading-relaxed text-center">
                                Tutup tab ini. Balik scroll TikTok. Tonton orang lain jadi kaya dari AI sementara Anda cuma jadi penonton.
                            </p>
                        </div>
                    </motion.div>

                    {/* PILIHAN 2 - Gold Highlighted Card */}
                    <motion.div
                        className="relative p-5 sm:p-7 md:p-9 bg-gradient-to-br from-[#1a1508] via-[#131008] to-[#0c0a06] border-2 border-gold-500/40 rounded-2xl sm:rounded-3xl group overflow-hidden"
                        whileHover={{
                            borderColor: 'rgba(247, 201, 72, 0.6)',
                            boxShadow: '0 25px 60px -20px rgba(247, 201, 72, 0.25)'
                        }}
                        animate={{
                            boxShadow: ['0 0 30px -10px rgba(247, 201, 72, 0.1)', '0 0 50px -10px rgba(247, 201, 72, 0.2)', '0 0 30px -10px rgba(247, 201, 72, 0.1)'],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        {/* Animated shimmer effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent -skew-x-12"
                            animate={{ x: ['-200%', '200%'] }}
                            transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                        />

                        {/* Gold glow overlay */}
                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gold-500/10 via-transparent to-transparent opacity-50" />

                        {/* Corner sparkle */}
                        <motion.div
                            className="absolute top-3 sm:top-4 right-3 sm:right-4"
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{ duration: 6, repeat: Infinity }}
                        >
                            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-gold-400/60" />
                        </motion.div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-5">
                                <span className="text-base sm:text-lg md:text-xl font-bold text-gold-400 tracking-wider">
                                    PILIHAN 2
                                </span>
                            </div>
                            <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed text-center">
                                Klik tombol di bawah. Ambil jalan pintas. Bangun aset digital pertama Anda{' '}
                                <motion.span
                                    className="text-gold-400 font-bold inline-block"
                                    animate={{
                                        textShadow: ['0 0 10px rgba(247, 201, 72, 0)', '0 0 20px rgba(247, 201, 72, 0.5)', '0 0 10px rgba(247, 201, 72, 0)'],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    MALAM INI JUGA
                                </motion.span>.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* CTA Button */}
                <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-20">
                    <motion.a
                        href="https://aimoneylab.id/register?ref=LUTHFI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-wide rounded-xl overflow-hidden transition-all duration-500"
                        whileHover={{
                            scale: 1.03,
                            boxShadow: '0 0 80px -10px rgba(247, 201, 72, 0.6)',
                        }}
                        whileTap={{ scale: 0.98 }}
                        animate={{
                            boxShadow: ['0 0 40px -10px rgba(247, 201, 72, 0.3)', '0 0 60px -10px rgba(247, 201, 72, 0.5)', '0 0 40px -10px rgba(247, 201, 72, 0.3)'],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        {/* Animated shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                            animate={{ x: ['-200%', '200%'] }}
                            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                        />

                        {/* Button border glow */}
                        <div className="absolute inset-0 rounded-xl border border-gold-300/50" />

                        <span className="relative z-10 text-center">[SAYA SIAP UBAH TARAF HIDUP SAYA SEKARANG]</span>
                        <motion.div
                            className="relative z-10"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
                        </motion.div>
                    </motion.a>
                </motion.div>

                {/* Footer Copyright */}
                <motion.div variants={itemVariants} className="text-center">
                    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-4 sm:mb-6" />
                    <p className="text-white/25 text-xs sm:text-sm tracking-wider">
                        © 2025 AIMoneyLab. All Rights Reserved.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};
