import { ReactNode } from 'react';

// Native scroll is faster than JS-based smooth scroll (Lenis).
// Lenis was intercepting every scroll event and re-processing via rAF,
// which conflicts with Framer Motion's useScroll and causes double frame processing.
// CSS scroll-smooth handles smooth anchor scrolling natively.
export const LenisProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
