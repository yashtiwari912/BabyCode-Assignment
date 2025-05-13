"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, User, BookOpen } from "lucide-react"

function StudentDetails() {
  const { id } = useParams()
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch student details
    setLoading(true)
    const fetchData = setTimeout(() => {
      // Get students from localStorage
      const storedStudents = localStorage.getItem("students")

      if (storedStudents) {
        const students = JSON.parse(storedStudents)
        const foundStudent = students.find((s) => s.id === Number.parseInt(id))
        setStudent(foundStudent || null)
      } else {
        setStudent(null)
      }

      setLoading(false)
      console.log("API call for student details completed")
    }, 1000)

    return () => clearTimeout(fetchData)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading student details...</p>
        </div>
      </div>
    )
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-700">Student not found</p>
          <Link to="/dashboard" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
            Back to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Link to="/dashboard" className="mr-4 text-gray-500 hover:text-gray-700">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Student Details</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="font-medium text-lg">Student Information</h2>
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <User className="h-12 w-12" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-900">{student.name}</h3>
                <p className="text-gray-500">{student.email}</p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Course</h4>
                    <div className="mt-1 flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <BookOpen className="h-3 w-3 mr-1" />
                        {student.course}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Grade</h4>
                    <p className="mt-1 text-sm text-gray-900">{student.grade}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h4 className="text-sm font-medium text-gray-500 mb-4">Additional Information</h4>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  This is a student record. In a real application, additional details such as enrollment date,
                  attendance records, assignment scores, and other academic information would be displayed here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StudentDetails
