import { Layers, GitBranch, Server } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Systems-Level Engineering Philosophy</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Rather than developing isolated applications, I engineer complete ecosystems where hardware, firmware, networks, and applications communicate seamlessly.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Layers, title: 'Full-Stack Integration', text: 'From microcontrollers (ESP32) and sensors to backend Node.js servers, PostgreSQL databases, and React/Next.js web interfaces. I build the complete chain.' },
            { icon: Server, title: 'Offline-First Architecture', text: 'Designing resilient systems using SQLite and local storage that continue functioning without internet connectivity, syncing to central databases when networks are restored.' },
            { icon: GitBranch, title: 'Edge AI & Automation', text: 'Deploying ONNX models, OpenCV, and YOLO on local devices like Raspberry Pi and via Android NDK to process computer vision tasks without expensive cloud APIs.' }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              // Staggered delay for a cascading premium effect
              <Reveal key={index} delay={index * 200} direction="up" className="h-full">
                <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-cyan-500 transition-colors duration-300 h-full hover:-translate-y-2">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 transition-colors">
                    <Icon className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}