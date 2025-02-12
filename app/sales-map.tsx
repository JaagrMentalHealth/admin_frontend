"use client"

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const markers = [
  { name: "Canada", coordinates: [-100, 60], value: "75%" },
  { name: "Russia", coordinates: [105, 60], value: "75%" },
]

export function SalesMap() {
  return (
    <div className="h-[300px]">
      <ComposableMap projectionConfig={{ scale: 100 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill="#F4F4F5" stroke="#E4E4E7" />)
          }
        </Geographies>
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#7C3AED" />
          </Marker>
        ))}
      </ComposableMap>
      <div className="mt-4 space-y-2">
        {markers.map((marker) => (
          <div key={marker.name} className="flex items-center justify-between">
            <span>{marker.name}</span>
            <span>{marker.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

