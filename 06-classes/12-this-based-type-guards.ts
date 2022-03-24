{

// 基于 this 的保证

// 您可以在类和接口中的方法的返回位置使用 this is 类型。
// 当与一个收窄的类型（例如 if 语句）混合时，目标对象的类型将收窄到指定的类型。
class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}
 
class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}
 
class Directory extends FileSystemObject {
  children: FileSystemObject[];
  constructor(children: FileSystemObject[]) {
    super('', false)
    this.children = children
  }
}
 
interface Networked {
  host: string;
}
 
const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
 
if (fso.isFile()) {
  console.log(fso.content)
} else if (fso.isDirectory()) {
  console.log(fso.children)
} else if (fso.isNetworked()) {
  console.log(fso.host)
}

// 基于 this 的类型保护的一个常见用例是允许对特定字段进行延迟验证。
// 例如，当 hasValue 被验证为 true 时，这种情况会从 box 中保存的值中删除一个 undefined：
class Box<T> {
  value?: T;
 
  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}
 
const box = new Box()
box.value = "Gameboy"
     
if (box.hasValue()) {
  console.log(box.value)
}

const box2 = new Box()
console.log(box2.value)


}