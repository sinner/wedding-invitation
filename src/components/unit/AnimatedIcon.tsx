type AnimationName = "lightbounce" | "lightrotation" | "lightpulse";

const ANIMATION_CLASS: Record<AnimationName, string> = {
  lightbounce: "animate-lightbounce",
  lightrotation: "animate-lightrotation",
  lightpulse: "animate-lightpulse",
};

const DEFAULT_SRC =
  "https://res.cloudinary.com/dkflthqdd/image/upload/v1772677598/map-locator_v0arr0.png";

interface AnimatedIconProps {
  src?: string;
  animation?: AnimationName;
  helperText?: string;
}

export default function AnimatedIcon({
  src = DEFAULT_SRC,
  animation = "lightbounce",
  helperText,
}: AnimatedIconProps) {
  return (
    <>
      <img src={src} className={`icon ${ANIMATION_CLASS[animation]}`} alt="pin" width="80" />
      {helperText && <p className="text relative -top-3">{helperText}</p>}
    </>
  );
}
