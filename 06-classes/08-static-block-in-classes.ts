{

// 静态块允许您编写具有自己范围的语句序列，这些语句可以访问包含类中的私有字段。
// 这意味着我们可以编写具有编写语句的所有功能的初始化代码，不会泄漏变量，并且可以完全访问我们类的内部。
// using tsc -t es6 06-classes/08-static-block-in-classes.ts to run
// 类中的静态 block
class Bar {
  length = 0;
}

class Foo {
  static #count = 0;

  get count() {
    return Foo.#count;
  }
  
  static {
    try {
      const lastInstances = loadLastInstances();
      Foo.#count += lastInstances.length;
    } catch {}
  }
}

function loadLastInstances() {
	return new Bar();
}

}