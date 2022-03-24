{

// 条件类型约束
// 可以理解 MessageOf<T extends { message: unknown } > 为 T["message"] 的类型，而这个类型目前是 unknown，即可以是任意类型，
// 但是目前未确定，只有当我们使用的时候才能确定类型
type MessageOf<T extends { message: unknown } > = T["message"];

interface Email {
  message: string;
}

// EmailMessageContents 为 string 类型 
type EmailMessageContents = MessageOf<Email>

// 但是，如果我们希望 MessageOf 采用 any 类型，并且如果消息属性不可用，则默认为 never？我们可以通过将约束移出并引入条件类型来做到这一点：
type MessageOf2<T> = T extends { message: unknown } ? T["message"] : never

interface Dog {
  bark(): void
}

type EmailMessageContents2 = MessageOf2<Email> // EmailMessageContents2 = string
type DogMessageContents = MessageOf2<Dog> // DogMessageContents = never

// 下面一个例子我们编写一个名为 Flatten 的类型，将数组类型展平为它们的元素类型，但不理会它们：
type Flatten<T> = T extends any[] ? T[number] : T
type Str = Flatten<string[]>	// Str = string
type Num = Flatten<number>	// Num = number;

}