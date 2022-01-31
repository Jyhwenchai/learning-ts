// 通过 as 重新映射 key
type NewKeyType = string;
type MappedTypeWithNewProperties<Type> = {
  [Properties in keyof Type as NewKeyType]: Type[Properties]
};


// 可以利用模板文字类型等功能从以前的属性名称中创建新的属性名称：
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;
/*
 type LazyPerson = {
   getName: () => string;
   getAge: () => number;
   getLocation: () => string;
}

*/

// 可以通过条件类型生成 never 来过滤掉key
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
}

interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;
/*
type KindlessCircle {
  radius: number;
}
*/

// 可以映射任何的类型
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}
 
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
 
type Config = EventConfig<SquareEvent | CircleEvent>
/*
type Config = {
    square: (event: SquareEvent) => void;
    circle: (event: CircleEvent) => void;
}

*/


