// engine/Scene.js

export default class Scene {
  constructor() {
    this.objects = [];

    this.running = false;

    this.lastTime = 0;

    this.animationId = null;

    this.update = this.update.bind(this);
  }

  add(object) {
    this.objects.push(object);
  }

  start() {
    if (this.running) return;

    this.running = true;

    this.animationId =
      requestAnimationFrame(this.update);
  }

  stop() {
    this.running = false;

    cancelAnimationFrame(this.animationId);
  }

  update(time) {
    const delta =
      (time - this.lastTime) / 1000;

    this.lastTime = time;

    this.objects.forEach((object) => {
      object.update(delta);

      object.render();
    });

    this.animationId =
      requestAnimationFrame(this.update);
  }
}