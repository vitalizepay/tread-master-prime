import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Calendar, Clock, Tag, Search } from "lucide-react";
import treadMacro from "@/assets/tread-macro.jpg";
import tyreCutaway from "@/assets/tyre-cutaway.jpg";
import heroTyre from "@/assets/hero-tyre.png";
import tyreProduct from "@/assets/tyre-product.png";
import { PageHero, PageShell } from "@/components/layout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Truck Tyre Blog — Fleet Guides, Tyre Care & Industry Insights | Qasr Al Bustan UAE" },
      { name: "description", content: "Expert guides on truck tyre selection, maintenance, fuel efficiency, retreading and UAE fleet management — published by the team at Qasr Al Bustan Tyres." },
      { name: "keywords", content: "truck tyre blog, fleet tyre maintenance UAE, tyre pressure trucks, retread tyres UAE, commercial tyre guides" },
      { property: "og:title", content: "Truck Tyre Blog — Qasr Al Bustan Tyres" },
      { property: "og:description", content: "Expert guides on truck tyre care, fuel efficiency and UAE fleet management." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    slug: "choosing-right-truck-tyres-uae",
    title: "How to Choose the Right Truck Tyres for UAE Fleets",
    excerpt: "From load index to tread pattern, here's the complete guide to selecting commercial tyres that survive UAE heat, sand and highway speed.",
    cat: "Buying Guide", read: "8 min", date: "Jun 20, 2026", img: heroTyre,
  },
  {
    slug: "tyre-pressure-fuel-efficiency",
    title: "Tyre Pressure and Fuel Efficiency: The Hidden Margin in Your Fleet",
    excerpt: "Under-inflated truck tyres can cost a fleet thousands per vehicle annually. We break down the maths and the maintenance schedule.",
    cat: "Fuel Efficiency", read: "6 min", date: "Jun 12, 2026", img: treadMacro,
  },
  {
    slug: "retread-vs-new-truck-tyres",
    title: "Retread vs New Truck Tyres: What Actually Saves Money",
    excerpt: "Retreading sounds cheap — but only if your casing strategy is right. Here's how UAE operators get retreading wrong.",
    cat: "Cost Control", read: "7 min", date: "Jun 5, 2026", img: tyreCutaway,
  },
  {
    slug: "summer-heat-tyre-blowouts",
    title: "Why UAE Summer Heat Causes Tyre Blowouts (And How to Prevent Them)",
    excerpt: "When asphalt hits 65°C, tyre construction matters more than brand reputation. Engineering tips for the GCC summer.",
    cat: "Safety", read: "5 min", date: "May 28, 2026", img: tyreProduct,
  },
  {
    slug: "off-road-tyre-selection-construction",
    title: "Off-Road Tyre Selection for UAE Construction Sites",
    excerpt: "Quarry, sabkha or sand dune — pick the wrong tread and downtime triples. A site manager's decision framework.",
    cat: "Off-Road", read: "9 min", date: "May 18, 2026", img: heroTyre,
  },
  {
    slug: "fleet-tyre-rotation-schedule",
    title: "The Fleet Tyre Rotation Schedule That Extends Life by 25%",
    excerpt: "A simple position-rotation cycle drives huge mileage gains. Here's the schedule our customers' fleet managers actually follow.",
    cat: "Maintenance", read: "6 min", date: "May 9, 2026", img: treadMacro,
  },
];

const categories = ["All", "Buying Guide", "Fuel Efficiency", "Safety", "Maintenance", "Cost Control", "Off-Road"];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

function BlogPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const filtered = posts.filter(p =>
    (cat === "All" || p.cat === cat) &&
    (q === "" || p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase()))
  );
  const [featured, ...rest] = filtered.length ? filtered : posts;

  return (
    <PageShell>
      <PageHero
        eyebrow="04 — Insights & Guides"
        title="THE TRUCK TYRE"
        accent="JOURNAL."
        description="Expert guides on tyre selection, fleet maintenance, fuel efficiency and UAE commercial tyre intelligence — written by the engineers behind Qasr Al Bustan Tyres."
      >
        <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-ink/10 text-sm focus:border-orange focus:ring-2 focus:ring-orange/15 outline-none"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all ${
                cat === c ? "bg-ink text-white" : "bg-white text-ink/70 border border-ink/10 hover:border-orange hover:text-orange"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </PageHero>

      {/* Featured */}
      <section className="py-16 bg-paper">
        <div className="mx-auto max-w-7xl px-6">
          {featured && (
            <Reveal>
              <Link to="/blog" className="card-soft group grid lg:grid-cols-[1.3fr_1fr] overflow-hidden">
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-cream">
                  <img src={featured.img} alt={featured.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-5 left-5 bg-orange text-white text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full">Featured</span>
                </div>
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-4 text-[11px] tracking-[0.25em] uppercase text-ink/55 font-semibold">
                    <span className="flex items-center gap-1.5"><Tag className="h-3 w-3 text-orange" /> {featured.cat}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3 text-orange" /> {featured.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3 w-3 text-orange" /> {featured.read}</span>
                  </div>
                  <h2 className="mt-5 font-display text-3xl sm:text-5xl tracking-tight text-ink leading-[1] group-hover:text-orange transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-ink/65 leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-7 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-orange group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6">
          {rest.length === 0 ? (
            <p className="text-center text-ink/55">No articles match — try a different category or search term.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 6) * 0.05}>
                  <Link to="/blog" className="card-soft group block h-full overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden bg-cream">
                      <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-6">
                      <div className="flex gap-3 text-[10px] tracking-[0.25em] uppercase text-ink/55 font-semibold">
                        <span className="text-orange">{p.cat}</span>
                        <span>·</span>
                        <span>{p.read}</span>
                      </div>
                      <h3 className="mt-3 font-display text-xl tracking-tight text-ink leading-tight group-hover:text-orange transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm text-ink/60 line-clamp-3">{p.excerpt}</p>
                      <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] uppercase text-ink/70 group-hover:text-orange transition-colors">
                        Read More <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-ink text-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="section-label justify-center inline-flex">Stay Informed</div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight leading-[1]">
            FLEET INSIGHTS, <span className="text-orange">EVERY MONTH</span>.
          </h2>
          <p className="mt-4 text-white/65">Tyre engineering tips, UAE regulation updates, fuel-saving guides — straight to your inbox. No spam.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed — welcome aboard."); }} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" required placeholder="you@company.ae" className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/15 text-white placeholder-white/40 outline-none focus:border-orange" />
            <button className="btn-orange">Subscribe <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
