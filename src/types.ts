export interface User {
  id: number;
  name: string;
  age: number;
  nickname: string;
}

export type UserInput = Omit<User, "id">;
