import { motion, AnimatePresence } from "motion/react";

export default function Toast({ message }: { message: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, x: "-50%" }}
          animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
          exit={{ opacity: 0, scale: 0.9, y: 20, x: "-50%" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-12 left-1/2 z-50 px-6 py-3 bg-gray-800/90 backdrop-blur-xl text-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] text-sm font-medium tracking-wide flex items-center gap-2"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
