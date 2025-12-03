import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const StickyCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const whatsappLink = "https://chat.whatsapp.com/KZzbBw3dGxv24qeDn0H3dm";

    useEffect(() => {
        const handleScroll = () => {
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
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4"
                >
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full shadow-lg shadow-green-900/20 transition-all duration-300 hover:scale-105"
                    >
                        <MessageCircle className="w-6 h-6 fill-current" />
                        <span>Gabung Grup WhatsApp</span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};