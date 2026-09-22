import Image from 'next/image';
import { Terminal, Cpu, Camera, ArrowRight, CircuitBoard, Code } from 'lucide-react';
import Reveal from './Reveal';
import DownloadCvButton from './DownloadCvButton';
import CvDocument from './CvDocument';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      {/* Ambient Focal Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-800 text-sm font-medium">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-slate-300">Available for Engineering Projects</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Zannu Adedeji <br/>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sunday
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto md:mx-0 mb-10 leading-relaxed">
            Bridging the gap between physical hardware and modern software. I build practical technology solutions spanning EdTech, IoT, Edge AI, and Automation—from microcontrollers to cloud infrastructure.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              View Engineering Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            {/* New Download CV Button */}
            <DownloadCvButton />

            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-slate-900 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 hover:text-white transition-all border border-slate-800 hover:border-slate-700"
            >
              Get in Touch
            </a>
          </div>

          {/* Tech Domains Cards */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
            <div className="flex flex-col items-center md:items-start p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300">
              <Cpu className="w-5 h-5 mb-2 text-cyan-400" />
              <span className="text-xs font-medium text-slate-400">Embedded Systems</span>
            </div>
            <div className="flex flex-col items-center md:items-start p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300">
              <Camera className="w-5 h-5 mb-2 text-cyan-400" />
              <span className="text-xs font-medium text-slate-400">Edge AI & Vision</span>
            </div>
            <div className="flex flex-col items-center md:items-start p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300">
              <Terminal className="w-5 h-5 mb-2 text-cyan-400" />
              <span className="text-xs font-medium text-slate-400">Full-Stack Software</span>
            </div>
          </div>
        </div>

        {/* Right Column: Image with HUD/Viewfinder Effect */}
        <Reveal direction="left" className="flex justify-center md:justify-end">
          {/* Slightly reduced physical size here (was 420x540) */}
          <div className="relative w-56 h-72 md:w-[360px] md:h-[480px]">
            
            {/* Gradient Border Wrapper */}
            <div className="absolute inset-0 p-1.5 bg-gradient-to-tr from-cyan-500/50 via-slate-800 to-blue-600/50 rounded-2xl shadow-2xl shadow-cyan-500/10">
              
              {/* Inner Image Container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/zannu.png"
                  alt="Zannu Adedeji Sunday"
                  fill
                  // Added the sizes prop to fix the warning and optimize loading
                  sizes="(max-width: 768px) 224px, 360px"
                  className="object-cover"
                  priority
                  quality={90}
                />
                {/* Gradient overlay to blend image bottom into the background */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                
                {/* HUD Corner Brackets (Viewfinder aesthetic) */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400/80 rounded-tl-md"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400/80 rounded-tr-md"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400/80 rounded-bl-md"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/80 rounded-br-md"></div>
              </div>
            </div>

            {/* Floating Tech Tag: ESP32 */}
            <div className="absolute top-10 -left-4 md:-left-8 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
              <CircuitBoard className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-slate-300 font-medium">ESP32 / IoT</span>
            </div>

            {/* Floating Tech Tag: Next.js */}
            <div className="absolute bottom-12 -right-4 md:-right-8 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl flex items-center gap-2 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-slate-300 font-medium">Next.js / Node</span>
            </div>

          </div>
        </Reveal>

      </div>

      {/* Hidden CV Document for PDF Generation */}
      <div className="hidden">
        <CvDocument />
      </div>
    </section>
  );
}