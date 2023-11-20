export default interface UserEntity {
  id: string | null;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  imageUrl: string;
  role: string;
}
