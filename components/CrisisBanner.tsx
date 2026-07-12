import Link from "next/link";

/**
 * Shown on the crisis-resources page (full) and as a slim strip
 * anywhere chat/journaling content is discussed. Hope is explicitly
 * NOT positioned as an emergency or therapy service — this banner
 * carries that disclosure wherever it appears.
 */
export function CrisisBanner({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="rounded-xl2 border border-amber/30 bg-amber/10 px-4 py-3 text-sm text-ink-800 dark:text-ink-100">
        Hope is not an emergency or therapy service.{" "}
        <Link href="/crisis-resources" className="font-medium underline">
          If you're in crisis, find help here
        </Link>
        .
      </div>
    );
  }

  return (
    <div className="rounded-xl2 border border-amber/40 bg-amber/10 p-6">
      <p className="font-display text-lg font-semibold text-ink-900 dark:text-white">
        If you are in immediate danger or thinking about suicide
      </p>
      <p className="mt-2 text-ink-800 dark:text-ink-100">
        Please contact local emergency services or a crisis line right away. Hope is a
        self-reflection and journaling tool — it is not equipped to respond to emergencies and
        should never be used as a substitute for urgent professional or medical care.
      </p>
    </div>
  );
}
