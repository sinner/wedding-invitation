import { motion } from "motion/react";
import { useState } from "react";
import images from "@/assets/images";

const IBAN = "ESXX XXXX XXXX XXXX XXXX";

export default function Gift() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(IBAN.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="bg-[#b7c8bc] inverse relative z-[19] -mt-0.5 py-1 pt-4 mt-4">
        <motion.h2
          className="text-white title-font text-alt text-7xl mb-4 font-normal leading-[0.8]"
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          Regalo
        </motion.h2>
        <motion.img
          src={images.gift}
          alt="gift"
          width="80"
          className="icon mx-auto my-2 w-20"
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        />
        <motion.div
          className="text px-4"
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          Nuestro mejor regalo es que estén con nosotros en nuestro día, pero si quieren hacernos un
          obsequio, ¡aquí está nuestro número de cuenta!
        </motion.div>
        <motion.div
          className="mt-2 px-4"
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.3, duration: 1.5 } }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleCopy}
            className="text mx-auto flex items-center justify-center gap-2 cursor-pointer transition-opacity active:opacity-60"
          >
            <img className="animate-lightpulse" width="24" src={images.copy} alt="copy" />
            <div>
              <div className="text-left text-sm font-bold text-[#212121] text">Neida Vasquez</div>
              <p id="gift-num-1-1" className="transition-all duration-300">
                {copied ? "¡Copiado! ✓" : IBAN}
              </p>
            </div>
          </button>
        </motion.div>
        <div className="hidden"></div>
      </div>
      <img
        src={images.divisorToDark}
        alt="divisor-top"
        className="relative -top-0.5 -scale-y-100"
      />
    </>
  );
}
