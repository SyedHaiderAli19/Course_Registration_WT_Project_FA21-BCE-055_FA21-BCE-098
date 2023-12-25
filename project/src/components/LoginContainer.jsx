import React, { useState } from 'react';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';


const LoginContainer = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleLogin = (user) => {
    // Simulate setting the user as logged in
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    // Simulate logging out by setting loggedInUser to null
    setLoggedInUser(null);
    // Clear enrolled courses when logging out
    setEnrolledCourses([]);
  };

  const handleEnroll = (courseId) => {
    // Simulate course enrollment logic
    // Check if the user is already enrolled in the course
    const isEnrolled = enrolledCourses.some((course) => course.id === courseId);

    if (isEnrolled) {
      // User is already enrolled, so unenroll
      const updatedCourses = enrolledCourses.filter((course) => course.id !== courseId);
      setEnrolledCourses(updatedCourses);
      console.log(`User unenrolled from course with ID: ${courseId}`);
    } else {
      // User is not enrolled, so enroll
      // You would typically fetch course details from a backend here
      const newEnrolledCourse = {
        id: courseId,
        title: `Course ${courseId}`,
        instructor: `Instructor ${courseId}`,
        // Add more course details as needed
      };

      setEnrolledCourses((prevCourses) => [...prevCourses, newEnrolledCourse]);
      console.log(`User enrolled in course with ID: ${courseId}`);
    }
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <UserProfile user={loggedInUser} enrolledCourses={enrolledCourses} onEnroll={handleEnroll} />
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default LoginContainer;
