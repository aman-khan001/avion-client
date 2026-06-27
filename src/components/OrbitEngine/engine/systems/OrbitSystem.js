// src/components/OrbitEngine/engine/systems/OrbitSystem.js

import { orbitPosition, radToDeg, wrapAngle } from "../math";

const RAD_TO_DEG = radToDeg(1);

export default class OrbitSystem {
  constructor(radius = 380) {
    this.radius = radius;
    this.rotation = 0;
    this.speed = 0.5; // radians per second
    this.objects = [];
  }

  add(object) {
    if (object && !this.objects.includes(object)) {
      this.objects.push(object);
    }

    return this;
  }

  remove(object) {
    const index = this.objects.indexOf(object);

    if (index !== -1) {
      this.objects.splice(index, 1);
    }

    return this;
  }

  clear() {
    this.objects.length = 0;
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
    if (!this.objects.length) {
      return this;
    }

    this.rotation = wrapAngle(this.rotation + this.speed * delta);

    const step = (Math.PI * 2) / this.objects.length;

    this.objects.forEach((object, i) => {
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
