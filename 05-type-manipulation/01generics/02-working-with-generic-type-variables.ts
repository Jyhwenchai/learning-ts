// 使用泛型变量
function loggingIdentity<Type>(arg: Type): Type {
    //console.log(arg.length);//error, 并不知道泛型类有length这个属性
  return arg;
}

// 当我们可以让泛型拥有length的类型，这样我们才能调用 arg.length 属性
function loggingIdentitys<Type>(args: Type[]): Type[] {
  console.log(args.length);
  return args;
}

loggingIdentitys(["red", "green", "blue"]);
