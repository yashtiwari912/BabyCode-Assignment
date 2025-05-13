"use client"
import { Link } from "react-router-dom"
import { Search, PlusCircle } from "lucide-react"

// Available courses for filtering
const courses = ["All", "Computer Science", "Mathematics", "Physics", "Biology", "Chemistry"]

function FilterBar({ selectedCourse, setSelectedCourse, searchQuery, setSearchQuery, user }) {
  return (
    <div className="w-full md:w-64 bg-white shadow rounded-lg p-4">
      <h2 className="font-medium text-lg mb-4">Filters</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search students..."
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="pt-2">
        {user ? (
          <Link
            to="/add-student"
            className="w-full flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            <PlusCircle className="h-4 w-4" />
            Add Student
          </Link>
        ) : (
          <Link
            to="/login"
            className="w-full flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Login to Add Student
          </Link>
        )}
      </div>
    </div>
  )
}

export default FilterBar
