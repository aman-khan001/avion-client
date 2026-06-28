// src/components/OrbitEngine/engine/systems/OrbitSystem.js

import { orbitPosition, radToDeg, wrapAngle } from "../utils/math";

const RAD_TO_DEG = radToDeg(1);

export default class OrbitSystem {
  constructor(world, radius = 380) {
    this.world = world;
    this.radius = radius;
    this.rotation = 0;
    this.speed = 0.5; // radians per second
  }

  add(object) {
    this.world?.add?.(object);
    return this;
  }

  remove(object) {
    this.world?.remove?.(object);
    return this;
  }

  clear() {
    this.world?.clear?.();
    return this;
  }

  setRadius(radius) {
    this.radius = radius;
    return this;
  }

  setSpeed(speed) {
    this.speed = speed;
    return this;
  }

  setRotation(rotation) {
    this.rotation = wrapAngle(rotation);
    return this;
  }

  update(delta = 1) {
    const objects = this.world?.getObjects?.() ?? [];

    if (!objects.length) {
      return this;
    }

    this.rotation = wrapAngle(this.rotation + this.speed * delta);

    const step = (Math.PI * 2) / objects.length;

    objects.forEach((object, i) => {
      if (!object?.position || !object?.rotation) {
        return;
      }

      const angle = this.rotation + i * step;
      const pos = orbitPosition(angle, this.radius);

      object.position.x = pos.x;
      object.position.z = pos.z;
      object.rotation.y = -angle * RAD_TO_DEG;
    });

    return this;
  }
}
