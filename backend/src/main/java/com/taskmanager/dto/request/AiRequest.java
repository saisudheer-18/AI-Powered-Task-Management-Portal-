package com.taskmanager.dto.request;

import jakarta.validation.constraints.NotBlank;

public class AiRequest {

    @NotBlank(message = "Task title is required")
    private String title;

    public AiRequest() {
    }

    public AiRequest(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}