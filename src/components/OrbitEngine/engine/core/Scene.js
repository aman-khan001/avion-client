// src/components/OrbitEngine/engine/core/Scene.js

export default class Scene {
  constructor() {
    this.running = false;

    this.lastTime = 0;

    this.animationId = null;

    this.onUpdate = null;

    this.update = this.update.bind(this);
  }

  start() {
    if (this.running) return this;

    this.running = true;

    this.lastTime = 0;

    this.animationId = requestAnimationFrame(this.update);

    return this;
  }

  stop() {
    if (!this.running) return this;

    this.running = false;

    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);

      this.animationId = null;
    }

    return this;
  }

  update(time) {
    if (!this.running) {
      this.animationId = null;
      return;
    }

    if (!this.lastTime) {
      this.lastTime = time;
    }

    const delta = (time - this.lastTime) / 1000;

    this.lastTime = time;

    if (typeof this.onUpdate === "function") {
      this.onUpdate(delta);
    }

    this.animationId = requestAnimationFrame(this.update);
  }
}