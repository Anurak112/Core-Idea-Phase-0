import Image from "next/image";
import Hero from "@/components/Hero";
import FactoryFloor from "@/components/FactoryFloor";
import Roadmap from "@/components/Roadmap";
import CreatorLoop from "@/components/CreatorLoop";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Hero />
      <FactoryFloor />
      <Roadmap />
      <CreatorLoop />

      {/* Basic Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-white/20 text-sm">
        <p>&copy; 2026 Automated Content Factory. Built with OpenClaw Agents.</p>
      </footer>
    </main>
  );
}
