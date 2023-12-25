import React from 'react';
import { getCourses } from '../utils/api';
import '../components/FeaturedCourses.css';

const FeaturedCourses = ({ onEnroll }) => {
  const allCourses = getCourses();

  const handleEnrollClick = (courseId) => {
    // Call the onEnroll function passed from the parent component
    onEnroll(courseId);
  };

  return (
    <div>
      <h4>Featured Courses</h4>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Credit Hours</th>
            <th>Instructor</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {allCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.creditHours}</td>
              <td>{course.instructor}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleEnrollClick(course.id)}
                >
                  Enroll
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturedCourses;
