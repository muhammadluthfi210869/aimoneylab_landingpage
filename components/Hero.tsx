import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number; size: number }>>([]);
    const controls = useAnimation();
    const { scrollY } = useScroll();

    // Parallax effects - disabled on mobile for performance
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -50]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    useEffect(() => {
        // Generate fewer particles on mobile for performance
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 12 : 25;

        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 3,
            duration: 4 + Math.random() * 6,
            size: 1 + Math.random() * 2,
        }));
        setParticles(newParticles);

        // Start animations
        controls.start('visible');
    }, [controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3,
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
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const headlineVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6">
            {/* Premium Background Layers */}
            <div className="absolute inset-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(247,201,72,0.08),transparent)]" />

                {/* Animated Gradient Orbs - Smaller on mobile */}
                <motion.div
                    className="absolute top-[10%] left-[-10%] sm:left-[5%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gold-500/15 rounded-full blur-[100px] sm:blur-[180px]"
                    style={{ y: y1 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-[10%] right-[-10%] sm:right-[10%] w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-purple-600/10 rounded-full blur-[100px] sm:blur-[160px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.08, 0.15, 0.08],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                />
                {/* Central gold glow */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-gold-500/5 rounded-full blur-[80px] sm:blur-[100px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Floating Particles - Enhanced */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-gold-400 rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, Math.random() * 30 - 15, 0],
                        opacity: [0, 0.7, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Grid Pattern Overlay - Hidden on mobile */}
            <div className="hidden sm:block absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }} />

            {/* Main Content */}
            <motion.div
                className="relative z-10 max-w-6xl mx-auto py-16 sm:py-20 text-center"
                style={{ opacity, y: y2 }}
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Main Headline - Responsive sizing */}
                    <motion.div variants={headlineVariants} className="mb-6 sm:mb-8">
                        <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-3 text-shadow">
                            <span className="text-white block">Jago Prompting,</span>
                            <span className="block relative">
                                <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                                    Tapi Dompet Masih Kering?
                                </span>
                                {/* Glowing underline effect */}
                                <motion.span
                                    className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent rounded-full"
                                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subheadline with Problem Statement */}
                    <motion.div variants={itemVariants} className="mb-5 sm:mb-6 space-y-2 sm:space-y-3">
                        <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl mx-auto px-2">
                            99% pengguna AI terjebak hype karena cuma jago teknis tapi{' '}
                            <span className="text-red-400 font-semibold relative">
                                buta cara menjual
                                <motion.span
                                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-red-400/50"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 1.5, duration: 0.6 }}
                                />
                            </span>.
                        </p>
                        <p className="text-white/70 text-sm sm:text-base md:text-lg font-light">
                            Jadilah 1% yang beda.
                        </p>
                    </motion.div>

                    {/* Value Proposition */}
                    <motion.div variants={itemVariants} className="mb-6 sm:mb-8 px-2">
                        <div className="inline-block p-px rounded-xl sm:rounded-2xl bg-gradient-to-r from-gold-500/20 via-gold-400/10 to-gold-500/20">
                            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-black/80 backdrop-blur-sm">
                                Kami tidak ajarkan prompt baru, kami ajarkan cara{' '}
                                <span className="text-gold-400 font-bold">memaksa pasar membeli</span> hasil prompt Anda.
                            </p>
                        </div>
                    </motion.div>

                    {/* Tagline */}
                    <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
                        <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white/50 text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                            <span className="relative">
                                TANPA TEORI RUMIT
                                <motion.span
                                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                />
                            </span>
                            <motion.span
                                className="hidden sm:block w-2 h-2 bg-gold-500 rounded-full"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="relative">
                                100% STRATEGI JUALAN
                                <motion.span
                                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                />
                            </span>
                        </div>
                    </motion.div>

                    {/* CTA Button - Now links to Telegram */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center gap-4 sm:gap-5"
                    >
                        <motion.a
                            href="https://t.me/+3xm_72adFXc5NWRl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-black font-bold text-sm sm:text-base md:text-lg tracking-wide rounded-full overflow-hidden shadow-gold-glow transition-all duration-500"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 80px -10px rgba(247, 201, 72, 0.6)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Animated shine effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                                animate={{
                                    x: ['-200%', '200%'],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    ease: 'easeInOut',
                                }}
                            />

                            <span className="relative z-10">BONGKAR RAHASIANYA</span>
                            <motion.div
                                className="relative z-10"
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </motion.div>
                        </motion.a>

                        {/* Sub CTA Text */}
                        <motion.p
                            variants={itemVariants}
                            className="text-white/40 text-[10px] sm:text-xs md:text-sm font-medium tracking-widest uppercase"
                        >
                            Pelajari kenapa 99% gagal
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Decorative Corner Elements - Hidden on mobile */}
            <motion.div
                className="hidden sm:block absolute top-[15%] left-[10%] w-24 h-24 border border-gold-500/10 rounded-full"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                className="hidden sm:block absolute bottom-[20%] right-[8%] w-16 h-16 border border-gold-500/10 rounded-full"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[#0a0a0a] via-black/80 to-transparent pointer-events-none" />
        </section>
    );
};
