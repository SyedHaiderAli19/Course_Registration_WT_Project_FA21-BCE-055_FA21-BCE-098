// Home.jsx
import React from 'react';
import Announcements from '../components/Announcements';
import '../components/Home.css'; // Keep your custom styles

const Home = () => {
  return (
    <div className="container home-container">
      <section className="welcome-section text-center mb-4">
        <h2>Welcome to the COMSATS University Course Registration System</h2>
        <p className="lead">
          Explore a wide range of courses and enhance your knowledge. Register for
          courses that match your interests and academic goals.
        </p>
      </section>

      {/* Announcements Section */}
      <section className="announcements-section mb-4">
        <h3 className="mb-3">Announcements</h3>
        <Announcements />
      </section>
    </div>
  );
};

export default Home;
