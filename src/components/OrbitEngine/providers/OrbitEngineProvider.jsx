// src/components/OrbitEngine/providers/OrbitEngineProvider.jsx

import OrbitEngineContext from "../context/OrbitEngineContext";

import useOrbitEngine from "../hooks/useOrbitEngine";

export default function OrbitEngineProvider({
  children,
}) {
  const engine = useOrbitEngine();

  return (
    <OrbitEngineContext.Provider value={engine}>
      {children}
    </OrbitEngineContext.Provider>
  );
}