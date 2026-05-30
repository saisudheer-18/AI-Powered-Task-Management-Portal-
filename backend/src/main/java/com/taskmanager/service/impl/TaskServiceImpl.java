package com.taskmanager.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.taskmanager.dto.request.TaskRequest;
import com.taskmanager.dto.response.TaskResponse;
import com.taskmanager.entity.Task;
import com.taskmanager.entity.TaskStatus;
import com.taskmanager.entity.User;
import com.taskmanager.exception.ResourceNotFoundException;
import com.taskmanager.repository.TaskRepository;
import com.taskmanager.repository.UserRepository;
import com.taskmanager.service.TaskService;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public TaskServiceImpl(
            TaskRepository taskRepository,
            UserRepository userRepository) {

        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }
    @Override
    public TaskResponse createTask(TaskRequest request) {

  
    User currentUser = getCurrentUser();

    Task task = new Task();

    task.setTitle(request.getTitle());
    task.setDescription(request.getDescription());
    task.setPriority(request.getPriority());
    task.setStatus(request.getStatus());
    task.setDueDate(request.getDueDate());

    task.setUser(currentUser);

    Task savedTask = taskRepository.save(task);

    return mapToResponse(savedTask);
   

    }

    private User getCurrentUser() {

    Authentication authentication =
            SecurityContextHolder
                    .getContext()
                    .getAuthentication();

    if (authentication == null
            || !authentication.isAuthenticated()
            || "anonymousUser".equals(authentication.getName())) {

        throw new RuntimeException(
                "User not authenticated");
    }

    String email = authentication.getName();

    return userRepository
            .findByEmail(email)
            .orElseThrow(() ->
                    new ResourceNotFoundException(
                            "User not found with email: " + email));
 

    }

    @Override
    public List<TaskResponse> getAllTasks() {

        return taskRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public TaskResponse getTaskById(Long id) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Task not found with id: " + id));

        return mapToResponse(task);
    }

    @Override
    public TaskResponse updateTask(
            Long id,
            TaskRequest request) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Task not found with id: " + id));

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setPriority(request.getPriority());
        task.setStatus(request.getStatus());
        task.setDueDate(request.getDueDate());

        Task updatedTask =
                taskRepository.save(task);

        return mapToResponse(updatedTask);
    }

    @Override
    public void deleteTask(Long id) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Task not found with id: " + id));

        taskRepository.delete(task);
    }

    @Override
    public TaskResponse updateTaskStatus(
            Long id,
            String status) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Task not found with id: " + id));

        task.setStatus(
                TaskStatus.valueOf(
                        status.toUpperCase()));

        Task updatedTask =
                taskRepository.save(task);

        return mapToResponse(updatedTask);
    }

    private TaskResponse mapToResponse(Task task) {

        TaskResponse response =
                new TaskResponse();

        response.setId(task.getId());
        response.setTitle(task.getTitle());
        response.setDescription(task.getDescription());
        response.setPriority(task.getPriority());
        response.setStatus(task.getStatus());
        response.setDueDate(task.getDueDate());
        response.setCreatedAt(task.getCreatedAt());

        return response;
    }
}