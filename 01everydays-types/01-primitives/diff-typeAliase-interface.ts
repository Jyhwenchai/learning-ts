// type-aliase 和 interafce 的区别在于 type-aliase 不能新增属性而 interface 可以扩展

interface Animal {
  name: string;
}

// 扩展 Animal
interface Bear extends Animal {
  honey: boolean;
}

function getBear(bear: Bear) {
  return bear;
}

const bear = getBear({ name: "Bear", honey: true}); 
console.log(bear.name);
console.log(bear.honey);

// 使用 type 进行扩展
type Animal1 = {
  name: string 
}

type Bear1 = Animal & {
  honey: boolean
}

const bear2 = getBear({ name: "Bear", honey: true}); 
console.log(bear.name);
console.log(bear.honey);

// 为已经存在的 interface 添加新的属性, type 不支持类似下面的操作
interface CWindow {
  title: string
}

interface CWindow {
  desc: string
}

function getWindow(window:CWindow) {
  return window;
}

const wd = getWindow({title: "Test", desc: "It's a test"});


