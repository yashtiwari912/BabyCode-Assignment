"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import StudentList from "./StudentList"
import FilterBar from "./FilterBar"
import { Users, LogOut, PlusCircle } from "lucide-react"

// Mock student data
const mockStudents = [
  { id: 1, name: "John Doe", email: "john@example.com", course: "Computer Science", grade: "A" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", course: "Mathematics", grade: "B+" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", course: "Physics", grade: "A-" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", course: "Computer Science", grade: "B" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", course: "Biology", grade: "A+" },
  { id: 6, name: "Diana Miller", email: "diana@example.com", course: "Chemistry", grade: "B-" },
  { id: 7, name: "Edward Davis", email: "edward@example.com", course: "Mathematics", grade: "C+" },
  { id: 8, name: "Fiona Garcia", email: "fiona@example.com", course: "Computer Science", grade: "A" },
]

function Dashboard({ user, auth }) {
  const [students, setStudents] = useState([])
  const [filteredStudents, setFilteredStudents] = useState([])
  const [selectedCourse, setSelectedCourse] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Fetch students (mock API call)
  useEffect(() => {
    setLoading(true)
    // Simulate API call with setTimeout
    const fetchData = setTimeout(() => {
      console.log("API call completed")
      setStudents(mockStudents)
      setFilteredStudents(mockStudents)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(fetchData)
  }, [])

  // Filter students when course or search query changes
  useEffect(() => {
    let result = students

    // Filter by course
    if (selectedCourse !== "All") {
      result = result.filter((student) => student.course === selectedCourse)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (student) => student.name.toLowerCase().includes(query) || student.email.toLowerCase().includes(query),
      )
    }

    setFilteredStudents(result)
  }, [selectedCourse, students, searchQuery])

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate("/login")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  // Add new student to the list
  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: students.length + 1,
    }
    setStudents([...students, newStudent])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-500 mr-2" />
            <h1 className="text-xl font-bold text-gray-900">Student Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-sm"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-2">
                <Link to="/login" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-sm">
                  Login
                </Link>
                <Link to="/signup" className="px-3 py-1.5 bg-blue-600 text-white hover:bg-blue-700 rounded text-sm">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar with filters */}
          <FilterBar
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            user={user}
          />

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="font-medium text-lg">Students</h2>
                {user && (
                  <Link
                    to="/add-student"
                    className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
                  >
                    <PlusCircle className="h-4 w-4" />
                    Add Student
                  </Link>
                )}
              </div>

              <StudentList students={filteredStudents} loading={loading} user={user} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
