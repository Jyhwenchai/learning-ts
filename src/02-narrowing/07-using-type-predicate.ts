{
// 使用类型谓词 is 收窄类型
type Fish = {name: string, swim: () => void }
type Bird = {name: string, fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

const goldfish: Fish = { name: "goldfish", swim: () => { console.log("glodfish swim") } }
const crocodile: Fish = { name: "crocodile", swim: () => { console.log("crocodile swim") } }
const parrot: Bird = { name: "parrot", fly: () => { console.log("fly") } }

function getSmallPet(): Fish | Bird {
  return Math.random() < 0.3 ? goldfish : (Math.random() < 0.7 ? crocodile : parrot)
}

const pet = getSmallPet()
if (isFish(pet)) {
  goldfish.swim()
} else {
  pet.fly()
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()]
const underWater1: Fish[] = zoo.filter(isFish)
console.log(underWater1)

// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[]
console.log(underWater2)
 
// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "parrot") return false;
  return isFish(pet);
});

console.log(underWater3)

}