import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Mail, Phone, Hammer, Send, CheckCircle2, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface EstimateFormProps {
  className?: string;
  isFooter?: boolean;
}

export default function EstimateForm({ className, isFooter = false }: EstimateFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const services = [
    'Roof Inspection',
    'Roof Repair',
    'Full Replacement',
    'Emergency Services',
    'Maintenance Plan',
    'Other'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real app, you'd send this to a backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: ''
      });
    }
  };

  return (
    <>
      <form 
        onSubmit={handleSubmit}
        noValidate
        className={cn(
          "space-y-5 md:space-y-6",
          className
        )}
      >
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-4">Full Name</label>
          <div className="relative group">
            <User className={cn("absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors", errors.name ? "text-red-400" : "text-zinc-500 group-focus-within:text-brand")} />
            <input
              type="text"
              placeholder="e.g. John Doe"
              className={cn(
                "w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:ring-2 outline-none transition-all",
                errors.name ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:ring-brand/50 focus:border-brand"
              )}
              value={formData.name}
              onChange={e => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
            />
          </div>
          {errors.name && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider ml-4">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-4">Email Address</label>
          <div className="relative group">
            <Mail className={cn("absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors", errors.email ? "text-red-400" : "text-zinc-500 group-focus-within:text-brand")} />
            <input
              type="email"
              placeholder="e.g. john@example.com"
              className={cn(
                "w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:ring-2 outline-none transition-all",
                errors.email ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:ring-brand/50 focus:border-brand"
              )}
              value={formData.email}
              onChange={e => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
            />
          </div>
          {errors.email && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider ml-4">{errors.email}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-4">Phone Number</label>
          <div className="relative group">
            <Phone className={cn("absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors", errors.phone ? "text-red-400" : "text-zinc-500 group-focus-within:text-brand")} />
            <input
              type="tel"
              placeholder="(555) 000-0000"
              className={cn(
                "w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:ring-2 outline-none transition-all",
                errors.phone ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:ring-brand/50 focus:border-brand"
              )}
              value={formData.phone}
              onChange={e => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: '' });
              }}
            />
          </div>
          {errors.phone && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider ml-4">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-4">Select Service</label>
          <div className="relative group">
            <Hammer className={cn("absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors", errors.service ? "text-red-400" : "text-zinc-500 group-focus-within:text-brand")} />
            <select
              className={cn(
                "w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white appearance-none focus:ring-2 outline-none transition-all",
                errors.service ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:ring-brand/50 focus:border-brand"
              )}
              value={formData.service}
              onChange={e => {
                setFormData({ ...formData, service: e.target.value });
                if (errors.service) setErrors({ ...errors, service: '' });
              }}
            >
              <option value="" disabled className="bg-zinc-900 text-zinc-500">Choose a service...</option>
              {services.map(s => (
                <option key={s} value={s} className="bg-zinc-900 text-white">{s}</option>
              ))}
            </select>
          </div>
          {errors.service && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider ml-4">{errors.service}</p>}
        </div>
      </div>

      <div className="pt-4">
        <motion.button
          whileHover={{ 
            y: -4,
            scale: 1.01,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-brand hover:bg-brand-dark text-white py-4 px-4 rounded-2xl font-black text-[13px] sm:text-sm md:text-base shadow-xl shadow-brand/20 hover:shadow-2xl hover:shadow-brand/40 flex items-center justify-center gap-2 sm:gap-3 transition-all whitespace-nowrap group"
        >
          <motion.div
            variants={{
              hover: { x: 3, y: -3 }
            }}
            initial="initial"
            whileHover="hover"
            className="flex items-center justify-center"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          </motion.div>
          <span>Send Estimate Request</span>
        </motion.button>
      </div>
    </form>

    <AnimatePresence>
      {isSubmitted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSubmitted(false)}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/10 blur-[80px] rounded-full" />
            
            <button 
              onClick={() => setIsSubmitted(false)}
              className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand/20 rounded-full flex items-center justify-center text-brand mb-8 relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <div className="absolute inset-0 bg-brand/20 rounded-full animate-ping opacity-20" />
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                Request <span className="text-brand">Received!</span>
              </h3>
              
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                We have received your request. <br className="hidden sm:block" />
                <span className="text-white font-bold">Wendell or Rhonda</span> will get back to you as soon as possible to confirm your estimate.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsSubmitted(false)}
                className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black rounded-2xl transition-all"
              >
                Close Window
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  </>
);
}
