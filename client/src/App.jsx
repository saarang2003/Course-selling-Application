import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Hero from './pages/student/Hero'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  // Correct import for routing
import MainLayout from './layout/MainLayout'
import Courses from './pages/student/Courses'
import TrustedBy from './pages/student/TrustedBy'
import MyLearning from './pages/student/MyLearning'
import Profile from './pages/student/Profile'
import Sidebar from './pages/admin/Sidebar'
import Dashboard from './pages/admin/Dashboard'
import CourseTable from './pages/admin/course/CourseTable'
import AddCourse from './pages/admin/course/AddCourse'
import EditCourse from './pages/admin/course/EditCourse'
import CreateLecture from './pages/admin/lecture/createLecture'
import EditLecture from './pages/admin/lecture/editLecture'
import CourseDetail from './pages/student/CourseDetail'
import CourseProgress from './pages/student/CourseProgress'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />,
            <Courses />,
            <TrustedBy />
          </>
        )
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "course-detail/:courseId",
        element: <CourseDetail />,
      },
      {
        path: "course-progress/:courseId",
        element: <CourseProgress />,
      },
      {
        path: 'admin',
        element: <Sidebar />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />
          },
          {
            path: "courses",
            element: <CourseTable />,
          },
          {
            path: "courses/create",  // Updated path
            element: <AddCourse />,
          },
          {
            path: "courses/:courseId",  // Updated path
            element: <EditCourse />,
          },
          {
            path: "courses/:courseId/lecture",  // Updated path
            element: <CreateLecture/>
          },
          {
            path: "courses/:courseId/lecture/:lectureId",  // Updated path
            element: <EditLecture/>
          },
        ]
      }
    ]
  }
]);


function App() {
  return (
    <main>
      <RouterProvider router={appRouter} /> {/* Use RouterProvider to initialize routing */}
    </main>
  )
}

export default App
