// src/components/OrbitEngine/engine/systems/DepthSystem.js

import { clamp, lerp, normalize } from "../utils/math";

export default class DepthSystem {
  constructor(world, radius = 380) {
    this.world = world;
    this.radius = radius;
  }

  setRadius(radius) {
    this.radius = radius;
    return this;
  }

  update() {
    const objects = this.world?.getObjects?.() ?? [];
    if (!objects.length) {
      return this;
    }

    const radius = this.radius;
    const minZ = -radius;
    const maxZ = radius;

    objects.forEach((object) => {
      if (!object?.position || !object?.scale) {
        return;
      }

      const depth = clamp(normalize(object.position.z, minZ, maxZ), 0, 1);
      const scaleValue = lerp(0.55, 1.15, depth);
      const opacityValue = lerp(0.35, 1, depth);
      const blurValue = lerp(3, 0, depth);

      object.scale.x = object.scale.y = object.scale.z = scaleValue;
      object.opacity = opacityValue;
      object.blur = blurValue;
    });

    return this;
  }
}
