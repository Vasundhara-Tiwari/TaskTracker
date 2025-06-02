import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './tasks/components/task-list/task-list.component';
import { TaskFormComponent } from './tasks/components/task-form/task-form.component';
import { ReportsComponent } from './tasks/components/reports/reports.component';
import { CompletedTasksComponent } from './tasks/components/completed-tasks/completed-tasks.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'create', component: TaskFormComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'completed', component: CompletedTasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
