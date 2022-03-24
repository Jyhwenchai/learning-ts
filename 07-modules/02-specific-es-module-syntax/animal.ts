export type Cat = { breed: string; yearOfBirth: number };
 
export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}

// “createCatName”不能用作值，因为它是使用 “import” 方式导入的。
export const createCatName = () => "fluffy";
