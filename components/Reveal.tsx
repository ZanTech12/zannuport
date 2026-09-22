'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function Reveal({ 
  children, 
  delay = 0, 
  className = '', 
  direction = 'up' 
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Initial transform based on direction
  const hiddenTransform = {
    up: 'translate-y-16',
    down: '-translate-y-16',
    left: 'translate-x-16',
    right: '-translate-x-16',
    none: 'translate-x-0 translate-y-0'
  };

  return (
    <div
      ref={ref}
      // Using a premium cubic-bezier timing function for a smoother, snappy feel
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${className} ${
        isVisible 
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100 blur-none' 
          : `opacity-0 ${hiddenTransform[direction]} scale-95 blur-xl`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}