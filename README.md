# User Authentication and Authorization API

A Node.js RESTful API for user authentication and authorization using **JWT bearer tokens**, built with **Express.js**, **Mongoose**, and **MongoDB**. This project follows the **MVC pattern** and includes user registration, login, and protected user information retrieval.

## 🚀 Features

* User Registration
* User Login with JWT Generation
* Password Hashing with bcrypt
* JWT Token-based Authentication (Bearer)
* Protected Route for Fetching Logged-in User Info
* MVC Structure (Model, Controller, Routes)
* MongoDB Integration with Mongoose
* Error Handling and Validation
* Postman Documentation with Sample Requests & Responses

---
## Deployed URL

https://userinfowithauth.onrender.com/api/v1/auth
---
## 💠 Tech Stack

* Node.js
* Express.js
* MongoDB with Mongoose
* JWT (jsonwebtoken)
* bcrypt
* dotenv
* Postman for testing

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up `.env` file**

Create a `.env` file in the root directory with the following:

```
PORT=3001
MONGODB_URI=mongodb+srv://saairam185:SkE45LPNLt1Rqsa2@cluster0.lqevbvq.mongodb.net/AuthTask
JWT_SECRET="apple"
```

---

## ▶️ Running the Application

```bash
npm run dev
```

---

## 🔐 API Endpoints

### 1. Register User

**POST** `/api/auth/register`

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "message": "user registered successfully"
}
```

---

### 2. Login User

**POST** `/api/auth/login`

**Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "message": "user logged in successfully",
  "token": "your-jwt-token"
}
```

---

### 3. Get Logged-In User Info

**GET** `/api/auth/me`

**Headers:**

```
Authorization: Bearer your-jwt-token
```

**Response:**

```json
{
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

## 🧪 Testing with Postman

* Import `POST`, `GET` requests in Postman.
* Use the `Authorization` tab → select **Bearer Token**.
* Paste the JWT token received from the login response.

---

## 📌 Notes

* Passwords are securely hashed using `bcrypt`.
* JWT is used for stateless session handling.
* `.env` file is used for sensitive config (never push to GitHub).
* Uses proper error handling and validation for cleaner API responses.

---
📬 Postman API Documentation

You can test all the API endpoints using the Postman documentation below:

🔗 https://documenter.getpostman.com/view/43648661/2sB3B7PDzA
