# HMCTS Task Tracker

## Overview

HMCTS Task Tracker is a simple web application for caseworkers to manage tasks efficiently. Users can create tasks with a title, optional description, status, and due date/time, receive a confirmation message, and view all tasks in a responsive table.  

This project demonstrates full-stack development skills, including React frontend development, API integration with Supabase (PostgreSQL), form validation, error handling, and unit testing.

---

## Features

- **Create Tasks:** Add new tasks with title, optional description, status, and due date/time.  
- **Feedback Messages:** Users receive confirmation after successfully creating a task.  
- **Task Table:** View all tasks in a clean, responsive table.  
- **Validation & Error Handling:** Required fields enforced; API errors are handled gracefully.  
- **Unit Testing:** Frontend tests included using Jest and React Testing Library.  
- **UI/UX:** Modern design with gradient background and glassmorphism effects for forms and tables.

---

## Technology Stack

- **Frontend:** React, Next.js, `react-datetime-picker`  
- **Backend / Database:** Supabase (PostgreSQL)  
- **Testing:** Jest, React Testing Library  
- **Styling:** CSS with gradient background and glassmorphism effects  

---

## API Endpoints

| Endpoint  | Method | Description         | Request Body                                   |
|-----------|--------|-------------------|-----------------------------------------------|
| `/tasks`  | POST   | Create a new task  | `{ title, description, status, duedate_time }` |
| `/tasks`  | GET    | Retrieve all tasks | None                                          |

**Example Response (POST `/tasks`):**

```json
{
  "id": 1,
  "title": "Sample Task",
  "description": "This is a test",
  "status": "Pending",
  "duedate_time": "2025-12-07T10:00:00Z"
}

```
---

## Running Tests

To run frontend tests with Jest and React Testing Library:

npm run test

---

## Getting Started

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd <repo-folder>

---

2. **Install dependencies:**

npm install

---

3. **Set up environment variables:**

Create a .env.local file with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_KEY=<your-supabase-key>

---

4. **Run the development server:**

npm run dev


