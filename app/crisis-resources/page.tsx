import { CrisisBanner } from "@/components/CrisisBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Crisis Resources",
  description:
    "Hope is not an emergency service. If you're in crisis, here's how to get help right now.",
  path: "/crisis-resources",
});

// Replace placeholder numbers with verified, current local hotlines before launch.
const countryResources = [
  { country: "Kenya", line: "Befrienders Kenya", contact: "+254 722 178 177" },
  { country: "United States", line: "988 Suicide & Crisis Lifeline", contact: "Call or text 988" },
  { country: "United Kingdom", line: "Samaritans", contact: "116 123" },
  { country: "Nigeria", line: "Mentally Aware Nigeria Initiative", contact: "+234 809 111 6264" },
  { country: "India", line: "iCall (TISS)", contact: "+91 9152987821" },
  { country: "International", line: "Find a helpline in your country", contact: "findahelpline.com" },
];

export default function CrisisResourcesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
        Crisis Resources
      </h1>

      <div className="mt-6">
        <CrisisBanner />
      </div>

      <div className="prose prose-lg dark:prose-invert mt-10 max-w-none">
        <h2>Hope is not an emergency service</h2>
        <p>
          Hope is a journaling and reflection app. It is not staffed by clinicians, it does not
          monitor messages in real time for risk, and it cannot dispatch help. If you or someone
          you know is in danger, please use the resources below instead of relying on the app.
        </p>

        <h2>If you're thinking about suicide</h2>
        <p>
          You don't have to make it through this alone. Reach out to a crisis line, a trusted
          person, or emergency services — right now, before doing anything else. Crisis lines
          exist for exactly this moment, and reaching out is a reasonable, sensible thing to do.
        </p>

        <h2>Emergency contacts by country</h2>
        <p>
          <em>
            Placeholder list — verify every number below is current before publishing, and add
            your full target market countries.
          </em>
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl2 border border-ink-100 dark:border-ink-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-bloom-50 dark:bg-ink-800">
            <tr>
              <th className="px-4 py-3 font-semibold text-ink-900 dark:text-white">Country</th>
              <th className="px-4 py-3 font-semibold text-ink-900 dark:text-white">Service</th>
              <th className="px-4 py-3 font-semibold text-ink-900 dark:text-white">Contact</th>
            </tr>
          </thead>
          <tbody>
            {countryResources.map((r) => (
              <tr key={r.country} className="border-t border-ink-100 dark:border-ink-800">
                <td className="px-4 py-3">{r.country}</td>
                <td className="px-4 py-3">{r.line}</td>
                <td className="px-4 py-3">{r.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-lg dark:prose-invert mt-10 max-w-none">
        <h2>When to escalate beyond Hope</h2>
        <ul>
          <li>If you have a plan or means to harm yourself — contact emergency services now.</li>
          <li>If you're worried about someone else's safety — encourage them to call a crisis line with you, or contact local emergency services on their behalf.</li>
          <li>If journaling brings up something you can't process alone — that's a sign to bring it to a licensed therapist or counselor, not just to the app.</li>
        </ul>
      </div>
    </article>
  );
}
