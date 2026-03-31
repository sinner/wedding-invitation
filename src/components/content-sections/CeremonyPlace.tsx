import AnimatedIcon from "@/components/unit/AnimatedIcon";
import MapModal from "@/components/composed/MapModal/MapModal";
import { useState } from "react";
import { motion } from "motion/react";
import images from "@/assets/images";

const LOCATION = { lat: 10.37139, lng: -75.56648 };

export default function Place() {
  const [mapOpen, setMapOpen] = useState(false);

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
        <span>HOTEL PALMARITO BEACH</span>
      </motion.h3>
      <motion.img
        className="h-auto w-full rounded-3xl object-cover p-4"
        src={images.ceremonyPlace}
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
        Isla de Tierra Bomba
      </motion.p>
      <motion.p
        className="text px-4 tracking-wider"
        initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
        whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
        viewport={{ amount: 0.8, once: true }}
      >
        Playa Dorada, Cartagena de Indias
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
        className={`mx-auto flex flex-col items-center justify-center gap-3 cursor-pointer`}
        onClick={() => setMapOpen(true)}
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
        viewport={{ once: true }}
      >
        <AnimatedIcon
          src={images.mapIcon}
          animation="lightbounce"
          helperText="(Pulsa para ver en Maps)"
        />
      </motion.button>
      <MapModal
        isOpen={mapOpen}
        onClose={() => setMapOpen(false)}
        title="Ceremonia Hotel Palmarito Beach"
        location={LOCATION}
        placeName="Hotel Palmarito Beach"
        description="Isla de Tierra Bomba, Playa Dorada, Cartagena de Indias, Colombia"
      />
    </div>
  );
}
