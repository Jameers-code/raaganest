import AnimatedSection from "@/components/AnimatedSection";
import { siteContent } from "@/lib/site";

const amenityIcons: Record<string, string> = {
  "homely-food": "M4 3v6a2 2 0 0 0 4 0V3M6 3v18M19 21V3c-4 3-4 9 0 9",
  "walkable-distance": "M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  "lift-generator": "m13 2-9 12h7l-1 8 10-12h-7l1-8Z",
  "high-speed-wifi": "M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8 16a6 6 0 0 1 8 0M12 20h.01",
  "ro-water-hot-water": "M12 3S5 11 5 15a7 7 0 0 0 14 0c0-4-7-12-7-12ZM9 15a3 3 0 0 0 3 3",
  "laundry-washing": "M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM4 8h16M7 5.5h.01M10 5.5h.01M16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  "security-cctv": "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Zm-4 9 3 3 5-6",
  "study-atmosphere": "M12 6C9 3 5 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-3-1-7-1-10 2Zm0 0v15",
};

export default function Amenities() {
  const { amenities } = siteContent;

  return (
    <section id="facilities" aria-labelledby="facilities-heading" className="relative scroll-mt-16 border-b border-neutral-200 bg-[#f8f9fb] py-20 text-neutral-900 lg:py-24">
      <div id="amenities" className="absolute -top-16 left-0" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedSection as="div" className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-800">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
              Everyday comfort
            </span>
            <h2 id="facilities-heading" className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Everything you need.<br />
              <span className="text-neutral-500">Right where you live.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
              Good food, space to focus, and the comforts of home. Thoughtful facilities that make student life a little easier.
            </p>
          </AnimatedSection>
          <AnimatedSection as="div" delay={0.1}>
          <a href="#rooms" className="inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-3 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4">
            View rooms &amp; fees <span aria-hidden="true">↗</span>
          </a>
          </AnimatedSection>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {amenities.map((item) => (
            <AnimatedSection
              as="div"
              key={item.id}
              delay={(amenities.indexOf(item) % 4) * 0.07}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-[0_2px_8px_rgba(15,23,42,0.025)] transition-[border-color,box-shadow] duration-200 hover:border-amber-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] motion-reduce:transition-none"
            >
              <dt>
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-100 bg-amber-50 text-amber-700">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    <path d={amenityIcons[item.id] ?? "m12 3 8 9-8 9-8-9 8-9Z"} />
                  </svg>
                </span>
                <span className="block font-heading text-lg font-bold leading-snug tracking-tight text-neutral-900">{item.title}</span>
              </dt>
              <dd className="mt-3 text-sm leading-6 text-neutral-600">
                {item.beforeHighlight ? (
                  <>
                    {item.beforeHighlight}
                    <span className="font-medium text-neutral-800">{item.highlight}</span>
                    {item.afterHighlight}
                  </>
                ) : item.detail}
              </dd>
            </AnimatedSection>
          ))}
        </dl>
      </div>
    </section>
  );
}
