import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Gauge, ShieldCheck, Truck, Clock, Zap, Award,
  CheckCircle2, Star, TrendingUp, Wrench, ChevronDown,
} from "lucide-react";
import heroTyre from "@/assets/hero-tyre.png";
import tyreProduct from "@/assets/tyre-product.png";
import treadMacro from "@/assets/tread-macro.jpg";
import { PageShell } from "@/components/layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qasr Al Bustan Tyres — Premium Truck Tyres UAE | Fleet, Bus, Trailer" },
      { name: "description", content: "Premium truck, bus, trailer and off-road tyres engineered for UAE fleets. Maximum mileage, fuel efficiency and safety, backed by 24/7 fleet support." },
      { property: "og:title", content: "Qasr Al Bustan Tyres — Premium Truck Tyres UAE" },
      { property: "og:description", content: "Engineered for the road. Built for every mile. Premium commercial tyres for UAE fleets." },
    ],
  }),
  component: Home,
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

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const line1 = "ENGINEERED FOR THE ROAD.".split(" ");
  const line2 = "BUILT FOR EVERY MILE.".split(" ");

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-white via-paper to-cream">
      <div className="absolute inset-0 grid-bg-light opacity-70" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.66 0.21 42 / 0.22), transparent 60%)" }} />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.66 0.21 42 / 0.12), transparent 60%)" }} />

      <div className="relative mx-auto max-w-7xl px-6 pt-12 sm:pt-20 pb-24 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.div style={{ y: yText }} className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-label">
            United Arab Emirates · Premium Truck Tyres
          </motion.div>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-ink">
            {[line1, line2].map((line, li) => (
              <div key={li} className="block">
                {line.map((w, i) => (
                  <motion.span
                    key={`${li}-${i}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (li * line.length + i) * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`inline-block mr-[0.25em] ${li === 1 && i === line.length - 1 ? "text-orange" : ""}`}
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-6 max-w-xl text-base sm:text-lg text-ink/60 leading-relaxed">
            UAE's premium specialist in <strong className="text-ink">truck, bus, trailer and off-road tyres</strong>. Lab-tested compounds. Reinforced sidewalls. Fleet-validated mileage. Backed by 24/7 roadside support.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/products" className="btn-orange">Explore Tyres <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="btn-ghost">Request Fleet Quote</Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "10K+", l: "Tyres Installed" },
              { v: "500+", l: "Fleet Clients" },
              { v: "15+", l: "Years in UAE" },
            ].map(s => (
              <div key={s.l}>
                <div className="font-display text-3xl text-ink">{s.v}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-ink/50 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative flex justify-center items-center">
          <div className="absolute h-[110%] w-[110%] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.66 0.21 42 / 0.18), transparent 60%)" }} />
          <div className="absolute h-[400px] w-[400px] rounded-full border border-orange/30 spin-slow" style={{ borderStyle: "dashed" }} />
          <div className="absolute h-[500px] w-[500px] rounded-full border border-ink/5" />
          <motion.img
            src={heroTyre}
            alt="Premium commercial truck tyre — Qasr Al Bustan"
            width={1024}
            height={1024}
            style={{ rotate, scale }}
            className="relative h-[60vmin] w-[60vmin] max-h-[560px] max-w-[560px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
          />
          <div className="absolute -top-3 right-2 sm:right-10 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2 text-xs font-semibold">
            <Star className="h-3.5 w-3.5 text-orange fill-orange" /> 4.9 / 5 Fleet Rating
          </div>
          <div className="absolute bottom-4 left-0 sm:left-6 bg-ink text-white rounded-full px-4 py-2 flex items-center gap-2 text-xs">
            <TrendingUp className="h-3.5 w-3.5 text-orange" /> +12% Fuel Efficiency
          </div>
        </div>
      </div>

      <div className="relative pb-8 flex justify-center">
        <div className="flex flex-col items-center gap-1 text-[10px] tracking-[0.4em] text-ink/40">
          SCROLL <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ["ISO 9001 Certified", "GCC Standards", "DOT Approved", "24/7 Roadside", "Fleet Warranty", "Pan-UAE Delivery"];
  return (
    <section className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs tracking-[0.25em] uppercase">
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-2">
            {idx > 0 && <span className="hidden sm:inline-block h-1 w-1 bg-orange rounded-full" />}
            <CheckCircle2 className="h-3.5 w-3.5 text-orange" /> {i}
          </span>
        ))}
      </div>
    </section>
  );
}

const categories = [
  { name: "Truck Tyres", desc: "Long-haul highway compounds. Built for the UAE's most demanding routes.", tag: "Highway" },
  { name: "Bus Tyres", desc: "Reinforced load ratings with premium passenger comfort.", tag: "Urban" },
  { name: "Trailer Tyres", desc: "High-stability sidewalls for heavy commercial trailers.", tag: "Cargo" },
];

function Categories() {
  return (
    <section className="py-24 sm:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <Reveal>
            <div className="section-label">02 — Built For Trucks</div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl sm:text-6xl tracking-tight text-ink leading-[0.95]">
              A TYRE FOR EVERY <span className="text-orange">MISSION</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/products" className="btn-ghost">View All Products <ArrowUpRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <Link to="/products" className="card-soft group block h-[440px] relative">
                <div className="relative h-[55%] overflow-hidden bg-gradient-to-br from-cream to-paper flex items-center justify-center">
                  <img src={tyreProduct} alt={c.name} loading="lazy" width={400} height={400}
                    className="h-[85%] w-auto object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 drop-shadow-xl" />
                  <span className="absolute top-4 right-4 bg-ink text-white text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full">{c.tag}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl tracking-wide text-ink">{c.name.toUpperCase()}</h3>
                  <p className="mt-2 text-sm text-ink/60">{c.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-orange group-hover:gap-3 transition-all">
                    Discover <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Gauge, t: "Maximum Mileage", d: "Premium silica compounds deliver up to 20% longer tread life vs standard tyres." },
  { icon: Zap, t: "Fuel Efficient", d: "Low rolling-resistance design cuts diesel consumption by up to 12% per fleet." },
  { icon: ShieldCheck, t: "Load Tested", d: "Reinforced sidewalls and steel-belt construction validated to 4,500 kg per tyre." },
  { icon: Truck, t: "Fleet Optimised", d: "Dedicated account management, on-site fitting and full lifecycle reporting." },
  { icon: Clock, t: "24/7 Support", d: "Round-the-clock roadside response across Dubai, Sharjah, Abu Dhabi and beyond." },
  { icon: Award, t: "Warranty Backed", d: "Full manufacturer warranty honoured on every tyre we deliver." },
];

function Features() {
  return (
    <section className="relative py-24 sm:py-32 bg-white border-y border-ink/5">
      <div className="absolute inset-0 grid-bg-light opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="section-label">03 — Why Fleets Choose Us</div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl tracking-tight text-ink leading-[0.95]">
            ENGINEERED TO OUTLAST <span className="text-orange">EVERY KILOMETRE</span>.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.t} delay={i * 0.06}>
                <div className="group h-full bg-paper border border-ink/5 p-8 rounded-md hover:bg-white hover:shadow-[var(--shadow-lift)] transition-all relative overflow-hidden">
                  <div className="absolute top-4 right-5 font-display text-3xl text-ink/10">0{i + 1}</div>
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl tracking-wider text-ink">{f.t.toUpperCase()}</h3>
                  <p className="mt-2 text-sm text-ink/60">{f.d}</p>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const perf = [
  { label: "Durability", value: 96 },
  { label: "Wet Grip", value: 94 },
  { label: "Mileage", value: 92 },
  { label: "Fuel Savings", value: 88 },
  { label: "Load Rating", value: 98 },
];

function Bar({ label, value, delay }: { label: string; value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, delay, ease: [0.16, 1, 0.3, 1], onUpdate: setV });
    return () => c.stop();
  }, [inView, value, delay]);
  return (
    <div ref={ref} className="grid grid-cols-[120px_1fr_auto] sm:grid-cols-[200px_1fr_auto] items-center gap-5">
      <div className="font-display text-sm sm:text-base tracking-[0.18em] text-ink/80">{label.toUpperCase()}</div>
      <div className="relative h-[3px] w-full bg-ink/10 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={inView ? { width: `${value}%` } : {}} transition={{ duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-y-0 left-0 rounded-full" style={{ background: "var(--gradient-orange)" }} />
      </div>
      <div className="w-16 text-right font-display text-2xl tabular-nums text-orange">{Math.round(v)}<span className="text-ink/40 text-base">%</span></div>
    </div>
  );
}

function Performance() {
  return (
    <section className="relative overflow-hidden bg-ink text-white py-24 sm:py-32">
      <div className="absolute inset-0">
        <img src={treadMacro} alt="" loading="lazy" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-end">
        <Reveal>
          <div className="section-label">04 — Performance</div>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl tracking-tight leading-[0.95]">
            MEASURED IN <span className="text-orange">MILES</span>, PROVEN IN <span className="text-orange">YEARS</span>.
          </h2>
          <p className="mt-5 max-w-md text-white/60">
            Lab-tested. Fleet-validated. Every Qasr Al Bustan tyre meets the standards demanded by UAE's most relentless operators.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="space-y-7 text-white [&_div]:text-white/80">
            {perf.map((p, i) => (
              <Bar key={p.label} label={p.label} value={p.value} delay={i * 0.1} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Ahmed Al Mansoori", role: "Fleet Manager, Emirates Logistics", quote: "Qasr Al Bustan tyres reduced our annual replacement cost by 18%. Their roadside response is the best in the UAE." },
  { name: "Rajesh Kumar", role: "Operations, Gulf Freight", quote: "We've run their long-haul truck tyres for three years across 200+ vehicles. Mileage and grip are class-leading." },
  { name: "Khalid Ibrahim", role: "Owner, Desert Haul", quote: "Off-road performance is unmatched. We trust them with every load that leaves the yard." },
];

function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="section-label">05 — Operators Speak</div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl tracking-tight text-ink leading-[0.95]">
            TRUSTED BY FLEETS THAT <span className="text-orange">CAN'T STOP</span>.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="card-soft p-8 h-full flex flex-col">
                <div className="flex gap-0.5 text-orange">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-orange" />)}
                </div>
                <p className="mt-5 text-ink/80 leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-ink/5">
                  <div className="font-display tracking-wider text-ink">{t.name.toUpperCase()}</div>
                  <div className="text-xs text-ink/55 mt-1">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.66 0.21 42 / 0.35), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <Reveal>
          <div className="section-label">Get Started</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight leading-[0.95] max-w-2xl">
            READY TO PUT YOUR FLEET ON <span className="text-orange">PREMIUM TYRES</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-orange">Request Quote <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/products" className="btn-ghost !text-white !border-white/30 hover:!text-orange hover:!border-orange">Browse Catalogue</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustBar />
      <Categories />
      <Features />
      <Performance />
      <Testimonials />
      <CTA />
    </PageShell>
  );
}
