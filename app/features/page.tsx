import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "Features — What Hope Does",
  description:
    "Hope combines AI-powered journaling, mood tracking, guided breathing, weekly reflection reports, and personalized meditations into a single daily practice. Here's how each feature works and what it's designed to do.",
  path: "/features",
});

const features = [
  {
    id: "ai-companion",
    name: "AI Journaling Companion",
    tagline: "A journal that asks back.",
    description:
      "Hope's AI companion turns a few lines of writing into a real reflective conversation. It reads what you've written, notices what you've glossed over, and asks the follow-up question that moves the entry from venting to reflection. It uses context from your mood history and past entries — not just the current session — so it gets more relevant over time.",
    details: [
      "Trained on reflective conversation, not general-purpose chatbot patterns",
      "Uses your emotional history to ask more targeted questions",
      "Available free — unlimited journaling with AI prompts",
      "Not a therapist: see AI limitations",
    ],
    guideLink: "/guides/ai-journaling-companion",
    guideLabel: "How the AI companion works",
    faqLink: "/faq/ai-chat",
  },
  {
    id: "mood-tracking",
    name: "Mood Tracking",
    tagline: "Feelings you can actually see.",
    description:
      "Log how you're feeling in a few taps — with optional context like sleep quality, energy level, and what happened that day. Over time, this builds a real dataset of your emotional life: one you can look back on, notice patterns in, and actually use to make decisions rather than relying on a vague sense of 'how this month has been going.'",
    details: [
      "Quick check-in — under 30 seconds per entry",
      "Contextual fields: sleep, energy, events",
      "Visual mood trends across days, weeks, months",
      "Feeds into the weekly reflection report automatically",
    ],
    guideLink: "/guides/how-mood-tracking-works",
    guideLabel: "How mood tracking works",
    faqLink: "/faq/mood-tracking",
  },
  {
    id: "reports",
    name: "Weekly Reflection Reports",
    tagline: "What your week actually looked like.",
    description:
      "Every week, Hope generates a short, honest summary of your mood trends, recurring themes in your journal entries, and one actionable observation. It's not a clinical assessment — it's a mirror. Something that shows you what you've been carrying, what's been recurring, and what might be worth paying attention to.",
    details: [
      "Automatically generated from your entries and mood logs",
      "Identifies recurring themes and emotional patterns",
      "Delivered weekly — not as a notification, as a report you choose to open",
      "Feeds into the AI companion for more contextual follow-up",
    ],
    guideLink: "/guides/benefits-of-reflection",
    guideLabel: "Why regular reflection matters",
    faqLink: "/faq/reports",
  },
  {
    id: "breathing",
    name: "Guided Breathing",
    tagline: "The fastest reset that actually works.",
    description:
      "Guided breathing exercises work through a direct physiological mechanism — slow, extended exhales stimulate the vagus nerve, which drives the parasympathetic nervous system into a calmer state. Hope's breathing exercises are short (60–120 seconds), scientifically grounded, and available without any context or setup.",
    details: [
      "Box breathing, 4-7-8, and extended exhale patterns",
      "No account or setup required — available in one tap",
      "Backed by solid psychophysiology research",
      "Works on acute stress symptoms in under two minutes",
    ],
    guideLink: "/guides/breathing-exercises-and-science",
    guideLabel: "The science behind guided breathing",
    faqLink: "/faq/breathing",
  },
  {
    id: "meditations",
    name: "Personalized Meditations",
    tagline: "Meditation that knows what you've been going through.",
    description:
      "Most meditation apps offer a static library of sessions with generic themes. Hope generates meditations that are informed by your recent journal entries and mood patterns — so if you've been journaling about exam pressure, the session addresses that specifically, rather than offering the same 'stress relief' audio everyone else gets.",
    details: [
      "Personalized from your recent entries and mood trends",
      "Focuses on themes that have actually been showing up in your week",
      "Available as a premium feature alongside the free core experience",
      "Evidence-informed structure based on mindfulness research",
    ],
    guideLink: "/guides/guided-meditation-role-and-impact",
    guideLabel: "How guided meditation helps",
    faqLink: "/faq/meditations",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <p className="font-medium uppercase tracking-wide text-bloom-600">Features</p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink-900 dark:text-white sm:text-5xl">
          Everything in one daily practice
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-400 dark:text-ink-100/70">
          Hope combines five tools into a single, coherent daily habit. Each one is designed to
          work independently and to make the others more effective when you use them together.
        </p>
      </section>

      <div className="mx-auto max-w-4xl divide-y divide-ink-100 px-4 dark:divide-ink-800">
        {features.map((f) => (
          <section key={f.id} id={f.id} className="py-14 scroll-mt-20">
            <p className="text-sm font-semibold uppercase tracking-wide text-bloom-600">{f.name}</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
              {f.tagline}
            </h2>
            <p className="mt-4 text-lg text-ink-600 dark:text-ink-100/80">{f.description}</p>

            <ul className="mt-6 space-y-2">
              {f.details.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-ink-600 dark:text-ink-100/70">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bloom-400" />
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={f.guideLink}
                className="text-sm font-medium text-bloom-600 hover:text-bloom-700 dark:text-bloom-300"
              >
                {f.guideLabel} →
              </Link>
              <Link
                href={f.faqLink}
                className="text-sm font-medium text-ink-400 hover:text-ink-600 dark:text-ink-300"
              >
                FAQ: {f.name} →
              </Link>
            </div>
          </section>
        ))}
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-16">
        <CTASection />
      </div>
    </>
  );
}
