import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';

export const IdentityShift: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Evolusi <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300">Karir & Bisnis</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Jangan biarkan diri Anda tertinggal. Lihat perbedaannya ketika Anda menguasai AI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* The Old Way */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-transparent rounded-t-3xl" />
                        <h3 className="text-2xl font-bold text-gray-300 mb-6 flex items-center gap-3">
                            <XCircle className="text-red-500" />
                            Cara Lama (Manual)
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Menghabiskan jam kerja untuk tugas repetitif",
                                "Stuck ide konten & copywriting",
                                "Biaya operasional tinggi untuk tim besar",
                                "Lambat merespon tren pasar",
                                "Penghasilan terbatas pada jam kerja"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                                    <XCircle className="w-5 h-5 text-red-500/50 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* The New Way */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-3xl bg-gradient-to-b from-gold-900/20 to-black border border-gold-500/30 backdrop-blur-sm relative group hover:border-gold-500/50 transition-colors"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-t-3xl" />
                        <div className="absolute -inset-1 bg-gold-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                            <CheckCircle className="text-gold-400" />
                            Cara AI (Otomatis)
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            {[
                                "Selesaikan pekerjaan seharian dalam hitungan menit",
                                "Ide tanpa batas, konten siap dalam detik",
                                "Tim lean, profit margin lebih tebal",
                                "Selalu satu langkah di depan kompetitor",
                                "Income stream berjalan 24/7 dengan automasi"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-200">
                                    <CheckCircle className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
