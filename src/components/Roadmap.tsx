"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Globe, BarChart3 } from "lucide-react";

const phases = [
    {
        phase: "Phase 0",
        title: "Team Building",
        description: "Assembling specialized units: Invate, P'Ton, and Creative teams.",
        icon: Users,
    },
    {
        phase: "Phase 1",
        title: "Market Penetration",
        description: "Aggressive bulk production and brand establishment across social platforms.",
        icon: Rocket,
    },
    {
        phase: "Phase 2",
        title: "Community Growth",
        description: "The Train-Create-Reward-Share ecosystem for creators.",
        icon: BarChart3,
    },
    {
        phase: "Phase 3",
        title: "Global Scale",
        description: "Expanding to reach international markets and competing with global benchmarks.",
        icon: Globe,
    },
];

export default function Roadmap() {
    return (
        <section className="py-24 px-4 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Strategic Roadmap</h2>
                    <p className="text-white/40 text-lg">A systematic approach to global content dominance.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-violet via-brand-cyan to-transparent opacity-30" />

                    <div className="space-y-12">
                        {phases.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="flex-1 w-full md:text-right hidden md:block">
                                    {index % 2 === 0 && (
                                        <div className="pr-12">
                                            <span className="text-brand-violet font-mono text-sm underline decoration-brand-violet/30 underline-offset-4">{item.phase}</span>
                                            <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                                            <p className="text-white/50 mt-2">{item.description}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="relative z-10 w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center shrink-0 glow-violet">
                                    <item.icon className="w-8 h-8 text-brand-cyan" />
                                </div>

                                <div className="flex-1 w-full">
                                    {(index % 2 !== 0 || typeof window !== 'undefined' && window.innerWidth < 768) && (
                                        <div className="md:pl-12">
                                            <span className="text-brand-cyan font-mono text-sm underline decoration-brand-cyan/30 underline-offset-4">{item.phase}</span>
                                            <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                                            <p className="text-white/50 mt-2">{item.description}</p>
                                        </div>
                                    )}
                                    {index % 2 === 0 && (
                                        <div className="md:hidden">
                                            <span className="text-brand-violet font-mono text-sm underline decoration-brand-violet/30 underline-offset-4">{item.phase}</span>
                                            <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                                            <p className="text-white/50 mt-2">{item.description}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
