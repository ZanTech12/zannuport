import { Code, Layout, Database, Smartphone, Cpu, ScanEye, Server } from 'lucide-react';
import Reveal from './Reveal';

const techStack = [
  {
    category: 'Programming',
    icon: Code,
    techs: ['JavaScript', 'C', 'C++', 'SQL', 'HTML', 'CSS']
  },
  {
    category: 'Frontend',
    icon: Layout,
    techs: ['React', 'Next.js', 'Tailwind CSS', 'React UI Frameworks']
  },
  {
    category: 'Backend & DB',
    icon: Database,
    techs: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'SQLite']
  },
  {
    category: 'Mobile & NDK',
    icon: Smartphone,
    techs: ['React Native', 'Expo', 'EAS', 'Android SDK', 'Android NDK']
  },
  {
    category: 'Embedded & IoT',
    icon: Cpu,
    techs: ['ESP32', 'ESP32-S3', 'MQTT', 'RFID', 'Fingerprint Modules', 'RTC', 'TFT Displays']
  },
  {
    category: 'AI & Computer Vision',
    icon: ScanEye,
    techs: ['ONNX', 'OpenCV', 'YOLO', 'Tesseract OCR', 'Edge AI']
  },
  {
    category: 'Infrastructure',
    icon: Server,
    techs: ['Linux', 'Ubuntu', 'Nginx', 'PM2', 'VPS', 'Git/GitHub', 'Vercel']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 border-t border-slate-800 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Technology Stack</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit spanning from low-level hardware programming to high-level cloud deployment.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((item, index) => {
            const Icon = item.icon;
            // Make the last card span full width on large screens to fill the grid neatly
            const isLastCard = index === techStack.length - 1;
            
            return (
              <Reveal key={item.category} delay={index * 100} className={`h-full ${isLastCard ? 'lg:col-span-3' : ''}`}>
                <div className="group relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden h-full">
                  
                  {/* Hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-tr-xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative flex flex-col h-full">
                    {/* Card Header */}
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800">
                      <div className="w-11 h-11 flex-shrink-0 bg-slate-950 rounded-lg flex items-center justify-center border border-slate-800 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all duration-300">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white tracking-tight">{item.category}</h3>
                    </div>
                    
                    {/* Tech Tags */}
                    <div className={`flex flex-wrap gap-2 ${isLastCard ? 'lg:justify-start' : ''}`}>
                      {item.techs.map(tech => (
                        <span 
                          key={tech} 
                          className="inline-flex items-center px-3 py-1.5 bg-slate-950 text-slate-400 text-xs font-medium rounded-md border border-slate-800 group-hover:text-slate-200 group-hover:border-slate-700 transition-colors duration-300"
                        >
                          {/* Terminal bracket Accent */}
                          <span className="text-cyan-500/50 mr-1.5 font-mono">&gt;</span>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}