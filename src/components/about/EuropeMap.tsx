import { useState } from "react";
import { MapPin } from "lucide-react";
interface City {
  name: string;
  x: number;
  y: number;
  isHQ?: boolean;
}
interface EuropeMapProps {
  cities: City[];
  selectedCity: string | null;
  onCitySelect: (city: string | null) => void;
}
export function EuropeMap({
  cities,
  selectedCity,
  onCitySelect
}: EuropeMapProps) {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  return <div className="relative w-full max-w-xl mx-auto">
      <svg viewBox="0 0 200 250" className="w-full h-auto" style={{
      filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))"
    }}>
        {/* Background */}
        <rect x="0" y="0" width="200" height="250" fill="hsl(var(--background))" opacity="0.05" />
        
        {/* Ocean/Sea Background */}
        <rect x="0" y="0" width="200" height="250" fill="hsl(var(--primary))" opacity="0.05" />

        {/* Great Britain & Ireland */}
        <path d="M 55 55 Q 50 50 48 55 L 45 65 Q 42 75 45 85 L 50 95 Q 55 100 60 95 L 65 85 Q 68 75 65 65 L 62 58 Q 60 52 55 55 Z" fill="hsl(var(--muted))" stroke="hsl(var(--background))" strokeWidth="0.8" opacity="0.6" />
        <path d="M 38 60 Q 35 65 36 72 L 38 80 Q 40 85 38 88 L 35 92 Q 38 95 42 92 L 45 85 Q 48 78 45 70 L 42 62 Q 40 58 38 60 Z" fill="hsl(var(--muted))" stroke="hsl(var(--background))" strokeWidth="0.8" opacity="0.6" />

        {/* France */}
        <path d="M 50 110 L 75 105 Q 85 108 88 118 L 90 130 Q 88 140 80 145 L 65 152 Q 55 155 48 150 L 42 142 Q 38 132 42 122 L 50 110 Z" fill="hsl(var(--muted))" stroke="hsl(var(--background))" strokeWidth="1" opacity="0.7" />

        {/* Spain */}
        <path d="M 20 155 L 58 152 Q 68 155 70 165 L 72 180 Q 70 195 60 202 L 40 208 Q 22 210 15 200 L 8 185 Q 5 170 12 160 L 20 155 Z" fill="hsl(var(--primary))" stroke="hsl(var(--background))" strokeWidth="1.2" opacity="0.25" />

        {/* Portugal */}
        <path d="M 8 160 L 18 155 Q 22 158 22 168 L 20 185 Q 18 195 12 200 L 5 195 Q 2 185 3 175 L 8 160 Z" fill="hsl(var(--primary))" stroke="hsl(var(--background))" strokeWidth="1" opacity="0.2" />

        {/* Germany / Central Europe */}
        <path d="M 88 90 L 115 88 Q 125 92 128 105 L 125 120 Q 120 128 110 130 L 92 128 Q 85 125 85 115 L 88 100 Q 86 92 88 90 Z" fill="hsl(var(--muted))" stroke="hsl(var(--background))" strokeWidth="0.8" opacity="0.5" />

        {/* Italy */}
        <path d="M 90 135 L 105 130 Q 115 135 118 145 L 115 160 Q 110 175 100 190 L 95 198 Q 92 200 90 195 L 88 180 Q 85 165 88 150 L 90 135 Z" fill="hsl(var(--primary))" stroke="hsl(var(--background))" strokeWidth="1" opacity="0.2" />
        {/* Sicily */}
        <path d="M 100 198 Q 105 195 110 198 L 112 202 Q 108 206 102 205 L 100 198 Z" fill="hsl(var(--muted))" stroke="hsl(var(--background))" strokeWidth="0.5" opacity="0.5" />

        {/* Corsica & Sardinia */}
        <path d="M 85 155 Q 88 152 90 155 L 88 165 Q 85 168 83 165 L 85 155 Z" fill="hsl(var(--muted))" stroke="hsl(var(--background))" strokeWidth="0.5" opacity="0.4" />
        <path d="M 82 172 Q 86 168 88 172 L 86 185 Q 82 190 80 185 L 82 172 Z" fill="hsl(var(--muted))" stroke="hsl(var(--background))" strokeWidth="0.5" opacity="0.4" />

        {/* Eastern Europe simplified */}
        <path d="M 130 85 L 160 80 Q 175 85 180 100 L 178 125 Q 172 145 155 155 L 135 158 Q 120 155 118 140 L 122 115 Q 125 95 130 85 Z" fill="hsl(var(--muted))" stroke="hsl(var(--background))" strokeWidth="0.5" opacity="0.3" />

        {/* Scandinavia simplified */}
        <path d="M 95 25 L 105 20 Q 115 22 118 35 L 115 55 Q 110 70 100 75 L 90 72 Q 85 65 88 50 L 95 35 Q 93 28 95 25 Z" fill="hsl(var(--muted))" stroke="hsl(var(--background))" strokeWidth="0.5" opacity="0.3" />

        {/* North Africa coast (subtle) */}
        <path d="M 0 220 L 80 215 Q 120 218 150 220 L 200 225 L 200 250 L 0 250 Z" fill="hsl(var(--muted))" stroke="none" opacity="0.15" />

        {/* City Markers */}
        {cities.map(city => {
        const isActive = selectedCity === city.name || hoveredCity === city.name;
        const markerSize = city.isHQ ? 8 : 6;
        return <g key={city.name}>
              {/* Pulse animation for HQ */}
              {city.isHQ && <>
                  <circle cx={city.x} cy={city.y} r={markerSize + 8} fill="hsl(var(--primary))" opacity="0.2" className="animate-ping" />
                  <circle cx={city.x} cy={city.y} r={markerSize + 4} fill="hsl(var(--primary))" opacity="0.3" />
                </>}
              
              {/* Active ring */}
              {isActive && !city.isHQ && <circle cx={city.x} cy={city.y} r={markerSize + 4} fill="hsl(var(--primary))" opacity="0.3" className="animate-pulse" />}
              
              {/* Main marker */}
              <circle cx={city.x} cy={city.y} r={markerSize} fill="hsl(var(--primary))" stroke="hsl(var(--background))" strokeWidth="2" className="cursor-pointer transition-all duration-200" style={{
            transform: isActive ? "scale(1.2)" : "scale(1)",
            transformOrigin: `${city.x}px ${city.y}px`
          }} onMouseEnter={() => setHoveredCity(city.name)} onMouseLeave={() => setHoveredCity(null)} onClick={() => onCitySelect(selectedCity === city.name ? null : city.name)} />
              
              {/* City label on hover/select */}
              {isActive && <g className="pointer-events-none">
                  <rect x={city.x + 12} y={city.y - 10} width={city.name.length * 6 + (city.isHQ ? 30 : 10)} height="20" rx="4" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="1" />
                  <text x={city.x + 17} y={city.y + 4} fontSize="10" fontWeight="600" fill="hsl(var(--foreground))">
                    {city.name}{city.isHQ ? " (HQ)" : ""}
                  </text>
                </g>}
            </g>;
      })}
      </svg>

      {/* Legend */}
      

      {/* Selected city info */}
      {selectedCity && <div className="mt-4 p-4 rounded-xl bg-background/10 backdrop-blur-sm border border-background/20">
          <div className="flex items-center gap-2 text-background">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-semibold">{selectedCity}</span>
            {cities.find(c => c.name === selectedCity)?.isHQ && <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">HQ</span>}
          </div>
          <p className="text-sm text-background/60 mt-1">
            {cities.find(c => c.name === selectedCity)?.isHQ ? "Our global headquarters and main operations center" : "Field service agents available for on-site interventions"}
          </p>
        </div>}
    </div>;
}