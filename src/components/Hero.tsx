"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, Cpu } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-violet/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/20 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center max-w-4xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-brand-violet/30 text-xs font-mono text-brand-violet mb-8">
                    <Cpu className="w-3 h-3" />
                    <span>OPENCLAW AGENT v1.0.4 - ACTIVE</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                    The Future of Content is <br />
                    <span className="text-gradient">Automated</span>
                </h1>

                <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                    Penetrate social media markets at 10x scale. AI-driven short films,
                    automated music videos, and creative agents that never sleep.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="group px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-brand-violet hover:text-white transition-all duration-300">
                        Enter the Factory
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="px-8 py-4 rounded-full glass border border-white/10 hover:border-white/20 transition-all font-semibold">
                        Watch AI Demo
                    </button>
                </div>
            </motion.div>

            {/* Floating Elements (Micro-animations) */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-1/3 left-10 md:left-40 hidden lg:block opacity-20"
            >
                <Bot className="w-12 h-12 text-brand-violet" />
            </motion.div>
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute bottom-1/3 right-10 md:right-40 hidden lg:block opacity-20"
            >
                <Zap className="w-10 h-10 text-brand-cyan" />
            </motion.div>
        </section>
    );
}
