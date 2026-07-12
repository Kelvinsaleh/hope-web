import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "Why Hope — The Problems We Were Built to Solve",
  description:
    "Most journaling apps are just blank pages. Most AI chatbots aren't built for emotional wellbeing. Hope fills the gap: structured AI journaling, mood tracking, and reflection tools built around the specific pressures students and young adults actually face.",
  path: "/why-hope",
});

const gaps = [
  {
    label: "The access gap",
    title: "Mental health support shouldn't require a waiting list and $150 an hour",
    body: [
      "University counseling centers in most countries are overwhelmed. Waiting times of two to four weeks for an initial appointment are common. Private therapy costs what many students don't have. And most employer or school wellness programs are either too generic or too clinical to actually get used.",
      "Hope doesn't replace any of that. But it fills the space between 'nothing' and 'full professional support' — a structured, private space to process what's happening before it compounds, and to build the self-awareness that makes professional support more effective when you do access it.",
    ],
  },
  {
    label: "The blank page problem",
    title: "Journaling fails because the blank page is its own kind of friction",
    body: [
      "Journaling has one of the strongest evidence bases of any low-cost mental health practice. The research on expressive writing — structured writing about emotionally significant experiences — consistently shows measurable benefits for mood, stress, and even physical health outcomes. And yet most people who try to journal stop within a week.",
      "The problem isn't the practice — it's the interface. A blank page offers nothing: no structure, no follow-up, no sense of whether you're actually doing something useful. Hope's AI companion is designed specifically to solve this: it asks the follow-up question that turns 'today was hard' into 'today was hard because X, and that usually happens when Y.' That shift from venting to reflection is where the actual value of journaling comes from.",
      "See the research behind this in our guide on how journaling improves mental wellbeing.",
    ],
  },
  {
    label: "The pattern problem",
    title: "You can feel a rough month but you can't see it without data",
    body: [
      "Human memory is a poor instrument for tracking mood over time. We tend to remember outlier days — the very good and the very bad — and average out the rest. We underestimate how much sleep affects our mood the next day. We don't notice that our anxiety reliably spikes every Sunday evening until someone points at six weeks of data and shows us.",
      "Mood tracking with weekly reflection reports turns scattered, subjective experience into something you can actually look at. Patterns that took months to form become visible in weeks. And once you can see them, you can act on them — earlier and more specifically than you could from memory alone.",
    ],
  },
  {
    label: "The between-sessions gap",
    title: "Most support happens once a week. Life happens every day.",
    body: [
      "For people who do see a therapist, the therapeutic work doesn't stop when the session ends. A lot of the most useful processing happens between sessions — noticing a reaction, connecting a current feeling to something older, catching a pattern before it plays out again. But most people have no structured space for that between-session work.",
      "Hope isn't positioned as a therapy substitute. It's positioned as the between-sessions tool — the place where you capture what's happening in real time, reflect on it briefly, and arrive at your next session (or at your own decision-making) with more clarity than you'd have had otherwise.",
    ],
  },
  {
    label: "The student pressure problem",
    title: "Student mental health has a specific shape that most wellness apps weren't built for",
    body: [
      "Exam pressure. Social comparison on a compressed social scale. Financial stress. Identity questions arriving all at once. Geographic and cultural displacement. Relationship patterns being formed for the first time. These are specific pressures, and they tend to arrive in clusters.",
      "Most mental health apps are built for a generic adult user — or for clinical populations. Hope was built first for students: for short sessions that fit between classes, for the specific anxieties that spike before exams, for the kind of mood patterns that follow term structures rather than calendar years.",
    ],
  },
  {
    label: "The 'is this serious enough' problem",
    title: "Most people don't seek help until a situation is already serious",
    body: [
      "There's a significant gap between 'I'm fine' and 'I need help now.' Most people spend a long time in that gap — experiencing persistent low mood, rising anxiety, or growing withdrawal — without seeking support, partly because the trend wasn't visible and partly because they weren't sure it was 'serious enough' yet.",
      "Regular reflection and mood tracking make the trend visible. A weekly report that shows mood declining across six consecutive weeks is a clearer signal than a general feeling that things have been off lately. Visibility is the first step toward action.",
    ],
  },
];

export default function WhyHopePage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <p className="font-medium uppercase tracking-wide text-bloom-600">Why Hope exists</p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink-900 dark:text-white sm:text-5xl">
          The problems we were built to solve
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-400 dark:text-ink-100/70">
          There are good reasons most people don't have a consistent mental wellness practice.
          Hope was built to address the specific ones that matter most.
        </p>
      </section>

      <div className="mx-auto max-w-4xl space-y-0 divide-y divide-ink-100 px-4 pb-16 dark:divide-ink-800">
        {gaps.map((gap) => (
          <div key={gap.label} className="py-14">
            <p className="text-sm font-semibold uppercase tracking-wide text-bloom-600">
              {gap.label}
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
              {gap.title}
            </h2>
            <div className="prose prose-lg dark:prose-invert mt-5 max-w-none">
              {gap.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* What Hope is not */}
      <section className="border-t border-ink-100 dark:border-ink-800">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
            What Hope is not — and why we say that plainly
          </h2>
          <div className="prose prose-lg dark:prose-invert mt-5 max-w-none">
            <p>
              Hope is a journaling and reflection tool. It is not a therapist, not a diagnostic
              tool, not an emergency service, and not a replacement for professional care when
              professional care is what someone needs. We build every feature with that distinction
              in mind, and we document the limits of the AI clearly — not as a legal disclaimer,
              but because the distinction genuinely matters for the people using the app.
            </p>
            <p>
              If you're looking for a deeper breakdown of where the AI's limits sit, see our{" "}
              <Link href="/ai-limitations">AI limitations page</Link>. If something more urgent is
              happening, our <Link href="/crisis-resources">crisis resources page</Link> has
              country-specific contacts.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-16">
        <CTASection
          title="Start where you are"
          description="A few minutes a day. No clinical intake. No waitlist. Just a private space to start seeing the patterns."
        />
      </div>
    </>
  );
}
