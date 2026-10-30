"use client";

import { useState, useEffect } from "react";
import { siteContent, DayMessMenu } from "@/lib/site";

export default function MessMenu() {
  const { messSchedule } = siteContent;
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);
  const [todayIndex, setTodayIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  useEffect(() => {
    const today = new Date().getDay();
    setActiveDayIndex(today);
    setTodayIndex(today);
  }, []);

  const activeDaySchedule: DayMessMenu =
    messSchedule.find((d) => d.dayIndex === activeDayIndex) || messSchedule[0];

  const weeklyOrderedSchedule = [
    messSchedule.find((d) => d.dayIndex === 1)!,
    messSchedule.find((d) => d.dayIndex === 2)!,
    messSchedule.find((d) => d.dayIndex === 3)!,
    messSchedule.find((d) => d.dayIndex === 4)!,
    messSchedule.find((d) => d.dayIndex === 5)!,
    messSchedule.find((d) => d.dayIndex === 6)!,
    messSchedule.find((d) => d.dayIndex === 0)!,
  ];

  return (
    <section id="mess-menu" className="py-20 lg:py-28 bg-[#f8fafc] text-neutral-900 scroll-mt-16 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header & Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Authentic Andhra Food Menu</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 font-heading tracking-tight leading-tight">
              Weekly mess menu
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Hygienic, wholesome home-style Andhra meals prepared with fresh ingredients. 3 nutritious meal services daily (Morning, Afternoon, Evening) with Sunday &amp; Wednesday Chicken Biryani, Monday Egg Curry, and Thursday Fried Rice.
            </p>
          </div>
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-neutral-200 shadow-sm shrink-0 self-start md:self-auto">
            {(["cards", "table"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  viewMode === mode
                    ? "bg-[#0f172a] text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
              >
                {mode === "cards" ? "Daily Cards" : "Full Food Chart"}
              </button>
            ))}
          </div>
        </div>

        {viewMode === "cards" ? (
          <div>
            {/* Day Tabs */}
            <div role="tablist" aria-label="Mess schedule days" className="flex overflow-x-auto gap-2 pb-3 mb-8 scrollbar-none snap-x">
              {messSchedule.map((day) => {
                const isActive = day.dayIndex === activeDayIndex;
                const isToday = day.dayIndex === todayIndex;
                return (
                  <button
                    key={day.dayName}
                    role="tab"
                    type="button"
                    id={`tab-day-${day.dayIndex}`}
                    aria-selected={isActive}
                    aria-controls={`panel-day-${day.dayIndex}`}
                    onClick={() => setActiveDayIndex(day.dayIndex)}
                    className={`min-h-[48px] px-5 py-2.5 rounded-full text-sm font-bold transition flex items-center gap-2 shrink-0 snap-start border ${
                      isActive
                        ? "bg-[#0f172a] text-white border-[#0f172a] shadow-sm"
                        : "bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900`}
                  >
                    <span>{day.dayName}</span>
                    {isToday && (
                      <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full ${isActive ? "bg-key-gold text-neutral-900" : "bg-neutral-900 text-white"}`}>
                        Today
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Meal Cards */}
            <div
              id={`panel-day-${activeDaySchedule.dayIndex}`}
              role="tabpanel"
              aria-labelledby={`tab-day-${activeDaySchedule.dayIndex}`}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {activeDaySchedule.meals.map((meal) => {
                const isMorning = meal.name.includes("Morning");
                const isAfternoon = meal.name.includes("Afternoon");
                const mealIcon = isMorning ? "☀️" : isAfternoon ? "🍛" : "🌙";
                const mealBadge = isMorning ? "BREAKFAST" : isAfternoon ? "LUNCH" : "DINNER";

                return (
                  <div key={meal.name} className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#0f172a]" />
                    <div>
                      <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100">
                        <div className="flex items-center gap-2">
                          <span className="text-xl" aria-hidden="true">{mealIcon}</span>
                          <div>
                            <h3 className="text-xl font-extrabold font-heading text-neutral-900">{meal.name}</h3>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">{mealBadge}</span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-md">{meal.time}</span>
                      </div>
                      <div className="mt-5">
                        <p className="text-base sm:text-lg font-bold text-neutral-900 leading-snug tracking-tight">{meal.menu}</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        <span>Dining Hall Service</span>
                      </span>
                      <span className="text-neutral-900 font-bold">Included in fee</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Full Weekly Table */
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden">
            <div className="p-5 sm:p-6 bg-[#0f172a] text-white flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight text-white">FOOD MENU</h3>
                <p className="text-xs text-neutral-300 mt-0.5">RaagaNest Boys Hostel • 7 Days Weekly Timetable</p>
              </div>
              <span className="text-xs font-bold bg-key-gold text-neutral-900 px-3 py-1 rounded-full uppercase tracking-wider">All-Inclusive Mess</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200 text-xs font-black uppercase tracking-wider text-neutral-700">
                    <th scope="col" className="p-4 sm:px-6 w-[18%]">DAYS</th>
                    <th scope="col" className="p-4 sm:px-6 w-[24%]">MORNING</th>
                    <th scope="col" className="p-4 sm:px-6 w-[29%]">AFTERNOON</th>
                    <th scope="col" className="p-4 sm:px-6 w-[29%]">EVENING</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-sm">
                  {weeklyOrderedSchedule.map((day) => {
                    const isToday = day.dayIndex === todayIndex;
                    const morningMeal = day.meals.find((m) => m.name.includes("Morning"))?.menu || "—";
                    const afternoonMeal = day.meals.find((m) => m.name.includes("Afternoon"))?.menu || "—";
                    const eveningMeal = day.meals.find((m) => m.name.includes("Evening"))?.menu || "—";
                    return (
                      <tr key={day.dayName} className={`transition-colors ${isToday ? "bg-amber-50/70 font-semibold text-neutral-900" : "hover:bg-neutral-50 text-neutral-800"}`}>
                        <td className="p-4 sm:px-6 font-extrabold uppercase tracking-wide text-neutral-900">
                          <div className="flex items-center gap-2">
                            <span>{day.dayName}</span>
                            {isToday && <span className="text-[10px] font-bold uppercase bg-[#0f172a] text-white px-2 py-0.5 rounded-full">Today</span>}
                          </div>
                        </td>
                        <td className="p-4 sm:px-6 font-medium">{morningMeal}</td>
                        <td className="p-4 sm:px-6 font-medium">{afternoonMeal}</td>
                        <td className="p-4 sm:px-6 font-medium">{eveningMeal}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
