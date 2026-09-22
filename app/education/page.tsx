'use client';
import { GraduationCap, Cpu, Cloud, Bot, Microchip, Terminal, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';

const timelineData = [
  {
    year: '2002',
    title: 'Primary Education',
    institution: 'St. Agnes Nursery and Primary School, Sabo, Yaba, Lagos State',
    description: 'Acquired the foundational knowledge and academic skills that prepared me for secondary education.',
    icon: GraduationCap
  },
  {
    year: '2008',
    title: 'Secondary Education',
    institution: 'Batoro Community Grammar School, Sagamu, Ogun State',
    description: 'Developed a growing interest in science, technology, logical reasoning, and problem-solving.',
    icon: GraduationCap
  },
  {
    year: '2015',
    title: 'OND in Computer Science',
    institution: 'Federal Polytechnic, Ilaro, Ogun State',
    description: 'Gained a foundation in programming, software development, database systems, networking, and systems analysis. This became the foundation for my transition into software engineering.',
    icon: Terminal
  },
  {
    year: '2015',
    title: 'Google/AWS Professional Training',
    institution: 'Cloud Computing & Modern Tech Concepts',
    description: 'Expanded my knowledge beyond conventional academic Computer Science into modern computing technologies and cloud-oriented technical concepts.',
    icon: Cloud
  },
  {
    year: '2017',
    title: 'Andela Robotics Training',
    institution: 'Robotics & Automation',
    description: 'Further expanded my technical interests into robotics, automation, programming, and the integration of software with physical systems.',
    icon: Bot
  },
  {
    year: '2021',
    title: 'HND in Mechatronics',
    institution: 'National Open University of Nigeria (NOUN)',
    description: 'Broadened my technical foundation by combining electronics, electrical systems, mechanical systems, control systems, automation, and embedded technology.',
    icon: Microchip
  },
  {
    year: '2017 - Present',
    title: 'Continuing Professional Development',
    institution: 'Self-Directed Learning & Engineering',
    description: 'Active development in Full-Stack (MERN), Embedded Systems (C/C++, ESP32), Networking (TCP/IP, MQTT), Automation (ROS), Linux Administration, and Cybersecurity.',
    icon: ShieldCheck
  }
];

export default function EducationTimeline() {
  return (
    <div className="space-y-8">
      {timelineData.map((item, index) => {
        const Icon = item.icon;
        const isLastItem = index === timelineData.length - 1;

        return (
          <Reveal key={index} delay={index * 100} direction="up" className="relative flex items-start gap-6 w-full">
            
            {/* Left Column: Line and Dot */}
            <div className="flex flex-col items-center">
              {/* Dot */}
              <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)] z-10 flex-shrink-0">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
              
              {/* Vertical Line */}
              {!isLastItem && (
                <div className="w-0.5 bg-slate-800 flex-grow mt-2 mb-2 min-h-[60px]"></div>
              )}
            </div>

            {/* Right Column: Content Card */}
            <div className="group relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden w-full mb-4">
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="text-cyan-400 font-mono text-sm font-bold tracking-wider">{item.year}</span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-slate-300 text-sm font-medium mb-3">{item.institution}</p>
                <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}