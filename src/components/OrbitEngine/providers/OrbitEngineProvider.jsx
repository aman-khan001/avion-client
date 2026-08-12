import { useEffect } from "react";

import OrbitEngineContext from "../context/OrbitEngineContext";
import useOrbitEngine from "../hooks/useOrbitEngine";

export default function OrbitEngineProvider({
  children,
  radius = 380,
  speed = 0.5,
  perspective = 1800,
  reducedMotion = false,
  className = "",
}) {
  const engine = useOrbitEngine({ radius, speed, perspective });
  const motionSpeed = reducedMotion ? 0 : speed;

  useEffect(() => {
    engine.setRadius(radius);
  }, [engine, radius]);

  useEffect(() => {
    engine.setSpeed(motionSpeed);
  }, [engine, motionSpeed]);

  useEffect(() => {
    engine.setPerspective(perspective);
  }, [engine, perspective]);

  return (
    <OrbitEngineContext.Provider value={engine}>
      <div
        className={`orbit-viewport ${className}`.trim()}
        style={{ "--orbit-perspective": `${perspective}px` }}
      >
        {children}
      </div>
    </OrbitEngineContext.Provider>
  );
}
