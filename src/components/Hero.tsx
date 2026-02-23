import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const floatingTags = [
  { text: "🎓 Policy Researcher", top: "15%", left: "10%", delay: 0 },
  { text: "🤖 AI Builder", top: "20%", right: "15%", delay: 1.5 },
  { text: "🏎️ F1 Enthusiast", bottom: "25%", left: "12%", delay: 0.8 },
  { text: "✍️ Obsidian User", bottom: "30%", right: "12%", delay: 2.2 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }}
      />
      
      {/* Animated background blobs for breathing effect */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1], 
          opacity: [0.4, 0.6, 0.4],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#7BB2D9] rounded-full mix-blend-multiply filter blur-[100px] opacity-30"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.3, 0.5, 0.3],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] right-[20%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-[#FBC2EB] rounded-full mix-blend-multiply filter blur-[100px] opacity-30"
      />

      {/* Floating Tags */}
      {floatingTags.map((tag, index) => (
        <motion.div
          key={index}
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: tag.delay,
          }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(251, 194, 235, 0.3)" }}
          className="absolute hidden md:flex items-center justify-center px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-[10px] border border-white/60 shadow-[0_4px_16px_rgba(123,178,217,0.15)] text-gray-700 text-sm font-medium cursor-default transition-colors duration-300 z-20"
          style={{
            top: tag.top,
            left: tag.left,
            right: tag.right,
            bottom: tag.bottom,
          }}
        >
          {tag.text}
        </motion.div>
      ))}

      {/* Main Content Card */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl mx-6 p-8 md:p-12 rounded-[24px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(123,178,217,0.1)] text-center"
      >
        <p className="text-xl md:text-2xl leading-[1.8] text-gray-800 font-medium tracking-wide whitespace-pre-wrap">
          Hi, I'm Rain <span className="animate-wave text-2xl md:text-3xl">👋</span>
          <br />
          很开心能和你分享我自己和一些用 AI 做的小工具。
          <br />
          Last but not least，希望你有美好的一天。
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 text-gray-400 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-medium opacity-60">Scroll</span>
          <ChevronDown size={20} className="opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
