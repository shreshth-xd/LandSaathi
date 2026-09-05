"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent({ stage }: { stage: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded flex items-center justify-center">Loading Map...</div>;

  const center: [number, number] = [25.4484, 78.5685]; // Mock coordinates for Jhansi
  
  // Mock polygon coordinates
  const polygon1: [number, number][] = [
    [25.448, 78.568],
    [25.449, 78.569],
    [25.447, 78.571],
    [25.446, 78.569]
  ];
  
  const polygon2: [number, number][] = [
    [25.445, 78.565],
    [25.446, 78.566],
    [25.444, 78.568],
    [25.443, 78.566]
  ];

  const isCompleted = stage === "Possession Taken" || stage === "Rehabilitation & Resettlement";
  const polyColor = isCompleted ? "#16a34a" : "#f59e0b"; // Green for completed, Amber for pending

  return (
    <div className="h-[400px] w-full rounded border border-gray-300 z-0">
      <MapContainer center={center} zoom={14} style={{ height: "100%", width: "100%", zIndex: 0 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon positions={polygon1} pathOptions={{ color: polyColor, fillColor: polyColor, fillOpacity: 0.5 }}>
          <Popup>Parcel 187A <br /> Status: {isCompleted ? "Acquired" : "Pending"}</Popup>
        </Polygon>
        <Polygon positions={polygon2} pathOptions={{ color: polyColor, fillColor: polyColor, fillOpacity: 0.5 }}>
          <Popup>Parcel 187B <br /> Status: {isCompleted ? "Acquired" : "Pending"}</Popup>
        </Polygon>
      </MapContainer>
    </div>
  );
}
