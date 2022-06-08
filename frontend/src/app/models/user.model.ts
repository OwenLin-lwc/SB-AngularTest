export interface User {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
  tags: string[];
  friends: Friend[];
  greeting: string;
  favoriteFruit: string;
}

export interface Friend {
  id: number;
  name: string;
}

export interface UserViewItem {
  name: string;
  age: number;
  registeredDateString: string;
  email: string;
  balance: number;
}
