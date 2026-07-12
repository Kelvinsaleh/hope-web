"use client";

import { useState } from "react";
import { JsonLd } from "./JsonLd";
import { faqPageSchema } from "@/lib/schema";

interface QA {
  question: string;
  answer: string;
}

export function FAQAccordion({ questions, pageUrl }: { questions: QA[]; pageUrl: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <JsonLd data={faqPageSchema(questions, pageUrl)} />
      <dl className="divide-y divide-ink-100 dark:divide-ink-800">
        {questions.map((qa, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} id={`q${i}`} className="py-4">
              <dt>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left font-medium text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bloom-500 dark:text-white"
                >
                  <span>{qa.question}</span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-bloom-500 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
              </dt>
              {isOpen && (
                <dd
                  id={`faq-answer-${i}`}
                  className="mt-3 text-ink-400 dark:text-ink-100/70"
                >
                  {qa.answer}
                </dd>
              )}
            </div>
          );
        })}
      </dl>
    </div>
  );
}
