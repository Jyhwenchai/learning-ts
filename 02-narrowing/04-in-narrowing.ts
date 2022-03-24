{
// 使用 in 进行类型收窄
// javascript 使用 in 操作符确保对象拥有一个属性，这在 typescript 中适用
type Fish = { swim: () => void }
type Bird = { fly: () => void }

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim()
  }
  return animal.fly()
}

const fish: Fish = { swim: () => { console.log("swim") } }
const bird: Bird = { fly: () => { console.log("fly") } }
move(fish)
move(bird)

type Human = { swim?: () => void; fly?: () => void }

function move2(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    console.log('animal: Fish | Human')
  } else {
    console.log('animal: Bird | Human')
  }
}

move2(bird)

}