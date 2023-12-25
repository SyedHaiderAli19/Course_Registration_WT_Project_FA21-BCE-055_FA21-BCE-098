// CourseSelection.jsx
import React from 'react';

const CourseSelection = ({ courses, onEnroll, showEnrollButton }) => {
  return (
    <div>
      <h4>Available Courses</h4>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} - {showEnrollButton && <button onClick={() => onEnroll(course.id)}>Enroll</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseSelection;
