
# 🎓 BabyCode — Student Management System

A modern, responsive student management dashboard to streamline data management for educational institutions. Built with **React 18**, **Vite**, **Firebase**, and **TailwindCSS**.

Developed by **Yash**, a passionate MERN stack developer, focused on building practical full-stack applications like **QuizJec** and management dashboards.

---

## ✨ Features

- 🔐 **Firebase Authentication** — Secure user login and registration
- 👥 **Student CRUD Management** — Add, view, update, and filter student records
- 🔍 **Advanced Filtering & Search** — Filter by course, batch & search by name/email
- 🛡️ **Protected Routes** — Private dashboard accessible after login
- 🔄 **Real-time Sync** — Instant data updates with Firebase Realtime DB
- 📱 **Responsive & Accessible UI** — Works seamlessly across devices
- 🎨 **Modern Design** — Built with TailwindCSS + Shadcn UI components

---

## 🛠 Tech Stack

| Frontend      | Backend / DB | Styling          | Others             |
|---------------|--------------|------------------|--------------------|
| React 18 + Vite | Firebase Auth & Realtime DB | TailwindCSS | React Router DOM |
| React Hooks & Context API | LocalStorage (Fallback) | Lucide React Icons | Shadcn UI Components |

---

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI Components
│   ├── AddStudent.jsx
│   ├── StudentList.jsx
│   ├── StudentDetails.jsx
│   ├── FilterBar.jsx
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── LandingPage.jsx
├── routes/           # Route-based components (Protected routes)
├── services/         # Firebase config & API services
├── context/          # Global state management (Context API)
├── hooks/            # Custom React Hooks
├── utils/            # Helper functions (filtering, validation)
├── App.jsx           # Main Application Component
├── index.jsx         # Entry Point
└── index.css         # Global styles (Tailwind)
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yashtiwari912/babycode.git
cd babycode
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Firebase
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Enable **Authentication** (Email/Password)
- Enable **Realtime Database** or Firestore
- Create a `.env` file in root:
  ```env
  VITE_FIREBASE_API_KEY=your-api-key
  VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
  VITE_FIREBASE_PROJECT_ID=your-project-id
  VITE_FIREBASE_DATABASE_URL=your-db-url
  VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
  VITE_FIREBASE_APP_ID=your-app-id
  ```

### 4. Start the development server
```bash
npm run dev
```

---

## 🧩 Shadcn UI Components (Custom UI Library)
The UI components are built using **Shadcn UI** (Radix Primitives based), ensuring accessibility and customization:
- Button.jsx
- Dialog.jsx
- Toast.jsx
- Input.jsx
- Select.jsx
- Badge.jsx

All reusable UI components are located in `src/components/ui/`.

---

## 📈 Future Enhancements
- Role-based Admin features
- Student profile images (Firebase Storage integration)
- Pagination & sorting for large datasets
- Export student data as CSV/Excel
- Analytics Dashboard for metrics & stats
- Toast Notifications for actions
- Dark Mode toggle

---

## 🤝 Contributing
Contributions are welcome!  
1. Fork the repository  
2. Create a new branch (`feat/feature-name`)  
3. Commit your changes  
4. Submit a Pull Request

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact
Developed by [Yash Tiwari](https://github.com/yashtiwari912)  
📫 Connect on [LinkedIn](https://www.linkedin.com/in/yash-tiwari-237312287/)

---
