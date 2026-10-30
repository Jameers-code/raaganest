"use client";

import { useState } from "react";
import { siteContent } from "@/lib/site";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { hostel, navLinks } = siteContent;

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#06070a]/85 backdrop-blur-xl border-b border-white/[0.08] transition-colors">
      {/* Subtle blueprint accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-key-gold/40 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex flex-col text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-key-gold rounded-lg p-1"
          aria-label={`${hostel.name} - Home`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-key-gold shadow-[0_0_8px_rgba(245,197,24,0.8)] animate-pulse" />
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-key-gold transition-colors font-heading leading-tight">
              {hostel.name}
            </span>
          </div>
          <span className="text-[11px] text-white/50 font-mono tracking-wider uppercase pl-4">
            {hostel.landmark}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 hover:text-key-gold transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-key-gold rounded tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href={hostel.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            aria-label="Follow us on Instagram"
            title="Follow us on Instagram @raaganest"
          >
            <svg className="w-3.5 h-3.5 text-pink-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Insta</span>
          </a>
          <a
            href="#enquiry"
            className="inline-flex items-center justify-center min-h-[42px] px-6 py-2.5 rounded-full bg-key-gold text-[#07080c] font-extrabold text-sm tracking-wide shadow-[0_0_20px_rgba(245,197,24,0.3)] hover:brightness-110 active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Book a visit
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-white hover:bg-white/10 active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-key-gold border border-white/10"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden bg-[#07080c] border-b border-white/15 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center min-h-[44px] px-3 py-2 text-base font-medium text-white hover:text-key-gold hover:bg-white/5 rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href={hostel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-2.5 min-h-[44px] px-3 py-2 text-base font-medium text-pink-300 hover:text-white hover:bg-white/5 rounded-lg transition"
            >
              <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Follow us on Insta ({hostel.instagram})</span>
            </a>
            <div className="pt-3 border-t border-white/10 mt-2">
              <a
                href="#enquiry"
                onClick={closeMenu}
                className="flex items-center justify-center min-h-[48px] w-full px-6 py-3 rounded-full bg-key-gold text-[#07080c] font-bold text-base shadow-lg hover:brightness-105 active:scale-98 transition text-center"
              >
                Book a visit
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
