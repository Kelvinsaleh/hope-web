"use client";

import { useState } from "react";

export function DeleteAccountForm() {
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
    } catch {
      setError("Failed to submit deletion request. Please try again or contact support directly.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h3 className="text-green-800 dark:text-green-300 font-semibold mb-2">
          Deletion request submitted
        </h3>
        <p className="text-green-700 dark:text-green-400">
          Your account deletion request has been received. We will process it within 30 days.
          You will receive a confirmation email when your account has been deleted.
        </p>
      </div>
    );
  }

  return (
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
  );
}
