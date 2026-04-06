import { useState, useEffect, useRef } from 'react';
import { useInView, animate } from 'motion/react';

export const Counter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      const suffix = value.replace(/[0-9.,]/g, '');
      const hasComma = value.includes(',');
      const decimals = value.includes('.') ? value.split('.')[1].length : 0;

      const controls = animate(0, numericValue, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1], // Custom easeOutExpo
        onUpdate(latest) {
          let formatted = latest.toFixed(decimals);
          if (hasComma) {
            const parts = formatted.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            formatted = parts.join('.');
          }
          setDisplayValue(formatted + suffix);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};
