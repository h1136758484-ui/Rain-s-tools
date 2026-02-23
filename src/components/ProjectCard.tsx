import { motion } from "motion/react";
import { Copy, Github, ExternalLink } from "lucide-react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  key?: string | number;
  project: Project;
  onCopyPrompt: () => void;
  onCopyGithub: () => void;
  onOpenGemini: () => void;
}

export default function ProjectCard({ project, onCopyPrompt, onCopyGithub, onOpenGemini }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col bg-white/80 backdrop-blur-md rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-white/60 transition-all"
    >
      <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={project.coverImage} 
          alt={project.name}
          className="w-full h-full object-contain drop-shadow-sm"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">{project.name}</h3>
        <p className="text-gray-500 text-sm mb-8 flex-grow leading-relaxed">{project.tagline}</p>
        
        <div className="flex flex-col gap-2.5">
          <button 
            onClick={onCopyPrompt} 
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-[14px] bg-gray-50/80 hover:bg-gray-100 text-gray-700 text-sm font-medium transition-colors active:scale-[0.98]"
          >
            <Copy size={16} className="opacity-70" />
            复制 prompt
          </button>
          <button 
            onClick={onCopyGithub} 
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-[14px] bg-gray-50/80 hover:bg-gray-100 text-gray-700 text-sm font-medium transition-colors active:scale-[0.98]"
          >
            <Github size={16} className="opacity-70" />
            复制 github 链接
          </button>
          <button 
            onClick={onOpenGemini} 
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-[14px] bg-blue-50/80 hover:bg-blue-100/80 text-blue-600 text-sm font-medium transition-colors active:scale-[0.98]"
          >
            <ExternalLink size={16} className="opacity-70" />
            获取 gemini 项目分享链接
          </button>
        </div>
      </div>
    </motion.div>
  );
}
