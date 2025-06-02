export enum Status {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface Task {
  id?: number;
  title: string;
  description: string;
  dueDate: string;
  status: Status;
}
