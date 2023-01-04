import { Component, OnInit } from '@angular/core';
interface Task {
  name: string;
  description: string;
}
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  taskName = '';
  taskDescription = '';
  tasks: Task[] = [];

  addTask() {
    this.tasks.push({
      name: this.taskName,
      description: this.taskDescription
    });
    this.taskName = '';
    this.taskDescription = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

} 
