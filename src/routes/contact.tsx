import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Clock, ArrowUpRight, ShieldCheck, Truck } from "lucide-react";
import { PageHero, PageShell } from "@/components/layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Qasr Al Bustan Tyres — Fleet Quotes & 24/7 Support UAE" },
      { name: "description", content: "Get in touch with Qasr Al Bustan Tyres for fleet quotes, technical advice and 24/7 roadside assistance across the UAE. WhatsApp, phone or email." },
      { property: "og:title", content: "Contact Qasr Al Bustan Tyres" },
      { property: "og:description", content: "Reach our UAE team for fleet quotes, technical advice and 24/7 roadside support." },
    ],
  }),
  component: ContactPage,
});

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] tracking-[0.3em] uppercase text-ink/55 mb-2 font-semibold">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required className="w-full border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder-ink/30 outline-none transition-colors focus:border-orange focus:ring-2 focus:ring-orange/15 rounded-md" />
    </div>
  );
}

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="05 — Contact"
        title="LET'S GET YOUR FLEET"
        accent="ROLLING."
        description="Fleet quotes, technical consultations and 24/7 roadside support across the UAE. We typically respond within one business hour."
      />

      <section className="py-20 sm:py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="card-soft p-8 sm:p-10 bg-white">
              <h2 className="font-display text-2xl tracking-wider text-ink">REQUEST A QUOTE</h2>
              <p className="mt-2 text-sm text-ink/60">Tell us about your fleet — we'll match the right tyre, the right price, and the right service plan.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you — our team will reach out shortly."); }} className="mt-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="Ahmed Al Mansoori" />
                  <Field label="Company" name="company" placeholder="Emirates Logistics" />
                  <Field label="Phone" name="phone" type="tel" placeholder="+971 50 000 0000" />
                  <Field label="Email" name="email" type="email" placeholder="you@company.ae" />
                </div>
                <div className="mt-5">
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-ink/55 mb-2 font-semibold">Vehicle Type</label>
                  <select className="w-full border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-orange rounded-md">
                    <option>Truck — Long Haul</option>
                    <option>Truck — Regional</option>
                    <option>Bus — Urban</option>
                    <option>Bus — Coach</option>
                    <option>Trailer</option>
                    <option>Off-Road / Construction</option>
                    <option>Industrial / Forklift</option>
                  </select>
                </div>
                <div className="mt-5">
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-ink/55 mb-2 font-semibold">Tell us about your requirement</label>
                  <textarea rows={4} className="w-full resize-none border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder-ink/30 outline-none transition-colors focus:border-orange rounded-md" placeholder="Quantity, sizes, fleet size, urgency..." />
                </div>
                <button type="submit" className="btn-orange mt-7 w-full sm:w-auto">Send Request <ArrowRight className="h-4 w-4" /></button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col gap-4">
              <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between card-soft p-6 bg-gradient-to-br from-orange to-orange-glow text-white !border-transparent">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-orange"><MessageCircle className="h-5 w-5" /></div>
                  <div>
                    <div className="font-display tracking-wider">WHATSAPP US</div>
                    <div className="text-xs text-white/85">Instant fleet response</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/80 group-hover:text-white" />
              </a>

              <InfoCard icon={Phone} title="Phone" value="+971 50 000 0000" href="tel:+971500000000" />
              <InfoCard icon={Mail} title="Email" value="info@qasralbustantyres.ae" href="mailto:info@qasralbustantyres.ae" />
              <InfoCard icon={MapPin} title="Location" value="Industrial Area, United Arab Emirates" />
              <InfoCard icon={Clock} title="Hours" value="Sat–Thu 8:00–20:00 · 24/7 Roadside" />

              <div className="card-soft overflow-hidden mt-2">
                <iframe
                  title="Qasr Al Bustan Tyres Location"
                  src="https://www.google.com/maps?q=Dubai+UAE&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-ink/5">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="section-label">Service Promise</div>
            <h2 className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl tracking-tight text-ink leading-[0.95]">
              WE KEEP YOUR FLEET ON <span className="text-orange">THE ROAD</span>.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Clock, t: "1-hour response", d: "We respond to fleet enquiries within one business hour." },
              { icon: Truck, t: "On-site fitting", d: "Mobile fitment available across Dubai, Sharjah and Abu Dhabi." },
              { icon: ShieldCheck, t: "Full warranty", d: "Manufacturer warranty honoured on every tyre we supply." },
            ].map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="card-soft p-7 h-full">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-orange/10 text-orange">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl tracking-wide text-ink">{t.toUpperCase()}</h3>
                  <p className="mt-2 text-sm text-ink/60">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function InfoCard({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 card-soft !p-5 bg-white">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-orange/10 text-orange"><Icon className="h-4 w-4" /></div>
      <div className="min-w-0">
        <div className="text-[10px] tracking-[0.3em] text-ink/50 font-semibold uppercase">{title}</div>
        <div className="truncate text-sm text-ink mt-0.5">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
