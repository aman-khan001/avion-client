// src/components/OrbitEngine/OrbitCard.jsx

import { useEffect, useRef } from "react";

import Object3D from "../engine/core/Object3D";

import useEngine from "../hooks/useEngine";

export default function OrbitCard({ children, className = "" }) {
  const engine = useEngine();

  const elementRef = useRef(null);

  const objectRef = useRef(null);

  const registeredRef = useRef(false);

  const registeredEngineRef = useRef(null);

  // Create Object3D only once.
  if (!objectRef.current) {
    objectRef.current = new Object3D();
  }

  useEffect(() => {
    const object = objectRef.current;

    if (!elementRef.current) return;

    object.attach(elementRef.current);

    if (!registeredRef.current || registeredEngineRef.current !== engine) {
      if (registeredRef.current && registeredEngineRef.current) {
        registeredEngineRef.current.unregister(object);
      }

      engine.register(object);
      registeredRef.current = true;
      registeredEngineRef.current = engine;
    }

    return () => {
      if (registeredRef.current && registeredEngineRef.current === engine) {
        engine.unregister(object);
        registeredRef.current = false;
        registeredEngineRef.current = null;
      }
    };
  }, [engine]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
