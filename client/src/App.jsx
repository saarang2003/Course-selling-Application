import React from "react";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Hero from "./pages/student/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Correct import for routing
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/student/Courses";
import TrustedBy from "./pages/student/TrustedBy";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import CourseTable from "./pages/admin/course/CourseTable";
import AddCourse from "./pages/admin/course/AddCourse";
import EditCourse from "./pages/admin/course/EditCourse";
import CreateLecture from "./pages/admin/lecture/createLecture";
import EditLecture from "./pages/admin/lecture/editLecture";
import CourseDetail from "./pages/student/CourseDetail";
import CourseProgress from "./pages/student/CourseProgress";
import SearchPage from "./pages/student/SearchPage";
import { AuthenticatedUser } from "./components/ProtectedRoute";
import PurchaseCourseProtectedRoute from "./components/PurchaseCourseProtectedRoute";

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
        ),
      },
      {
        path: "/login",
        element: (
          <AuthenticatedUser>
            <Login />,
          </AuthenticatedUser>
        ),
      },
      {
        path: "my-learning",
        element: (
          <AuthenticatedUser>
            <MyLearning />,
          </AuthenticatedUser>
        ),
      },
      {
        path: "profile",
        element: (
          <AuthenticatedUser>
            <Profile />,
          </AuthenticatedUser>
        ),
      },
      {
        path: "course/search",
        element: (
          <AuthenticatedUser>
            <SearchPage />,
          </AuthenticatedUser>
        ),
      },
      {
        path: "course-detail/:courseId",
        element: (
          <AuthenticatedUser>
            <CourseDetail />,
          </AuthenticatedUser>
        ),
      },
      {
        path: "course-progress/:courseId",
        element: (
          <AuthenticatedUser>
            <PurchaseCourseProtectedRoute>
            <CourseProgress />,
            </PurchaseCourseProtectedRoute>
          </AuthenticatedUser>
        ),
      },
      {
        path: "admin",
        element: (
          <AuthenticatedUser>
            <Sidebar />,
          </AuthenticatedUser>
        ),
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "courses",
            element: <CourseTable />,
          },
          {
            path: "courses/create", // Updated path
            element: <AddCourse />,
          },
          {
            path: "courses/:courseId", // Updated path
            element: <EditCourse />,
          },
          {
            path: "courses/:courseId/lecture", // Updated path
            element: <CreateLecture />,
          },
          {
            path: "courses/:courseId/lecture/:lectureId", // Updated path
            element: <EditLecture />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />{" "}
      {/* Use RouterProvider to initialize routing */}
    </main>
  );
}

export default App;
