export type Patient = {
  id: string;
  name: string;
  picture: string;
  healthDescription: string;
  birthdate: string;
  tutor: {
    name: string;
  };
}

export type Exam = {
  id: string;
  type: string;
  date: string;
  result: number;
  patientId: string;
}