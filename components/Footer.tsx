import Link from "next/link";

const columns = [
  {
    heading: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/why-hope", label: "Why Hope" },
      { href: "/faq/ai-chat", label: "AI companion" },
      { href: "/faq/breathing", label: "Breathing exercises" },
      { href: "/faq/meditations", label: "Guided meditations" },
    ],
  },
  {
    heading: "Knowledge base",
    links: [
      { href: "/guides", label: "Guides" },
      { href: "/research", label: "Research" },
      { href: "/faq", label: "FAQ" },
      { href: "/search", label: "Search" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { href: "/compare/hope-vs-chatgpt", label: "Hope vs ChatGPT" },
      { href: "/compare/hope-vs-replika", label: "Hope vs Replika" },
      { href: "/compare/hope-vs-headspace", label: "Hope vs Headspace" },
      { href: "/compare/hope-vs-calm", label: "Hope vs Calm" },
    ],
  },
  {
    heading: "Trust",
    links: [
      { href: "/about", label: "About" },
      { href: "/privacy", label: "Privacy" },
      { href: "/ai-limitations", label: "AI limitations" },
      { href: "/crisis-resources", label: "Crisis resources" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-bloom-50/40 dark:border-ink-800 dark:bg-ink-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="font-display text-lg font-bold text-ink-900 dark:text-white">Hope</p>
            <p className="mt-2 max-w-xs text-sm text-ink-400">
              AI-powered journaling and reflection — for self-awareness, not therapy.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-semibold text-ink-900 dark:text-white">{col.heading}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-400 transition hover:text-bloom-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-ink-100 pt-6 text-xs text-ink-400 dark:border-ink-800">
          © {new Date().getFullYear()} Hope. Hope is not a medical device and does not provide
          therapy, diagnosis, or emergency services.
        </div>
      </div>
    </footer>
  );
}
