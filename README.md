# User Management System (EJS)

A simple **User Management System** built using **Node.js, Express.js, MongoDB, and EJS**.  
This project demonstrates **CRUD operations (Create, Read, Update, Delete)** with server-side rendering using EJS templates.

---
## 🚀 Features

- Create new users
- View all users
- Update user details
- Delete users
- Server-side rendering with EJS
- MongoDB database integration
- RESTful routing

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Template Engine:** EJS  
- **Environment Variables:** dotenv  

---

## 📂 Project Structure

```
user_management_ejs
│
├── models
│   └── userModel.js
│
├── routes
│   └── userRoutes.js
│
├── views
│   ├── index.ejs
│   ├── create.ejs
│   └── edit.ejs
│
├── controllers
│   └── userController.js
│
├── config
│   └── db.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/user_management_ejs.git
```

### 2️⃣ Navigate into the project directory

```bash
cd user_management_ejs
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Create `.env` file

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 5️⃣ Start the server

```bash
npm start
```

Server will run on:

```
http://localhost:3000
```

---

## 📌 Routes

| Method | Route | Description |
|------|------|-------------|
| GET | /users | Get all users |
| GET | /users/create | Show create user form |
| POST | /users | Create new user |
| GET | /users/edit/:id | Show edit user form |
| PUT | /users/:id | Update user |
| DELETE | /users/:id | Delete user |

---

## 🎯 Learning Goals

This project demonstrates:

- Express.js routing
- MVC folder structure
- MongoDB CRUD operations
- EJS templating
- Handling forms in Node.js

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.
