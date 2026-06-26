import { orbitPosition, wrapAngle } from "./math";

export default class Orbit {

  constructor(radius = 380) {

    this.radius = radius;

    this.rotation = 0;

    this.speed = 0.003;

    this.objects = [];
  }

  add(object) {

    this.objects.push(object);

  }

  update() {

    this.rotation = wrapAngle(
      this.rotation + this.speed
    );

    const step =
      (Math.PI * 2) /
      this.objects.length;

    this.objects.forEach((object, i) => {

      const angle =
        this.rotation +
        i * step;

      const pos =
        orbitPosition(angle, this.radius);

      object.position.x = pos.x;

      object.position.z = pos.z;

      object.rotation.y =

        -angle * (180 / Math.PI);

    });

  }

}