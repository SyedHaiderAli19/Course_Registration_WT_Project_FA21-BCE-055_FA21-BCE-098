// api.js
export const getCourses = () => {
  // Simulated list of courses
  return [
    {
      id: 'CS01',
      title: 'Programming Fundamentals',
      description: 'Learn the basics of Programming with C.',
      creditHours: 4,
      instructor: 'Rizwan Qureshi',
      registered: false,
    },
    {
      id: 'CE01',
      title: 'COA',
      description: 'Deepen your knowledge of Computer Organization and Architecture.',
      creditHours: 4,
      instructor: 'Dr. Muhammad Naeem Awais',
      registered: false,
    },
    {
      id: 'CE02',
      title: 'Operating System',
      description: 'Learn about operating systems.',
      creditHours: 3,
      instructor: 'Ahmad Mudasir',
      registered: false,
    },
    {
      id: 'CE03',
      title: 'Database',
      description: 'Organizing data.',
      creditHours: 4,
      instructor: 'Maruhk Saleem',
      registered: false,
    },
  ];
};

export const getEnrolledCourses = () => {
  // Simulated list of enrolled courses
  return [
    { id: 1, title: 'Enrolled Course 1', creditHours: 4, instructor: 'Instructor 1' },
    { id: 2, title: 'Enrolled Course 2', creditHours: 3, instructor: 'Instructor 2' },
  ];
};

export const registerForCourse = (courseId) => {
  // Simulated course registration logic
  console.log(`User registered for course with ID: ${courseId}`);
  // Returning a promise to simulate an asynchronous operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};
