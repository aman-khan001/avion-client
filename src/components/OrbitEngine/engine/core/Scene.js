// src/components/OrbitEngine/engine/core/Scene.js

export default class Scene {
  constructor() {
    this.objects = [];
    this.running = false;
    this.lastTime = 0;
    this.animationId = null;

    this.update = this.update.bind(this);
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

  start() {
    if (this.running) return;

    this.running = true;
    this.lastTime = 0;

    this.animationId = requestAnimationFrame(this.update);
  }

  stop() {
    if (!this.running) return;

    this.running = false;

    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
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

    this.objects.forEach((object) => {
      if (object?.update) {
        object.update(delta);
      }

      if (object?.render) {
        object.render();
      }
    });

    this.animationId = requestAnimationFrame(this.update);
  }
}
