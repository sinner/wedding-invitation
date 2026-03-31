import EnvelopeButton from "@/components/EnvelopeButton";
import Invitation from "@/components/Invitation";
import { motion } from "motion/react";

export default function Page() {
  return (
    <motion.section
      className="overflow-hidden relative z-20 mx-auto h-full min-h-screen w-full max-w-md overflow-x-clip sm:shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <EnvelopeButton />
      <Invitation />
    </motion.section>
  );
}
