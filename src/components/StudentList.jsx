import { Link } from "react-router-dom"
import { User, BookOpen } from "lucide-react"

function StudentList({ students, loading, user }) {
  if (loading) {
    return <div className="p-6 text-center text-gray-500">Loading students...</div>
  }

  if (students.length === 0) {
    return <div className="p-6 text-center text-gray-500">No students found</div>
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <BookOpen className="h-3 w-3 mr-1" />
                  {student.course}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.grade}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user ? (
                  <Link
                    to={`/student/${student.id}`}
                    className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                  >
                    <User className="h-4 w-4" />
                    View Details
                  </Link>
                ) : (
                  <span className="text-gray-400 flex items-center gap-1 cursor-not-allowed">
                    <User className="h-4 w-4" />
                    Login to view
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
