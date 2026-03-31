import images from "@/assets/images";
import { useState } from "react";
import MapModal from "@/components/composed/MapModal";

const LOCATION = { lat: 10.37139, lng: -75.56648 };

export default function GoItem() {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <>
      <div
        key="ida"
        className="embla-carousel_emblaSlide__FEH4l py-3 text group w-full"
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        <p className="text-center text-base font-bold tracking-wider text-[#212121] text">IDA</p>
        <div className="py-1 text-center ">
          <div>
            <p>Plaza España</p>
            <p className="rotate-90">⟶</p>
            <p>Restaurante</p>
          </div>
          <div className="pb-2 text-base font-bold tracking-wider text-[#212121] text pb-3">
            19:00 h
          </div>
          <button
            className="mx-auto flex flex-col items-center justify-center gap-1 text-center cursor-pointer"
            onClick={() => setMapOpen(true)}
          >
            <img
              className="mx-auto mt-2 animate-lightbounce icon "
              src={images.transport}
              alt="url"
              width="80"
              height="80"
            />
            <span className="text font-light">(Pulsa para ver parada)</span>
          </button>
        </div>
      </div>
      <MapModal
        isOpen={mapOpen}
        onClose={() => setMapOpen(false)}
        title="Ida al Hotel Palmarito Beach"
        location={LOCATION}
        placeName="Hotel Palmarito Beach"
        description="Isla de Tierra Bomba, Playa Dorada, Cartagena de Indias, Colombia"
      />
    </>
  );
}
