'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Fingerprint, Car, School, Smartphone, Maximize2 } from 'lucide-react';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';

const projects = [
  {
    icon: Fingerprint,
    title: 'Biometric Attendance System',
    description: 'A distributed attendance ecosystem utilizing ESP32-S3, AS608 fingerprint sensors, and MQTT communication. Integrated with mobile apps and web dashboards for real-time syncing.',
    details: 'This system was built as a complete distributed architecture. An ESP32-S3 acts as the edge node, interfacing with an AS608 fingerprint sensor, a DS3231 RTC for timekeeping, and a TFT display for live user feedback. The device communicates over Wi-Fi via MQTT to a Node.js backend API, which processes attendance logs into a PostgreSQL database. A React Native mobile app and web dashboard allow administrators to view live attendance. The firmware is written in C/C++ and includes local storage fallback for when network connectivity drops.',
    tags: ['ESP32-S3', 'C/C++', 'MQTT', 'Node.js', 'React Native'],
    image: '/biometrics machine.jpeg'
  },
  {
    icon: Car,
    title: 'Automated Estate ANPR & Access Control',
    description: 'An edge-computing vehicle access system integrating Raspberry Pi, Hikvision IP cameras, YOLO/ONNX models, and ESP32-controlled boom barriers.',
    details: 'This project leverages Edge AI to automate estate security. A Raspberry Pi processes live RTSP streams from Hikvision IP cameras. OpenCV and Tesseract OCR are used alongside YOLO/ONNX models to detect and read vehicle number plates. Once a plate is recognized, the system queries a backend database to determine access permissions. If authorized, it sends an HTTP command to an ESP32 controller, which triggers the relay to open the physical boom barrier. It also supports temporary QR/barcode visitor passes.',
    tags: ['Raspberry Pi', 'OpenCV', 'ONNX', 'Tesseract OCR', 'ESP32'],
    image: '/boom barrier.png'
  },
  {
    icon: School,
    title: 'School Management & CBT Platform',
    description: 'A comprehensive EdTech platform handling student registration, result broadsheets, and offline Computer-Based Testing. Uses an Electron desktop app with SQLite that syncs to a PostgreSQL backend.',
    details: 'A multi-layered EdTech ecosystem. The platform features a Next.js web portal for administrators and principals, and an Electron-based desktop application for offline CBT exams. The desktop app uses local SQLite storage so schools with unreliable internet can conduct exams seamlessly. When connectivity returns, a Node.js/Express backend syncs the data to a central PostgreSQL database. It includes complex features like continuous assessment calculation, broadsheet generation, principal comments, and a software licensing system to control feature access per school.',
    tags: ['Next.js', 'Electron', 'SQLite', 'PostgreSQL', 'Node.js'],
    image: '/school management system.png'
  },
  {
    icon: Smartphone,
    title: 'IoT Mobile Control Applications',
    description: 'Cross-platform mobile apps built with React Native and Expo, utilizing Android NDK/C++ for heavy computational tasks. Interfaces with IoT hardware via REST APIs.',
    details: 'Built using React Native and Expo Application Services (EAS), this project involves cross-platform mobile apps that interface directly with IoT hardware. It utilizes the Android NDK to run native C/C++ computer vision code directly inside the APK, bypassing the need for a remote server for certain AI tasks. The app communicates with ESP32 devices over local networks and REST APIs, serving as a remote control and monitoring dashboard for biometric systems and access control hardware.',
    tags: ['React Native', 'Expo', 'Android SDK', 'Android NDK', 'REST API'],
    image: '/mobile.jpg'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-24 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Engineering Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Practical deployments combining software engineering, hardware integration, and automation. Click a project to view details.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const direction = index % 2 === 0 ? 'left' : 'right';
            
            return (
              <Reveal key={index} delay={index * 150} direction={direction} className="h-full">
                {/* Clickable Card Wrapper */}
                <button 
                  className="group relative h-[500px] w-full text-left rounded-2xl border border-slate-800 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 shadow-lg shadow-slate-950/50"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Background Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20"></div>
                  
                  {/* HUD Grid Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Expand Icon on Hover */}
                  <div className="absolute top-7 right-7 w-12 h-12 bg-slate-950/60 backdrop-blur-md rounded-lg flex items-center justify-center border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Maximize2 className="text-cyan-400 w-5 h-5" />
                  </div>

                  {/* HUD Corner Brackets */}
                  <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-md group-hover:border-cyan-400 transition-colors duration-300"></div>
                  <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-md group-hover:border-cyan-400 transition-colors duration-300"></div>
                  <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-md group-hover:border-cyan-400 transition-colors duration-300"></div>

                  {/* Top Left Icon */}
                  <div className="absolute top-7 left-7 z-10">
                    <div className="w-14 h-14 bg-slate-950/60 backdrop-blur-md rounded-lg flex items-center justify-center border border-slate-700 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                      <Icon className="text-slate-300 group-hover:text-cyan-400 transition-colors duration-300 w-7 h-7" />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">{project.title}</h3>
                    <p className="text-slate-300 text-sm md:text-base mb-5 leading-relaxed drop-shadow-md line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2.5 py-1 bg-slate-950/70 backdrop-blur-sm text-cyan-400 text-[10px] font-mono font-medium rounded-md border border-cyan-500/20 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                         <span className="px-2.5 py-1 bg-slate-950/70 backdrop-blur-sm text-slate-400 text-[10px] font-mono font-medium rounded-md border border-slate-700">
                           +{project.tags.length - 3} more
                         </span>
                      )}
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Render Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}