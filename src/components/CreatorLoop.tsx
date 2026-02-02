"use client";

import { motion } from "framer-motion";
import { GraduationCap, PencilRuler, Gift, Coins } from "lucide-react";

const steps = [
    { title: "Train", icon: GraduationCap, color: "text-blue-400" },
    { title: "Create", icon: PencilRuler, color: "text-purple-400" },
    { title: "Reward", icon: Gift, color: "text-pink-400" },
    { title: "Share", icon: Coins, color: "text-yellow-400" },
];

export default function CreatorLoop() {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-black to-brand-violet/5">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">The Creator Ecosystem</h2>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="w-24 h-24 md:w-32 md:h-32 rounded-3xl glass flex items-center justify-center mb-6 group-hover:glow-violet transition-all duration-500 relative"
                            >
                                <step.icon className={`w-10 h-10 md:w-14 md:h-14 ${step.color}`} />

                                {/* Connector Arrow for desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 opacity-20">
                                        <div className="w-8 h-[1px] bg-white" />
                                    </div>
                                )}
                            </motion.div>
                            <span className="text-xl font-bold font-display">{step.title}</span>
                        </div>
                    ))}
                </div>

                <p className="mt-16 text-white/50 text-balance max-w-2xl mx-auto">
                    We empower creators with AI tools, reward innovation, and share the fruits
                    of our global content factory expansion.
                </p>
            </div>
        </section>
    );
}
