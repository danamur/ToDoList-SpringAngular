package com.danielnamur.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.danielnamur.models.entity.Task;
import com.danielnamur.services.TaskService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TaskController {

	private TaskService taskService;
	
	public TaskController(TaskService taskService) {
		this.taskService = taskService;
	}
	
	@GetMapping("/tasks")
	public List<Task> index(){
		return taskService.findAll();
	}
	
	@GetMapping("/tasks/{id}")
	public Task show(@PathVariable Long id) {
		return taskService.findById(id);
	}
	
	@PostMapping("/tasks")
	@ResponseStatus(HttpStatus.CREATED)
	public Task create(	@RequestParam(value="title") String title,
						@RequestParam(value="done") boolean done) {
		Task task = new Task(title, done);
		return taskService.save(task);
	}
	
	@PutMapping("/tasks/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Task update(@PathVariable Long id, @RequestParam(value="title") String title,
						@RequestParam(value="done") boolean done) {
		Task task = taskService.update(id, title, done);
		
		return task;
	}
	
	@DeleteMapping("/tasks/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		taskService.delete(id);
	}
	
}
