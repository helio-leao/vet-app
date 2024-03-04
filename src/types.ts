export type Patient = {
  id: string;
  name: string;
  picture: string;
  healthDescription: string;
  tutor: {
    name: string;
  };
}