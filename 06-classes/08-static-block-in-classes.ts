// using tsc --noEmit -t es6 06-classes/08-static-block-in-classes.ts to run
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
