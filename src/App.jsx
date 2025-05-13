"use client"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useState, useEffect } from "react"

// Components
import LandingPage from "./components/LandingPage"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Signup from "./components/Signup"
import StudentDetails from "./components/StudentDetails"
import AddStudent from "./components/AddStudent"

// Firebase configuration - replace with your own config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>
    if (!user) return <Navigate to="/login" />
    return children
  }

  return (
    <Router>
      <Routes>
        {/* Landing page as the default route - pass user state */}
        <Route path="/" element={<LandingPage user={user} />} />

        {/* Dashboard route */}
        <Route path="/dashboard" element={user ? <Dashboard user={user} auth={auth} /> : <Navigate to="/login" />} />

        {/* Authentication routes */}
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login auth={auth} />} />
        <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup auth={auth} />} />

        {/* Protected routes */}
        <Route
          path="/student/:id"
          element={
            <ProtectedRoute>
              <StudentDetails auth={auth} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-student"
          element={
            <ProtectedRoute>
              <AddStudent auth={auth} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
