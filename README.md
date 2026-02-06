# 🧑‍💼 HRMS Lite – Full Stack Application

HRMS Lite is a lightweight **Human Resource Management System** built as a full-stack web application.  
It allows an admin to **manage employees** and **track daily attendance** through a clean, professional, and production-ready interface.

---

## 🔗 Live Links

- **Backend API**: https://hrms-lite-1-8p67.onrender.com  
- **Swagger Documentation**: https://hrms-lite-1-8p67.onrender.com/docs  
- **Frontend**: Runs locally / deployed separately

---

## 📌 Project Overview

This project simulates a **basic internal HR tool** focusing only on essential HR operations.

### Key Features

- **Employee Management**
  - Add new employees
  - View employee list
  - Delete employees
- **Attendance Management**
  - Mark attendance (Present / Absent)
  - View attendance history per employee
- **Professional UI**
  - Loading states
  - Empty states
  - Error handling
- **RESTful API**
- **Fully deployed backend**

> **Assumptions**
> - Single admin user (no authentication required)
> - Payroll, leave management, and advanced HR features are out of scope

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- JavaScript (ES6+)

### Backend
- FastAPI
- SQLAlchemy ORM
- SQLite
- Uvicorn

### Deployment
- Frontend: Vercel / Netlify
- Backend: Render

---

## 📂 Project Structure

```
hrms-lite/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── crud.py
│   │   └── routers/
│   │       ├── employee.py
│   │       └── attendance.py
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.css
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

---

## ⚙️ Backend Setup (FastAPI)

### Prerequisites
- Python 3.9+
- pip

### Create Virtual Environment
```bash
cd backend
python -m venv venv
source venv/bin/activate   # macOS / Linux
venv\Scripts\activate      # Windows
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Run Backend Server
```bash
uvicorn app.main:app --reload
```

**Backend URL**: http://127.0.0.1:8000

**Swagger UI**: http://127.0.0.1:8000/docs

### CORS Configuration

CORS is enabled in `main.py` to allow frontend access:

```python
allow_origins = [
  "http://localhost:5173",
  "https://your-frontend-url.vercel.app"
]
```

---

## 🎨 Frontend Setup (React + Tailwind)

### Prerequisites
- Node.js 18+
- npm

### Install Dependencies
```bash
cd frontend
npm install
```

### Run Frontend
```bash
npm run dev
```

**Frontend URL**: http://localhost:5173

### API Configuration

API calls are made directly inside components using Axios:

```javascript
const BASE_URL = "https://hrms-lite-1-8p67.onrender.com";
```

---

## 🔌 API Endpoints

### Employee
- `GET /employees` – List employees
- `POST /employees` – Add employee
- `DELETE /employees/{id}` – Delete employee

### Attendance
- `POST /attendance` – Mark attendance
- `GET /attendance/{employee_id}` – Get attendance records

---

## 🧪 Sample Dummy Data

### Employee
```json
{
  "employee_id": "EMP001",
  "full_name": "Amit Sharma",
  "email": "amit.sharma@example.com",
  "department": "Engineering"
}
```

### Attendance
```json
{
  "employee_id": 1,
  "date": "2026-02-01",
  "status": "Present"
}
```

---

## 🚀 Deployment Notes

### Backend (Render)

**Build Command**
```bash
pip install -r requirements.txt
```

**Start Command**
```bash
uvicorn app.main:app --host 0.0.0.0 --port 10000
```

### Frontend (Vercel / Netlify)

**Build Command**
```bash
npm run build
```

**Output Directory**
```
dist
```