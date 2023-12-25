// CourseList.js
import React, { useState } from 'react';
import { useCourses } from './hooks';

const CourseList = () => {
  const { courses, registerForCourse } = useCourses();
  const [registrationNotification, setRegistrationNotification] = useState(null);

  const handleRegister = (courseId) => {
    registerForCourse(courseId);
    setRegistrationNotification(`Course with ID ${courseId} registered successfully!`);
  };

  return (
    <div>
      {registrationNotification && (
        <div className="registration-notification">
          <p>{registrationNotification}</p>
        </div>
      )}

      <ul>
        {courses.map((course) => (
          <li key={course.id} className="course-item">
            <div className="course-details">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Credit Hours: {course.cr}</p>
              <p>Instructor: {course.instructor}</p>
            </div>
            <div className="course-actions">
              {!course.registered ? (
                <button onClick={() => handleRegister(course.id)}>Register</button>
              ) : (
                <span>Registered</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
