'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { X } from 'lucide-react';

interface Project {
  icon: any;
  title: string;
  description: string;
  details: string;
  tags: string[];
  image: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEscape);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  const Icon = project.icon;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Split Screen Modal Container */}
      <div 
        className="relative w-full max-w-5xl h-[90vh] bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-cyan-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-slate-950/60 backdrop-blur-md rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Full Image */}
        <div className="relative w-full md:w-1/2 h-48 md:h-full bg-slate-950 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
            // object-contain ensures the ENTIRE image is visible without cropping
            className="object-contain" 
          />
        </div>

        {/* Right Side: Compressed Details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex-shrink-0 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
              <Icon className="text-cyan-400 w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
          </div>

          {/* Brief Description */}
          <div className="mb-6">
            <h4 className="text-[10px] font-mono font-medium text-cyan-400 mb-1.5 tracking-widest">OVERVIEW</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
          </div>
          
          {/* Compressed Architecture Details */}
          <div className="mb-6">
            <h4 className="text-[10px] font-mono font-medium text-cyan-400 mb-1.5 tracking-widest">ARCHITECTURE & DETAILS</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              {project.details}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-auto pt-4 border-t border-slate-800">
            <h4 className="text-[10px] font-mono font-medium text-cyan-400 mb-2.5 tracking-widest">TECH STACK</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2.5 py-1 bg-slate-950 text-cyan-400 text-[10px] font-mono font-medium rounded-md border border-cyan-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}