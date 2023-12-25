import React from 'react';
import { Link } from 'react-router-dom';
import '../components/ProfileNavbar.css';

function ProfileNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile/enrolled-courses">
            Enrolled Courses
          </Link>
        </li>
        {/* Uncomment the following line when the route is available */}
        {/* <li className="nav-item">
          <Link className="nav-link" to="/profile/available-courses">
            Available Courses
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/profile/featured-courses">
            Featured Courses
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default ProfileNavbar;
