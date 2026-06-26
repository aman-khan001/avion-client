// engine/Renderer.js

export default class Renderer {
  render(objects) {

    objects.sort((a, b) => {

      return a.position.z - b.position.z;

    });

    objects.forEach((object) => {

      object.render();

    });

  }
}