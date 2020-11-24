package com.danielnamur.models.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.danielnamur.models.entity.Task;

@Repository
@CrossOrigin
public interface TaskRepository extends JpaRepository<Task, Long> {
	
}