import React from 'react';
import { Link } from 'react-router-dom';
export {};

function Home() {
  return (
    <div>
      <h1>Contact Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Charts">Charts</Link>
          </li>
          <li>
            <Link to="/Maps">Maps</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
