import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "./SearchBar";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/guides", label: "Guides" },
  { href: "/research", label: "Research" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-100 bg-white/90 backdrop-blur dark:border-ink-800 dark:bg-ink-900/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-ink-900 dark:text-white">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bloom-500 text-sm text-white">
            H
          </span>
          Hope
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-600 transition hover:text-bloom-600 dark:text-ink-100/80 dark:hover:text-bloom-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SearchBar />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href={process.env.NEXT_PUBLIC_APP_STORE_URL || "#"}
            className="rounded-full bg-bloom-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-bloom-600"
          >
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}
