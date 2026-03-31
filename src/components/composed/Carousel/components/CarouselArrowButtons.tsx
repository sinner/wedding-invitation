import images from "@/assets/images";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

type MotionPropType = HTMLMotionProps<"button">;

export const PrevButton = (props: MotionPropType) => {
  const { children, disabled, ...restProps } = props;

  return (
    <motion.button
      aria-label="Previous"
      className={"embla__button embla__button--prev absolute pointer-events-auto h-8 w-8 left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow backdrop-blur-sm transition cursor-pointer hover:bg-white/95 animate-marquee-left".concat(
        disabled ? " embla__button--disabled" : "",
      )}
      {...restProps}
    >
      {children || <img src={images.arrowLeft} width={32} height={32} alt="arrow-left" />}
    </motion.button>
  );
};

export const NextButton = (props: MotionPropType) => {
  const { children, disabled, ...restProps } = props;

  return (
    <motion.button
      aria-label="Next"
      className={"embla__next absolute pointer-events-auto h-8 w-8 right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow backdrop-blur-sm transition cursor-pointer hover:bg-white/95 animate-marquee-right ".concat(
        disabled ? " embla__button--disabled" : "",
      )}
      {...restProps}
    >
      {children || <img src={images.arrowRight} width={32} height={32} alt="arrow-right" />}
    </motion.button>
  );
};
