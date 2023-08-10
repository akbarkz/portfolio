export enum Language {
  EN = 'en',
  KZ = 'kz',
}

export interface IStack {
  name: string;
  icon: string;
  link: string;
}

export interface IProject {
  name: string;
  dateStart: string;
  dateEnd: string;
  description?: string[];
  achievements?: string[];
  stack: IStack[];
  position: string;
  location: string;
  link: string;
  images?: string[];
}
