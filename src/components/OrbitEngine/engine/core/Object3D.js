// src/components/OrbitEngine/engine/core/Object3D.js

export default class Object3D {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
      z: 0,
    };

    this.rotation = {
      x: 0,
      y: 0,
      z: 0,
    };

    this.scale = {
      x: 1,
      y: 1,
      z: 1,
    };

    this.opacity = 1;
    this.blur = 0;

    this.element = null;

    this.visible = true;

    this.userData = {};
  }

  attach(element) {
    this.element = element;
  }

  update() {}

  render() {
    if (!this.element) return;

    const transform = `
      translate3d(
      ${this.position.x}px,
      ${this.position.y}px,
      ${this.position.z}px
      )
      rotateX(${this.rotation.x}deg)
      rotateY(${this.rotation.y}deg)
      rotateZ(${this.rotation.z}deg)
      scale3d(
      ${this.scale.x},
      ${this.scale.y},
      ${this.scale.z}
      )
    `;

    const zIndex = Number.isFinite(this.position.z)
      ? Math.round(this.position.z)
      : 0;

    this.element.style.transform = transform;
    this.element.style.opacity = this.opacity;
    this.element.style.zIndex = String(zIndex);

    const filter = `blur(${this.blur}px)`;

    this.element.style.filter = filter;
  }
}
