import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Phone, Mail, MapPin, MessageCircle, ArrowRight, ArrowUpRight,
  Gauge, Flame, Weight, Droplets, Leaf, ShieldCheck, Wrench, Truck,
  Clock, Zap, Award, ChevronDown,
} from "lucide-react";

import heroTyre from "@/assets/hero-tyre.png";
import tyreCutaway from "@/assets/tyre-cutaway.jpg";
import treadMacro from "@/assets/tread-macro.jpg";
import tyreProduct from "@/assets/tyre-product.png";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qasr Al Bustan Tyres — Premium Truck & Commercial Tyres UAE" },
      { name: "description", content: "Engineered for the road. Built for every mile. Premium truck, bus and commercial tyres for maximum performance, safety and reliability." },
      { property: "og:title", content: "Qasr Al Bustan Tyres — Premium Commercial Tyres" },
      { property: "og:description", content: "Premium truck, bus and commercial tyres engineered for performance, safety and reliability." },
    ],
  }),
  component: Home,
});

// ─────────────────────────── NAV ───────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Science", "#science"],
    ["Products", "#products"],
    ["Performance", "#performance"],
    ["Technology", "#tech"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-jet/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Qasr Al Bustan Tyres" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base tracking-[0.18em] text-white">QASR AL BUSTAN</div>
            <div className="text-[10px] tracking-[0.32em] text-orange">TYRES · الإطارات</div>
          </div>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-orange">
              {l}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary hidden sm:inline-flex !py-3 !px-5 !text-[11px]">
          Request Quote <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

// ─────────────────────────── HERO ───────────────────────────
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const words = "ENGINEERED FOR THE ROAD.".split(" ");
  const words2 = "BUILT FOR EVERY MILE.".split(" ");

  return (
    <section id="top" ref={ref} className="relative min-h-[110vh] overflow-hidden bg-jet">
      {/* radial bg */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="noise" />

      {/* orange streaks */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange to-transparent opacity-60 streak" />
        <div className="absolute top-2/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange to-transparent opacity-40 streak" style={{ animationDelay: "1.2s" }} />
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange/30 to-transparent pulse-glow" />
        <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange/20 to-transparent pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Tyre */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 flex items-center justify-center pt-20"
      >
        <div className="relative">
          {/* glow disc behind */}
          <div className="absolute inset-0 -z-10 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.72 0.21 45 / 0.35), transparent 60%)", transform: "scale(1.4)" }} />
          <motion.img
            src={heroTyre}
            alt="Premium commercial truck tyre"
            width={1024}
            height={1024}
            style={{ rotate }}
            className="h-[60vmin] w-[60vmin] max-h-[680px] max-w-[680px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
          />
        </div>
      </motion.div>

      {/* Headline */}
      <motion.div style={{ y: yText, opacity }} className="relative z-10 mx-auto flex min-h-[110vh] max-w-7xl flex-col items-center justify-between px-6 pb-16 pt-32 text-center">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-label mx-auto justify-center mb-6">
            United Arab Emirates · قصر البستان
          </motion.div>
          <h1 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
            {[words, words2].map((line, li) => (
              <div key={li} className="block">
                {line.map((w, i) => (
                  <motion.span
                    key={`${li}-${i}`}
                    initial={{ opacity: 0, y: 60, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.35 + (li * line.length + i) * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`inline-block mr-[0.25em] ${li === 1 && i === line.length - 1 ? "text-orange-glow" : "text-metal"}`}
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="mx-auto mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
            Premium Truck, Bus and Commercial Tyres for Maximum Performance, Safety and Reliability.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#products" className="btn-primary">Explore Products <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className="btn-ghost">Request Quote</a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="mt-12 flex flex-col items-center gap-2 text-[10px] tracking-[0.4em] text-white/40">
          SCROLL <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────── SECTION 2 — SCIENCE OF GRIP (pinned) ───────────────────────────
const specs = [
  { icon: Gauge, label: "Tread Design", value: "Multi-zone siping for traction and silence.", stat: "5-Zone" },
  { icon: Flame, label: "Heat Resistance", value: "Silica compound dissipates thermal stress under load.", stat: "180°C" },
  { icon: Weight, label: "Load Capacity", value: "Reinforced steel belts engineered for maximum payload.", stat: "4500kg" },
  { icon: Droplets, label: "Wet Grip", value: "Wide circumferential grooves channel water instantly.", stat: "A-Class" },
  { icon: Leaf, label: "Fuel Efficiency", value: "Low rolling resistance compound reduces consumption.", stat: "-12%" },
];

function ScienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, specs.length]);
  const [active, setActive] = useState(0);
  useEffect(() => activeIndex.on("change", v => setActive(Math.min(specs.length - 1, Math.max(0, Math.floor(v))))), [activeIndex]);

  return (
    <section id="science" ref={ref} className="relative" style={{ height: `${specs.length * 90}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-jet">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="noise" />
        <div className="pointer-events-none absolute -left-32 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.72 0.21 45 / 0.25), transparent 60%)" }} />

        <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="relative z-10 pt-20 lg:pt-0">
            <div className="section-label">02 — The Science</div>
            <h2 className="mt-4 font-display text-5xl leading-[0.9] tracking-tight text-metal sm:text-7xl">
              THE SCIENCE<br />OF <span className="text-orange-glow">GRIP</span>
            </h2>
            <p className="mt-5 max-w-md text-white/55">
              Every millimetre of rubber is engineered. Scroll through the layers that define performance at speed, under load, in every climate.
            </p>

            <div className="mt-10 space-y-1">
              {specs.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                return (
                  <div key={s.label} className={`relative grid grid-cols-[auto_1fr_auto] items-center gap-5 border-l-2 py-5 pl-5 pr-2 transition-all duration-500 ${isActive ? "border-orange bg-white/[0.02]" : "border-white/10"}`}>
                    <Icon className={`h-6 w-6 shrink-0 transition-colors ${isActive ? "text-orange" : "text-white/30"}`} />
                    <div className="min-w-0">
                      <div className={`font-display text-lg tracking-[0.12em] transition-colors ${isActive ? "text-white" : "text-white/40"}`}>{s.label.toUpperCase()}</div>
                      <div className={`mt-0.5 text-xs transition-opacity ${isActive ? "opacity-80" : "opacity-0 h-0"} text-white/60`}>{s.value}</div>
                    </div>
                    <div className={`font-display text-xl tracking-wider shrink-0 transition-colors ${isActive ? "text-orange" : "text-white/20"}`}>{s.stat}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: rotating tyre */}
          <div className="relative hidden lg:flex h-full items-center justify-center">
            <div className="absolute h-[560px] w-[560px] rounded-full border border-orange/20" />
            <div className="absolute h-[640px] w-[640px] rounded-full border border-white/5 spin-slow" style={{ borderStyle: "dashed" }} />
            <motion.img
              src={heroTyre}
              alt=""
              loading="lazy"
              width={1024}
              height={1024}
              style={{ rotate }}
              className="relative h-[520px] w-[520px] drop-shadow-[0_30px_80px_rgba(255,106,0,0.25)]"
            />
            <div className="absolute -bottom-10 font-display text-[20rem] leading-none tracking-tighter text-white/[0.03] pointer-events-none">
              0{active + 1}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── SECTION 3 — PRODUCTS ───────────────────────────
const products = [
  { name: "Truck Tyres", desc: "Long-haul highway compounds built for maximum mileage.", tag: "Highway" },
  { name: "Bus Tyres", desc: "Premium passenger comfort with reinforced load ratings.", tag: "Urban" },
  { name: "Trailer Tyres", desc: "High-stability sidewalls for heavy commercial trailers.", tag: "Cargo" },
  { name: "Off-Road Tyres", desc: "Aggressive tread for construction and desert operations.", tag: "Terrain" },
  { name: "Industrial Tyres", desc: "Engineered for ports, warehouses and forklift fleets.", tag: "Industrial" },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Products() {
  return (
    <section id="products" className="relative bg-jet py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="section-label">03 — Collection</div>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-metal sm:text-7xl">
            A TYRE FOR EVERY <span className="text-orange-glow">MISSION</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="card-metal group flex h-[420px] flex-col">
                <div className="relative flex h-[60%] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,oklch(0.2_0.005_270),transparent_70%)]">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at center, oklch(0.72 0.21 45 / 0.2), transparent 70%)" }} />
                  <img src={tyreProduct} alt={p.name} loading="lazy" width={400} height={400} className="h-[80%] w-auto object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" />
                  <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-orange backdrop-blur-md">
                    {p.tag.toUpperCase()}
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-2xl tracking-wide text-white">{p.name.toUpperCase()}</h3>
                    <p className="mt-2 text-sm text-white/55">{p.desc}</p>
                  </div>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange transition-transform group-hover:translate-x-1">
                    Enquire <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── SECTION 4 — PERFORMANCE ───────────────────────────
const perf = [
  { label: "Durability", value: 96 },
  { label: "Grip", value: 94 },
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
    <div ref={ref} className="grid grid-cols-[140px_1fr_auto] items-center gap-5 sm:grid-cols-[200px_1fr_auto]">
      <div className="font-display text-sm tracking-[0.18em] text-white/70 sm:text-base">{label.toUpperCase()}</div>
      <div className="relative h-[2px] w-full bg-white/10">
        <motion.div initial={{ width: 0 }} animate={inView ? { width: `${value}%` } : {}} transition={{ duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-y-0 left-0" style={{ background: "var(--gradient-orange)", boxShadow: "0 0 20px oklch(0.72 0.21 45 / 0.6)" }} />
      </div>
      <div className="w-16 text-right font-display text-2xl tabular-nums text-orange">{Math.round(v)}<span className="text-white/40 text-base">%</span></div>
    </div>
  );
}

function Performance() {
  return (
    <section id="performance" className="relative overflow-hidden bg-gradient-to-b from-jet via-[#0a0a0a] to-jet py-32">
      <div className="absolute inset-0">
        <img src={treadMacro} alt="" loading="lazy" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-jet/70" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <Reveal>
            <div className="section-label">04 — Performance</div>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight text-metal sm:text-7xl">
              MEASURED IN <span className="text-orange-glow">MILES</span>, PROVEN IN <span className="text-orange-glow">YEARS</span>.
            </h2>
            <p className="mt-5 max-w-md text-white/55">
              Lab-tested. Fleet-validated. Every Qasr Al Bustan tyre meets the standards demanded by UAE's most relentless operators.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-7">
              {perf.map((p, i) => (
                <Bar key={p.label} label={p.label} value={p.value} delay={i * 0.1} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── SECTION 5 — WHY ───────────────────────────
const reasons = [
  { icon: Award, t: "Premium Brands", d: "A curated portfolio of globally trusted manufacturers." },
  { icon: Wrench, t: "Expert Installation", d: "Precision balancing, alignment and fitting by certified pros." },
  { icon: Truck, t: "Fleet Support", d: "Dedicated account management for transport operators." },
  { icon: Clock, t: "24/7 Assistance", d: "Round-the-clock roadside response across the UAE." },
  { icon: Zap, t: "Fast Delivery", d: "Same-day dispatch from our central warehouse." },
  { icon: ShieldCheck, t: "Warranty Support", d: "Full manufacturer warranty honoured on every tyre." },
];

function WhyUs() {
  return (
    <section className="relative bg-jet py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="section-label">05 — Why Us</div>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-metal sm:text-7xl">
            WHY <span className="text-orange-glow">QASR AL BUSTAN</span>.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.t} delay={i * 0.06}>
                <div className="group relative h-full bg-jet p-8 transition-colors hover:bg-gunmetal sm:p-10">
                  <div className="absolute right-6 top-6 font-display text-sm text-white/20">0{i + 1}</div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-orange/30 bg-orange/5 transition-all group-hover:bg-orange group-hover:text-jet">
                    <Icon className="h-6 w-6 text-orange transition-colors group-hover:text-jet" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl tracking-wide">{r.t.toUpperCase()}</h3>
                  <p className="mt-3 text-sm text-white/55">{r.d}</p>
                  <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-orange transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── SECTION 6 — TECHNOLOGY ───────────────────────────
const layers = [
  { t: "Tread Compound", d: "Silica-enriched rubber balancing wet grip and rolling resistance." },
  { t: "Steel Belts", d: "Twin steel belts deliver puncture resistance and stability." },
  { t: "Nylon Cap Ply", d: "Heat-stable nylon overlay locks geometry at high speeds." },
  { t: "Sidewall", d: "Reinforced ply construction absorbs impact and resists cuts." },
  { t: "Inner Liner", d: "Halobutyl liner maintains pressure with near-zero permeability." },
];

function Technology() {
  return (
    <section id="tech" className="relative overflow-hidden bg-[#070707] py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="section-label">06 — Technology</div>
          <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-metal sm:text-7xl">
            INSIDE THE <span className="text-orange-glow">RUBBER</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-white/55">A cinematic reveal of the engineering layers that separate a tyre from a Qasr Al Bustan tyre.</p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-sm border border-white/10">
              <img src={tyreCutaway} alt="Tyre cutaway showing internal engineering layers" loading="lazy" width={1920} height={1080} className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-jet via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] tracking-[0.3em] text-white/50">
                <span>CUTAWAY VIEW</span><span>QAB / R-SERIES</span>
              </div>
            </div>
          </Reveal>

          <div className="space-y-3">
            {layers.map((l, i) => (
              <Reveal key={l.t} delay={0.15 + i * 0.08}>
                <div className="group grid grid-cols-[auto_1fr] gap-5 border-l-2 border-white/10 py-4 pl-5 transition-colors hover:border-orange">
                  <span className="font-display text-3xl text-orange/60 transition-colors group-hover:text-orange">0{i + 1}</span>
                  <div>
                    <div className="font-display text-xl tracking-wider">{l.t.toUpperCase()}</div>
                    <p className="mt-1 text-sm text-white/55">{l.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── SECTION 7 — CLIENTS ───────────────────────────
const clientGroups = ["Logistics Companies", "Transport Operators", "Construction Fleets", "Government Contractors"];
const clientLogos = ["EMIRATES LOGISTICS", "AL BAYAN TRANSPORT", "DESERT HAUL", "GULF FREIGHT", "NAJM FLEET", "ARABIAN MOVERS", "RAS CARGO", "MARINA TRUCKING"];

function Clients() {
  return (
    <section className="relative bg-jet py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="section-label">07 — Clients</div>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-metal sm:text-6xl">
            TRUSTED BY OPERATORS WHO <span className="text-orange-glow">CANNOT STOP</span>.
          </h2>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-white/40">
            {clientGroups.map(g => <span key={g}>{g}</span>)}
          </div>
        </Reveal>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-white/5 py-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-jet to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-jet to-transparent" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...clientLogos, ...clientLogos].map((c, i) => (
            <div key={i} className="font-display text-2xl tracking-[0.25em] text-white/30 transition-colors hover:text-orange sm:text-3xl">
              {c}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────── SECTION 8 — STATS ───────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2.2, ease: [0.16, 1, 0.3, 1], onUpdate: n => setV(Math.floor(n)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
}

function Stats() {
  const stats = [
    { v: 10000, suf: "+", l: "Tyres Installed" },
    { v: 500, suf: "+", l: "Fleet Customers" },
    { v: 24, suf: "/7", l: "Roadside Assistance" },
    { v: 15, suf: "+", l: "Years Experience" },
  ];
  return (
    <section className="relative overflow-hidden bg-[#080808] py-28">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute left-1/2 top-0 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-[#080808] p-8 text-center sm:p-12">
                <div className="font-display text-6xl leading-none tracking-tight text-orange-glow sm:text-7xl">
                  <Counter to={s.v} suffix={s.suf} />
                </div>
                <div className="mt-4 text-xs uppercase tracking-[0.3em] text-white/50">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── SECTION 9 — CONTACT ───────────────────────────
function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-jet py-32">
      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.72 0.21 45 / 0.2), transparent 60%)" }} />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="section-label">09 — Contact</div>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-metal sm:text-7xl">
            LET'S GET YOUR FLEET <span className="text-orange-glow">ROLLING</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch shortly."); }} className="card-metal p-8 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" />
                <Field label="Company" name="company" />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Email" name="email" type="email" />
              </div>
              <div className="mt-5">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Tell us about your requirement</label>
                <textarea rows={4} className="w-full resize-none border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-orange" placeholder="Quantity, sizes, vehicle type..." />
              </div>
              <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">Request Quote <ArrowRight className="h-4 w-4" /></button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col gap-5">
              <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between card-metal !p-6 hover:!-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-orange text-jet"><MessageCircle className="h-5 w-5" /></div>
                  <div>
                    <div className="font-display tracking-wider">WHATSAPP</div>
                    <div className="text-xs text-white/50">Chat with our team instantly</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/30 transition-colors group-hover:text-orange" />
              </a>

              <InfoRow icon={Phone} title="PHONE" value="+971 50 000 0000" />
              <InfoRow icon={Mail} title="EMAIL" value="info@qasralbustantyres.ae" />
              <InfoRow icon={MapPin} title="LOCATION" value="Industrial Area, United Arab Emirates" />

              <div className="card-metal mt-auto overflow-hidden">
                <iframe
                  title="Qasr Al Bustan Tyres Location"
                  src="https://www.google.com/maps?q=Dubai+UAE&output=embed"
                  className="h-56 w-full grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">{label}</label>
      <input id={name} name={name} type={type} required className="w-full border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-orange" />
    </div>
  );
}

function InfoRow({ icon: Icon, title, value }: { icon: any; title: string; value: string }) {
  return (
    <div className="flex items-center gap-4 border border-white/10 bg-white/[0.02] p-5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-orange/30 text-orange"><Icon className="h-4 w-4" /></div>
      <div className="min-w-0">
        <div className="text-[10px] tracking-[0.3em] text-white/40">{title}</div>
        <div className="truncate text-sm text-white/90">{value}</div>
      </div>
    </div>
  );
}

// ─────────────────────────── FOOTER ───────────────────────────
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030303] py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="" className="h-12 w-12 rounded-full ring-1 ring-white/10" />
          <div>
            <div className="font-display text-lg tracking-[0.18em]">QASR AL BUSTAN TYRES</div>
            <div className="font-arabic text-sm text-orange">قصر البستان للإطارات</div>
          </div>
        </div>
        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} Qasr Al Bustan Tyres. All rights reserved. · United Arab Emirates
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────── PAGE ───────────────────────────
function Home() {
  return (
    <main className="bg-jet text-white">
      <Nav />
      <Hero />
      <ScienceSection />
      <Products />
      <Performance />
      <WhyUs />
      <Technology />
      <Clients />
      <Stats />
      <Contact />
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/971500000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-orange text-jet shadow-[0_0_40px_oklch(0.72_0.21_45/0.6)] transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
