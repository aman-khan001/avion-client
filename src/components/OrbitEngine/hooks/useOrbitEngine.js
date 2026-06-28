// src/components/OrbitEngine/hooks/useOrbitEngine.js

import { useEffect, useRef } from "react";

import Scene from "../engine/core/Scene";
import World from "../engine/core/World";
import Camera from "../engine/core/Camera";

import OrbitSystem from "../engine/systems/OrbitSystem";
import DepthSystem from "../engine/systems/DepthSystem";
import RenderSystem from "../engine/systems/RenderSystem";

export default function useOrbitEngine() {
  const engineRef = useRef(null);

  if (!engineRef.current) {
    const scene = new Scene();

    const world = new World();

    const camera = new Camera();

    const orbitSystem = new OrbitSystem(world);

    const depthSystem = new DepthSystem(world);

    const renderSystem = new RenderSystem();

    scene.onUpdate = (delta) => {
      orbitSystem.update(delta);

      depthSystem.update();

      renderSystem.render(world.getObjects());
    };

    engineRef.current = {
      scene,
      world,
      camera,

      register(object) {
        world.add(object);
        return this;
      },

      unregister(object) {
        world.remove(object);
        return this;
      },

      start() {
        scene.start();
        return this;
      },

      stop() {
        scene.stop();
        return this;
      },
    };
  }

  useEffect(() => {
    engineRef.current.start();

    return () => {
      engineRef.current.stop();
    };
  }, []);

  return engineRef.current;
}
