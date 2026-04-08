import images from "@/assets/images";
import { motion } from "motion/react";

export default function SecondQuote() {
  return (
    <>
      <img className="relative -bottom-0.5" src={images.divisorToDark} loading="eager" />
      <div className="inverse relative z-20 space-y-4 p-5  bg-[#b7c8bc] text-white text-alt parisienne-text text-3xl">
        <motion.div
          className="text-center text-alt overflow-visible wrap-break-word"
          initial={{ opacity: 0, translateY: 30 }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
        >
          Estaremos encantados de contar con tu presencia a nuestro lado en esta fecha tan
          importante
        </motion.div>
      </div>
      <div className="relative overflow-visible -top-0.5">
        <img
          src={images.divisorToDark}
          loading="eager"
          alt="divisor-top"
          className="-scale-y-100"
        />
        <motion.div
          className="absolute -bottom-[12px] left-[8px] w-[87px]"
          initial={{
            opacity: 0,
            rotate: "-118deg",
            scale: 0.5,
            translateX: -15,
          }}
          whileInView={{
            opacity: 1,
            rotate: "-135deg",
            scale: 1.2,
            translateX: 0,
          }}
          transition={{ delay: 1.5, duration: 2 }}
          viewport={{ amount: 0.8, once: true }}
        >
          <img className="animate-wind" src={images.flower2} alt="flower" />
        </motion.div>
        <motion.div
          className="absolute -bottom-[10px] -left-[20px] z-20 w-[75px]"
          initial={{
            rotate: "8deg",
            scale: 0.2,
            translateX: -25,
          }}
          whileInView={{
            rotate: "18deg",
            scale: 1.2,
            translateX: 0,
          }}
          transition={{ delay: 0.25, duration: 2 }}
          viewport={{ amount: "some", once: true }}
        >
          <img className="animate-wind" src={images.flower1} alt="flower" />
        </motion.div>
      </div>
    </>
  );
}
