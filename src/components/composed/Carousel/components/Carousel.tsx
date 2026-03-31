import { type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { useDotButton, usePrevNextButtons } from "@/components/composed/Carousel/hooks";
import type { EmblaOptionsType } from "embla-carousel";
import { DotButton } from "./CarouselDotButton";
import { NextButton, PrevButton } from "./CarouselArrowButtons";

interface CarouselProps {
  slides: ReactNode[];
  options?: EmblaOptionsType;
}

export default function Carousel(props: CarouselProps) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.3, duration: 1.5 }}
      viewport={{ once: true }}
      className="embla relative w-full select-none overflow-hidden"
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div key={index} className="embla__slide">
              {item}
            </div>
          ))}
        </div>
      </div>

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")}
          />
        ))}
      </div>
    </motion.div>
  );
}
