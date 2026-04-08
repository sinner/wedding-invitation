import images from "@/assets/images";
import { motion } from "motion/react";

export default function DressCode() {
  return (
    <>
      <div className="relative overflow-visible relative -top-0.5">
        <motion.img
          src="https://res.cloudinary.com/dkflthqdd/image/upload/v1772677586/divisor_yhttzy.png"
          loading="eager"
          alt="divisor-top"
          className="-scale-y-100"
        />
        <div
          className="absolute -bottom-[16px] right-[4px] w-[87px]"
          style={{ filter: "none", opacity: 1, transform: "scale(1.2) rotate(-135deg)" }}
        >
          <motion.img
            className="animate-wind"
            loading="eager"
            src={images.flower5}
            alt="flower"
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
            viewport={{ once: true }}
          />
        </div>
        <div
          className="absolute -bottom-[10px] -right-[25px] w-[70px]"
          style={{ filter: "none", transform: "scale(1.2) rotate(-138deg)" }}
        >
          <motion.img
            className="animate-windy"
            loading="eager"
            src={images.flower1}
            alt="flower"
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      <div className="py-1 relative not-inverse">
        <motion.h2
          className="text-[#80a594] title title-font text-7xl mb-4 font-normal"
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          DressCode
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          <div className="break-words px-4 pb-2 text-base font-bold tracking-wider text-[#212121] text">
            COCKTAIL
          </div>
          <div className="text break-words px-4 text-base [&amp;_a]:underline [&amp;_ol]:inline-block [&amp;_ol]:list-decimal [&amp;_ol]:pl-5 [&amp;_ol]:text-start [&amp;_ul]:inline-block [&amp;_ul]:list-disc [&amp;_ul]:pl-5 [&amp;_ul]:text-start">
            <span className="font-bold">Mujeres:</span> Vestidos largos, colores claros. El blanco
            está reservado para la novia
          </div>
          <div className="text break-words pt-2 px-4 text-base [&amp;_a]:underline [&amp;_ol]:inline-block [&amp;_ol]:list-decimal [&amp;_ol]:pl-5 [&amp;_ol]:text-start [&amp;_ul]:inline-block [&amp;_ul]:list-disc [&amp;_ul]:pl-5 [&amp;_ul]:text-start">
            <span className="font-bold">Hombres:</span> Guayabera formal o lino, colores claros. El
            verde está reservado para el novio.
          </div>
          <div className="mx-auto flex items-center justify-center gap-0.5 py-4">
            <img src={images.tie} alt="dc1-1" className="icon h-20 w-20 object-contain " />
            <img src={images.dress} alt="dc1-2" className="icon h-20 w-20 object-contain " />
          </div>
        </motion.div>
      </div>
    </>
  );
}
