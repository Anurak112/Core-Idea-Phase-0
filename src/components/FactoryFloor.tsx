"use client";

import { motion } from "framer-motion";
import { Film, Music, Newspaper, Clapperboard, GraduationCap, Settings } from "lucide-react";

const contentTypes = [
    {
        title: "AI Short Movies",
        description: "Cinematic narratives generated with high-fidelity agents.",
        icon: Film,
        size: "col-span-1 md:col-span-2 row-span-2",
        color: "from-brand-violet/20"
    },
    {
        title: "AI Music Videos",
        description: "Synchronized audio-visual experiences.",
        icon: Music,
        size: "col-span-1",
        color: "from-brand-cyan/20"
    },
    {
        title: "AI News Reports",
        description: "Real-time automated news coverage.",
        icon: Newspaper,
        size: "col-span-1",
        color: "from-brand-violet/20"
    },
    {
        title: "Slop Content",
        description: "Viral, fast-paced social media hooks.",
        icon: Clapperboard,
        size: "col-span-1 md:col-span-2",
        color: "from-brand-cyan/20"
    },
    {
        title: "Educational & How-to",
        description: "Structured learning at scale.",
        icon: GraduationCap,
        size: "col-span-1",
        color: "from-brand-violet/20"
    },
    {
        title: "System R&D",
        description: "Continuous workflow optimization.",
        icon: Settings,
        size: "col-span-1",
        color: "from-brand-cyan/20"
    },
];

export default function FactoryFloor() {
    return (
        <section className="py-24 px-4 bg-black/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">The Factory Floor</h2>
                    <p className="text-white/40 text-lg">Diverse content streams powered by specialized AI agents.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {contentTypes.map((type, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${type.size} glass-morphism p-8 flex flex-col justify-end group overflow-hidden relative`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${type.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <type.icon className="w-6 h-6 text-brand-cyan" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                                <p className="text-sm text-white/50">{type.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
