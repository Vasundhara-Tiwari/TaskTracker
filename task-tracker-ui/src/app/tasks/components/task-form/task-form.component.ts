import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Status } from '../../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;
  Status = Status;
  statusArray = [Status.TODO, Status.IN_PROGRESS, Status.DONE];
  constructor(private fb: FormBuilder, private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      dueDate: ['', Validators.required],
      status: [Status.TODO, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    this.taskService.create(this.taskForm.value).subscribe(() => {
      alert('Task created');
      this.taskForm.reset({
        title: '',
        description: '',
        dueDate: '',
        status: Status.TODO,
      });
    });
  }
}
