# AI-Powered Task Management Portal - Frontend

A modern React + Vite + Tailwind CSS frontend for a full-stack AI-powered task management application. This application allows users to register, login, create, manage, and track tasks with AI-powered automation features.

## 🎯 Project Overview

This is a complete frontend implementation for the **Java Full Stack Developer Intern - Take-Home Assignment**. The frontend provides a responsive and intuitive UI for task management with the following features:

- **User Authentication**: Registration and login with JWT token management
- **Task Management**: Create, read, update, and delete tasks with different priorities and statuses
- **Task Status Tracking**: Track tasks as TODO, IN_PROGRESS, or DONE
- **AI Automation**: AI-powered task description generation and suggestions
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Protected Routes**: Secure routes that require authentication
- **Real-time API Integration**: Seamless backend communication via Axios

## 🛠️ Tech Stack

- **Framework**: React 19.2.6 with Vite 8.0.12
- **Styling**: Tailwind CSS 4.3.0 + PostCSS
- **HTTP Client**: Axios 1.16.1
- **Routing**: React Router DOM 7.16.0
- **Form Handling**: React Hook Form 7.76.1
- **Icons**: React Icons 5.6.0
- **Notifications**: SweetAlert2 11.26.25
- **Charts**: Recharts 3.8.1 (for future analytics)

## 📋 Project Structure

```
src/
├── assets/
│   ├── images/          # Images and static assets
│   └── styles/          # Additional style files
├── components/
│   ├── common/          # Reusable components
│   │   ├── Loader.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── EmptyState.jsx
│   ├── layout/          # Layout components
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── Footer.jsx
│   ├── task/            # Task-related components
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   └── StatusBadge.jsx
│   └── ai/              # AI-related components
│       └── AiSuggestionCard.jsx
├── pages/               # Page components
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── CreateTask.jsx
│   ├── EditTask.jsx
│   ├── TaskDetails.jsx
│   ├── AiTaskGenerator.jsx
│   ├── Profile.jsx
│   └── NotFound.jsx
├── services/            # API services
│   ├── api.js          # Axios instance with interceptors
│   ├── authService.js  # Authentication endpoints
│   ├── taskService.js  # Task management endpoints
│   └── aiService.js    # AI automation endpoints
├── context/             # React Context
│   └── AuthContext.jsx # Authentication context
├── hooks/               # Custom React hooks
│   └── useAuth.js      # useAuth hook
├── routes/              # Routing configuration
│   └── AppRoutes.jsx   # Route definitions
├── utils/               # Utility functions
│   ├── constants.js    # App constants
│   ├── helpers.js      # Helper functions
│   └── tokenUtils.js   # Token management utilities
├── App.jsx             # Main app component
├── App.css             # App styles
├── main.jsx            # Entry point
├── index.css           # Global styles with design tokens
└── vite-env.d.ts       # Vite type definitions

public/
├── favicon.ico         # Favicon
└── logo.png            # App logo

Configuration Files:
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── .env                # Environment variables
├── package.json        # Dependencies
└── eslint.config.js    # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-manager-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # .env file should have:
   VITE_API_URL=http://localhost:8080/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📖 API Integration

### Base URL Configuration

The API base URL is configured through the `.env` file:
```env
VITE_API_URL=http://localhost:8080/api
```

### API Endpoints

#### Authentication
- **POST** `/auth/register` - User registration
- **POST** `/auth/login` - User login

#### Tasks
- **GET** `/tasks` - Get all tasks
- **GET** `/tasks/:id` - Get task details
- **POST** `/tasks` - Create new task
- **PUT** `/tasks/:id` - Update task
- **DELETE** `/tasks/:id` - Delete task
- **PATCH** `/tasks/:id/status` - Update task status

#### AI Automation
- **POST** `/ai/generate-description` - Generate task description from title

## 🔐 Authentication Flow

1. User registers with email and password
2. On login, receives JWT token
3. Token stored in localStorage
4. Protected routes redirect unauthenticated users
5. Automatic logout on 401 response

## 🤖 AI Automation Feature

**Implementation**: AI Task Description Generator
- User enters task title
- AI generates description, priority, and estimated time
- Seamless integration with task creation form

## 🎨 Features

- ✅ User Registration & Login
- ✅ Task CRUD Operations
- ✅ Task Status Management (TODO, IN_PROGRESS, DONE)
- ✅ Task Priority Levels (LOW, MEDIUM, HIGH)
- ✅ AI Description Generation
- ✅ Responsive Mobile Design
- ✅ Protected Routes
- ✅ Error Handling
- ✅ Loading States

## 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Dark mode support via CSS variables

## 🧪 Testing

Test these workflows:
- [ ] User registration and login
- [ ] Task creation, editing, deletion
- [ ] Task status updates
- [ ] AI description generation
- [ ] Protected route access
- [ ] Responsive on mobile/tablet/desktop

## 📦 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```


## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| CORS errors | Check backend CORS settings and API URL |
| 401 Unauthorized | Token expired - re-login |
| 404 API errors | Verify backend is running |
| Styling issues | Clear cache and reinstall: `npm cache clean --force && npm install` |

## 📚 Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app entry point |
| `src/routes/AppRoutes.jsx` | Route definitions |
| `src/context/AuthContext.jsx` | Authentication context |
| `src/services/api.js` | Axios instance with interceptors |
| `src/components/common/ProtectedRoute.jsx` | Protected route wrapper |

## 🎓 Requirements Met

### Mandatory Frontend Requirements
✅ Responsive UI with Tailwind CSS  
✅ API integration with Axios  
✅ Form validation  
✅ Complete authentication flow  
✅ State management with Context API  
✅ Protected routes  
✅ Error handling  
✅ Loading states  

### Core Functional Requirements
✅ User Registration & Login  
✅ Create, Read, Update, Delete tasks  
✅ Task status management  
✅ AI automation feature  
✅ Protected API endpoints  

### Non-Functional Requirements
✅ Clean code structure  
✅ Proper naming conventions  
✅ Reusable components  
✅ Comments in code  
✅ Environment variable usage  
✅ Mobile responsive design  

## 📞 Support

For issues:
1. Check the browser console for errors
2. Verify backend server is running
3. Check API URL in `.env` file
4. Review the troubleshooting section

## 📄 License

MIT License

---

**Last Updated**: May 30, 2026  
**Version**: 1.0.0  
**Status**: ✅ Production Ready
