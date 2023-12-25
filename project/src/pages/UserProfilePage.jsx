import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import EnrolledCourses from '../components/EnrolledCourses';
import { getEnrolledCourses, getCourses } from '../utils/api';
import ProfileNavbar from '../components/ProfileNavbar';
import FeaturedCourses from '../components/FeaturedCourses';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfilePage = ({
  user: initialUser,
  enrolledCourses: initialEnrolledCourses,
  onUnenroll,
  onEnroll,
}) => {
  const [user, setUser] = useState(initialUser);
  const [enrolledCourses, setEnrolledCourses] = useState(initialEnrolledCourses || []);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetchUserData();
        setUser(userResponse);

        const enrolledCoursesResponse = await fetchEnrolledCoursesData();
        setEnrolledCourses(enrolledCoursesResponse);

        const availableCoursesResponse = await getCourses();
        setAvailableCourses(availableCoursesResponse);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchUserData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'John Doe',
        });
      }, 1000);
    });
  };

  const fetchEnrolledCoursesData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const enrolledCoursesResponse = getEnrolledCourses();
        resolve(enrolledCoursesResponse);
      }, 1000);
    });
  };

  const handleEnroll = (courseId) => {
    const selectedCourse = availableCourses.find((course) => course.id === courseId);
    if (selectedCourse) {
      setEnrolledCourses((prevEnrolledCourses) => [...prevEnrolledCourses, selectedCourse]);
      setAvailableCourses((prevAvailableCourses) =>
        prevAvailableCourses.filter((course) => course.id !== courseId)
      );
      // Add logic to handle course enrollment (e.g., API call)
      onEnroll(courseId);
    }
  };

  const handleUnenroll = (courseId) => {
    const unenrolledCourse = enrolledCourses.find((course) => course.id === courseId);
    if (unenrolledCourse) {
      setEnrolledCourses((prevEnrolledCourses) =>
        prevEnrolledCourses.filter((course) => course.id !== courseId)
      );
      setAvailableCourses((prevAvailableCourses) => [...prevAvailableCourses, unenrolledCourse]);
      // Add logic to handle course unenrollment (e.g., API call)
      onUnenroll(courseId);
    }
  };

  return (
    <div>
      <ProfileNavbar />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <Routes>
          <Route
            path="/"
            element={
              <section>
                {user && <UserProfile user={user} enrolledCourses={enrolledCourses} />}
              </section>
            }
          />

          <Route
            path="enrolled-courses"
            element={
              <section>
                <EnrolledCourses courses={enrolledCourses} onUnenroll={handleUnenroll} />
              </section>
            }
          />

          <Route
            path="featured-courses"
            element={
              <section>
                <FeaturedCourses onEnroll={handleEnroll} />
              </section>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default UserProfilePage;
