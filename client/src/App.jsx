import React from 'react'
import Login from './pages/Login'
import Navbar from './components/ui/Navbar'
import Hero from './pages/learner/Hero'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  // Correct import for routing
import MainLayout from './layout/MainLayout'
import Courses from './pages/learner/Courses'
import TrustedBy from './pages/learner/TrustedBy'

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
          <Courses /> ,
          <TrustedBy />
          </>
        ) 
      },
      {
        path: "/login",
        element: <Login />,
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
