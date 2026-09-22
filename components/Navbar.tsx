'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Cpu, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Tech Stack', href: '/#skills' },
    { name: 'Education', href: '/education' }, // New link for the Education page
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Using Link for client-side navigation back to Home */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <Cpu className="text-cyan-400" />
          Zannu Adedeji
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-6 py-4 flex flex-col space-y-4">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}