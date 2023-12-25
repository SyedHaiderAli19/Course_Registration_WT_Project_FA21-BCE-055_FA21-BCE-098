import React from 'react';
import ProfileNavbar from './ProfileNavbar';
import Header from './Header';
import Footer from './Footer';

const UserProfile = ({ user, enrolledCourses }) => {
  return (
    <>
      {/* <Header /> */}
      {/* <ProfileNavbar /> */}
      <div className="container mt-4">
        <h2 className="mb-4">User Profile</h2>
        <div className="card p-4">
          <h4>User Details</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Father Name:</td>
                <td>Doe Smith</td>
              </tr>
              <tr>
                <td>Current CGPA:</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Semester:</td>
                <td>5th</td>
              </tr>
            </tbody>
          </table>

          {/* Add other user details as needed */}

          <h4 className="mt-4">Enrolled Courses</h4>
          {enrolledCourses && enrolledCourses.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Course ID</th>
                  <th>Course Name</th>
                </tr>
              </thead>
              <tbody>
                {enrolledCourses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-muted">No enrolled courses</p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default UserProfile;
