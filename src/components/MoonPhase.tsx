import { useEffect, useState } from "react";

export default function MoonPhase() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Calculate current moon phase (0-1, where 0.5 is full moon)
    const now = new Date();
    const newMoon = new Date(2000, 0, 6, 18, 14); // Known new moon
    const diff = now.getTime() - newMoon.getTime();
    const days = diff / (1000 * 60 * 60 * 24);
    const lunarCycle = 29.53058867; // days in lunar cycle
    const currentPhase = (days % lunarCycle) / lunarCycle;
    setPhase(currentPhase);
  }, []);

  // Calculate moon terminator (day/night line) position
  const phaseAngle = phase * 2 * Math.PI;
  
  // Calculate the curve of the terminator
  const terminatorCurve = Math.cos(phaseAngle);

  return (
    <div className="fixed top-24 right-8 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-500">
      <div className="relative w-14 h-14">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-blue-200/20 blur-md"></div>
        
        {/* Moon base with texture */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.3)]">
          {/* Crater texture overlay */}
          <div className="absolute inset-0 rounded-full opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, transparent 2px, rgba(0,0,0,0.15) 3px, transparent 4px),
                             radial-gradient(circle at 70% 30%, transparent 1.5px, rgba(0,0,0,0.2) 2.5px, transparent 3px),
                             radial-gradient(circle at 50% 70%, transparent 1px, rgba(0,0,0,0.1) 2px, transparent 2.5px),
                             radial-gradient(circle at 80% 60%, transparent 1px, rgba(0,0,0,0.15) 1.5px, transparent 2px)`
          }}></div>
        </div>
        
        {/* Shadow overlay - creates the phase */}
        <div className="absolute inset-1 rounded-full overflow-hidden">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="shadowGradient">
                <stop offset="0%" stopColor="rgba(15, 23, 42, 0.95)" />
                <stop offset="100%" stopColor="rgba(15, 23, 42, 0.85)" />
              </radialGradient>
            </defs>
            
            {/* Create the shadow based on phase */}
            {phase < 0.5 ? (
              // Waxing - shadow on left, shrinking
              <ellipse
                cx={50 - (terminatorCurve * 50)}
                cy="50"
                rx={Math.abs(terminatorCurve * 50)}
                ry="50"
                fill="url(#shadowGradient)"
              />
            ) : (
              // Waning - shadow on right, growing
              <ellipse
                cx={50 - (terminatorCurve * 50)}
                cy="50"
                rx={Math.abs(terminatorCurve * 50)}
                ry="50"
                fill="url(#shadowGradient)"
              />
            )}
          </svg>
        </div>

        {/* Subtle rim light */}
        <div className="absolute inset-1 rounded-full shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]"></div>
      </div>
      

    </div>
  );
}
