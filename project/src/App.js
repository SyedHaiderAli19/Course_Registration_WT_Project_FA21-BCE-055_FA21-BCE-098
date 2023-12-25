// App.js

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserLayout from './components/UserLayout';
import UserProfilePage from './pages/UserProfilePage';
import { useState } from 'react';
import EnrolledCourses from './components/EnrolledCourses';
import FeaturedCourses from './components/FeaturedCourses';
import CourseSelection from './components/CourseSelection';

function App() {
  const [user, setUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [error, setError] = useState('');

  const handleSignUp = (userData) => {
    setUser(userData);
    setEnrolledCourses([]);
    setAvailableCourses([]);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setEnrolledCourses([]);
    setAvailableCourses(initialAvailableCourses);
  };

  const handleEnroll = (courseId) => {
    const selectedCourse = availableCourses.find((course) => course.id === courseId);
    if (selectedCourse) {
      setEnrolledCourses((prevEnrolledCourses) => [...prevEnrolledCourses, selectedCourse]);
      setAvailableCourses((prevAvailableCourses) =>
        prevAvailableCourses.filter((course) => course.id !== courseId)
      );
    }
  };

  const handleUnenroll = (courseId) => {
    const unenrolledCourse = enrolledCourses.find((course) => course.id === courseId);
    if (unenrolledCourse) {
      setEnrolledCourses((prevEnrolledCourses) =>
        prevEnrolledCourses.filter((course) => course.id !== courseId)
      );
      setAvailableCourses((prevAvailableCourses) => [...prevAvailableCourses, unenrolledCourse]);
    }
  };

  const handleUpdateProfile = (updatedUserData) => {
    setUser(updatedUserData);
  };

  const initialAvailableCourses = [
    <p>No course registered yet</p>
    // { id: 1, name: 'Course 1' },
    // { id: 2, name: 'Course 2' },
    // { id: 3, name: 'Course 3' },
  ];

  const Routes = [
    {
      path: '/',
      element: <UserLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'login',
          element: <Login onLogin={handleLogin} />,
        },
        {
          path: 'signup',
          element: <SignUp onSignUp={handleSignUp} />,
        },
        {
          path: 'profile',
          element: (
            <UserProfilePage
              user={user}
              enrolledCourses={enrolledCourses}
              onUpdateProfile={handleUpdateProfile}
              onEnroll={handleEnroll}
              onUnenroll={handleUnenroll}
              availableCourses={availableCourses}
            />
          ),
          children: [
            {
              path: 'enrolled-courses',
              element: (
                <section>
                  {/* <h3>Enrolled Courses</h3> */}
                  {/* <Link to="/profile/">Back to Profile</Link> */}
                  <EnrolledCourses courses={enrolledCourses} onUnenroll={handleUnenroll} />
                </section>
              ),
            },
            {
              path: 'available-courses',
              element: (
                <section>
              <h3>Available Courses</h3>
              <Link to="/profile/">Back to Profile</Link>
              {/* Pass the available courses and the handleEnroll function */}
              <CourseSelection courses={availableCourses} onEnroll={handleEnroll} />
            </section>
              ),
            },
            {
              path: 'Featured-courses',
              element: (
                <section>
              <h3>Featured Courses</h3>
              <Link to="/profile/">Back to Profile</Link>
              {/* Pass the handleEnroll function to FeaturedCourses */}
              <FeaturedCourses/>
            </section>

              ),
            },
            
          ],
        },
      ],
    },
  ];
  
  const router = createBrowserRouter(Routes);

  return (
    <div>
      <RouterProvider router={router} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
