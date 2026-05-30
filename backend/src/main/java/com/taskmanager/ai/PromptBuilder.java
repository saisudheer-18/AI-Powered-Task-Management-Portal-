package com.taskmanager.ai;

public class PromptBuilder {

    private PromptBuilder() {
    }

    public static String buildTaskDescriptionPrompt(
            String taskTitle) {

        return """
                Generate a professional task description
                for the following task:

                %s

                Return only the description.
                """
                .formatted(taskTitle);
    }
}