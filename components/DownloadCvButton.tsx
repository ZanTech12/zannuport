'use client';
import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

export default function DownloadCvButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    
    try {
      const { jsPDF } = await import('jspdf');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth(); // 210mm
      const margin = 15;
      let y = 20; // Start lower to accommodate image

      // --- HELPER: Load Image as Base64 ---
      const loadImage = (url: string) => new Promise<string>((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0);
          resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = () => resolve(''); // Fallback if image fails
        img.src = url;
      });

      const imgData = await loadImage('/zannu.png');

      // --- IMAGE (Top Center) ---
      if (imgData) {
        const imgWidth = 35; // 35mm
        const imgHeight = 45; // 45mm
        const imgX = (pageWidth - imgWidth) / 2; // Centered
        pdf.addImage(imgData, 'PNG', imgX, y, imgWidth, imgHeight);
        y += imgHeight + 8; // Move below image
      }

      // --- HEADER ---
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(24);
      pdf.setTextColor(15, 23, 42); 
      pdf.text('Zannu Adedeji Sunday', pageWidth / 2, y, { align: 'center' });

      y += 8;
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(12);
      pdf.setTextColor(8, 145, 178); // Cyan
      pdf.text('Full-Stack IoT & Embedded Systems Engineer', pageWidth / 2, y, { align: 'center' });

      y += 6;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor(100, 116, 139); 
      pdf.text('zannu@example.com  |  Nigeria (Remote / On-site)', pageWidth / 2, y, { align: 'center' });
      y += 8;

      // --- DIVIDER ---
      pdf.setDrawColor(8, 145, 178);
      pdf.setLineWidth(0.5);
      pdf.line(margin, y, pageWidth - margin, y);
      y += 8;

      // --- PROFILE SUMMARY ---
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(11);
      pdf.setTextColor(8, 145, 178);
      pdf.text('PROFILE SUMMARY', margin, y);
      y += 6;

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor(51, 65, 85);
      const summary = "Full-Stack IoT and Embedded Systems Engineer focused on building practical technology solutions across education technology, automation, embedded systems, computer vision, edge AI, and mobile applications. Develops complete systems spanning ESP32/Raspberry Pi hardware, C/C++ firmware, React/Next.js interfaces, React Native apps, Node.js backends, MQTT, and ONNX-based AI.";
      const splitSummary = pdf.splitTextToSize(summary, pageWidth - margin * 2);
      pdf.text(splitSummary, margin, y);
      y += splitSummary.length * 4 + 8;

      // --- KEY PROJECTS ---
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(11);
      pdf.setTextColor(8, 145, 178);
      pdf.text('KEY PROJECTS & EXPERIENCE', margin, y);
      y += 6;

      const projects = [
        { title: 'Biometric Attendance System', tech: 'ESP32-S3, AS608 Fingerprint, MQTT, Node.js', desc: 'Built a distributed attendance ecosystem integrating ESP32-S3, AS608 sensors, and MQTT communication with mobile apps and web dashboards.' },
        { title: 'Automated Estate ANPR & Access Control', tech: 'Raspberry Pi, Hikvision, YOLO/ONNX, OpenCV, ESP32', desc: 'Developed an edge-computing vehicle access system integrating IP cameras, YOLO/ONNX models, and ESP32-controlled boom barriers.' },
        { title: 'School Management & CBT Platform', tech: 'Next.js, Electron, SQLite, PostgreSQL', desc: 'Comprehensive EdTech platform handling student registration, result broadsheets, and offline Computer-Based Testing using Electron and SQLite.' }
      ];

      pdf.setFontSize(9);
      projects.forEach(p => {
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(15, 23, 42);
        pdf.text(p.title, margin, y);
        y += 4;
        
        pdf.setFont('helvetica', 'italic');
        pdf.setTextColor(100, 116, 139);
        pdf.text(p.tech, margin, y);
        y += 4;
        
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(51, 65, 85);
        const splitDesc = pdf.splitTextToSize(p.desc, pageWidth - margin * 2);
        pdf.text(splitDesc, margin, y);
        y += splitDesc.length * 4 + 5;
      });

      // --- TWO COLUMN LAYOUT (EDUCATION & TECH STACK) ---
      // Add a horizontal divider before the two columns
      pdf.setDrawColor(200, 200, 200);
      pdf.setLineWidth(0.2);
      pdf.line(margin, y, pageWidth - margin, y);
      y += 8;

      const leftColWidth = 85;
      const rightColX = margin + 95;
      const rightColWidth = 85;
      
      // Add vertical divider between columns
      pdf.setDrawColor(200, 200, 200);
      pdf.line(margin + 90, y - 4, margin + 90, y + 40);

      // LEFT COLUMN: EDUCATION
      let yLeft = y;
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(11);
      pdf.setTextColor(8, 145, 178);
      pdf.text('EDUCATION', margin, yLeft);
      yLeft += 6;

      const edu = [
        { degree: 'HND in Mechatronics', school: 'National Open University (2021)', details: 'Electronics, Control Systems, Automation, Robotics' },
        { degree: 'OND in Computer Science', school: 'Federal Polytechnic, Ilaro (2015)', details: 'Programming, Database Systems, Networking' }
      ];

      pdf.setFontSize(9);
      edu.forEach(e => {
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(15, 23, 42);
        pdf.text(e.degree, margin, yLeft);
        yLeft += 4;
        
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(100, 116, 139);
        const splitSchool = pdf.splitTextToSize(e.school, leftColWidth);
        pdf.text(splitSchool, margin, yLeft);
        yLeft += splitSchool.length * 4 + 1;

        pdf.setFont('helvetica', 'italic');
        pdf.setTextColor(51, 65, 85);
        const splitDet = pdf.splitTextToSize(e.details, leftColWidth);
        pdf.text(splitDet, margin, yLeft);
        yLeft += splitDet.length * 4 + 4;
      });

      // RIGHT COLUMN: TECH STACK
      let yRight = y;
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(11);
      pdf.setTextColor(8, 145, 178);
      pdf.text('TECH STACK', rightColX, yRight);
      yRight += 6;

      const tech = "Software: JavaScript, C/C++, SQL, HTML/CSS\nFrontend: React, Next.js, Tailwind\nBackend: Node.js, Express, REST APIs\nMobile: React Native, Expo, Android NDK\nEmbedded: ESP32, MQTT, RFID, RTC\nAI & Vision: ONNX, OpenCV, YOLO, Edge AI\nInfrastructure: Linux, Nginx, PM2, VPS";
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor(51, 65, 85);
      const splitTech = pdf.splitTextToSize(tech, rightColWidth);
      pdf.text(splitTech, rightColX, yRight);

      pdf.save('Zannu_Adedeji_Sunday_CV.pdf');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button 
      onClick={handleDownload}
      disabled={isGenerating}
      className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 hover:text-white transition-all border border-slate-800 hover:border-slate-700"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          Download CV
        </>
      )}
    </button>
  );
}