import images from "@/assets/images";
import { useState } from "react";
import MapModal from "../MapModal";

const LOCATION = { lat: 10.37139, lng: -75.56648 };

export default function RecommendedOptionItem() {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <>
      <div key="recommended-option" className="embla-carousel__slide py-3 text group w-full">
        <p className="text-center text-base font-bold tracking-wider text-[#212121] text">
          Otro Hotel
        </p>
        <button
          className="mx-auto flex flex-col items-center justify-center gap-1 text-center cursor-pointer"
          onClick={() => setMapOpen(true)}
        >
          <img
            className="mx-auto mt-2 animate-lightbounce icon "
            src={images.lodging}
            alt="url"
            width="80"
            height="80"
          />
          <span className="text font-light">(Pulsa para detalles)</span>
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
