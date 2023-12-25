// hooks.js
import { useState } from 'react';
import { getCourses } from './api';

export const useCourses = () => {
  const [courses, setCourses] = useState(getCourses());

  const registerForCourse = (courseId) => {
    // Simulate course registration logic
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, registered: true } : course
      )
    );
  };


  return { courses, registerForCourse };
};
