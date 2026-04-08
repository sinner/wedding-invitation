import { motion } from "motion/react";
import images from "@/assets/images";
import cx from "@/utils/cx";

const FORM_URL = "https://forms.gle/9UfFD8H8M8p87Kap9";

export default function AttendanceConfirmation() {
  return (
    <>
      {/* Top divisor — transitions into the sage green section */}
      <img className="relative -bottom-0.5" src={images.divisorToDark} loading="eager" alt="" />

      <div className={cx("inverse relative z-20 space-y-6 py-10 bg-[#b7c8bc]", "text-center")}>
        <div className="relative -scale-x-100 pt-8">
          <motion.img
            className="absolute right-[0px] top-[-35px] -rotate-117 -scale-x-100 animate-wind"
            src={images.flower3}
            alt="flower"
            initial={{ width: "4rem", right: "-30px" }}
            whileInView={{
              width: "6rem",
              right: "0px",
              transition: { duration: 1 },
            }}
            viewport={{ amount: "some", once: true }}
          />
        </div>
        {/* Title */}
        <motion.h2
          className="text-white title-font text-alt text-7xl mb-4 font-normal leading-[0.8]"
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          <p>Confirmar</p>
          <p>Asistencia</p>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-white text text-base font-bold tracking-wider"
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.5, duration: 1.2 } }}
          viewport={{ once: true }}
        >
          ¿Nos acompañas?
        </motion.p>

        {/* Love-letter icon — links to Google Form */}
        <motion.a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cx(
            "mx-auto flex flex-col items-center justify-center gap-2",
            "cursor-pointer",
          )}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.7, duration: 1 } }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
        >
          <img
            className="mx-auto animate-lightbounce icon"
            src={images.loveLetter}
            alt="Confirmar asistencia"
            width={100}
            height={100}
          />
          <span className="text-white text font-light">(Pulsa en el sobre)</span>
        </motion.a>
      </div>
    </>
  );
}
