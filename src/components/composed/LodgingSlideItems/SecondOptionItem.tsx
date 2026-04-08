import images from "@/assets/images";
import { useState } from "react";
import MapModal from "../MapModal";

const LOCATION = { lat: 10.395149104882677, lng: -75.5621409060814 };

export default function SecondOptionItem() {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <>
      <div key="second-option" className="embla-carousel__slide py-3 text group w-full">
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
        title="Otros hoteles cercanos"
        location={LOCATION}
        placeName="Hotel Palmarito Beach"
        description="Isla de Tierra Bomba, Playa Dorada, Cartagena de Indias, Colombia"
      >
        <div className="quattrocento-text mb-3 rounded-xl border border-[#e8e0d8] bg-[#faf8f5] px-4 py-3 text-[#212121]">
          {/* Mensaje sugerido */}
          <div className="mt-3 flex flex-col gap-0.5">
            Te recomendamos también revisar las opciones de alojamiento en la zona de El Laguito,
            cercanos a la Isla de Tierra Bomba.
          </div>
        </div>
      </MapModal>
    </>
  );
}
