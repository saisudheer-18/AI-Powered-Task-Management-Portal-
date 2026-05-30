package com.taskmanager.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.taskmanager.dto.request.AiRequest;
import com.taskmanager.dto.response.AiResponse;
import com.taskmanager.service.AiService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "http://localhost:5173")
public class AiController {

    private final AiService aiService;

    public AiController(AiService aiService) {
        this.aiService = aiService;
    }

    @PostMapping("/generate-description")
    public ResponseEntity<AiResponse> generateDescription(
            @Valid @RequestBody AiRequest request) {

        return ResponseEntity.ok(
                aiService.generateTaskDescription(request));
    }
}