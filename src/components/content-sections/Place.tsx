import AnimatedIcon from "@/components/unit/AnimatedIcon";
import { motion } from "motion/react";

export default function Place() {
  return (
    <div className="relative not-inverse">
      <motion.h2
        className="text-[#80a594] title title-font text-7xl mb-4 font-normal"
        initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
        whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
        viewport={{ amount: 0.8, once: true }}
      >
        Ceremonia
      </motion.h2>
      <motion.h3
        className="text-[#212121] text quattrocento-text text-base font-bold tracking-wider mb-2 mt-4 px-4"
        initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
        whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
        viewport={{ amount: 0.8, once: true }}
      >
        <span>CATEDRAL DE PALMA</span>
      </motion.h3>
      <motion.img
        className="h-auto w-full rounded-3xl object-cover p-4"
        src="https://res.cloudinary.com/dkflthqdd/image/upload/v1772677603/place1_gmrlhr.jpg"
        alt="catedral de palma"
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
        viewport={{ once: true }}
      />
      <motion.p
        className="text mt-2 px-4 tracking-wider"
        initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
        whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
        viewport={{ amount: 0.8, once: true }}
      >
        Plaça de la Seu, Centro
      </motion.p>
      <motion.p
        className="text px-4 tracking-wider"
        initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
        whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
        viewport={{ amount: 0.8, once: true }}
      >
        07001 Palma
      </motion.p>
      <motion.p
        className="mt-2 px-4 text-[#212121] text font-bold tracking-wider"
        initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
        whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
        viewport={{ amount: 0.8, once: true }}
      >
        18:00 h
      </motion.p>
      <motion.button
        className={`mx-auto flex flex-col items-center justify-center gap-3`}
        onClick={() => {}}
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
        viewport={{ once: true }}
      >
        <AnimatedIcon
          src="https://res.cloudinary.com/dkflthqdd/image/upload/v1772677598/map-locator_v0arr0.png"
          animation="lightbounce"
          helperText="(Pulsa para ver en Maps)"
        />
      </motion.button>
    </div>
  );
}
