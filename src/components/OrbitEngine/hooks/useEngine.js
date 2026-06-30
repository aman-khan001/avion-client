// src/components/OrbitEngine/hooks/useEngine.js

import { useContext } from "react";

import OrbitEngineContext from "../context/OrbitEngineContext";

export default function useEngine() {
  const engine = useContext(OrbitEngineContext);

  if (!engine) {
    throw new Error(
      "useEngine must be used inside OrbitEngineProvider."
    );
  }

  return engine;
}