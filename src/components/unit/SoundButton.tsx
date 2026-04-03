import { useEffect, useRef } from "react";
import images from "@/assets/images";
import sounds from "@/assets/sounds";

interface SoundButtonProps {
  isSoundOn?: boolean;
  setIsSoundOn: (isSoundOn: boolean) => void;
}

export default function SoundButton({ isSoundOn, setIsSoundOn }: SoundButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSoundClick = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isSoundOn) {
      setIsSoundOn(false);
    } else {
      setIsSoundOn(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isSoundOn) {
      audio?.play().catch(() => {});
    } else {
      audio?.pause();
    }
  }, [isSoundOn]);

  return (
    <section className="pointer-events-none fixed bottom-0 z-20 h-12 w-full max-w-md px-5">
      <button
        onClick={handleSoundClick}
        className="pointer-events-auto ml-auto flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#575757]"
      >
        <img src={isSoundOn ? images.soundOn : images.soundOff} alt="Sound" />
      </button>
      <audio ref={audioRef} loop src={sounds.environmentSound} />
    </section>
  );
}
