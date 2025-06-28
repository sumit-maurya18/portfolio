import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 text-white py-4 md:py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Name */}
        <div className="text-lg font-semibold tracking-wider">
          Sumit Maurya
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <Link href="#about" className="hover:text-white transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
          <a
            href="https://github.com/sumit-maurya18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sumitm620"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Sumit Maurya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
