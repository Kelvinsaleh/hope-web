import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hope — AI-powered journaling and reflection",
  description:
    "Understand yourself better with AI-powered journaling, mood tracking, guided breathing, and personalized reflection. Built for students and anyone building a self-awareness habit.",
  path: "/",
  absoluteTitle: true,
});

const features = [
  {
    title: "AI Journaling",
    description: "A conversational companion that asks the right follow-up question, not a blank page.",
  },
  {
    title: "Mood Tracking",
    description: "Log how you feel in seconds and start noticing the patterns behind it.",
  },
  {
    title: "Weekly Reflection Reports",
    description: "A short, honest summary of your week — written for you, not at you.",
  },
  {
    title: "Guided Breathing",
    description: "Simple breathing exercises for the moments your thoughts are moving faster than you are.",
  },
  {
    title: "Personalized Meditations",
    description: "Meditations shaped by what you've actually been journaling about.",
  },
  {
    title: "Community Support",
    description: "A quieter corner of the internet to feel less alone in what you're going through.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — the signature element is the journal entry itself: a short,
          handwritten-feeling exchange that shows what "AI-powered reflection"
          actually looks like, instead of a generic stat block. */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-medium uppercase tracking-wide text-bloom-600">Hope</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink-900 dark:text-white sm:text-5xl">
            Understand yourself better with AI-powered journaling and reflection.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-400 dark:text-ink-100/70">
            Hope turns a few minutes of writing into a clearer picture of how you're really doing —
            privately, on your own terms.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={process.env.NEXT_PUBLIC_APP_STORE_URL || "#"}
              className="rounded-full bg-bloom-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-bloom-600"
            >
              Download Hope
            </a>
            <Link
              href="/guides"
              className="rounded-full border border-ink-100 px-6 py-3 text-sm font-semibold text-ink-800 transition hover:border-bloom-300 dark:border-ink-800 dark:text-ink-100"
            >
              Read the guides
            </Link>
          </div>
        </div>

        <div className="rounded-xl2 border border-ink-100 bg-bloom-50/60 p-6 shadow-soft dark:border-ink-800 dark:bg-ink-800/60">
          <p className="text-xs font-medium uppercase tracking-wide text-bloom-600">
            Today's entry · 9:42 PM
          </p>
          <p className="mt-3 font-display text-lg text-ink-800 dark:text-ink-100">
            "Exam week again. Feels like I'm running on fumes but somehow still showing up."
          </p>
          <div className="mt-4 rounded-xl border border-bloom-200 bg-white p-4 text-sm text-ink-600 dark:border-bloom-900 dark:bg-ink-900 dark:text-ink-100/80">
            <span className="font-semibold text-bloom-600">Hope: </span>
            That "still showing up" matters more than it feels like right now. What's one thing
            that made today even slightly easier to get through?
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
          Everything you need to build a reflection habit
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl2 border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"
            >
              <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-ink-400 dark:text-ink-100/70">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <CTASection />
      </section>
    </>
  );
}
