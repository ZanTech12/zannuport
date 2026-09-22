import { Mail, MapPin, Globe } from 'lucide-react';

export default function CvDocument() {
  return (
    <div id="cv-document" style={{ width: '794px', minHeight: '1123px', backgroundColor: 'white', padding: '40px', color: '#1e293b', fontFamily: 'Arial, sans-serif', position: 'absolute', left: '-9999px', top: 0 }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '3px solid #0891b2', paddingBottom: '20px', marginBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Zannu Adedeji Sunday</h1>
          <p style={{ fontSize: '16px', color: '#0891b2', fontWeight: 'bold', marginTop: '5px' }}>Full-Stack IoT & Embedded Systems Engineer</p>
          
          <div style={{ marginTop: '15px', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Mail size={12} color="#0891b2" /> zannu@example.com
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MapPin size={12} color="#0891b2" /> Nigeria (Remote / On-site)
            </div>
          </div>
        </div>
        <img src="/zannu.png" alt="Profile" style={{ width: '120px', height: '150px', objectFit: 'cover', borderRadius: '8px', border: '2px solid #0891b2' }} />
      </div>

      {/* Profile Summary */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', color: '#0891b2', borderBottom: '1px solid #cbd5e1', paddingBottom: '5px', marginBottom: '8px' }}>PROFILE SUMMARY</h2>
        <p style={{ fontSize: '12px', lineHeight: '1.5', color: '#334155' }}>
          Full-Stack IoT and Embedded Systems Engineer focused on building practical technology solutions across education technology, automation, embedded systems, computer vision, edge AI, and mobile applications. Develops complete systems spanning ESP32/Raspberry Pi hardware, C/C++ firmware, React/Next.js interfaces, React Native apps, Node.js backends, MQTT, and ONNX-based AI.
        </p>
      </div>

      {/* Two Column Layout */}
      <div style={{ display: 'flex', gap: '30px' }}>
        
        {/* Left Column */}
        <div style={{ width: '65%' }}>
          {/* Experience / Projects */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '18px', color: '#0891b2', borderBottom: '1px solid #cbd5e1', paddingBottom: '5px', marginBottom: '8px' }}>KEY PROJECTS & EXPERIENCE</h2>
            
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>Biometric Attendance System</h3>
              <p style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>ESP32-S3, AS608 Fingerprint, MQTT, Node.js, React Native</p>
              <p style={{ fontSize: '12px', marginTop: '4px', lineHeight: '1.4' }}>Built a distributed attendance ecosystem integrating ESP32-S3, AS608 sensors, and MQTT communication with mobile apps and web dashboards for real-time syncing. Deployed at Redemption Gate Secondary School.</p>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>Automated Estate ANPR & Access Control</h3>
              <p style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Raspberry Pi, Hikvision IP Cameras, YOLO/ONNX, OpenCV, ESP32</p>
              <p style={{ fontSize: '12px', marginTop: '4px', lineHeight: '1.4' }}>Developed an edge-computing vehicle access system integrating IP cameras, YOLO/ONNX models, and ESP32-controlled boom barriers. Identifies plates via OpenCV/Tesseract and triggers physical gate actions.</p>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#0f172a' }}>School Management & CBT Platform</h3>
              <p style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Next.js, Electron, SQLite, PostgreSQL, Node.js</p>
              <p style={{ fontSize: '12px', marginTop: '4px', lineHeight: '1.4' }}>Comprehensive EdTech platform handling student registration, result broadsheets, and offline Computer-Based Testing using an Electron desktop app with SQLite that syncs to a central PostgreSQL backend.</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 style={{ fontSize: '18px', color: '#0891b2', borderBottom: '1px solid #cbd5e1', paddingBottom: '5px', marginBottom: '8px' }}>EDUCATION</h2>
            <div style={{ fontSize: '12px', marginBottom: '8px' }}>
              <strong>HND in Mechatronics</strong> - National Open University of Nigeria (2021)<br />
              <em style={{ color: '#64748b' }}>Electronics, Control Systems, Automation, Robotics</em>
            </div>
            <div style={{ fontSize: '12px', marginBottom: '8px' }}>
              <strong>OND in Computer Science</strong> - Federal Polytechnic, Ilaro (2015)<br />
              <em style={{ color: '#64748b' }}>Programming, Database Systems, Networking</em>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ width: '35%' }}>
          {/* Tech Stack */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '18px', color: '#0891b2', borderBottom: '1px solid #cbd5e1', paddingBottom: '5px', marginBottom: '8px' }}>TECH STACK</h2>
            <div style={{ fontSize: '11px', lineHeight: '1.8' }}>
              <strong style={{ color: '#0f172a' }}>Software:</strong> JavaScript, C/C++, SQL, HTML/CSS<br />
              <strong style={{ color: '#0f172a' }}>Frontend:</strong> React, Next.js, Tailwind<br />
              <strong style={{ color: '#0f172a' }}>Backend:</strong> Node.js, Express, REST APIs<br />
              <strong style={{ color: '#0f172a' }}>Mobile:</strong> React Native, Expo, Android NDK<br />
              <strong style={{ color: '#0f172a' }}>Databases:</strong> PostgreSQL, MongoDB, SQLite<br />
              <strong style={{ color: '#0f172a' }}>Embedded:</strong> ESP32, MQTT, RFID, RTC<br />
              <strong style={{ color: '#0f172a' }}>AI & Vision:</strong> ONNX, OpenCV, YOLO, Edge AI<br />
              <strong style={{ color: '#0f172a' }}>Infrastructure:</strong> Linux, Nginx, PM2, VPS
            </div>
          </div>

          {/* Domains */}
          <div>
            <h2 style={{ fontSize: '18px', color: '#0891b2', borderBottom: '1px solid #cbd5e1', paddingBottom: '5px', marginBottom: '8px' }}>DOMAINS</h2>
            <ul style={{ fontSize: '11px', paddingLeft: '15px', lineHeight: '1.6', color: '#334155' }}>
              <li>EdTech & School Management</li>
              <li>Computer-Based Testing (CBT)</li>
              <li>Biometric Identification</li>
              <li>Automated Number Plate Recognition (ANPR)</li>
              <li>Offline-First Architecture</li>
              <li>Edge Computing & IoT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}