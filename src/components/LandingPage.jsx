import { Link } from "react-router-dom"
import { Users, Code, BookOpen, Star, ChevronRight, CheckCircle, Heart } from "lucide-react"

function LandingPage({ user }) {
    // Mock data for enrolled students count
    const enrolledStudents = 128
    const courses = ["All", "Computer Science", "Mathematics", "Physics", "Biology", "Chemistry"]
    const selectedCourse = "All"

    // Tech stack items
    const techStack = [
        { name: "React", description: "Frontend UI library" },
        { name: "Firebase", description: "Authentication & database" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { name: "React Router", description: "Navigation & routing" },
    ]

    // Testimonials
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "School Administrator",
            content:
                "BabyCode has transformed how we manage student data. The interface is intuitive and the filtering options save us hours of work every week.",
            rating: 5,
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Computer Science Teacher",
            content:
                "As an educator, I need quick access to student information. This platform provides exactly what I need with minimal fuss.",
            rating: 4,
        },
        {
            id: 3,
            name: "Priya Patel",
            role: "School Director",
            content:
                "We've tried several student management systems, but BabyCode stands out for its simplicity and effectiveness. Highly recommended!",
            rating: 5,
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Header/Navigation */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Code className="h-8 w-8 text-blue-600 mr-2" />
                        <h1 className="text-xl font-bold text-gray-900">BabyCode</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        {user ? (
                            // Show View Students button if user is logged in
                            <Link
                                to="/dashboard"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
                            >
                                View Students
                            </Link>
                        ) : (
                            // Show Login and Get Started buttons if user is not logged in
                            <>
                                <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium">
                                    Log In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Student Data Management <span className="text-blue-600">Simplified</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                        BabyCode provides an intuitive platform for managing student information, courses, and academic performance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {user ? (
                            // Show View Students button if user is logged in
                            <Link
                                to="/dashboard"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg flex items-center justify-center"
                            >
                                View Students <ChevronRight className="ml-2 h-5 w-5" />
                            </Link>
                        ) : (
                            // Show Get Started and Login buttons if user is not logged in
                            <>
                                <Link
                                    to="/signup"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg flex items-center justify-center"
                                >
                                    Get Started <ChevronRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    to="/login"
                                    className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-6 py-3 rounded-md font-medium text-lg"
                                >
                                    Log In
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Current Enrolled Students Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Enrolled Students</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We currently have {enrolledStudents} students enrolled across various courses.
                            {!user && " Log in to view detailed student information."}
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="font-medium text-lg">Students Overview</h3>
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500 mr-2">Filter by course:</span>
                                <select
                                    disabled
                                    className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 cursor-not-allowed"
                                >
                                    {courses.map((course) => (
                                        <option key={course} value={course}>
                                            {course}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="p-6 text-center">
                            <div className="flex justify-center mb-6">
                                <Users className="h-16 w-16 text-blue-500" />
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-2">{enrolledStudents}</h4>
                            <p className="text-gray-600">Total Students Enrolled</p>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                                    <h5 className="font-medium text-gray-900 mb-1">Multiple Courses</h5>
                                    <p className="text-sm text-gray-600">Students across various disciplines</p>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                                    <h5 className="font-medium text-gray-900 mb-1">Performance Tracking</h5>
                                    <p className="text-sm text-gray-600">Monitor grades and progress</p>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <Heart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                                    <h5 className="font-medium text-gray-900 mb-1">Student Support</h5>
                                    <p className="text-sm text-gray-600">Comprehensive student care</p>
                                </div>
                            </div>
                            {!user && (
                                <div className="mt-8">
                                    <Link to="/login" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                                        Log in to view detailed student data <ChevronRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            )}
                            {user && (
                                <div className="mt-8">
                                    <Link
                                        to="/dashboard"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Go to dashboard <ChevronRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Rest of the component remains the same */}
            {/* About Us Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            BabyCode was created to simplify student data management for educational institutions of all sizes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 mb-6">
                                We believe that effective education requires efficient administration. Our mission is to provide
                                educators with tools that simplify data management, allowing them to focus on what truly matters:
                                teaching and supporting students.
                            </p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600">Intuitive student data management</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600">Secure authentication and data protection</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600">Powerful filtering and search capabilities</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600">Responsive design for all devices</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="aspect-video bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <Code className="h-20 w-20 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">BabyCode for Education</h3>
                            <p className="text-gray-600">
                                Founded in 2023, BabyCode has quickly become a trusted solution for schools and educational institutions
                                looking to modernize their student data management systems. Our team of educators and developers work
                                together to create tools that address real-world educational needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Tech Stack</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Built with modern technologies to ensure performance, security, and scalability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techStack.map((tech, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                                <div className="h-12 flex items-center justify-center mb-4">
                                    {index === 0 && <div className="text-4xl font-bold text-blue-600">⚛️</div>}
                                    {index === 1 && <div className="text-4xl font-bold text-orange-500">🔥</div>}
                                    {index === 2 && <div className="text-4xl font-bold text-blue-400">🌊</div>}
                                    {index === 3 && <div className="text-4xl font-bold text-blue-600">🧭</div>}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                                <p className="text-gray-600">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what educators and administrators think about BabyCode.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <Code className="h-6 w-6 text-blue-400 mr-2" />
                                <h3 className="text-xl font-bold">BabyCode</h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Simplifying student data management for educational institutions since 2023.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="text-gray-400 hover:text-white">
                                        Home
                                    </Link>
                                </li>
                                {!user ? (
                                    <>
                                        <li>
                                            <Link to="/login" className="text-gray-400 hover:text-white">
                                                Log In
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/signup" className="text-gray-400 hover:text-white">
                                                Sign Up
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <li>
                                        <Link to="/dashboard" className="text-gray-400 hover:text-white">
                                            Dashboard
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        API Reference
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-4">Contact</h4>
                            <ul className="space-y-2">
                                <li className="text-gray-400">Email: info@babycode.com</li>
                                <li className="text-gray-400">Phone: (123) 456-7890</li>
                                <li className="text-gray-400">Address: 123 Education St, Learning City</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                        <p>&copy; {new Date().getFullYear()} BabyCode. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage
