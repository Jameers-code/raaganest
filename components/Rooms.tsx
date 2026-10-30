"use client";

import { useState } from "react";
import { siteContent, RoomOption, FloorBlock } from "@/lib/site";

export default function Rooms() {
  const { rooms, floors } = siteContent;
  // Default to Unlimited AC so it is selected with the blue border matching the user's reference
  const [selectedPlanId, setSelectedPlanId] = useState<string>("unlimited-ac-5-sharing");
  const [activeFloorId, setActiveFloorId] = useState<string>(floors[0].id);
  const [selectedRoomNumber, setSelectedRoomNumber] = useState<string | null>(null);

  const currentPlan = rooms.find((r) => r.id === selectedPlanId) || rooms[0];
  const currentFloor = floors.find((f) => f.id === activeFloorId) || floors[0];

  const handleAskAboutPlan = (plan: RoomOption, roomNum?: string) => {
    if (typeof window !== "undefined") {
      const roomLabel = roomNum ? `${plan.name} (${roomNum})` : plan.name;
      window.dispatchEvent(
        new CustomEvent("room-select", {
          detail: {
            roomId: plan.id,
            roomName: roomLabel,
          },
        })
      );
      const enquirySection = document.getElementById("enquiry");
      if (enquirySection) {
        enquirySection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSelectRoomPill = (roomNum: string, floor: FloorBlock) => {
    setSelectedRoomNumber(roomNum);
    if (floor.isAC) {
      if (currentPlan.id === "non-ac-5-sharing") {
        setSelectedPlanId("unlimited-ac-5-sharing");
      }
    } else {
      setSelectedPlanId("non-ac-5-sharing");
    }
  };

  const displayPlans = [
    rooms.find((r) => r.id === "non-ac-5-sharing") || rooms[2],
    rooms.find((r) => r.id === "unlimited-ac-5-sharing") || rooms[0],
    rooms.find((r) => r.id === "limited-ac-5-sharing") || rooms[1],
  ];

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-[#fbfcfb] text-neutral-900 scroll-mt-16 border-y border-neutral-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>48 Well-Ventilated Rooms • 4 Floors</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 font-heading tracking-tight leading-tight">
            Rooms &amp; transparent tariffs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Our pricing is designed for students who need wholesome comfort, fast Wi-Fi, and complete flexibility with zero hidden fees.
          </p>
        </div>

        {/* 3 Fee Structure Cards Grid - Pixel Perfect to Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 items-stretch">
          {displayPlans.map((plan) => {
            const isSelected = plan.id === selectedPlanId;
            const isFeatured = plan.popular;
            const buttonLabel =
              plan.id === "unlimited-ac-5-sharing"
                ? "Get Unlimited AC"
                : plan.id === "limited-ac-5-sharing"
                ? "Get Limited AC"
                : "Get Non-AC";

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative rounded-[28px] p-7 sm:p-8 bg-white transition-all duration-200 flex flex-col justify-between cursor-pointer border ${
                  isSelected
                    ? "border-blue-600 shadow-xl ring-2 ring-blue-600/20"
                    : "border-neutral-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-neutral-300"
                }`}
              >
                <div>
                  {/* Card Header: Tier name & Featured Pill */}
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold text-neutral-900 font-heading">
                      {plan.name.replace(" Room", "")}
                    </h3>
                    {isFeatured && (
                      <span className="bg-[#18181b] text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Price Display with unified vertical baseline */}
                  <div className="mt-6 flex flex-col justify-end min-h-[72px]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-bold text-neutral-700 self-start pt-1">
                        ₹
                      </span>
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 font-heading">
                        {plan.monthlyPrice === 100000 ? "1,00,000" : "85,000"}
                      </span>
                      <span className="text-sm font-medium text-neutral-500 whitespace-nowrap ml-1">
                        /year
                      </span>
                    </div>
                    <div className="h-5 mt-1 flex items-center">
                      {plan.id === "limited-ac-5-sharing" ? (
                        <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                          + AC meter bill
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium text-neutral-400">
                          All-inclusive • Mess included
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button - Royal Blue Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlanId(plan.id);
                      handleAskAboutPlan(plan, selectedRoomNumber || undefined);
                    }}
                    className="mt-6 w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-[#2563eb] hover:bg-[#1d4ed8] active:bg-[#1e40af] transition-all duration-200 shadow-sm hover:shadow cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {buttonLabel}
                  </button>

                  {/* Feature Checkmarks List - Dark Circle Checks */}
                  <ul className="mt-8 space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#18181b] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <svg
                            className="w-3 h-3 text-white"
                            viewBox="0 0 14 14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <polyline points="2.5 7 5.5 10 11.5 4" />
                          </svg>
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-neutral-700 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sub-footer details */}
                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
                  <span>{plan.blocks ? plan.blocks.split("(")[0].trim() : "5-Sharing"}</span>
                  <span className="font-semibold text-neutral-700">
                    {plan.depositDisplay}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floor & Block Directory Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-neutral-200/80 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Hostel Building Layout
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading tracking-tight mt-0.5">
                Explore floors, blocks &amp; room numbers
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm">
              Click on any floor block or specific room number below to view its floor location and enquire directly.
            </p>
          </div>

          {/* Floor Navigation Tabs */}
          <div
            role="tablist"
            aria-label="Hostel floor selector"
            className="flex overflow-x-auto gap-2 py-4 scrollbar-none snap-x"
          >
            {floors.map((floor) => {
              const isActive = floor.id === activeFloorId;
              return (
                <button
                  key={floor.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveFloorId(floor.id)}
                  className={`min-h-[50px] px-5 py-2.5 rounded-2xl text-left transition shrink-0 snap-start border ${
                    isActive
                      ? "bg-[#0f172a] text-white border-[#0f172a] shadow-sm"
                      : "bg-neutral-50 hover:bg-neutral-100 text-neutral-900 border-neutral-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold font-heading text-sm sm:text-base">
                      {floor.floorLabel} — {floor.blockName}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        floor.isAC
                          ? isActive ? "bg-white/20 text-white" : "bg-neutral-200 text-neutral-800"
                          : isActive ? "bg-key-gold text-neutral-900" : "bg-neutral-200 text-neutral-800"
                      }`}
                    >
                      {floor.acType}
                    </span>
                  </div>
                  <p
                    className={`text-[11px] mt-0.5 ${
                      isActive ? "text-white/80" : "text-neutral-500"
                    }`}
                  >
                    12 Rooms ({floor.roomRange}) • 5 Sharing
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Floor Details & Room Grid */}
          <div className="mt-6 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <h4 className="text-lg font-extrabold text-neutral-900 font-heading flex items-center gap-2">
                  <span>{currentFloor.floorLabel} ({currentFloor.blockName})</span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-neutral-200 text-neutral-800">
                    {currentFloor.acType}
                  </span>
                </h4>
                <p className="text-xs text-neutral-600 mt-0.5">
                  {currentFloor.tagline} • Fee: <strong>{currentFloor.priceNote}</strong>
                </p>
              </div>

              {selectedRoomNumber && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-neutral-300 text-xs text-neutral-900 font-bold shadow-sm">
                  <span>Selected: Room {selectedRoomNumber}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedRoomNumber(null)}
                    className="text-neutral-400 hover:text-neutral-800 text-sm leading-none"
                    aria-label="Clear room selection"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>

            {/* Room Pills */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-3">
                Rooms in {currentFloor.blockName} (Click to select):
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
                {currentFloor.roomList.map((roomNum) => {
                  const isRoomActive = selectedRoomNumber === roomNum;
                  return (
                    <button
                      key={roomNum}
                      type="button"
                      onClick={() => handleSelectRoomPill(roomNum, currentFloor)}
                      className={`min-h-[44px] rounded-xl font-bold font-mono text-sm transition flex flex-col items-center justify-center border ${
                        isRoomActive
                          ? "bg-[#0f172a] text-white border-[#0f172a] shadow-md ring-2 ring-key-gold"
                          : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50"
                      }`}
                    >
                      <span>{roomNum}</span>
                      <span className="text-[9px] font-sans font-normal opacity-70">
                        5 Bed
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedRoomNumber && (
              <div className="mt-5 pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-neutral-700">
                  Ready to book <strong>Room {selectedRoomNumber}</strong> on {currentFloor.floorLabel} ({currentFloor.acType})?
                </span>
                <button
                  type="button"
                  onClick={() => handleAskAboutPlan(currentPlan, selectedRoomNumber)}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-key-gold text-neutral-900 font-bold text-xs shadow-sm hover:brightness-105 transition"
                >
                  <span>Inquire About Room {selectedRoomNumber}</span>
                  <span>→</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 5-Sharing Room Blueprint Architectural SVG Layout */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-neutral-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 bg-neutral-50 rounded-2xl p-4 border border-neutral-200 flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-between text-xs font-semibold text-neutral-600 mb-3 px-1">
                <span className="font-bold">5-Sharing Standard Floorplan</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-neutral-200">
                  24 ft × 16 ft (Spacious Layout)
                </span>
              </div>

              <div className="w-full max-w-[340px] aspect-[4/3] relative">
                <svg
                  viewBox="0 0 340 250"
                  className="w-full h-full text-neutral-900 drop-shadow-sm"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Architectural top-down layout of 5-sharing student room"
                >
                  <rect x="8" y="8" width="324" height="234" rx="4" stroke="currentColor" strokeWidth="3" fill="#ffffff" />
                  <line x1="90" y1="8" x2="250" y2="8" stroke="#38bdf8" strokeWidth="6" />
                  <text x="170" y="24" textAnchor="middle" fontSize="9" fill="#0284c7" fontWeight="600">
                    Balcony &amp; Natural Air Window
                  </text>
                  <rect x="260" y="10" width="60" height="14" rx="2" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.2" />
                  <text x="290" y="20" textAnchor="middle" fontSize="7" fill="#0284c7" fontWeight="bold">
                    Split AC
                  </text>
                  <path d="M 250 242 A 40 40 0 0 1 290 202" stroke="#f5c518" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="290" y1="202" x2="290" y2="242" stroke="#0f172a" strokeWidth="3" />
                  <text x="268" y="234" textAnchor="middle" fontSize="8" fill="#0f172a" fontWeight="600">
                    Entry
                  </text>
                  <rect x="10" y="155" width="85" height="85" fill="#f1f5f9" stroke="currentColor" strokeWidth="1.5" />
                  <text x="52" y="195" textAnchor="middle" fontSize="9" fill="#0f172a" fontWeight="700">
                    Attached
                  </text>
                  <text x="52" y="208" textAnchor="middle" fontSize="8" fill="#64748b">
                    Washroom
                  </text>
                  <path d="M 95 190 A 25 25 0 0 1 70 215" stroke="#64748b" strokeWidth="1.5" strokeDasharray="2 2" />
                  <rect x="10" y="38" width="36" height="100" fill="#fef3c7" stroke="currentColor" strokeWidth="1.2" />
                  <text x="28" y="90" textAnchor="middle" fontSize="8" fill="#78350f" fontWeight="bold" transform="rotate(-90 28 90)">
                    5 Lockers
                  </text>
                  {[58, 112, 166, 220, 274].map((x, i) => (
                    <g key={i}>
                      <rect x={x} y="35" width="45" height="72" rx="2" fill="#f8fafc" stroke="currentColor" strokeWidth="1.2" />
                      <rect x={x + 5} y="38" width="35" height="15" rx="2" fill="#fff" stroke="currentColor" strokeWidth="1" />
                      <text x={x + 22} y="75" textAnchor="middle" fontSize="8" fill="#0f172a" fontWeight="bold">Bed {i + 1}</text>
                    </g>
                  ))}
                  <rect x="115" y="160" width="130" height="32" rx="2" fill="#f1f5f9" stroke="currentColor" strokeWidth="1.2" />
                  <text x="180" y="180" textAnchor="middle" fontSize="8" fill="#0f172a" fontWeight="600">
                    5 Study Workstations
                  </text>
                  {[130, 155, 180, 205, 230].map((cx, i) => (
                    <circle key={i} cx={cx} cy="205" r="5" fill="#f5c518" stroke="currentColor" strokeWidth="1" />
                  ))}
                </svg>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Room Amenities &amp; Inclusions
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading tracking-tight mt-1">
                  Built for comfortable, collaborative student living
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Every resident gets an independent cot, study workspace, and lockable storage. Common areas, washrooms, and rooms are cleaned daily.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-800">
                {[
                  ["🛏️ 5 Individual Cots", "Comfortable dust-free mattresses & bedsheets with private spacing."],
                  ["📚 5 Study Desks", "Dedicated study stations with convenient charging points for laptops."],
                  ["🚿 Attached Washroom", "Modern western toilet with instant 24/7 solar hot water."],
                  ["🍛 Homely Andhra Mess", "Breakfast, lunch, evening snacks & dinner included in all annual plans."],
                ].map(([title, desc]) => (
                  <div key={title} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="font-bold text-neutral-900 block text-sm mb-1">{title}</span>
                    <span className="text-neutral-600">{desc}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleAskAboutPlan(currentPlan, selectedRoomNumber || undefined)}
                  className="w-full inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 rounded-full bg-[#0f172a] text-white font-bold text-base hover:bg-[#1e293b] active:scale-98 transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  Inquire About {selectedRoomNumber ? `Room ${selectedRoomNumber}` : currentPlan.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
