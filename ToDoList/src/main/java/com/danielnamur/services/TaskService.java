package com.danielnamur.services;

import java.util.List;

import com.danielnamur.models.entity.Task;

public interface TaskService {
    
	public Task findById(Long id);
    
	public Task save(Task task);
    
	public void delete(Long id);
    
	public List<Task> findAll();

	Task update(Long id, String title, boolean done);
    
}