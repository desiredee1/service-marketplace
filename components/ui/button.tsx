import Link from 'next/link';
import { Building2, Globe2, Home, ShieldCheck } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Customer', href: '/customer', icon: Globe2 },
  { label: 'Provider', href: '/provider', icon: Building2 },
  { label: 'Security', href: '/#security', icon: ShieldCheck }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">S</div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-900">Service</p>
            <p className="text-xs text-slate-500">Marketplace</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link key={label} href={href} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900">
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/customer" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
          Book now
        </Link>
      </div>
    </header>
  );
}
