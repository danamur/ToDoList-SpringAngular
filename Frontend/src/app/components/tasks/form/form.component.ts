import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public task: Task = new Task();
  public titulo: string = "Crear Cliente";

  constructor() { }

  ngOnInit(): void {
  }

  public create(): void{
    console.log("Click!");
    console.log(this.task);
  }

}
