import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { CrisisBanner } from "@/components/CrisisBanner";

export const metadata = buildMetadata({
  title: "AI Limitations — What Hope Can and Cannot Do",
  description:
    "Hope's AI companion is a journaling and reflection tool, not a therapist or medical service. This page explains exactly what the AI is designed to do, where it falls short, and when to seek professional help instead.",
  path: "/ai-limitations",
});

const limitations = [
  {
    title: "The AI can make factual or contextual errors",
    body: "Hope's AI generates responses based on patterns in language and context from your entries. It doesn't always get things right. It can misread tone, miss something important, or draw a connection that doesn't actually apply to your situation. Treat its responses as a prompt for your own thinking — not as a verdict.",
  },
  {
    title: "It is not a therapist, and conversations with it are not therapy",
    body: "Therapy involves a trained, licensed clinician, a structured diagnostic process, and an ongoing clinical relationship built over time. Hope's AI companion has none of those things. It can help you reflect, notice patterns, and process a difficult day — but that's a different activity from clinical therapy, and it produces different outcomes.",
  },
  {
    title: "It does not provide medical advice",
    body: "Nothing the AI says constitutes medical advice. This includes anything touching on medication, physical symptoms, diagnosis, or treatment decisions. Those conversations belong with a qualified doctor or psychiatrist, not an AI journaling companion.",
  },
  {
    title: "It cannot diagnose mental health conditions",
    body: "Hope's mood tracking and reflection summaries are designed to surface patterns in your own words and feelings. They are not diagnostic assessments. The AI will never tell you that you have depression, anxiety, ADHD, or any other condition — because it isn't qualified to make that call, and doing so without clinical training causes real harm.",
  },
  {
    title: "It is not an emergency service",
    body: "Hope is not staffed in real time by humans, cannot dispatch help, and is not equipped to respond to a mental health emergency. If you are in crisis, thinking about suicide, or at risk of harming yourself or someone else, please contact emergency services or a crisis line immediately. See our crisis resources page.",
  },
  {
    title: "It cannot replace human connection",
    body: "Talking to an AI companion is a different experience from talking to another person — a friend, a counselor, a mentor, or a therapist. Hope is a structured tool for self-reflection; it is not a substitute for human relationship or support.",
  },
  {
    title: "Its memory of past entries is a feature, not continuity of care",
    body: "Hope uses context from your mood history and past journal entries to make the AI's responses more relevant. This is a technical feature — it does not mean the AI 'knows' you the way a therapist builds a longitudinal clinical picture over months of structured sessions.",
  },
  {
    title: "Personalized meditations are not clinical interventions",
    body: "Hope's meditations are informed by mindfulness research and shaped by your recent journal content. They are not medical or psychological interventions, and they are not delivered by certified meditation or mindfulness teachers. They are a reflection-adjacent practice, not a treatment.",
  },
];

const whenToSeek = [
  "Low mood, anxiety, or stress that persists for more than two weeks after the original trigger has resolved",
  "Difficulty functioning in daily tasks — school, work, relationships, basic self-care",
  "Thoughts of self-harm or suicide (seek help immediately — see crisis resources)",
  "Significant changes in sleep, appetite, or energy that don't resolve with better habits",
  "A sense that journaling is circling the same point without any forward movement",
  "A feeling that the problem is bigger than any tool or habit could hold",
];

export default function AiLimitationsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="font-medium uppercase tracking-wide text-bloom-600">Transparency</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
        What Hope's AI can and cannot do
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-400 dark:text-ink-100/70">
        We believe you should know exactly what you're working with. This page explains the real
        limits of Hope's AI — clearly, without softening them.
      </p>

      <div className="mt-10">
        <CrisisBanner compact />
      </div>

      {/* What the AI is designed to do */}
      <section className="mt-12">
        <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">
          What Hope's AI is actually designed to do
        </h2>
        <div className="prose prose-lg dark:prose-invert mt-4 max-w-none">
          <p>
            Hope's AI companion is designed to do one thing well: ask the follow-up question that
            moves a journal entry from surface-level venting to genuine reflection. It reads what
            you've written, uses context from your past entries and mood patterns, and responds with
            a prompt that deepens the conversation rather than closing it.
          </p>
          <p>
            It's also designed to help you notice patterns across time — connecting a mood dip to a
            recurring context, or surfacing a theme that keeps appearing in your entries without you
            having named it explicitly. And it can respond supportively in a difficult moment —
            without judgment, without the stakes that come with saying something hard to another
            person.
          </p>
          <p>
            That's the full scope. It's a reflection companion. Everything else listed below is
            outside that scope.
          </p>
        </div>
      </section>

      {/* The limitations */}
      <section className="mt-12">
        <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">
          Specific limitations
        </h2>
        <div className="mt-6 space-y-6">
          {limitations.map((lim) => (
            <div
              key={lim.title}
              className="rounded-xl2 border border-ink-100 p-6 dark:border-ink-800"
            >
              <h3 className="font-semibold text-ink-900 dark:text-white">{lim.title}</h3>
              <p className="mt-2 text-sm text-ink-400 dark:text-ink-100/70">{lim.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it differs from therapy */}
      <section className="mt-14">
        <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">
          How AI journaling differs from therapy — specifically
        </h2>
        <div className="prose prose-lg dark:prose-invert mt-4 max-w-none">
          <p>
            This distinction comes up often enough that it's worth being precise about.
          </p>
          <p>
            Therapy involves a licensed clinician with formal training in assessment, diagnosis, and
            evidence-based treatment. It's a regulated professional relationship with ethical and
            legal obligations, informed consent, and structured approaches to specific clinical
            presentations — CBT for anxiety, EMDR for trauma, DBT for emotional regulation, and so
            on. The clinician tracks your history, adapts their approach based on what's working, and
            maintains a longitudinal clinical record.
          </p>
          <p>
            Hope's AI companion is a reflective conversation partner trained on journaling and
            emotional processing patterns. It uses your history to ask better questions and surfaces
            patterns across time. It is available at 2am when a thought won't leave you alone, and
            it doesn't judge you for things you can't say to another person yet. Those are real
            values, and for many people in many situations they are enough.
          </p>
          <p>
            But they are not the same values therapy provides, and we don't claim they are. The
            people most likely to be harmed by this confusion are those who genuinely need clinical
            support and mistake a journaling app for a substitute.
          </p>
        </div>
      </section>

      {/* When to seek professional help */}
      <section className="mt-14 rounded-xl2 border border-bloom-200 bg-bloom-50 p-8 dark:border-bloom-900 dark:bg-ink-800">
        <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">
          When to seek professional help instead
        </h2>
        <p className="mt-2 text-sm text-ink-400 dark:text-ink-100/70">
          If you notice any of the following, a conversation with a doctor, therapist, or counselor
          is the appropriate next step — not more journaling.
        </p>
        <ul className="mt-5 space-y-3">
          {whenToSeek.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink-800 dark:text-ink-100">
              <span className="mt-0.5 shrink-0 text-bloom-500">→</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-400">
          See{" "}
          <Link href="/guides/when-to-seek-professional-help" className="text-bloom-600 underline">
            our guide on when to seek professional help
          </Link>{" "}
          and{" "}
          <Link href="/crisis-resources" className="text-bloom-600 underline">
            our crisis resources page
          </Link>{" "}
          if something more urgent is happening.
        </p>
      </section>
    </article>
  );
}
