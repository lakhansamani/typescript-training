export type NumberOrString = number | string | undefined;

// export type User = {
//   id: NumberOrString;
//   name: string;
//   age?: number;
// };

export interface Bill {
  id: NumberOrString;
  amount: number;
}

export interface APIResponse<T> {
  data: T;
  error: any;
}

// export interface UserApiResponse extends APIResponse {
//   user: User[];
// }

export interface User {
  id: NumberOrString;
  name: string;
  age?: number;
  bills?: Bill[];
}

// const getUsers = async (): Promise<APIResponse<User[]>> => {
//   return fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
//     res.json()
//   );
// };

// const getLocalData = async (): Promise<T> => {
//     // fetchlocal data
//     return await getLocalData;
// };
