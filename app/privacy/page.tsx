import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "How Hope collects, stores, and processes your data, and the control you have over it.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
        Privacy at Hope
      </h1>
      <p className="mt-4 text-ink-400">
        Last updated: replace with your actual review date before publishing.
      </p>

      <div className="prose prose-lg dark:prose-invert mt-8 max-w-none">
        <h2>Data we collect</h2>
        <ul>
          <li>Account details you provide (e.g. email, display name).</li>
          <li>Journal entries, mood logs, and reflection responses you create in the app.</li>
          <li>Basic device and usage data needed to keep the app working and secure.</li>
        </ul>
        <p>
          <em>
            Replace this list with the exact fields Hope actually collects before publishing —
            this is a structural placeholder, not a legal audit of your data flows.
          </em>
        </p>

        <h2>How we store it</h2>
        <p>
          Journal content and mood data are stored in our backend database, associated with your
          account. We do not sell journal content to third parties.
        </p>

        <h2>How AI processing works</h2>
        <p>
          When you chat with Hope's AI companion or request a reflection summary, the relevant
          text is sent to our language model provider to generate a response. We do not use your
          private journal content to train third-party foundation models.
        </p>
        <p>
          <em>
            Confirm and state explicitly which model provider you use and your provider's
            data-retention terms here.
          </em>
        </p>

        <h2>Encryption</h2>
        <p>
          Data is encrypted in transit (TLS) between the app and our servers. Describe your
          at-rest encryption approach here once finalized.
        </p>

        <h2>Your control over your data</h2>
        <ul>
          <li>You can edit or delete individual journal entries at any time.</li>
          <li>You can export your data on request.</li>
          <li>You can delete your account, which removes your stored journal content.</li>
        </ul>

        <h2>Questions</h2>
        <p>
          Reach out to <a href="mailto:privacy@hopementalhealthsupport.xyz">privacy@hopementalhealthsupport.xyz</a>{" "}
          with any privacy questions or data requests.
        </p>
      </div>
    </article>
  );
}
