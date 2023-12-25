// Announcements.js
import React from 'react';

const Announcements = () => {
  // Sample announcements data
  const announcements = [
    { id: 1, content: 'Registration for Fall Semester is now open!' },
    // { id: 2, content: 'New courses added to the catalog.' },
    // Add more announcements as needed
  ];

  return (
    <div>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>{announcement.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
