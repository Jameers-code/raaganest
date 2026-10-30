"use client";

import { useState, useEffect, useCallback, useId } from "react";
import { siteContent, RoomOption } from "@/lib/site";

export default function Hero() {
  const { hostel, rooms } = siteContent;
  const headingId = useId();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const handleNextCard = useCallback(() => {
    if (isShuffling) return;
    setIsShuffling(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % rooms.length);
      setIsShuffling(false);
    }, 280);
  }, [isShuffling, rooms.length]);

  const handlePrevCard = useCallback(() => {
    if (isShuffling) return;
    setIsShuffling(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
      setIsShuffling(false);
    }, 280);
  }, [isShuffling, rooms.length]);

  const handleSelectCard = (index: number) => {
    if (index === activeIndex || isShuffling) return;
    setIsShuffling(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsShuffling(false);
    }, 220);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => { handleNextCard(); }, 3200);
    return () => clearInterval(timer);
  }, [isPaused, handleNextCard]);

  const handleRoomClick = (room: RoomOption) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("room-select", {
          detail: { roomId: room.id, roomName: room.name },
        })
      );
    }
  };

  void handlePrevCard;

  return (
    <section className="relative bg-[#050609] bg-tech-blueprint text-paper py-20 lg:py-28 overflow-hidden border-b border-white/[0.08]">
      {/* High-Tech Blueprint Lighting & Ambient Glows */}
      <div 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-key-gold/[0.06] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-20 left-10 w-[420px] h-[420px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Blueprint Technical Crosshair Marks & HUD Metadata */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-white/30 tracking-widest hidden md:block select-none uppercase">
        + SYS.BLUEPRINT // REV.2026 // 16.5449° N, 81.5212° E
      </div>
      <div className="absolute top-6 right-8 font-mono text-[10px] text-key-gold/40 tracking-widest hidden md:block select-none">
        [SPEC: 48 ROOMS // 4-TIER MATRIX]
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/20 tracking-widest hidden lg:block select-none">
        + MATRIX_NODE_BHIMAVARAM // VISHNU_COLLEGE_SOUTH_GATE
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-key-gold animate-ping" />
                <span className="text-xs font-semibold text-key-gold tracking-widest uppercase font-mono">
                  {hostel.teluguName}
                </span>
              </div>
              <h1
                id={headingId}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] break-words"
              >
                A comfortable stay for a{" "}
                <span className="text-key-gold drop-shadow-[0_0_25px_rgba(245,197,24,0.35)]">better</span> tomorrow.
              </h1>
            </div>

            <p className="text-base sm:text-xl text-white/75 max-w-[65ch] leading-relaxed font-normal">
              {hostel.intro}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#rooms"
                className="inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 rounded-full bg-key-gold text-[#07080c] font-black text-base shadow-[0_0_30px_rgba(245,197,24,0.35)] hover:shadow-[0_0_40px_rgba(245,197,24,0.5)] hover:brightness-110 active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white text-center"
              >
                See rooms and prices
              </a>
              <a
                href={`https://wa.me/${hostel.managementPhoneDigits}?text=${encodeURIComponent(
                  `Hello! I'm interested in room admission at ${hostel.name} near Vishnu College.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-sm text-white font-bold text-base hover:bg-white/[0.09] hover:border-white/40 active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-key-gold text-center"
                aria-label={`Chat on WhatsApp with ${hostel.name}`}
              >
                <svg className="w-5 h-5 text-key-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.974.577 1.794.887 2.802.887h.001c3.18 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.774-5.775-5.774zm3.376 8.163c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.18-.557-1.782-.738-2.909-2.55-2.998-2.67-.089-.12-1.39-1.849-1.39-3.526 0-1.677.869-2.502 1.176-2.846.307-.345.67-.432.894-.432.224 0 .448.002.645.012.207.01.485-.078.758.577.28.672.956 2.33.104 2.533-.104.204-.173.33-.346.533-.173.204-.363.456-.519.612-.173.173-.353.362-.152.707.201.345.894 1.474 1.917 2.387 1.317 1.173 2.427 1.536 2.772 1.708.345.172.548.144.75-.088.204-.233.869-1.013 1.102-1.36.233-.346.467-.288.784-.172.318.115 2.012.95 2.357 1.123.345.173.575.259.66.403.086.144.086.836-.058 1.241z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs text-white/70 font-medium">
              <span className="font-mono text-white/40 uppercase tracking-wider text-[11px]">Direct lines:</span>
              <a
                href={`https://wa.me/${hostel.managementPhoneDigits}?text=${encodeURIComponent(
                  `Hello Management! I'm interested in room admission at ${hostel.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-key-gold hover:underline font-mono"
              >
                <span>Management: {hostel.managementPhoneDisplay}</span>
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href={`https://wa.me/${hostel.wardenPhoneDigits}?text=${encodeURIComponent(
                  `Hello Warden! I'm interested in visiting ${hostel.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-key-gold transition-colors font-mono"
              >
                <span>Warden: {hostel.wardenPhoneDisplay}</span>
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href={hostel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors font-mono"
              >
                <span>Insta: {hostel.instagram}</span>
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center gap-2 pt-3 text-sm text-white/60 font-medium">
              <svg className="w-5 h-5 text-key-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{hostel.landmark}, Bhimavaram</span>
            </div>
          </div>

          {/* Right Column: Shuffling Key Tag Cards on Futuristic Stage */}
          <div
            className="lg:col-span-5 relative flex flex-col items-center justify-center py-4 sm:py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Ambient Blueprint Backdrop Disc */}
            <div 
              className="absolute w-[360px] h-[360px] rounded-full border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div 
              className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-key-gold/10 pointer-events-none animate-[spin_60s_linear_infinite]"
              aria-hidden="true"
            />

            <div
              className="relative w-full max-w-[310px] sm:max-w-[360px] h-[390px] sm:h-[410px] mx-auto select-none"
              aria-live="polite"
              aria-label="Interactive room tariff cards"
            >
              {rooms.map((room: RoomOption, idx: number) => {
                const position = (idx - activeIndex + rooms.length) % rooms.length;
                const isTop = position === 0;
                const isUnderExit = isTop && isShuffling;

                let zIndex = 30;
                let transformStyle = "";
                let opacity = 1;

                if (isUnderExit) {
                  zIndex = 35;
                  transformStyle = "translateX(95px) translateY(-18px) rotate(12deg) scale(0.96)";
                  opacity = 0.82;
                } else if (position === 0) {
                  zIndex = 30;
                  transformStyle = `translateX(0px) translateY(0px) rotate(${room.tagAngle}deg) scale(1)`;
                  opacity = 1;
                } else if (position === 1) {
                  zIndex = 20;
                  transformStyle = "translateX(8px) translateY(18px) rotate(4deg) scale(0.95)";
                  opacity = 0.94;
                } else {
                  zIndex = 10;
                  transformStyle = "translateX(-10px) translateY(36px) rotate(-5deg) scale(0.90)";
                  opacity = 0.86;
                }

                let badgeLabel = "Available";
                if (room.popular) {
                  badgeLabel = "POPULAR";
                } else if (room.id.includes("limited")) {
                  badgeLabel = "METERED AC";
                } else if (room.id.includes("non-ac")) {
                  badgeLabel = "NON-AC BUDGET";
                }

                return (
                  <div
                    key={room.id}
                    onClick={() => {
                      if (!isTop) handleSelectCard(idx);
                      else handleRoomClick(room);
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`${room.name}: ${room.monthlyPriceDisplay} ${room.billingPeriod || "/ year"}. Click to view room.`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        if (!isTop) handleSelectCard(idx);
                        else handleRoomClick(room);
                      }
                    }}
                    className={`absolute top-0 left-0 w-full rounded-[28px] bg-key-gold text-[#07080c] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(245,197,24,0.2)] border border-black/15 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)] ${
                      !isTop ? "hover:brightness-105" : "hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(245,197,24,0.3)]"
                    }`}
                    style={{ zIndex, transform: transformStyle, opacity }}
                  >
                    {/* Hole at top */}
                    <div className="flex flex-col items-center mb-3">
                      <div className="w-5 h-5 rounded-full bg-[#050609] border-2 border-black/40 shadow-inner flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      </div>
                      <div className="w-0.5 h-2 bg-black/20 mt-0.5" />
                    </div>

                    {/* Room Header */}
                    <div className="flex items-center justify-between gap-2 border-b border-black/15 pb-2.5">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight font-heading text-[#07080c]">
                          {room.name}
                        </h3>
                        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#07080c]/75 mt-0.5 font-mono">
                          {room.beds} Beds •{" "}
                          {room.ac
                            ? room.id.includes("limited")
                              ? "AC (Metered)"
                              : "AC (Unlimited)"
                            : "Non-AC"}
                        </p>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#07080c] text-white shadow-xs">
                        {badgeLabel}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="pt-3.5 flex items-baseline justify-between gap-2">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl sm:text-4xl font-black text-[#07080c] font-heading tracking-tight">
                            {room.monthlyPriceDisplay}
                          </span>
                          <span className="text-xs font-bold text-[#07080c]/80">/</span>
                        </div>
                        <span className="text-xs font-bold text-[#07080c]/75 block font-mono">
                          {room.billingPeriod ? room.billingPeriod.replace(/^\/\s*/, "") : "year"}
                        </span>
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-[#07080c]/90 bg-white/60 border border-black/10 px-2.5 py-1 rounded-lg text-right max-w-[155px] font-mono">
                        {room.depositDisplay}
                      </span>
                    </div>

                    {room.blocks && (
                      <div className="mt-2 text-[11px] font-black text-[#07080c] bg-black/10 border border-black/10 px-2.5 py-1 rounded-md inline-block font-mono">
                        🏢 {room.blocks}
                      </div>
                    )}

                    <p className="text-xs text-[#07080c]/85 font-medium mt-2.5 line-clamp-2 leading-relaxed">
                      {room.features[0]}
                    </p>

                    <div className="mt-4 pt-2.5 border-t border-black/10 flex items-center justify-between text-xs font-black text-[#07080c]">
                      <span className="inline-flex items-center gap-1 group-hover:underline">
                        <span>{isTop ? "Tap to enquire this room" : "Click to view card"}</span>
                        <span>→</span>
                      </span>
                      <span className="text-[10px] text-[#07080c]/70 font-black uppercase font-mono">5 Sharing</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pill Selectors */}
            <div className="w-full max-w-[310px] sm:max-w-[360px] flex items-center justify-center gap-1.5 sm:gap-2 mt-5">
              {rooms.map((room: RoomOption, idx: number) => {
                const isCurrent = idx === activeIndex;
                let shortName = "Unlimited AC";
                if (room.id.startsWith("limited")) shortName = "Limited AC";
                else if (room.id.startsWith("unlimited")) shortName = "Unlimited AC";
                else if (room.id.includes("non-ac")) shortName = "Non-AC";

                return (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => handleSelectCard(idx)}
                    className={`flex-1 py-1.5 px-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 border ${
                      isCurrent
                        ? "bg-key-gold text-[#07080c] border-key-gold shadow-[0_0_15px_rgba(245,197,24,0.4)] scale-102 font-extrabold"
                        : "bg-white/[0.04] text-white/70 border-white/10 hover:bg-white/[0.08] hover:text-white"
                    }`}
                    aria-label={`Show ${shortName} card`}
                    aria-pressed={isCurrent}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? "bg-[#07080c]" : "bg-white/40"}`} />
                    <span className="truncate">{shortName}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
