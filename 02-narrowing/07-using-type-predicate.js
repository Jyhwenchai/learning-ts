{
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    var goldfish_1 = { name: "goldfish", swim: function () { console.log("glodfish swim"); } };
    var crocodile_1 = { name: "crocodile", swim: function () { console.log("crocodile swim"); } };
    var parrot_1 = { name: "parrot", fly: function () { console.log("fly"); } };
    function getSmallPet() {
        return Math.random() < 0.3 ? goldfish_1 : (Math.random() < 0.7 ? crocodile_1 : parrot_1);
    }
    var pet = getSmallPet();
    if (isFish(pet)) {
        goldfish_1.swim();
    }
    else {
        pet.fly();
    }
    var zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
    var underWater1 = zoo.filter(isFish);
    console.log(underWater1);
    // or, equivalently
    var underWater2 = zoo.filter(isFish);
    console.log(underWater2);
    // The predicate may need repeating for more complex examples
    var underWater3 = zoo.filter(function (pet) {
        if (pet.name === "parrot")
            return false;
        return isFish(pet);
    });
    console.log(underWater3);
}
