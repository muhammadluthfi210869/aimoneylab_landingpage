import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export const RealityBridge: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-obsidian relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Copywriting "Samparan Realita" */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="space-y-10"
                >
                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight text-center">
                        Ini Roadmap 30 Hari yang Anda Cari.
                    </h2>

                    {/* The Warning */}
                    <div className="space-y-4">
                        <p className="text-red-500 font-bold text-xl flex items-center justify-center gap-2 uppercase tracking-wide">
                            <AlertTriangle className="w-6 h-6" />
                            Tapi Saya Peringatkan:
                        </p>
                        <div className="bg-white/5 border-l-4 border-red-500 p-6 rounded-r-xl">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                <span className="text-white font-bold">Tau "Caranya" ≠ Punya "Duitnya".</span>
                                <br /><br />
                                Silakan kalau mau coba jalan sendiri modal Notion ini. Tapi saat Anda stuck teknis di Hari ke-3, file ini cuma akan jadi sampah digital baru di HP Anda.
                            </p>
                        </div>
                    </div>

                    {/* The Closing */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-6">
                        <p className="text-gray-200 text-lg font-medium leading-relaxed text-center">
                            Jangan naif. <span className="text-gold-400 font-bold">Peta butuh Pemandu.</span> Saya berikan Akses Premium + Panduan Eksekusinya (Video) khusus untuk member di bawah.
                        </p>

                        <a
                            href="https://www.notion.so/OPERASI-CUAN-MUDAH-AI-AIMONEYLAB-28bd65e16f5180049014eeb01a971dc1?source=copy_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                        >
                            <button className="w-full py-4 bg-[#E50914] hover:bg-[#b2070f] text-white font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(229,9,20,0.5)] hover:shadow-[0_0_30px_rgba(229,9,20,0.7)] transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-2 group">
                                <span>Intip Bocoran Database (Uncensored)</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};
