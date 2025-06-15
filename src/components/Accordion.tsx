import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

interface AccordionItemProps {
  question: string;
  answer: string;
  delay?: number;
}

export default function AccordionItem({
  question,
  answer,
  delay
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-lg mb-4 transition-colors duration-300 ${
        isOpen ? "bg-white" : "bg-[#E9FBF4]"
      }` }
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-x-5 items-center w-full text-left p-4"
      >
        <span className="text-green-600">
          {isOpen ? <BiMinus size={20} /> : <BiPlus size={20} />}
        </span>
        <span className="font-semibold text-sm md:text-base">{question}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0,}}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0,}}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden px-4 pb-4 text-sm text-gray-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
