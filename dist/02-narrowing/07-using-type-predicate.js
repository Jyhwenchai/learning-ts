"use strict";
{
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    const goldfish = { name: "goldfish", swim: () => { console.log("glodfish swim"); } };
    const crocodile = { name: "crocodile", swim: () => { console.log("crocodile swim"); } };
    const parrot = { name: "parrot", fly: () => { console.log("fly"); } };
    function getSmallPet() {
        return Math.random() < 0.3 ? goldfish : (Math.random() < 0.7 ? crocodile : parrot);
    }
    const pet = getSmallPet();
    if (isFish(pet)) {
        goldfish.swim();
    }
    else {
        pet.fly();
    }
    const zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
    const underWater1 = zoo.filter(isFish);
    console.log(underWater1);
    // or, equivalently
    const underWater2 = zoo.filter(isFish);
    console.log(underWater2);
    // The predicate may need repeating for more complex examples
    const underWater3 = zoo.filter((pet) => {
        if (pet.name === "parrot")
            return false;
        return isFish(pet);
    });
    console.log(underWater3);
}
