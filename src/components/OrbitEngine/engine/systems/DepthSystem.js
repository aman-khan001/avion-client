import { map } from "../utils/math";

export default class DepthSystem {
  constructor(world) {
    this.world = world;
  }

  update() {
    const objects = this.world.getObjects();

    const radius = 380;
    // export const EngineConfig = {
    //   radius: 380,
    //   speed: 0.003,
    //   perspective: 1800,
    //   minScale: 0.55,
    //   maxScale: 1.15,
    // };

    objects.forEach((object) => {
      const z = object.position.z;

      object.scale.x =
        object.scale.y =
        object.scale.z =
          map(z, -radius, radius, 0.55, 1.15);

      object.opacity = map(z, -radius, radius, 0.35, 1);

      object.blur = map(-z, -radius, radius, 0, 3);
    });
  }
}
