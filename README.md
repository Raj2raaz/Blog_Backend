# 📝 Blogi - Fullstack Blogging Platform  

**Blogi** is a fullstack blogging platform where users can register, log in, and manage their blog posts. It includes authentication, CRUD operations, image uploads, pagination, and search functionality.

---

## ✨ Live Demo  

- **Frontend:** [Blogi App](https://blogi-subham.netlify.app/)  
- **Backend API:** [Blogi Backend (Render)](https://blog-backend-4dgq.onrender.com) *(Note: Render takes ~50 seconds to spin up after inactivity.)*  

---

## 💡 Features  

- ✅ **User Authentication (JWT)** - Register, login & logout.  
- ✅ **Create, Edit & Delete Blogs** - Users can manage their own blogs.  
- ✅ **Search & Filter** - Find blogs by title or content.  
- ✅ **Pagination** - Displays 10 blogs per page.  
- ✅ **Image Uploads** - Attach images to blog posts.  
- ✅ **Protected Routes** - Only authenticated users can modify their blogs.  

---

## 📂 Tech Stack  

### **Frontend:**  
- React (Vite)  
- Tailwind CSS  
- Axios for API Calls  
- React Router  

### **Backend:**  
- Node.js + Express  
- MongoDB + Mongoose  
- JWT Authentication  
- Multer (for image uploads)  
- CORS & Dotenv  

---

## 💪 Setup & Installation  

### 1️⃣ Clone the Repository  
```sh  
git clone https://github.com/Raj2raaz/Blog_Backend.git  
cd Blog_Backend  
```

### 2️⃣ Install Dependencies  
```sh  
npm install  
```

### 3️⃣ Create a `.env` File  
Before running the server, create a `.env` file in the root directory and add the following environment variables:

```
PORT=4000  # Change if needed  
MONGODB_URI=your_mongodb_connection_string  # Replace with your MongoDB URI  
JWT_SECRET=your_jwt_secret_key  # Replace with a secure secret key  
FRONTEND_URL=https://yourfrontend.com  # Deployed frontend URL  
BACKEND_URL=https://yourbackend.com  # Deployed backend URL  
```

> **🔹 Note:** If running locally, set `FRONTEND_URL=http://localhost:5173` and `BACKEND_URL=http://localhost:4000`.  

---

### 4️⃣ Run the Server  
Start the backend server with:  
```sh  
npm start  
```

or (for development mode with live reload):  
```sh  
npm run dev  
```

---

## 🏢 API Endpoints  

### **Auth Routes**  
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/users/register` | Register a new user |
| `POST` | `/api/users/login` | Login and get JWT token |
| `POST` | `/api/users/logout` | Logout (Frontend only) |

### **Blog Routes**  
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/api/blogs` | Get all blogs (paginated) |
| `GET` | `/api/blogs/:id` | Get a single blog |
| `POST` | `/api/blogs` | Create a new blog (Auth required) |
| `PUT` | `/api/blogs/:id` | Update a blog (Auth required) |
| `DELETE` | `/api/blogs/:id` | Delete a blog (Auth required) |

---


### 🚀 Now Your README is Complete!  
- ✅ Clear setup instructions  
- ✅ .env file details  
- ✅ API endpoints  
 

You’re ready to go! 🚀🔥 Let me know if you need any tweaks. 😊
