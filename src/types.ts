export type Patient = {
  id: string;
  name: string;
  latestAppointment: string;
  picture: string;
  healthDescription: string;
  tutor: {
    name: string;
  };
}