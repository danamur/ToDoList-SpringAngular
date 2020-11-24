import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  task: Task = new Task()

  constructor( private taskService: TaskService,
                private router: Router) { }

  ngOnInit(): void {
  }

  public addTask(): void{
    this.taskService.addTask(this.task)
    .subscribe(task => {
      this.router.navigate(['/#'])
      swal.fire('Tarea Guardada', `Tarea ${task.title} creado con exito`, 'success')
    }
    );
  }

}
