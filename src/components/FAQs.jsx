import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of events do you organize?",
    answer: "We specialize in weddings, birthday parties, corporate events, anniversaries, and custom celebrations. From intimate gatherings to grand celebrations, we handle it all!",
  },
  {
    question: "How much do your events cost?",
    answer: "Our events start from ₹1001 per person. We offer transparent pricing with no hidden costs. Contact us for custom event quotes based on your requirements.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2-3 weeks in advance for popular dates. However, we also accommodate last-minute bookings based on availability.",
  },
  {
    question: "Do you provide catering and decorations?",
    answer: "Yes! We offer complete event management including venue decoration, catering, entertainment, photography, and more. Everything you need for a perfect event.",
  },
  {
    question: "Can I customize my event package?",
    answer: "Absolutely! We love creating unique experiences. Tell us your vision and budget, and we'll craft a personalized event package just for you.",
  },
  {
    question: "What's your cancellation policy?",
    answer: "We offer flexible cancellation up to 48 hours before the event. Full refunds are provided for cancellations made within the policy timeframe.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">❓ Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about our events</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-purple-200 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center text-gray-800 hover:text-purple-600 transition-colors duration-300"
              >
                {faq.question}
                <span className={`text-2xl transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                  {openIndex === i ? "×" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 py-4 text-gray-700 bg-gradient-to-r from-purple-50 to-pink-50 border-t border-purple-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}