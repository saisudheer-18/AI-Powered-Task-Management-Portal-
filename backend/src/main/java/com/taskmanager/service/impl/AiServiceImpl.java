package com.taskmanager.service.impl;

import org.springframework.stereotype.Service;

import com.taskmanager.dto.request.AiRequest;
import com.taskmanager.dto.response.AiResponse;
import com.taskmanager.service.AiService;

@Service
public class AiServiceImpl implements AiService {

    @Override
    public AiResponse generateTaskDescription(
            AiRequest request) {

        String title = request.getTitle();

        if (title == null || title.trim().isEmpty()) {

            return new AiResponse(
                    "Task title is required",
                    "LOW",
                    "0 Hours");
        }

        String description;
        String priority;
        String estimatedTime;

        String lowerTitle =
                title.toLowerCase();

        if (lowerTitle.contains("presentation")) {

            description =
                    "Prepare presentation slides, review content and practice delivery.";

            priority = "HIGH";

            estimatedTime = "4 Hours";

        } else if (lowerTitle.contains("meeting")) {

            description =
                    "Prepare agenda, collect requirements and attend meeting.";

            priority = "MEDIUM";

            estimatedTime = "2 Hours";

        } else if (lowerTitle.contains("report")) {

            description =
                    "Gather information, prepare report and review findings.";

            priority = "HIGH";

            estimatedTime = "3 Hours";

        } else {

            description =
                    "Complete the task: " + title;

            priority = "LOW";

            estimatedTime = "1 Hour";
        }

        return new AiResponse(
                description,
                priority,
                estimatedTime);
    }
}