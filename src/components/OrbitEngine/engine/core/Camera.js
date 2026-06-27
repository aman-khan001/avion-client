// src/components/OrbitEngine/engine/core/Camera.js

export default class Camera {
  constructor() {
    this.rotation = {
      x: 0,
      y: 0,
    };

    this.perspective = 1800;

    this.tiltStrength = 8;
  }

  setRotation(x, y) {
    this.rotation.x = x;
    this.rotation.y = y;
  }
}