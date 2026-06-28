// src/components/OrbitEngine/engine/systems/RenderSystem.js

export default class Renderer {
  render(objects = []) {
    if (!objects || objects.length === 0) return;

    // Don't mutate the original array; sort a shallow copy.
    const sorted = objects.slice().sort((a, b) => {
      const az =
        a && a.position && typeof a.position.z === "number" ? a.position.z : 0;
      const bz =
        b && b.position && typeof b.position.z === "number" ? b.position.z : 0;

      // Sort far-to-near (higher z drawn first) for painter-style rendering.
      return bz - az;
    });

    for (let i = 0; i < sorted.length; i++) {
      const obj = sorted[i];
      if (obj && typeof obj.render === "function") obj.render();
    }
  }
}
