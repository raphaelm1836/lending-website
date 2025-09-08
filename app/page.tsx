import { Hero } from "@/components/hero";
import { ValueProps } from "@/components/value-props";
import { ProductCards } from "@/components/product-cards";
import { Steps } from "@/components/steps";
import { Testimonials } from "@/components/testimonials";
import { LogoStrip } from "@/components/logo-strip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ProductCards />
      <Steps />
      <LogoStrip />
      <Testimonials />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-slate-900">FAQs</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-900">Eligibility basics</h3>
              <p className="mt-2 text-sm text-slate-700">
                We commonly work with businesses operating for at least 6 months with consistent
                revenue. We serve many industries including retail, restaurants, e-commerce, home
                services, healthcare, and logistics.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Documents</h3>
              <p className="mt-2 text-sm text-slate-700">
                Typically recent bank statements, identity verification, and business documents.
                Additional information may be requested during underwriting.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Timing</h3>
              <p className="mt-2 text-sm text-slate-700">
                Timing varies by product and application. Some decisions are made in 24–48 hours
                (not guaranteed).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Costs</h3>
              <p className="mt-2 text-sm text-slate-700">
                Pricing may be expressed as APR or factor rate depending on product. MCAs use factor
                rates and are not loans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
