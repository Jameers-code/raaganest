"use client";

import { useState, useEffect, FormEvent } from "react";
import { siteContent } from "@/lib/site";

export default function Enquiry() {
  const { hostel, rooms, floors } = siteContent;

  const [selectedRoomId, setSelectedRoomId] = useState<string>(rooms[0]?.id || "");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedFloor, setSelectedFloor] = useState("Any Floor / Flexible");
  const [note, setNote] = useState("");
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  useEffect(() => {
    const handleRoomSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ roomId: string; roomName: string; floorLabel?: string }>;
      if (customEvent.detail?.roomId) setSelectedRoomId(customEvent.detail.roomId);
      setSelectedFloor(customEvent.detail?.floorLabel || "Any Floor / Flexible");
    };
    window.addEventListener("room-select", handleRoomSelect);
    return () => window.removeEventListener("room-select", handleRoomSelect);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedRoom = rooms.find((r) => r.id === selectedRoomId);
    const roomName = selectedRoom ? selectedRoom.name : "Student Room";
    const targetDigits = hostel.managementPhoneDigits;
    const recipientLabel = "Management / Admissions";

    const message = `Hello ${hostel.name}!\nI would like to enquire about room admission (${recipientLabel}):\n- Name: ${fullName.trim()}\n- Phone: ${phoneNumber.trim()}\n- Room Type: ${roomName}\n- Preferred Floor: ${selectedFloor}\n${note.trim() ? `- Notes / Questions: ${note.trim()}` : ""}`;

    const waUrl = `https://wa.me/${targetDigits}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmittedStatus(
      `Thank you, ${fullName.trim()}! Your enquiry for ${roomName} (${selectedFloor}) has been directed to ${recipientLabel} via WhatsApp.`
    );
  };

  return (
    <section id="enquiry" className="py-20 lg:py-28 bg-white text-neutral-900 scroll-mt-16 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Contact & Map */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <span className="text-sm font-semibold text-amber-500 tracking-wider">
                Visit or Contact Us
              </span>
              <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-neutral-900 font-heading tracking-tight leading-tight">
                Plan a campus visit or ask questions.
              </h2>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                Parents and students are welcome to visit our hostel premises, inspect our rooms, and sample the mess food any day during visiting hours.
              </p>
            </div>

            {/* Address */}
            <div className="space-y-2 border-t border-neutral-200 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">HOSTEL ADDRESS</h3>
              <p className="text-base text-neutral-800 font-medium leading-relaxed">{hostel.address}</p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={hostel.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-amber-600 transition"
                >
                  <span>Open in Google Maps</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Vijay+Aditya+boys+hostel+Kovvada+Bhimavaram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors underline underline-offset-4"
                >
                  Get Directions
                </a>
              </div>
              <div className="mt-4 w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100">
                <iframe
                  title="RaagaNest Boys Hostel Google Map"
                  src={hostel.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] contrast-[1.05] hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 border-t border-neutral-200 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">CONTACT MANAGEMENT</h3>
              {[
                { label: "Management / Admissions", badge: "DIRECT", desc: "Admissions, bookings, and fee structures", digits: hostel.managementPhoneDigits, display: hostel.managementPhoneDisplay, waText: `Hello Management! I would like to enquire about admission at ${hostel.name}.` },
              ].map((contact) => (
                <div key={contact.label} className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-neutral-900 font-heading">{contact.label}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-200 text-neutral-800">{contact.badge}</span>
                  </div>
                  <p className="text-xs text-neutral-600">{contact.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a href={`tel:+${contact.digits}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-900 font-bold text-xs hover:bg-neutral-100 transition shadow-xs">
                      📞 Call {contact.display}
                    </a>
                    <a href={`https://wa.me/${contact.digits}?text=${encodeURIComponent(contact.waText)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] text-white font-bold text-xs hover:brightness-105 transition shadow-xs">
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
              <div>
                <span className="block font-semibold text-neutral-900">Visiting Hours:</span>
                <span>{hostel.visitingHours}</span>
              </div>
              <div>
                <span className="block font-semibold text-neutral-900">Email Inquiries:</span>
                <a href={`mailto:${hostel.email}`} className="text-neutral-900 hover:underline">{hostel.email}</a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 bg-[#f8fafc] text-neutral-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-200/80 relative">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading tracking-tight">Reserve a room or book a tour</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Fill in your details below. We will instantly format your enquiry and connect you directly with hostel management on WhatsApp.
            </p>

            <div aria-live="polite" className="mt-4">
              {submittedStatus && (
                <div className="p-4 rounded-xl bg-amber-50 text-neutral-900 text-sm font-semibold border border-amber-300 flex items-start gap-2 animate-in fade-in">
                  <svg className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>{submittedStatus}</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="full-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Student Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="full-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Sai Kumar"
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone-number" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Phone / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone-number"
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 transition"
                />
              </div>

              {/* Room & Floor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="room-type" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">Preferred Room Type</label>
                  <select
                    id="room-type"
                    value={selectedRoomId}
                    onChange={(e) => setSelectedRoomId(e.target.value)}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 transition"
                  >
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} ({room.monthlyPriceDisplay} {room.billingPeriod || "/ yr"})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="floor-choice" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">Choose Floor</label>
                  <select
                    id="floor-choice"
                    value={selectedFloor}
                    onChange={(e) => setSelectedFloor(e.target.value)}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 transition font-medium"
                  >
                    {floors.map((floor) => (
                      <option key={floor.id} value={floor.floorLabel}>{floor.floorLabel}</option>
                    ))}
                    <option value="Any Floor / Flexible">Any Floor / Flexible</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="enquiry-note" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">Notes or Questions (Optional)</label>
                <textarea
                  id="enquiry-note"
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Ask about Vishnu College proximity, food preferences, study room availability..."
                  className="w-full p-4 rounded-xl bg-white border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 transition resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center min-h-[52px] px-8 py-3.5 rounded-full bg-key-gold text-neutral-900 font-extrabold text-base tracking-wide shadow-md hover:brightness-105 active:scale-98 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                Send Enquiry via WhatsApp
              </button>
              <p className="text-center text-xs text-neutral-500">
                We respect your privacy. No spam — direct communication with hostel administration only.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
