{
    function move(animal) {
        if ("swim" in animal) {
            return animal.swim();
        }
        return animal.fly();
    }
    var fish = { swim: function () { console.log("swim"); } };
    var bird = { fly: function () { console.log("fly"); } };
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
