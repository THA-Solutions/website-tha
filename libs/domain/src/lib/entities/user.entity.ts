export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  password?: string;
  image?: string;
  role: string;
}
