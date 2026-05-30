package com.taskmanager.exception;

public class AiServiceException extends RuntimeException {
	 private static final long serialVersionUID = 1L;
    public AiServiceException(String message) {
        super(message);
    }
}