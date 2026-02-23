import { motion } from "motion/react";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function ResumeTeaser() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto relative z-10">
      <motion.a
        href="https://share.htmlput.com/p/qaz7dmgul0?lang=zh"
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="block relative overflow-hidden bg-white/60 backdrop-blur-xl rounded-[32px] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/80 cursor-pointer group transition-all hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
      >
        {/* Animated background elements */}
        <motion.div 
          animate={{ 
            rotate: isHovered ? 180 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.8, type: "spring" }}
          className="absolute -right-12 -top-12 w-64 h-64 bg-gradient-to-br from-blue-100/60 to-purple-100/60 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div 
          animate={{ 
            rotate: isHovered ? -180 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.8, type: "spring" }}
          className="absolute -left-12 -bottom-12 w-64 h-64 bg-gradient-to-tr from-orange-100/60 to-pink-100/60 rounded-full blur-3xl pointer-events-none"
        />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <motion.div 
              animate={{ y: isHovered ? -4 : 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-sm font-medium text-purple-600 mb-5 shadow-sm border border-purple-100"
            >
              <Sparkles size={16} className={isHovered ? "animate-pulse" : ""} />
              <span>HR 专属通道</span>
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              好奇这些工具背后的<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">人类</span>吗？ 🐾
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              点击这里，捕获一份野生且有趣的简历。保证比普通的 PDF 更有意思，快来看看吧！
            </p>
          </div>
          
          <div className="relative shrink-0">
            <motion.div
              animate={{ 
                y: isHovered ? [0, -20, 0] : 0,
                rotate: isHovered ? [0, -10, 10, -10, 0] : 0
              }}
              transition={{ duration: 0.6 }}
              className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full shadow-xl flex items-center justify-center relative z-10 border border-gray-50"
            >
              <span className="text-6xl md:text-7xl select-none transition-transform">
                {isHovered ? "😻" : "😺"}
              </span>
            </motion.div>
            
            {/* Pulsing ring */}
            <motion.div 
              animate={{ 
                scale: isHovered ? [1, 1.4] : 1,
                opacity: isHovered ? [0.4, 0] : 0
              }}
              transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
              className="absolute inset-0 bg-purple-300 rounded-full z-0"
            />
          </div>
        </div>
      </motion.a>
    </section>
  );
}
