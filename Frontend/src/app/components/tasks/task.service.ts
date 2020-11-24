import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlEndPoint:string = 'http://localhost:8181/api/tasks';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor( private http: HttpClient) { }

  getTasks(): Observable <Task[]> { 
    return this.http.get<Task[]>(this.urlEndPoint);
  }

  getTask(id): Observable<Task>{
    return this.http.get<Task>(`${this.urlEndPoint}/${id}`)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.urlEndPoint, task, {headers: this.httpHeaders})
  }

  deleteTask(id: number): Observable<Task>{
    return this.http.delete<Task>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

  updateTask(task: Task): Observable<Task>{
    return this.http.put<Task>(`${this.urlEndPoint}/${task.id}`, task, {headers: this.httpHeaders});
  }
}
