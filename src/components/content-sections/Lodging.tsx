import { motion } from "motion/react";
import RecommendedOptionItem from "../composed/LodgingSlideItems/RecommendedOptionItem";
import SecondOptionItem from "../composed/LodgingSlideItems/SecondOptionItem";
import Carousel from "@/components/composed/Carousel";

const carouselItems = [<RecommendedOptionItem />, <SecondOptionItem />];

export default function Lodging() {
  return (
    <div className="relative not-inverse">
      <motion.h2
        className="text-[#80a594] title title-font text-7xl mb-4 font-normal"
        initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
        whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
        viewport={{ amount: 0.8, once: true }}
      >
        Alojamientos
      </motion.h2>
      <motion.p
        className="text mt-2 px-4 tracking-wider pb-4"
        initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
        whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
        viewport={{ amount: 0.8, once: true }}
      >
        Si quieren hacer noche por la zona, les dejamos algunas opciones para que puedan gestionar
        la reserva.
      </motion.p>
      <Carousel slides={carouselItems} />
    </div>
  );
}
