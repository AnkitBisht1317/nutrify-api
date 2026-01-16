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


## 📁 Project Structure

nutrify-api/
│
├── config/
│ └── db.js
│
├── controllers/
│ ├── authController.js
│ ├── foodController.js
│ └── trackingController.js
│
├── middleware/
│ └── verifyToken.js
│
├── models/
│ ├── userModel.js
│ ├── foodModel.js
│ └── trackingModel.js
│
├── routes/
│ ├── authRoutes.js
│ ├── foodRoutes.js
│ └── trackingRoutes.js
│
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── package-lock.json



---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=8000
MONGO_URL=mongodb://localhost:27017/nutrify
JWT_SECRET=nutrify
```


# Clone the repository
git clone https://github.com/your-username/nutrify-api.git

# Navigate to the project directory
cd nutrify-api

# Install dependencies
npm install

# Start the server
npm start
http://localhost:8000
Authorization: Bearer <your_jwt_token>


## 📁 Project Structure

