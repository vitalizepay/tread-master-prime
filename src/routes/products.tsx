import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Truck, Bus, Container, Mountain, Factory } from "lucide-react";
import tyreProduct from "@/assets/tyre-product.png";
import { PageHero, PageShell } from "@/components/layout";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Truck, Bus & Commercial Tyres — Products | Qasr Al Bustan UAE" },
      { name: "description", content: "Explore our full range of premium truck tyres, bus tyres, trailer tyres, off-road and industrial tyres for UAE fleets. Long mileage, fuel-efficient, fleet-ready." },
      { property: "og:title", content: "Truck & Commercial Tyres — Qasr Al Bustan" },
      { property: "og:description", content: "Premium truck, bus, trailer, off-road and industrial tyres engineered for UAE fleets." },
    ],
  }),
  component: ProductsPage,
});

const categories = [
  { id: "all", label: "All" },
  { id: "truck", label: "Truck" },
  { id: "bus", label: "Bus" },
  { id: "trailer", label: "Trailer" },
  { id: "offroad", label: "Off-Road" },
  { id: "industrial", label: "Industrial" },
];

const products = [
  { name: "QAB R-Series Highway", cat: "truck", icon: Truck, size: "315/80 R 22.5", tag: "Long Haul", desc: "Premium long-haul truck tyre engineered for the UAE's high-speed highways.", features: ["Low rolling resistance", "5-zone tread", "Reinforced sidewall"] },
  { name: "QAB Regional Drive", cat: "truck", icon: Truck, size: "295/80 R 22.5", tag: "Mixed Service", desc: "Versatile drive-axle tyre for regional distribution fleets.", features: ["Multi-terrain grip", "Heat resistant", "Retread ready"] },
  { name: "QAB UrbanLine Bus", cat: "bus", icon: Bus, size: "275/70 R 22.5", tag: "Urban", desc: "Smooth, silent operation with reinforced load rating for city buses.", features: ["Low noise tread", "High mileage", "Comfort-tuned sidewall"] },
  { name: "QAB Coach Touring", cat: "bus", icon: Bus, size: "295/80 R 22.5", tag: "Coach", desc: "Long-distance coach tyre with superior wet grip and stability.", features: ["A-class wet grip", "Premium compound", "Fuel efficient"] },
  { name: "QAB TrailerMax", cat: "trailer", icon: Container, size: "385/65 R 22.5", tag: "Heavy Cargo", desc: "High-stability trailer tyre for fully laden long-haul transport.", features: ["4,500kg load rating", "Cut resistant", "Heat stable"] },
  { name: "QAB DesertGrip", cat: "offroad", icon: Mountain, size: "12.00 R 20", tag: "Terrain", desc: "Aggressive open-shoulder tread for desert and construction sites.", features: ["Sand traction", "Puncture resistant", "Deep tread"] },
  { name: "QAB QuarryKing", cat: "offroad", icon: Mountain, size: "14.00 R 24", tag: "Construction", desc: "Heavy-duty tyre built for quarry, mining and construction loads.", features: ["Triple steel belt", "Cut & chip resistant", "Extra deep tread"] },
  { name: "QAB PortMaster", cat: "industrial", icon: Factory, size: "10.00 R 20", tag: "Industrial", desc: "Engineered for port operations, forklifts and yard equipment.", features: ["Heat stable", "Slow-speed durability", "Solid sidewall"] },
  { name: "QAB WarehousePro", cat: "industrial", icon: Factory, size: "8.25 R 15", tag: "Forklift", desc: "Premium forklift and warehouse tyre with extended service life.", features: ["Non-marking option", "Anti-slip tread", "Long lifespan"] },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

function ProductsPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? products : products.filter(p => p.cat === active);

  return (
    <PageShell>
      <PageHero
        eyebrow="03 — Product Catalogue"
        title="EVERY TYRE FOR"
        accent="EVERY FLEET."
        description="Premium truck, bus, trailer, off-road and industrial tyres. Filter by category to find the engineering matched to your operation."
      >
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all ${
                active === c.id
                  ? "bg-ink text-white shadow-[var(--shadow-card)]"
                  : "bg-white text-ink/70 border border-ink/10 hover:border-orange hover:text-orange"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="py-20 sm:py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.name} delay={(i % 6) * 0.05}>
                  <article className="card-soft group h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cream to-paper flex items-center justify-center">
                      <img src={tyreProduct} alt={p.name} loading="lazy" width={400} height={400}
                        className="h-[85%] w-auto object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 drop-shadow-xl" />
                      <span className="absolute top-4 left-4 bg-white text-ink text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                        <Icon className="h-3 w-3 text-orange" /> {p.tag}
                      </span>
                      <span className="absolute top-4 right-4 font-mono text-[10px] bg-ink text-white px-2 py-1 rounded">{p.size}</span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-xl tracking-wide text-ink">{p.name.toUpperCase()}</h3>
                      <p className="mt-2 text-sm text-ink/60">{p.desc}</p>
                      <ul className="mt-4 space-y-1.5 text-xs text-ink/70">
                        {p.features.map(f => (
                          <li key={f} className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-orange shrink-0 mt-0.5" /> {f}</li>
                        ))}
                      </ul>
                      <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-orange group-hover:gap-3 transition-all">
                        Request Quote <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Sizes chart */}
      <section className="py-20 bg-white border-y border-ink/5">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="section-label">Common Truck Tyre Sizes</div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-ink leading-[0.95]">
              SIZES WE <span className="text-orange">STOCK</span>.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {["295/80 R 22.5", "315/80 R 22.5", "385/65 R 22.5", "275/70 R 22.5", "12.00 R 20", "11.00 R 20", "10.00 R 20", "14.00 R 24", "8.25 R 15", "9.00 R 20", "445/65 R 22.5", "13 R 22.5"].map(s => (
              <div key={s} className="font-mono text-sm bg-paper border border-ink/10 rounded px-4 py-3 text-center hover:border-orange hover:text-orange transition-colors">
                {s}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/55 max-w-2xl">Don't see your size? We source any commercial tyre size on request — most within 48 hours across the UAE.</p>
        </div>
      </section>

      <section className="bg-ink text-white py-20">
        <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="section-label">Fleet Pricing Available</div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight leading-[0.95]">
              GET A <span className="text-orange">CUSTOM QUOTE</span> FOR YOUR FLEET.
            </h2>
          </div>
          <Link to="/contact" className="btn-orange">Request Quote <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </PageShell>
  );
}
