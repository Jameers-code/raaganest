import { siteContent } from "@/lib/site";

export default function Gallery() {
  const { gallery, hostel } = siteContent;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white text-neutral-900 scroll-mt-16 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Campus Tour</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 font-heading tracking-tight leading-tight">
            Life at RaagaNest Hostel
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Take a look around our brand new building elevation, ventilated living blocks, furnished student rooms, and attached modern washrooms.
          </p>
        </div>

        {/* 4-Item Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((tile) => (
            <figure
              key={tile.id}
              className="group relative rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="w-full aspect-[3/4] overflow-hidden relative bg-neutral-100">
                <img
                  src={tile.image}
                  alt={tile.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <figcaption className="p-4 sm:p-5 bg-white border-t border-neutral-200">
                <h3 className="text-base font-bold font-heading text-neutral-900 tracking-tight">
                  {tile.title}
                </h3>
                <p className="mt-1 text-xs text-neutral-600 leading-relaxed font-sans">
                  {tile.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Follow us on Instagram Banner */}
        <div className="mt-12 rounded-3xl bg-neutral-950 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-neutral-800 shadow-xl text-white">
          <div className="flex items-center gap-4 text-left w-full sm:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-extrabold font-heading text-white">
                  Follow us on Instagram
                </span>
                <span className="text-xs font-mono font-bold text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/20">
                  {hostel.instagram}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Catch daily campus stories, Andhra mess menus, room views &amp; student updates.
              </p>
            </div>
          </div>
          <a
            href={hostel.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:brightness-110 active:scale-95 text-white font-extrabold text-sm shadow-[0_0_25px_rgba(225,48,108,0.4)] transition-all shrink-0 text-center"
            aria-label={`Follow ${hostel.name} on Instagram`}
          >
            <span>Follow on Instagram</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
