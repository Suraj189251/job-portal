# Job Portal Application

A full-stack Job Portal web application built using **Spring Boot** for the backend and **React + TypeScript** for the frontend. This platform allows job seekers to search and apply for jobs, while recruiters can post jobs and manage applications.

---

# Features

## Job Seeker Features

* User registration and login
* Browse and search jobs
* Apply for jobs
* Upload profile details
* Track application history
* View company information

## Recruiter Features

* Recruiter authentication
* Post new job openings
* Manage job listings
* View candidate applications
* Company profile management

## Additional Features

* JWT-based authentication
* REST API integration
* Responsive UI
* Rich text job description editor
* Redux state management
* Secure backend APIs

---

# Tech Stack

## Frontend

* React.js
* TypeScript
* Redux Toolkit
* Mantine UI
* Axios
* React Router DOM
* Tailwind CSS

## Backend

* Java
* Spring Boot
* Spring Security
* JWT Authentication
* Maven
* REST APIs

## Database

* MongoDB

---

# Project Structure

```bash
job-portal/
│
├── frontend/        # React Frontend
│
├── backend/         # Spring Boot Backend
│
└── README.md
```

---

# Frontend Setup

## Navigate to frontend folder

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start frontend server

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# Backend Setup

## Navigate to backend folder

```bash
cd backend
```

## Configure Database

Update the `application.properties` file:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/jobportal
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Run Backend

Using Maven:

```bash
mvn spring-boot:run
```

Or:

```bash
./mvnw spring-boot:run
```

Backend runs on:

```bash
http://localhost:8080
```

---

# API Features

* User Authentication APIs
* Job Management APIs
* Application APIs
* Company Profile APIs
* Protected APIs using JWT

---

# Screenshots

Add your project screenshots here.

Example:

```md
![Home Page](./screenshots/home.png)
```

---

# Future Improvements

* Resume upload support
* Email notifications
* Admin dashboard
* Interview scheduling
* Real-time chat system
* AI-based job recommendations

---

# Deployment

Frontend can be deployed on:

* Vercel
* Netlify

Backend can be deployed on:

* Render
* Railway
* AWS

---

# Author

**Suraj Kumar**

* Java Developer
* Full Stack Developer


