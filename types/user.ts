//- types/user.ts

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
  };
};