import images from "@/assets/images";
import { useState } from "react";
import MapModal from "../MapModal";

const LOCATION = { lat: 10.37139, lng: -75.56648 };

export default function ComebackItem() {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <>
      <div key="vuelta" className="embla-carousel_emblaSlide__FEH4l py-3 text group w-full">
        <p className="text-center text-base font-bold tracking-wider text-[#212121] text">VUELTA</p>
        <div className="py-1 text-center ">
          <div>
            <p>Restaurante</p>
            <p className="rotate-90">⟶</p>
            <p>Plaza España</p>
          </div>
        </div>
        <div className="pb-2 text-base font-bold tracking-wider text-[#212121] text pb-3">
          02:00 h
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
      <MapModal
        isOpen={mapOpen}
        onClose={() => setMapOpen(false)}
        title="Vuelta desde el Hotel Palmarito Beach"
        location={LOCATION}
        placeName="Hotel Palmarito Beach"
        description="Isla de Tierra Bomba, Playa Dorada, Cartagena de Indias, Colombia"
      />
    </>
  );
}
