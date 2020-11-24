import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlEndPoint:string = 'http://localhost:8181/api/tasks';

  constructor( private http: HttpClient) { }

  getTask(): Observable <Task[]> { 
    //return of(TASK);
    return this.http.get<Task[]>(this.urlEndPoint);
  }
}
