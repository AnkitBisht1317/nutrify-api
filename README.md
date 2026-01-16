# 🍎 Nutrify API

Nutrify API is a **RESTful backend application** built with **Node.js, Express.js, and MongoDB**.
It provides secure user authentication and allows users to browse food items, search foods,
and track their daily food consumption.

This project follows a **clean MVC architecture** and is designed to be **scalable, secure,
and production-ready**.

---

## ✨ Features

- User Registration and Login
- Secure Password Hashing using bcrypt
- JWT-based Authentication & Authorization
- Protected API Routes
- Fetch and Search Food Items
- Daily Food Intake Tracking
- MongoDB Database with Mongoose ODM
- Clean & Scalable MVC Folder Structure

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** JSON Web Token (JWT)
- **Security:** bcryptjs
- **Environment Config:** dotenv

---
---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=8000
MONGO_URL=mongodb://localhost:27017/nutrify
JWT_SECRET=nutrify
```
# Install dependencies
npm install

# Start the server
npm start
http://localhost:8000
Authorization: Bearer <your_jwt_token>


## 📁 Project Structure

