import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/users">Go to User Page</Link>
    </div>
  );
}

export default HomePage;

