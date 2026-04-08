import { motion } from "motion/react";
import images from "@/assets/images";
import Carousel from "@/components/composed/Carousel";

const carouselItems = [images.album3, images.album1, images.album2, images.album4].map((src, i) => (
  <div key={i} className="h-[610px] w-full overflow-hidden">
    <img src={src} alt={`album-${i + 1}`} className="h-full w-full object-cover object-center" />
  </div>
));


export default function Transport() {
  return (
    <div className="relative py-[10px]">
      <img
        className="pointer-events-none absolute -top-[10px] z-20 scale-x-[1.1]"
        src={images.divisorLineInverse}
        loading="eager"
      />
      <div className="relative py-0.5">
        <div className="inverse relative bg-transparent">
          <motion.div
            className="text-[#212121] text quattrocento-text text-base tracking-wider mb-2 mt-4"
            initial={{ opacity: 0, transition: { delay: 0.3, duration: 1.5 } }}
            whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
            viewport={{ amount: "some", once: true }}
          >
            <Carousel slides={carouselItems} options={{ loop: true }} withDots={false} />
          </motion.div>
        </div>
      </div>
      <img
        src={images.divisorLineLight}
        loading="eager"
        alt="divisor-top"
        className="pointer-events-none absolute -bottom-[30px] -scale-x-100"
      />
    </div>
  );
}
