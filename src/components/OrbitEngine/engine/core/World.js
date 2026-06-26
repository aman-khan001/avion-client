// engine/core/World.js

export default class World {

    constructor() {

        this.objects = [];

    }

    add(object) {

        this.objects.push(object);

    }

    remove(object) {

        this.objects = this.objects.filter(
            item => item !== object
        );

    }

    getObjects() {

        return this.objects;

    }

}