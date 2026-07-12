import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "About Hope",
  description:
    "Hope is an AI-powered journaling and reflection app built for students and anyone who wants to understand themselves better. Learn our mission, what we stand for, and what problems we were built to solve.",
  path: "/about",
});

const problems = [
  {
    heading: "The blank page problem",
    body: "Traditional journaling fails most people not because writing is hard, but because starting is. An empty page offers no structure, no prompt, no feedback — so people write for three days and stop. Hope's AI companion asks the right follow-up question so the entry writes itself.",
  },
  {
    heading: "Patterns you can't see",
    body: "You can feel a general sense that this month has been harder than last, but you can't actually see it without data. Hope's mood tracking and weekly reports turn scattered feelings into visible patterns — the kind that change how you make decisions.",
  },
  {
    heading: "The gap between therapy sessions",
    body: "Most people who see a therapist do so once a week or less. That leaves six or more days of lived experience with no structured outlet. Hope doesn't replace that session — it captures what happens between them.",
  },
  {
    heading: "Mental health stigma and access",
    body: "Therapy is expensive, often inaccessible, and still carries stigma in many communities. Hope offers a private, judgment-free space to start building self-awareness before — or alongside — any formal support.",
  },
  {
    heading: "Stress with nowhere to go",
    body: "Exam pressure, financial worry, relationship tension — students carry a specific and often underestimated set of stressors. Hope is built around that reality, not around a clinical adult patient population.",
  },
  {
    heading: "Not knowing when to get help",
    body: "Many people don't seek professional support until a situation is already serious, partly because they couldn't see it building. Regular reflection and mood tracking make the trend visible early enough to act on.",
  },
];

const values = [
  { title: "Honesty over hype", body: "Hope is a reflection tool, not a therapist. We say that plainly because it matters. We don't use clinical language to sound more credible." },
  { title: "Privacy as a foundation", body: "Your journal is private. We don't sell it, mine it for ads, or share it with institutions. That's not a feature — it's a baseline." },
  { title: "Accessible by design", body: "A free tier that covers core journaling. No paywall on the essentials. Premium unlocks more depth, not basic dignity." },
  { title: "Clinically honest", body: "We include crisis resources, AI limitation disclosures, and explicit guidance about when to seek professional help. Being useful sometimes means pointing away from the app." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <p className="font-medium uppercase tracking-wide text-bloom-600">About Hope</p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink-900 dark:text-white sm:text-5xl">
          Built so you can understand yourself better
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-400 dark:text-ink-100/70">
          Hope is an AI-powered journaling and reflection platform. It helps you see the patterns
          in how you're doing — through guided journaling, mood tracking, breathing exercises, and
          weekly reflection reports — privately, without judgment, and without a price tag on the
          basics.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-ink-100 bg-bloom-50/40 dark:border-ink-800 dark:bg-ink-800/30">
        <div className="mx-auto grid max-w-4xl gap-10 px-4 py-14 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-bloom-600">Mission</p>
            <p className="mt-3 font-display text-xl font-semibold text-ink-900 dark:text-white">
              Make daily self-reflection easy enough that it actually happens — and useful enough
              that it's worth coming back to.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-bloom-600">Vision</p>
            <p className="mt-3 font-display text-xl font-semibold text-ink-900 dark:text-white">
              A world where checking in with yourself is as normal as checking your phone — and
              where people who do it have a private, judgment-free space to do it in.
            </p>
          </div>
        </div>
      </section>

      {/* Problems Hope Solves */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
          The problems Hope was built to solve
        </h2>
        <p className="mt-3 max-w-2xl text-ink-400">
          Hope exists because the current mental wellness landscape has some specific gaps that
          most tools don't fill well.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.heading}
              className="rounded-xl2 border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"
            >
              <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
                {p.heading}
              </h3>
              <p className="mt-2 text-sm text-ink-400 dark:text-ink-100/70">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/why-hope"
            className="text-sm font-medium text-bloom-600 hover:text-bloom-700 dark:text-bloom-300"
          >
            Read the full breakdown of what Hope solves →
          </Link>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-ink-100 dark:border-ink-800">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
            Who Hope is built for
          </h2>
          <div className="prose prose-lg dark:prose-invert mt-6 max-w-none">
            <p>
              Hope was designed first for students — people navigating exam pressure, social
              comparison, financial worry, and major life transitions, often with less access to
              formal mental health support than they need. University counseling centers are
              chronically under-resourced; private therapy is expensive; and most general-purpose
              mental health apps aren't built around the specific shape of student life.
            </p>
            <p>
              The same needs show up beyond student years. Anyone trying to build a self-awareness
              habit — who wants to understand their moods, process their weeks, and notice their
              patterns before they become problems — fits the use case Hope was built for.
            </p>
            <p>
              Hope is not a clinical tool. It's not built for people in acute crisis, for diagnosing
              conditions, or for replacing therapy. We're explicit about those limits because they
              matter. See our{" "}
              <Link href="/ai-limitations">AI limitations page</Link> for the full picture, and our{" "}
              <Link href="/crisis-resources">crisis resources page</Link> for what to do if
              something more urgent is happening.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-ink-100 bg-bloom-50/40 dark:border-ink-800 dark:bg-ink-800/30">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
            What we stand for
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title}>
                <p className="font-semibold text-ink-900 dark:text-white">{v.title}</p>
                <p className="mt-1 text-sm text-ink-400 dark:text-ink-100/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16">
        <CTASection
          title="Start understanding yourself better"
          description="Free to start. No ads. No selling your journal. Just a quiet place to reflect."
        />
      </div>
    </>
  );
}
