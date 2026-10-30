import { siteContent } from "@/lib/site";

export default function Amenities() {
  const { amenities } = siteContent;

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white text-neutral-900 scroll-mt-16 relative border-b border-neutral-200">
      <div id="amenities" className="absolute -top-16 left-0" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
              Everything Included
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 font-heading tracking-tight leading-tight">
              Hostel facilities{" "}
              <span className="text-amber-500">built for students</span>.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Every facility is planned to keep your daily college stay simple, comfortable, and peaceful so you can completely focus on your studies.
            </p>
            <div className="mt-6 pt-6 border-t border-neutral-200 hidden lg:block">
              <a href="#rooms" className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-amber-600 transition">
                <span>View rooms &amp; fee structure</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-8">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {amenities.map((item) => (
                <div key={item.id} className="border-t border-neutral-200 pt-5 flex flex-col justify-start">
                  <dt className="text-xl font-extrabold font-heading text-neutral-900 tracking-tight flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>{item.title}</span>
                  </dt>
                  <dd className="mt-2 text-base text-neutral-600 leading-relaxed">
                    {item.beforeHighlight ? (
                      <>
                        {item.beforeHighlight}
                        <span className="text-neutral-900 font-semibold">{item.highlight}</span>
                        {item.afterHighlight}
                      </>
                    ) : (
                      item.detail
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
