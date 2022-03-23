{
// 适用类型谓词
type Fish = {name: string, swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

const fish: Fish = { name: "AAA", swim: () => { console.log("swim") } }
const bird: Bird = { fly: () => { console.log("fly") } }

function getSmallPet(): Fish | Bird {
  return Math.random() < 0.5 ? fish : bird
}

const pet = getSmallPet()
if (isFish(pet)) {
  fish.swim()
} else {
  pet.fly()
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});

}