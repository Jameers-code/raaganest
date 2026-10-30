import { siteContent } from "@/lib/site";

export default function Footer() {
  const { hostel, navLinks } = siteContent;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090b10] text-paper border-t border-neutral-800 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-key-gold shadow-[0_0_8px_rgba(245,197,24,0.8)]" />
              <h2 className="text-2xl font-extrabold font-heading text-white tracking-tight">{hostel.name}</h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Safe, comfortable, and affordable student accommodation situated opposite Vishnu College South Gate Entrance in Bhimavaram.
            </p>
            <div className="pt-2 text-xs font-semibold text-key-gold">{hostel.teluguName}</div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-neutral-400 hover:text-key-gold transition-colors">{link.label}</a>
                </li>
              ))}
              <li>
                <a href="#enquiry" className="text-neutral-400 hover:text-key-gold transition-colors">Book a Visit</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Connect &amp; Inquiries
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a
                  href={hostel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 border border-pink-500/30 text-pink-300 hover:text-white hover:border-pink-400 transition-all text-xs font-semibold"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Follow us on Insta: {hostel.instagram}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${hostel.managementPhoneDigits}`} target="_blank" rel="noopener noreferrer" className="hover:text-key-gold transition-colors flex items-center gap-1.5">
                  <span>💬 Management: {hostel.managementPhoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${hostel.wardenPhoneDigits}`} target="_blank" rel="noopener noreferrer" className="hover:text-key-gold transition-colors flex items-center gap-1.5">
                  <span>🏢 Warden Desk: {hostel.wardenPhoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${hostel.email}`} className="hover:text-key-gold transition-colors">✉️ {hostel.email}</a>
              </li>
              <li>
                <span>📍 {hostel.city}, Andhra Pradesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {currentYear} {hostel.name}. All rights reserved.</p>
          <a href="#" className="hover:text-key-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-key-gold rounded px-2 py-1">
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
