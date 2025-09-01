//- app/manages/users/type.ts

import { BaseResponse } from "@/app/type";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  role: string;
}

export interface UserResponse extends BaseResponse {
  users: User[];
}
