"use client";

import { buildMetadata } from "@/lib/seo";
import { useState } from "react";

export const metadata = buildMetadata({
  title: "Delete Account",
  description: "Learn how to permanently delete your Hope account and all associated data.",
  path: "/delete-account",
});

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const canDelete = confirmation.trim().toUpperCase() === "DELETE";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!canDelete) {
      setError('Please type "DELETE" to confirm.');
      return;
    }

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/delete-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      setSuccess(true);
      setEmail("");
      setConfirmation("");
    } catch (err) {
      setError("Failed to submit deletion request. Please try again or contact support directly.");
    } finally {
      setLoading(false);
    }
  };

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
        
        {success ? (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="text-green-800 dark:text-green-300 font-semibold mb-2">
              Deletion request submitted
            </h3>
            <p className="text-green-700 dark:text-green-400">
              Your account deletion request has been received. We will process it within 30 days. 
              You will receive a confirmation email when your account has been deleted.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink-900 dark:text-white mb-2">
                Email address associated with your account
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-ink-200 dark:border-ink-700 rounded-lg bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:ring-2 focus:ring-bloom-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="confirmation" className="block text-sm font-medium text-ink-900 dark:text-white mb-2">
                Type DELETE to confirm
              </label>
              <input
                type="text"
                id="confirmation"
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
                required
                className="w-full px-4 py-3 border border-ink-200 dark:border-ink-700 rounded-lg bg-white dark:bg-ink-800 text-ink-900 dark:text-white focus:ring-2 focus:ring-bloom-500 focus:border-transparent"
                placeholder="DELETE"
              />
            </div>

            {error && (
              <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={!canDelete || loading}
              className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-300 dark:disabled:bg-red-900 text-white font-semibold rounded-lg transition-colors"
            >
              {loading ? "Submitting..." : "Request Account Deletion"}
            </button>
          </form>
        )}

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
          <li>Type "DELETE" to confirm</li>
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
          <li><strong>Export your data:</strong> You can download a copy of all your data from the app's Privacy settings</li>
          <li><strong>Clear local memory:</strong> You can clear AI memory while keeping your journals and chats</li>
          <li><strong>Clear cloud backup:</strong> You can remove cloud backup while keeping local data</li>
          <li><strong>Contact support:</strong> If you're experiencing issues, we may be able to help</li>
        </ul>

        <h2>Questions?</h2>
        <p>
          If you have questions about account deletion or data privacy, contact us at{" "}
          <a href="mailto:privacy@hopementalhealthsupport.xyz">privacy@hopementalhealthsupport.xyz</a>
        </p>
      </div>
    </article>
  );
}
