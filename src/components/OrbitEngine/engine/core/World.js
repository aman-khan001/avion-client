// src/components/OrbitEngine/engine/core/World.js

export default class World {
  constructor() {
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

  getObjects() {
    return [...this.objects];
  }
}
