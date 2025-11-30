import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { GoldButton } from './ui/GoldButton';

export const OfferStack: React.FC = () => {
    return (
        <section className="py-24 px-4 relative overflow-hidden bg-obsidian">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-gray-900/50 to-obsidian" />

            <div className="max-w-6xl mx-auto relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch">

                    {/* SISI KIRI: The "Inventory" */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.02] backdrop-blur-sm border-l border-y border-white/10 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl p-8 md:p-12 flex flex-col justify-center"
                    >
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight">
                            FULL ACCESS PASS
                        </h3>

                        <div className="space-y-8">
                            <InventoryItem
                                num="01"
                                title="THE CORE CURRICULUM"
                                desc="100+ Video Studi Kasus & Strategi Teknis."
                            />
                            <InventoryItem
                                num="02"
                                title="MONETIZATION SUITE (22 MODULES)"
                                desc="Blueprint Copy-Paste untuk Jasa, Produk Digital & Konten."
                            />
                            <InventoryItem
                                num="03"
                                title="CERTIFIED SKILL BADGE"
                                desc="Validasi keahlian untuk portofolio klien."
                            />
                            <InventoryItem
                                num="04"
                                title="THE INNER CIRCLE"
                                desc="Akses seumur hidup ke komunitas praktisi."
                            />
                            <InventoryItem
                                num="05"
                                title="MONTHLY TACTICAL UPDATES"
                                desc="Materi baru setiap bulan, gratis selamanya."
                            />
                        </div>
                    </motion.div>

                    {/* SISI KANAN: The "Deal" */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-gray-900 to-obsidian border border-gold-500/30 rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl p-8 md:p-12 relative shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col justify-center"
                    >
                        <div className="absolute top-0 right-0 bg-gold-500 text-black text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">
                            Early Bird Offer
                        </div>

                        <div className="mb-10 text-center lg:text-left">
                            <p className="text-gray-500 text-lg line-through decoration-red-500/50 decoration-2 mb-2">
                                Total Value: Rp 4.000.000
                            </p>
                            <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-2">
                                Rp 500.000
                            </h2>
                            <p className="text-gold-400 font-medium tracking-wide uppercase text-sm">
                                Sekali Bayar. Akses Selamanya.
                            </p>
                        </div>

                        <div className="bg-white/5 rounded-xl p-4 mb-8 border border-white/5">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="text-green-400 shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase mb-1">30-Day Money Back Guarantee</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        "Jika materinya 'sampah', uang Anda kembali 100%."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://aimoneylab.id/register?ref=LUTHFI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                        >
                            <GoldButton fullWidth className="text-lg md:text-xl py-6 shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transition-shadow">
                                AMANKAN AKSES SAYA SEKARANG &gt;&gt;
                            </GoldButton>
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const InventoryItem: React.FC<{ num: string; title: string; desc: string }> = ({ num, title, desc }) => (
    <div className="flex gap-6 items-start group">
        <span className="text-gold-500 font-bold text-xl tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
            {num}
        </span>
        <div className="border-b border-white/5 pb-6 w-full group-last:border-none group-last:pb-0">
            <h4 className="text-white font-bold text-lg mb-1 tracking-wide group-hover:text-gold-200 transition-colors">
                {title}
            </h4>
            <p className="text-gray-500 text-sm font-medium">
                {desc}
            </p>
        </div>
    </div>
);