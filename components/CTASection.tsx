import Link from "next/link";

export function CTASection({
  title = "Start reflecting with Hope",
  description = "Free to start. AI journaling, mood tracking, and guided breathing in your pocket.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="rounded-xl2 bg-bloom-900 px-8 py-12 text-center text-white">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-bloom-100/90">{description}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href={process.env.NEXT_PUBLIC_APP_STORE_URL || "#"}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-bloom-900 transition hover:bg-bloom-50"
        >
          Download for iOS
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_PLAY_STORE_URL || "#"}
          className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Get it on Android
        </Link>
      </div>
    </section>
  );
}
