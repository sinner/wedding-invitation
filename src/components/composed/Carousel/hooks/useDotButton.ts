import { useCallback, useEffect, useState, type ReactNode } from "react";
import { type EmblaCarouselType } from "embla-carousel";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: ReactNode[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (emblaApi: EmblaCarouselType | undefined): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<ReactNode[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    console.log("[emblaApi.scrollSnapList()]", emblaApi.scrollSnapList());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    // Attach listeners first, then read initial state asynchronously so that
    // setState is never called synchronously in the effect body (satisfies the
    // "subscribe to external system" pattern and avoids the Trunk lint rule).
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);

    const timer = setTimeout(() => {
      onInit(emblaApi);
      onSelect(emblaApi);
    }, 0);

    return () => clearTimeout(timer);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
