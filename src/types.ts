export type Patient = {
  _id: string;
  name: string;
  pictureUrl: string;
  healthDescription: string;
  birthdate: Date;
  tutorName: string;
}

export type Exam = {
  _id: string;
  type: string;
  date: string;
  result: number;
  patient: Patient;
}

export type Notification = {
  _id: string;
  message: string;
  status: 'UNREAD' | 'READ';
  exam: Exam;
}