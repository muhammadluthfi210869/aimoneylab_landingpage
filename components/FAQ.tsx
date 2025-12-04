import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
    return (
        <motion.div
            className={`border-b border-white/[0.06] last:border-0 group ${isOpen ? 'bg-white/[0.02]' : ''} rounded-xl transition-colors duration-300`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <button
                onClick={onToggle}
                className="w-full py-4 sm:py-6 px-3 sm:px-4 flex items-center justify-between text-left hover:bg-white/[0.02] rounded-xl transition-all duration-300"
            >
                <div className="flex items-center gap-3 sm:gap-4 pr-2 sm:pr-4">
                    <motion.div
                        className={`flex items-center justify-center w-7 sm:w-8 h-7 sm:h-8 rounded-full transition-colors duration-300 flex-shrink-0 ${isOpen ? 'bg-gold-500/20' : 'bg-white/[0.03]'}`}
                        whileHover={{ scale: 1.1 }}
                    >
                        <span className={`text-xs sm:text-sm font-bold transition-colors duration-300 ${isOpen ? 'text-gold-400' : 'text-white/40'}`}>
                            {index + 1}
                        </span>
                    </motion.div>
                    <span className={`text-base sm:text-lg md:text-xl font-semibold transition-colors duration-300 ${isOpen ? 'text-gold-400' : 'text-white'}`}>
                        {question}
                    </span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-gold-500/20' : 'bg-white/[0.03]'}`}
                >
                    <ChevronDown className={`w-4 sm:w-5 h-4 sm:h-5 transition-colors duration-300 ${isOpen ? 'text-gold-400' : 'text-white/50'}`} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 sm:pb-6 px-3 sm:px-4 pl-12 sm:pl-16 text-white/60 text-sm sm:text-base md:text-lg leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'Saya gaptek, bisa ikut?',
            answer: 'Yang kami ajarkan bukan coding atau teknis rumit. Ini murni strategi pasar dan cara packaging hasil AI. Kalau kamu bisa buka Notion dan ChatGPT, kamu bisa langsung terapkan.',
        },
        {
            question: 'Apakah ada biaya bulanan?',
            answer: 'TIDAK. Ini bukan subscription. Kamu bayar sekali, dapat akses Notion lengkap selamanya. Semua update framework gratis.',
        },
        {
            question: 'Kalau bingung tanya kemana?',
            answer: 'Ada komunitas private dan kontak direct untuk tanya jawab. Kami support sampai kamu betul-betul paham dan applicable.',
        },
    ];

    return (
        <section className="relative py-16 sm:py-28 md:py-36 bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#0c0c0c] overflow-hidden px-4 sm:px-6">
            {/* Premium Background Effects - Smaller on mobile */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-gold-500/5 rounded-full blur-[100px] sm:blur-[150px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.03, 0.06, 0.03],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[120px]"
                    animate={{
                        opacity: [0.02, 0.04, 0.02],
                    }}
                    transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                />
            </div>

            {/* Subtle grid pattern - Hidden on mobile */}
            <div className="hidden sm:block absolute inset-0 opacity-[0.012]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }} />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-10 sm:mb-16"
                    initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Icon Badge */}
                    <motion.div
                        className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gold-500/10 border border-gold-500/20 mb-4 sm:mb-6"
                        animate={{
                            boxShadow: ['0 0 0 0 rgba(247, 201, 72, 0)', '0 0 30px 10px rgba(247, 201, 72, 0.1)', '0 0 0 0 rgba(247, 201, 72, 0)'],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <MessageCircleQuestion className="w-6 sm:w-8 h-6 sm:h-8 text-gold-400" />
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-5 text-shadow">
                        Pertanyaan Umum
                    </h2>
                    <p className="text-white/50 text-base sm:text-lg md:text-xl">
                        Masih ragu? Baca ini dulu.
                    </p>
                </motion.div>

                {/* FAQ List - Premium Glass Card */}
                <motion.div
                    className="relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl sm:rounded-3xl p-2 sm:p-4 md:p-6 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {/* Card inner gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-500/[0.02] via-transparent to-transparent rounded-2xl sm:rounded-3xl" />

                    {/* Top highlight line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

                    <div className="relative z-10">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
};
