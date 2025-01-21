import React from 'react'
import Login from './pages/Login'
import Navbar from './components/ui/Navbar'
import Hero from './pages/learner/Hero'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  // Correct import for routing
import MainLayout from './layout/MainLayout'
import Courses from './pages/learner/Courses'
import TrustedBy from './pages/learner/TrustedBy'
import MyLearning from './pages/learner/MyLearning'
import Profile from './pages/learner/Profile'
import Sidebar from './pages/admin/Sidebar'
import Dashboard from './pages/admin/Dashboard'
import CourseTable from './pages/admin/course/CourseTable'
import AddCourse from './pages/admin/course/AddCourse'

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
