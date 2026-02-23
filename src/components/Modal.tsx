import { motion, AnimatePresence } from "motion/react";
import { X, Copy } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  url: string;
  onClose: () => void;
  onCopy: () => void;
}

export default function Modal({ isOpen, url, onClose, onCopy }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
          />
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 bg-white/90 backdrop-blur-2xl md:rounded-[24px] rounded-t-[24px] p-6 md:w-full md:max-w-md shadow-[0_24px_48px_rgba(0,0,0,0.12)] border border-white/40"
          >
            {/* Mobile drag indicator */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 md:hidden opacity-50" />

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">Gemini 分享链接</h3>
              <button 
                onClick={onClose} 
                className="p-2 bg-gray-100/80 hover:bg-gray-200 rounded-full transition-colors text-gray-500 active:scale-95"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="bg-gray-50/80 p-4 rounded-[16px] border border-gray-100 mb-6 break-all text-sm text-gray-600 font-mono shadow-inner">
              {url}
            </div>
            
            <button 
              onClick={() => { onCopy(); onClose(); }}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-[16px] font-medium transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]"
            >
              <Copy size={18} className="opacity-90" />
              复制链接
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
