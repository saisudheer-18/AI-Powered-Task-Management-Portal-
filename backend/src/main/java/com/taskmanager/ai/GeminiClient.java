package com.taskmanager.ai;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class GeminiClient {

    private final WebClient webClient;

    @Value("${gemini.api.key}")
    private String apiKey;

    public GeminiClient(WebClient webClient) {
        this.webClient = webClient;
    }

    public String generateContent(String prompt) {

        try {

            Map<String, Object> requestBody =
                    Map.of(
                            "contents",
                            List.of(
                                    Map.of(
                                            "parts",
                                            List.of(
                                                    Map.of(
                                                            "text",
                                                            prompt
                                                    )
                                            )
                                    )
                            )
                    );

            String response =
                    webClient.post()
                            .uri(uriBuilder ->
                                    uriBuilder
                                            .path("/v1beta/models/gemini-1.5-flash:generateContent")
                                            .queryParam("key", apiKey)
                                            .build())
                            .bodyValue(requestBody)
                            .retrieve()
                            .bodyToMono(String.class)
                            .block();

            return response;

        } catch (Exception e) {

            throw new RuntimeException(
                    "Error communicating with Gemini API: "
                            + e.getMessage(),
                    e
            );
        }
    }
}