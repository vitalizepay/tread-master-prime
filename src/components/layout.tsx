import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/science", label: "Science of Grip" },
  { to: "/products", label: "Products" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-ink text-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-[11px] tracking-[0.2em] uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Phone className="h-3 w-3 text-orange" /> +971 50 000 0000</span>
            <span className="flex items-center gap-2"><Mail className="h-3 w-3 text-orange" /> info@qasralbustantyres.ae</span>
          </div>
          <div className="flex items-center gap-6">
            <span>24/7 Fleet Support · UAE</span>
            <span className="font-arabic text-orange">قصر البستان للإطارات</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-orange/15 blur-md group-hover:bg-orange/30 transition-colors" />
              <img src={logo} alt="Qasr Al Bustan Tyres logo" className="relative h-12 w-12 rounded-full object-cover ring-2 ring-ink/5" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-[0.18em] text-ink">QASR AL BUSTAN</div>
              <div className="text-[10px] tracking-[0.32em] text-orange font-semibold">TYRES · الإطارات</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(n => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "text-orange" }}
                inactiveProps={{ className: "text-ink/70 hover:text-ink" }}
                activeOptions={{ exact: true }}
                className="relative px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="btn-orange hidden sm:inline-flex !py-3 !px-5 !text-[11px]">
              Request Quote <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(v => !v)}
              className="lg:hidden grid h-11 w-11 place-items-center rounded-md border border-ink/10 text-ink"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-ink/5 bg-white"
            >
              <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col">
                {NAV.map(n => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    activeProps={{ className: "text-orange" }}
                    inactiveProps={{ className: "text-ink/75" }}
                    activeOptions={{ exact: true }}
                    className="py-3 text-sm font-semibold uppercase tracking-[0.2em] border-b border-ink/5 last:border-0"
                  >
                    {n.label}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-orange mt-4">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 rounded-full ring-1 ring-white/10" />
            <div>
              <div className="font-display text-lg tracking-[0.18em] text-white">QASR AL BUSTAN</div>
              <div className="font-arabic text-sm text-orange">قصر البستان للإطارات</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/55 max-w-sm">
            UAE's premium specialist in truck, bus, trailer and off-road tyres. Engineered for relentless commercial performance.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-orange text-ink hover:scale-110 transition-transform">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="tel:+971500000000" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white hover:border-orange hover:text-orange transition-colors">
              <Phone className="h-4 w-4" />
            </a>
            <a href="mailto:info@qasralbustantyres.ae" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white hover:border-orange hover:text-orange transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol title="Explore" links={NAV.map(n => ({ to: n.to, label: n.label }))} />
        <FooterCol title="Products" links={[
          { to: "/products", label: "Truck Tyres" },
          { to: "/products", label: "Bus Tyres" },
          { to: "/products", label: "Trailer Tyres" },
          { to: "/products", label: "Off-Road Tyres" },
          { to: "/products", label: "Industrial Tyres" },
        ]} />

        <div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-orange font-semibold mb-5">Visit</div>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-orange shrink-0 mt-0.5" /> Industrial Area, UAE</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-orange shrink-0 mt-0.5" /> +971 50 000 0000</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-orange shrink-0 mt-0.5" /> info@qasralbustantyres.ae</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <div>© {new Date().getFullYear()} Qasr Al Bustan Tyres. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Engineered in the UAE</span>
            <span>Trusted Globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.3em] uppercase text-orange font-semibold mb-5">{title}</div>
      <ul className="space-y-3 text-sm text-white/65">
        {links.map((l, i) => (
          <li key={`${l.to}-${l.label}-${i}`}>
            <Link to={l.to} className="hover:text-orange transition-colors inline-flex items-center gap-1 group">
              {l.label}
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971500000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-orange text-white shadow-[0_10px_30px_oklch(0.66_0.21_42/0.5)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-paper text-ink min-h-dvh flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export function PageHero({
  eyebrow, title, accent, description, children,
}: { eyebrow: string; title: string; accent?: string; description?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-cream border-b border-ink/5">
      <div className="absolute inset-0 grid-bg-light opacity-60" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.66 0.21 42 / 0.18), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="section-label">
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 font-display text-5xl leading-[0.95] tracking-tight text-ink sm:text-7xl max-w-4xl"
        >
          {title} {accent && <span className="text-orange">{accent}</span>}
        </motion.h1>
        {description && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-ink/60 leading-relaxed">
            {description}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
