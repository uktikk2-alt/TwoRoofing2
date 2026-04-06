import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator } from 'lucide-react';
import EstimateForm from './EstimateForm';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl max-h-[90vh] bg-zinc-900 rounded-[2rem] md:rounded-[3.5rem] overflow-y-auto shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-5 md:p-12 pb-0 flex items-center justify-between sticky top-0 bg-zinc-900 z-10">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand/20 rounded-xl md:rounded-2xl flex items-center justify-center text-brand">
                  <Calculator className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h2 className="text-lg md:text-3xl font-black text-white tracking-tight">Get Free Estimate</h2>
                  <p className="text-[9px] md:text-sm text-zinc-500 font-bold uppercase tracking-widest">Macomb County's Best</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-white transition-all active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <div className="p-5 md:p-12">
              <EstimateForm />
            </div>

            {/* Footer Note */}
            <div className="px-6 md:px-12 pb-8 md:pb-12 text-center">
              <p className="text-[8px] md:text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">
                No obligation • Free inspection • Professional guidance
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
