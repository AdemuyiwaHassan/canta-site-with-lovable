import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    question: "Can you register my business with Canta?",
    answer:
      "Yes, you can register your business with Canta and have a virtual multi-currency account with Canta. Canta doesn't only just serve individuals. We are designed to also help businesses transact globally.  Merchants who process large volumes of payments enjoy a discount on the transaction fees.",
  },
  {
    id: 2,
    question: "Can you do bulk transactions with Canta?",
    answer:
      "As a benefit to using our platform, we help B2Bs and B2Cs handle bulk transactions. We never run out of liquidity, therefore you can transact large amounts with the same ease and speed it would take to transact smaller amounts.",
  },
  {
    id: 3,
    question: "How safe is sending money with Canta?",
    answer:
      "Canta fulfills all security details necessary to help you transact globally. Officially licensed in all regions it currently operates in, you’re rest assured your money is safe with us, For your safety, we set up a 2-Factor Authentication for every transaction to ensure that only you decide who receives the money you send.",
  },
  {
    id: 4,
    question: "How long does it take for a transaction to be completed?",
    answer:
      ">With our high-speed transfer service, you are guaranteed that your funds will be delivered to your beneficiaries within 24hrs or less. Something to look forward to, soon, we will be able to achieve instant remittance by having currency floats in beneficiaries’ and receivers’ countries.",
  },
];

const FaqSection = () => {
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  return (
    <section ref={faqRef} className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
