import { Mail, MapPin, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-900/50 border-t border-slate-800 overflow-hidden">
      {/* Ambient glow behind the button */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        
        {/* Availability Badge */}
        <Reveal>
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-slate-950/60 backdrop-blur-sm border border-slate-800 text-sm font-medium">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-slate-300">Available for new engineering projects</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Practical</span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg">
            Whether you need a comprehensive school management platform, an IoT-integrated access control system, or a custom offline-first application, I'm ready to engineer it.
          </p>
        </Reveal>

        <Reveal delay={200}>
          {/* Contact Info Glassmorphism Chips */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="mailto:zannu@example.com" 
              className="group flex items-center gap-3 px-5 py-3 bg-slate-950/50 backdrop-blur-md border border-slate-800 rounded-lg text-slate-300 hover:border-cyan-500/50 hover:text-white transition-all duration-300 shadow-sm"
            >
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium">Email Me Directly</span>
            </a>
            <div className="flex items-center gap-3 px-5 py-3 bg-slate-950/50 backdrop-blur-md border border-slate-800 rounded-lg text-slate-300 shadow-sm">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium">Nigeria (Remote / On-site)</span>
            </div>
          </div>

          {/* Premium Gradient CTA Button */}
          <a 
            href="mailto:zannu@example.com" 
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/50 hover:scale-[1.02] hover:from-cyan-400 hover:to-blue-400"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}