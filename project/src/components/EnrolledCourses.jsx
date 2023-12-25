import React from 'react';

const EnrolledCourses = ({ courses, onUnenroll }) => {
  const handleUnenrollClick = (courseId) => {
    // Call the onUnenroll function passed from the parent component
    onUnenroll(courseId);
  };

  return (
    <div>
      <h3>Enrolled Courses</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Credit Hours</th>
            <th>Instructor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.creditHours}</td>
              <td>{course.instructor}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleUnenrollClick(course.id)}
                >
                  Unenroll
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledCourses;
