export default interface IUser {
  email: string;
  picture: {
    medium: string;
  };
  name: {
    first: string;
    last: string;
  };
  login: {
    username: string;
  };
}
