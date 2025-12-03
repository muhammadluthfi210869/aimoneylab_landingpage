import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Apakah ini cocok untuk pemula?",
        answer: "Sangat cocok. Kami mendesain kurikulum dari dasar hingga mahir. Bahkan jika Anda belum pernah menggunakan AI sebelumnya, Anda akan dibimbing langkah demi langkah."
    },
    {
        question: "Apa saja yang akan saya pelajari?",
        answer: "Anda akan mempelajari penggunaan ChatGPT untuk bisnis, Midjourney untuk desain, automasi workflow, pembuatan konten viral, hingga strategi monetisasi skill AI Anda."
    },
    {
        question: "Apakah ada biaya bulanan?",
        answer: "Tidak ada. Ini adalah pembayaran satu kali untuk akses seumur hidup (Lifetime Access). Anda juga akan mendapatkan update materi di masa depan tanpa biaya tambahan."
    },
    {
        question: "Bagaimana jika saya mengalami kesulitan?",
        answer: "Kami memiliki komunitas eksklusif di WhatsApp dan Telegram dimana Anda bisa bertanya langsung kepada mentor dan berdiskusi dengan ribuan member lainnya."
    },
    {
        question: "Apakah sertifikatnya resmi?",
        answer: "Ya, Anda akan mendapatkan sertifikat penyelesaian untuk setiap modul yang Anda selesaikan, yang bisa Anda gunakan untuk portofolio profesional Anda."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative bg-black/50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Pertanyaan <span className="text-gold-400">Umum</span>
                    </h2>
                    <p className="text-gray-400">
                        Jawaban untuk hal-hal yang mungkin Anda tanyakan.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                                <span className="shrink-0 text-gold-400">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
