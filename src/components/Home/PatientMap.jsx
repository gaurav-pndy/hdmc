import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Official TopoJSON file
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const PatientMap = () => {
  const { t } = useTranslation();

  const [hovered, setHovered] = useState(null);

  const locations = [
    { country: "USA", patients: 145, color: "#FF6B6B", coords: [-95, 37] },
    { country: "Poland", patients: 89, color: "#4ECDC4", coords: [19, 52] },
    { country: "Hungary", patients: 67, color: "#45B7D1", coords: [19, 47] },
    { country: "UK", patients: 112, color: "#96CEB4", coords: [-3, 54] },
    { country: "Switzerland", patients: 78, color: "#FFEAA7", coords: [8, 47] },
    {
      country: "Moscow",
      patients: 156,
      color: "#DDA0DD",
      coords: [37.6, 55.75],
    },
    {
      country: "St. Petersburg",
      patients: 94,
      color: "#B19CD9",
      coords: [30.3, 59.9],
    },
    {
      country: "Makhachkala",
      patients: 71,
      color: "#C9ADE0",
      coords: [47.5, 42.98],
    },
    {
      country: "Vladivostok",
      patients: 83,
      color: "#E0BBE4",
      coords: [131.9, 43.1],
    },
    { country: "India", patients: 91, color: "#FFD93D", coords: [78, 20] },
  ];

  const totalPatients = locations.reduce((sum, loc) => sum + loc.patients, 0);

  return (
    <div className="w-full py-16">
      <div className="max-w-[87rem] w-full mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-brand1 text-center text-4xl font-bold mb-6">
            {t("patientMap.title")}
          </h2>
          <p className="text-lg text-center text-brand1/80 mb-10 max-w-3xl mx-auto">
            {t("patientMap.subtitle")}
          </p>
        </div>

        {/* Map */}
        <div className="bg-[#fbfbfb] rounded-xl border border-brand4 p-4 md:p-6">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 140 }}
            width={1200}
            height={400}
            style={{ width: "100%", height: "auto" }}
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={8} center={[20, 20]}>
              {/* Draw countries */}
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#E3F2FD"
                      stroke="#90CAF9"
                      strokeWidth={0.3}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#BBDEFB", outline: "none" },
                        pressed: { fill: "#64B5F6", outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Add patient markers */}
              {locations.map((loc, idx) => (
                <Marker
                  key={idx}
                  coordinates={loc.coords}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <circle
                    r={hovered === idx ? 6 : 4}
                    fill={loc.color}
                    stroke="#fff"
                    strokeWidth={1}
                    className={hovered === idx ? "animate-pulse" : ""}
                  />
                  {hovered === idx && (
                    <text
                      textAnchor="middle"
                      y={-10}
                      style={{
                        fontFamily: "sans-serif",
                        fill: "#333",
                        fontSize: "10px",
                      }}
                    >
                      {loc.country} ({loc.patients})
                    </text>
                  )}
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-slate-50 to-white p-4 rounded-xl  transition-all duration-300 cursor-pointer ${
                  hovered === idx ? " shadow-lg scale-105" : ""
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center justify-center mb-2">
                  <FaMapMarkerAlt
                    style={{ color: loc.color }}
                    className="text-xl"
                  />
                </div>
                <div className="text-center">
                  <div className="font-medium text-black  ">{loc.country}</div>
                  <div className="text-brand1 text-sm">
                    {loc.patients} пациентов
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientMap;
