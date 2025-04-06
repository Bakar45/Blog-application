# My Blog Application

A full-stack blog application built using **React.js** for the frontend and **Node.js + Express** for the backend. This application displays blog posts and allows users to **search posts by title or content**.

---

## 📁 Project Structure

```
my-blog-app/
├── task-frontend/                # React Frontend
│   └── src/
│       ├── components/
│       │   └── Header.js
│       │   └── Card.js
│       └── pages/
│           └── Home.js
│           └── SearchParams.js
├── task-backend/backend/         # Node.js + Express Backend
│   ├── data.json                # Blog post data
│   └── server.js                # Express server
├── README.md                    # This file
```

---

## ⚙️ Features

- 📄 View list of blog posts
- 🔍 Search blog posts by title or content (case-insensitive)
- 🌐 Uses `react-router-dom` for routing
- 🧠 Stores blog data in a JSON file for simplicity
- 🖼️ Includes blog images using URLs
- 🔗 Each blog has a "Read More" link
- 🚀 Lightweight and beginner-friendly full-stack project

---

## 💻 Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS (for styling)
- FontAwesome (for icons)

### Backend
- Node.js
- Express.js
- CORS
- File System (`fs` module for reading JSON data)

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm (or yarn)

### Backend Setup

```bash
cd task-backend/backend
npm install
node server.js
```

- Server will run at `http://localhost:5000`

### Frontend Setup

```bash
cd task-frontend
npm install
npm start
```

- React app runs on `http://localhost:3000`

---

## 🔍 API Endpoints

### GET `/api/blog-posts`
Fetch all blog posts.

### GET `/search-posts?q=your_query`
Returns posts matching `your_query` in their **title** or **content** using case-insensitive matching.

---

## 🔧 Example Search Flow

1. User types a query in the search bar (e.g., "node").
2. Frontend captures the query and sends a request:  
   `GET /search-posts?q=node`
3. Backend matches and filters blog posts using RegExp.
4. Matched posts are returned and displayed.

---

## 📝 Sample Data (JSON)

Example from `data.json`:

```json
{
  "title": "The Benefits of Learning Node.js",
  "content": "Node.js is an open-source, cross-platform JavaScript runtime...",
  "author": "John Doe",
  "date": "2025-04-01T08:30:00Z",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/64/Node.js_logo_2015.svg",
  "readMoreLink": "https://example.com/blog/the-benefits-of-learning-node-js"
}
```

----------------------------------------------------------- 🛠️ Run Locally-----------------------------------------------------------

Here’s the updated section of your README with clear instructions on **where to install dependencies** to run the project locally:

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** and **npm** (or **yarn**) must be installed on your machine.

### 📦 Installing Dependencies

> ⚠️ Make sure you install dependencies in both the **frontend** and **backend** folders.

#### 🔧 Backend Setup

```bash
cd task-backend/backend   # Go to backend folder
npm install               # Install backend dependencies
node server.js            # Start the backend server
```

- Server will run at `http://localhost:5000`

#### 💻 Frontend Setup

```bash
cd task-frontend          # Go to frontend folder
npm install               # Install frontend dependencies
npm start                 # Start the React app
```

- React app runs on `http://localhost:3000`

/
/
/
/



If you are in the project root (`Task`) folder, use the following commands:

### Frontend
```bash
cd task-frontend
npm start
```

### Backend
```bash
cd task-backend/backend
node server.js
```

---

Happy Coding! 🚀

