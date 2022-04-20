
export function hello(world: string = 'world'): string {
  return `Hello ${world}! `;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
}

let currentUser: User = {
  id: '123',
  email: 'kumargandhi30@gmail.com',
  displayName: 'Kumar Gandhi'
};
