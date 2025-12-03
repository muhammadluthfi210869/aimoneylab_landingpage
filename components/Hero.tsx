import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Users, Star, Award, Infinity } from 'lucide-react';

export const Hero: React.FC = () => {
    const whatsappLink = "https://chat.whatsapp.com/KZzbBw3dGxv24qeDn0H3dm";

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm text-gold-400 font-medium tracking-wide uppercase">AI Money Lab Community</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
                    >
                        Berhenti Jadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 bg-300% animate-gradient">Penonton</span>. <br />
                        Mulai Jadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 bg-300% animate-gradient">Pencetak Cuan</span>.
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Sistem lengkap untuk mengubah skill AI menjadi income nyata.
                        Dapatkan 22 Sertifikat, akses ke 100+ Video Premium, dan bergabung dengan 10.000+ Alumni sukses.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-700 text-black font-bold text-lg rounded-full overflow-hidden shadow-[0_0_20px_rgba(247,201,72,0.3)] hover:shadow-[0_0_40px_rgba(247,201,72,0.6)] transition-all duration-300 w-full sm:w-auto"
                        >
                            <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left" />
                            <span className="relative flex items-center justify-center gap-3">
                                Gabung Komunitas
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <button className="group px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-lg rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3 w-full sm:w-auto">
                            <PlayCircle className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                            Lihat Demo
                        </button>
                    </motion.div>

                    {/* Social Proof / Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
                    >
                        {[
                            { icon: Users, label: "Alumni", value: "10.000+" },
                            { icon: PlayCircle, label: "Video Materi", value: "100+" },
                            { icon: Award, label: "Sertifikat", value: "22" },
                            { icon: Infinity, label: "Akses", value: "Seumur Hidup" },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center group cursor-default">
                                <div className="p-3 rounded-2xl bg-white/5 mb-4 group-hover:bg-gold-500/10 transition-colors duration-300">
                                    <stat.icon className="w-6 h-6 text-gold-400" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
