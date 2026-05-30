package com.taskmanager.dto.request;

import java.time.LocalDate;

import com.taskmanager.entity.Priority;
import com.taskmanager.entity.TaskStatus;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class TaskRequest {

    @NotBlank(message = "Task title is required")
    @Size(
        min = 3,
        max = 100,
        message = "Title must be between 3 and 100 characters"
    )
    private String title;
    @NotBlank(message = "Description is required")
    @Size(
        min = 5,
        max = 1000,
        message = "Description must be between 5 and 1000 characters"
    )
    private String description;

    @NotNull(message = "Priority is required")
    private Priority priority;

    @NotNull(message = "Status is required")
    private TaskStatus status;

    @NotNull(message = "Due date is required")
    @FutureOrPresent(
            message =
            "Due date must be today or future date")
    private LocalDate dueDate;;

    public TaskRequest() {
    }

    public TaskRequest(String title, String description,
                       Priority priority,
                       TaskStatus status,
                       LocalDate dueDate) {

        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.dueDate = dueDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }
}