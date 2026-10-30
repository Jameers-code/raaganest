import { siteContent } from "@/lib/site";

export default function Rules() {
  const { whyChooseUs } = siteContent;

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#f8fafc] text-neutral-900 scroll-mt-16 border-b border-neutral-200 relative">
      <div id="why-us" className="absolute -top-16 left-0" aria-hidden="true" />
      <div id="rules" className="absolute -top-16 left-0" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 font-heading tracking-tight leading-tight">
            Why choose RaagaNest{" "}
            <span className="text-amber-500">among all hostels</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Everything you need for a comfortable, focused, and secure engineering college life — from high-speed connectivity to brand-new furniture and peaceful study atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {whyChooseUs.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white hover:bg-neutral-50/80 border border-neutral-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition duration-200 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                    <span className="text-xs font-extrabold text-amber-500 tracking-wider">
                      POINT {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
                <h3 className="text-xl font-extrabold font-heading text-neutral-900 tracking-tight">{item.title}</h3>
                <p className="mt-2.5 text-base text-neutral-600 leading-relaxed">
                  {item.beforeHighlight}
                  <span className="text-neutral-900 font-bold">{item.highlight}</span>
                  {item.afterHighlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
