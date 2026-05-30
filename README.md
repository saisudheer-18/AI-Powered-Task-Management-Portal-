# 🚀 AI-Powered Task Management Portal

A full-stack task management application built using **Spring Boot**, **React**, **MySQL**, **JWT Authentication**, and **Google Gemini AI**.

The application allows users to securely manage tasks while leveraging Artificial Intelligence to generate task descriptions, suggest priorities, and improve productivity.

---

# 📌 Project Overview

The **AI-Powered Task Management Portal** is designed to help users organize and track their daily activities efficiently.

The application provides:

* Secure User Authentication
* Task Management System
* Task Status Tracking
* AI-Powered Task Assistance
* Responsive User Interface
* RESTful API Architecture

This project demonstrates modern Full Stack Development practices using Java Spring Boot and React.

---

# 🎯 Project Objectives

The primary objectives of this project are:

* Build secure REST APIs using Spring Boot
* Implement JWT-based Authentication
* Develop a responsive React frontend
* Integrate MySQL Database
* Implement AI-powered automation using Google Gemini
* Follow Layered Architecture principles
* Create a deployment-ready application

---

# ✨ Features

## 🔐 Authentication Module

Users can:

* Register new accounts
* Login securely
* Access protected resources
* Maintain authenticated sessions
* Logout securely

### Security Features

* JWT Authentication
* Password Encryption using BCrypt
* Protected API Endpoints
* Spring Security Integration
* Route Protection

---

## 📝 Task Management Module

Users can:

* Create Tasks
* Edit Tasks
* Delete Tasks
* View All Tasks
* View Task Details
* Track Progress
* Update Task Status

### Task Status

```text
TODO
IN_PROGRESS
DONE
```

### Task Priority

```text
LOW
MEDIUM
HIGH
```

### Task Fields

| Field             | Description          |
| ----------------- | -------------------- |
| Title             | Task Name            |
| Description       | Detailed Information |
| Priority          | Task Importance      |
| Due Date          | Deadline             |
| Status            | Progress Status      |
| Created Timestamp | Creation Time        |
| Updated Timestamp | Last Modified Time   |

---

# 🤖 AI Automation Feature

## AI Task Description Generator

The application integrates **Google Gemini AI** to automatically generate task details.

### Workflow

### Step 1

User enters:

```text
Prepare Client Presentation
```

### Step 2

Backend sends prompt to Gemini AI.

### Step 3

Gemini returns:

```text
Description:
Create presentation slides, gather requirements,
and prepare meeting agenda.

Priority:
HIGH

Estimated Time:
4 Hours
```

### Step 4

Frontend automatically displays AI suggestions.

---

# 🧠 AI Failure Handling

If the Gemini API becomes unavailable:

* Application continues working
* User receives fallback response
* No application crash occurs

Example:

```json
{
  "description": "AI service unavailable",
  "priority": "MEDIUM",
  "estimatedTime": "Unknown"
}
```

---

# 🛠️ Technology Stack

## Backend

| Technology       | Purpose                        |
| ---------------- | ------------------------------ |
| Java 17          | Programming Language           |
| Spring Boot      | Backend Framework              |
| Spring Security  | Authentication & Authorization |
| JWT              | Token Security                 |
| Spring Data JPA  | Database Access                |
| Hibernate        | ORM Framework                  |
| MySQL            | Database                       |
| Maven            | Dependency Management          |
| Swagger/OpenAPI  | API Documentation              |
| Google Gemini AI | AI Integration                 |

---

## Frontend

| Technology   | Purpose             |
| ------------ | ------------------- |
| React        | UI Development      |
| Vite         | Frontend Build Tool |
| Tailwind CSS | Styling             |
| Axios        | API Communication   |
| React Router | Routing             |
| Context API  | State Management    |

---

# 🏗️ System Architecture

```text
+---------------------+
| React Frontend      |
+---------------------+
          |
          |
      REST APIs
          |
          |
+---------------------+
| Spring Boot Backend |
+---------------------+
          |
          |
+---------------------+
| MySQL Database      |
+---------------------+
          |
          |
+---------------------+
| Google Gemini AI    |
+---------------------+
```

---

# ⚙️ Backend Architecture

The backend follows **Layered Architecture**.

```text
Controller Layer
       |
Service Layer
       |
Repository Layer
       |
Database
```

Benefits:

* Clean Code
* Scalability
* Maintainability
* Separation of Concerns
* Easy Testing

---

# 📂 Backend Project Structure

```text
backend
│
├── ai
│   ├── GeminiClient.java
│   ├── GeminiConfig.java
│   └── PromptBuilder.java
│
├── common
│   └── Constants.java
│
├── config
│   ├── CorsConfig.java
│   └── OpenApiConfig.java
│
├── controller
│   ├── AuthController.java
│   ├── TaskController.java
│   └── AiController.java
│
├── dto
│   ├── request
│   └── response
│
├── entity
│   ├── User.java
│   ├── Task.java
│   ├── Priority.java
│   └── TaskStatus.java
│
├── exception
│   ├── GlobalExceptionHandler.java
│   ├── ResourceNotFoundException.java
│   ├── InvalidCredentialsException.java
│   └── UserAlreadyExistsException.java
│
├── repository
│   ├── UserRepository.java
│   └── TaskRepository.java
│
├── security
│   ├── JwtFilter.java
│   ├── JwtUtil.java
│   ├── SecurityConfig.java
│   ├── JwtAuthenticationEntryPoint.java
│   └── CustomUserDetailsService.java
│
├── service
│   ├── AuthService.java
│   ├── TaskService.java
│   └── AiService.java
│
└── service.impl
    ├── AuthServiceImpl.java
    ├── TaskServiceImpl.java
    └── AiServiceImpl.java
```

---

# 🔍 Backend Folder Explanation

## ai

Handles AI integration.

Responsibilities:

* Gemini API communication
* Prompt generation
* AI response processing

---

## common

Stores reusable constants used throughout the application.

---

## config

Contains application configuration classes.

Responsibilities:

* CORS Configuration
* Swagger Configuration

---

## controller

Handles incoming HTTP requests and API endpoints.

Controllers:

* AuthController
* TaskController
* AiController

---

## dto

Data Transfer Objects.

### Request DTOs

* LoginRequest
* RegisterRequest
* TaskRequest
* AiRequest

### Response DTOs

* AuthResponse
* TaskResponse
* ApiResponse
* UserResponse
* AiResponse

---

## entity

Database entities.

Entities:

* User
* Task
* Priority
* TaskStatus

---

## exception

Handles application-wide exceptions.

Includes:

* ResourceNotFoundException
* InvalidCredentialsException
* UserAlreadyExistsException
* GlobalExceptionHandler

---

## repository

Database interaction layer.

Repositories:

* UserRepository
* TaskRepository

---

## security

Implements authentication and authorization.

Components:

* JWT Token Generation
* JWT Validation
* Route Protection
* User Authentication

---

## service

Contains business logic interfaces.

---

## service.impl

Contains actual business logic implementation.

---

# 🎨 Frontend Architecture

The frontend follows **Component-Based Architecture**.

```text
Pages
   |
Components
   |
Services
   |
Backend APIs
```

Benefits:

* Reusability
* Scalability
* Easy Maintenance
* Better Code Organization

---

# 📂 Frontend Project Structure

```text
task-manager-frontend
│
├── assets
│   ├── images
│   └── styles
│
├── components
│   ├── ai
│   ├── common
│   ├── layout
│   └── task
│
├── context
│
├── hooks
│
├── pages
│
├── routes
│
├── services
│
├── utils
│
├── App.jsx
├── main.jsx
└── .env
```

---

# 🔍 Frontend Folder Explanation

## assets

Stores static files.

* Images
* Styles

---

## components

Reusable UI components.

### ai

```text
AiSuggestionCard.jsx
```

Displays AI-generated suggestions.

---

### common

```text
Loader.jsx
ErrorBoundary.jsx
EmptyState.jsx
ProtectedRoute.jsx
```

Shared reusable components.

---

### layout

```text
Navbar.jsx
Sidebar.jsx
Footer.jsx
```

Application layout components.

---

### task

```text
TaskCard.jsx
TaskForm.jsx
TaskList.jsx
StatusBadge.jsx
```

Task-specific components.

---

## context

```text
AuthContext.jsx
```

Manages authentication state globally.

---

## hooks

```text
useAuth.js
```

Custom authentication hook.

---

## pages

```text
Login.jsx
Register.jsx
Dashboard.jsx
CreateTask.jsx
EditTask.jsx
TaskDetails.jsx
Profile.jsx
AiTaskGenerator.jsx
NotFound.jsx
```

Application screens.

---

## routes

```text
AppRoutes.jsx
```

Application routing configuration.

---

## services

```text
api.js
authService.js
taskService.js
aiService.js
```

Handles API communication.

---

## utils

```text
constants.js
helpers.js
tokenUtils.js
```

Helper and utility functions.

---

# 🗄️ Database Design

## User Table

| Column     |
| ---------- |
| id         |
| name       |
| email      |
| password   |
| created_at |

---

## Task Table

| Column      |
| ----------- |
| id          |
| title       |
| description |
| priority    |
| due_date    |
| status      |
| created_at  |
| updated_at  |
| user_id     |

---

## Entity Relationship

```text
User (1)
   |
   |
   |
Task (Many)
```

One user can own multiple tasks.

---

# 🌐 REST API Endpoints

## Authentication APIs

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

---

## Task APIs

| Method | Endpoint        |
| ------ | --------------- |
| GET    | /api/tasks      |
| GET    | /api/tasks/{id} |
| POST   | /api/tasks      |
| PUT    | /api/tasks/{id} |
| DELETE | /api/tasks/{id} |

---

## AI APIs

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | /api/ai/generate |

---

# 📖 Swagger Documentation

Access Swagger UI:

```text
http://localhost:8080/swagger-ui.html
```

API Docs:

```text
http://localhost:8080/api-docs
```

# ⚡ Installation & Setup

## Clone Repository

```bash
git clone (https://github.com/saisudheer-18/AI-Powered-Task-Management-Portal)
```

---

## Backend Setup

```bash
cd backend
```

Create MySQL Database:

```sql
CREATE DATABASE task_manager;
```

Configure Environment Variables:

```env
DB_PASSWORD=your_password
JWT_SECRET=your_secret
GEMINI_API_KEY=your_api_key
```

Run Application:

```bash
mvn clean install
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

## Frontend Setup

```bash
cd task-manager-frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 🚧 Challenges Faced

* Implementing JWT Authentication
* Configuring Spring Security
* Protecting Frontend Routes
* Integrating Gemini AI
* Managing Authentication State
* Handling API Errors Gracefully
* Connecting Frontend and Backend

---

# 🔮 Future Enhancements

* Role-Based Access Control
* Search Functionality
* Task Filtering
* Pagination
* Docker Deployment
* Unit Testing
* Integration Testing
* Blockchain Audit Logging
* Email Notifications
* Cloud Deployment

---

# 👨‍💻 Author

Developed as part of the **Java Full Stack Developer Internship Assignment**.

---

# ✅ Conclusion

The AI-Powered Task Management Portal successfully demonstrates modern Full Stack Development practices using Spring Boot and React.

The application combines secure authentication, task management, AI-powered automation, database integration, and responsive frontend design into a scalable and maintainable solution.

This project highlights practical experience in:

* Java Development
* Spring Boot
* Spring Security
* JWT Authentication
* REST API Development
* React Development
* Database Design
* AI Integration
* Software Architecture
* Full Stack Engineering

and provides a strong foundation for future enterprise-level enhancements.
