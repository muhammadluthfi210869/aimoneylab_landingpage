import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const StickyCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show sticky CTA after scrolling 600px (earlier on mobile)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black via-black/98 to-black/90 backdrop-blur-xl border-t border-white/10 safe-area-bottom"
                >
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center sm:justify-between gap-3 sm:gap-4">
                        {/* Left Text - Hidden on mobile */}
                        <div className="hidden md:block flex-1">
                            <p className="text-white font-semibold text-sm lg:text-base">
                                Siap keluar dari <span className="text-gold-400">99% yang gagal?</span>
                            </p>
                        </div>

                        {/* CTA Button - Full width on mobile */}
                        <motion.a
                            href="https://aimoneylab.id/register?ref=LUTHFI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-black font-bold text-sm sm:text-base tracking-wide rounded-full shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>AMBIL AKSESNYA</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
