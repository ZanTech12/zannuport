import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-white font-bold">
          <Cpu className="text-cyan-400 w-5 h-5" />
          Zannu Adedeji Sunday
        </div>
        <p className="text-slate-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Full-Stack IoT & Embedded Systems Engineer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}