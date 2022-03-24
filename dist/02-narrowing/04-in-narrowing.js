"use strict";
{
    function move(animal) {
        if ("swim" in animal) {
            return animal.swim();
        }
        return animal.fly();
    }
    const fish = { swim: () => { console.log("swim"); } };
    const bird = { fly: () => { console.log("fly"); } };
    move(fish);
    move(bird);
    function move2(animal) {
        if ("swim" in animal) {
            console.log('animal: Fish | Human');
        }
        else {
            console.log('animal: Bird | Human');
        }
    }
    move2(bird);
}
