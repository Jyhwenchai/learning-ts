{

// type-aliase 和 interafce 的区别在于 type-aliase 不能新增属性而 interface 总是可以扩展新的属性

interface Animal {
  name: string
}

// 扩展 Animal
interface Bear extends Animal {
  honey: boolean
}

function getBear(bear: Bear) {
  return bear;
}

const bear = getBear({ name: "Bear", honey: true}); 
console.log(bear);

type Animal1 = {
  name: string 
}

// 对 type 进行扩展
// 本质上相当于将两个对象类型进行合并
// {name: string} & { honey: boolean} => {name: string, honey: boolean}
type Bear1 = Animal1 & {
  honey: boolean
}

function getBear2(): Bear1 {
  return { name: "Bear2", honey: false }
}

const bear2 = getBear2(); 
console.log(bear2);

// 为已经存在的 interface 添加新的属性, type 不支持类似下面的操作
interface CWindow {
  title: string
}

interface CWindow {
  desc: string
}

function getWindow(window: CWindow) {
  return window;
}

const wd = getWindow({title: "Test", desc: "It's a test"});
console.log(wd)

}