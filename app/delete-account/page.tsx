import { DeleteAccountForm } from "@/components/DeleteAccountForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Delete Account",
  description: "Learn how to permanently delete your Hope account and all associated data.",
  path: "/delete-account",
});

export default function DeleteAccountPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-ink-900 dark:text-white sm:text-4xl">
        Delete Your Account
      </h1>
      <p className="mt-4 text-ink-400">
        Last updated: October 2026
      </p>

      <div className="prose prose-lg dark:prose-invert mt-8 max-w-none">
        <h2>Important: This action is permanent</h2>
        <p>
          Deleting your account will permanently remove:
        </p>
        <ul>
          <li>All journal entries and reflections</li>
          <li>Mood logs and tracking data</li>
          <li>Chat history with the AI companion</li>
          <li>Personalized meditations and preferences</li>
          <li>Weekly reports and analytics</li>
          <li>Your account profile and settings</li>
        </ul>
        <p className="text-red-600 dark:text-red-400 font-semibold">
          This action cannot be undone. Once your account is deleted, your data cannot be recovered.
        </p>

        <h2>Request account deletion</h2>
        <DeleteAccountForm />

        <h2>Alternative: Delete from the Hope app</h2>
        <p>
          If you have the Hope app installed, you can delete your account directly from the app for immediate processing:
        </p>
        <ol>
          <li>Open the Hope app</li>
          <li>Go to <strong>Settings</strong></li>
          <li>Navigate to <strong>Privacy & Security</strong></li>
          <li>Scroll to the <strong>Data Management</strong> section</li>
          <li>Tap <strong>Delete Account</strong></li>
          <li>Type &quot;DELETE&quot; to confirm</li>
        </ol>

        <h2>Data retention</h2>
        <p>
          After your account is deleted:
        </p>
        <ul>
          <li>Your personal data will be permanently removed from our active databases</li>
          <li>Some data may remain in backup systems for up to 90 days before being permanently deleted</li>
          <li>We will retain minimal anonymized usage data for analytics purposes only</li>
        </ul>

        <h2>Before you delete</h2>
        <p>
          Consider these alternatives before permanently deleting your account:
        </p>
        <ul>
          <li><strong>Export your data:</strong> You can download a copy of all your data from the app&apos;s Privacy settings</li>
          <li><strong>Clear local memory:</strong> You can clear AI memory while keeping your journals and chats</li>
          <li><strong>Clear cloud backup:</strong> You can remove cloud backup while keeping local data</li>
          <li><strong>Contact support:</strong> If you&apos;re experiencing issues, we may be able to help</li>
        </ul>

        <h2>Questions?</h2>
        <p>
          If you have questions about account deletion or data privacy, contact us at{" "}
          <a href="mailto:support@hopementalhealthsupport.xyz">support@hopementalhealthsupport.xyz</a>
        </p>
      </div>
    </article>
  );
}
