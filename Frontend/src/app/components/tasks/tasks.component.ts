import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from './task';
import { TaskService } from './task.service';
import Swal from 'sweetalert2'
import swal from 'sweetalert2';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  task: Task = new Task();
  editTask: Task;


  constructor(  private taskService: TaskService, 
                private http: HttpClient, 
                private router:Router,
                private activateRouter: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  cargarTask():void{
    this.activateRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.taskService.getTask(id).subscribe( (task) =>this.task = task)
      }
    })
  }

  getTasks():void{
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }

  public addTask(): void{
    this.taskService.addTask(this.task).subscribe(
      response => this.router.navigate(['/#'])
    );
  }

  delete(task: Task): void {
    Swal.fire({
      title: 'Esta seguro?',
      text: `Esta apunto de eliminar la tarea ${task.title}!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskService.deleteTask(task.id).subscribe(
          response => {
            Swal.fire(
              'Tarea eliminada!',
              'Tarea eliminada con exito.',
              'success'
            )
          }
        )
      }
    })
  }

  update():void {
    this.taskService.updateTask(this.task)
    .subscribe( task => {
      this.router.navigate(['/#'])
      swal.fire('Tarea Termianda', `Tarea ${task.title} ha sido terminada`, 'success')
    })
  }

}
