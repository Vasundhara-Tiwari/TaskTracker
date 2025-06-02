import { Component } from '@angular/core';
import { Task, Status } from '../../task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  task: Task = {
    title: '',
    description: '',
    dueDate: '',
    status: Status.TODO,
  };

  Status = Status;

  constructor(private taskService: TaskService) {}

  onSubmit() {
    this.taskService.create(this.task).subscribe(() => {
      alert('Task created');
      this.task = {
        title: '',
        description: '',
        dueDate: '',
        status: Status.TODO,
      };
    });
  }
}
