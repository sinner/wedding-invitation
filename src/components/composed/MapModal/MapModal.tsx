import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AdvancedMarker, APIProvider, InfoWindow, Map } from "@vis.gl/react-google-maps";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;

interface LatLng {
  lat: number;
  lng: number;
}

interface MapModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  location: LatLng;
  placeName?: string;
  description?: string;
}

export default function MapModal({
  children,
  isOpen,
  onClose,
  title,
  location,
  placeName,
  description,
}: MapModalProps) {
  const [infoOpen, setInfoOpen] = useState(true);

  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

      {/* Centering container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
            <DialogTitle className="quattrocento-text text-sm font-bold uppercase tracking-widest text-[#212121]">
              {title}
            </DialogTitle>
            <button
              onClick={onClose}
              className="rounded-md p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
              aria-label="Close map"
            >
              ✕
            </button>
          </div>

          {/* Map */}
          <div className="h-[70vh] w-full p-3">
            {children}
            <APIProvider apiKey={API_KEY}>
              <Map
                defaultCenter={location}
                defaultZoom={15}
                gestureHandling="greedy"
                mapId="wedding-map"
                style={{ width: "100%", height: "100%", borderRadius: "12px" }}
              >
                <AdvancedMarker position={location} onClick={() => setInfoOpen(true)} />

                {infoOpen && (placeName || description) && (
                  <InfoWindow
                    position={location}
                    onCloseClick={() => setInfoOpen(false)}
                    pixelOffset={[0, -40]}
                  >
                    <div className="max-w-[220px] space-y-1 p-1">
                      {placeName && <p className="text-sm font-bold text-gray-900">{placeName}</p>}
                      {description && <p className="text-xs text-gray-500">{description}</p>}
                      <a
                        href={mapsUrl}
                        target="_blank"
                        aria-label="Cómo llegar"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs font-semibold text-blue-600 hover:underline"
                      >
                        Cómo llegar →
                      </a>
                    </div>
                  </InfoWindow>
                )}
              </Map>
            </APIProvider>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
