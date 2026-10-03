"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  course: string;
  faqs?: FAQItem[];
}

export function FAQSection({
  course,
  faqs = [],
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    faqs.length > 0 ? 0 : null
  );

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
          Frequently Asked Questions
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
          Got Questions?
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
          Everything you need to know before joining our{" "}
          <span className="font-semibold text-cyan-400">
            {course}
          </span>{" "}
          Master Program.
        </p>
      </div>

      <div className="mt-16 space-y-5">
        {faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="h-6 w-6 text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-800 px-8 py-6">
                      <p className="leading-8 text-slate-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <p className="text-slate-400">
              FAQ information will be available soon.
            </p>
          </div>
        )}
      </div>

      <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-center">
        <h3 className="text-3xl font-bold text-white">
          Still Have Questions?
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          Our training advisors are happy to help you choose the right
          learning path, explain the curriculum, discuss career
          opportunities, and answer any questions before you enroll.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="rounded-xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300"
          >
            📞 Schedule Free Demo
          </button>

          <button
            type="button"
            className="rounded-xl border border-slate-700 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800"
          >
            💬 WhatsApp Us
          </button>
        </div>
      </div>
    </section>
  );
}