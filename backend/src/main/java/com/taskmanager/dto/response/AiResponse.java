package com.taskmanager.dto.response;

public class AiResponse {

    private String description;
    private String priority;
    private String estimatedTime;

    public AiResponse() {
    }

    public AiResponse(String description,
                      String priority,
                      String estimatedTime) {
        this.description = description;
        this.priority = priority;
        this.estimatedTime = estimatedTime;
    }

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getEstimatedTime() {
		return estimatedTime;
	}

	public void setEstimatedTime(String estimatedTime) {
		this.estimatedTime = estimatedTime;
	}

    
}