import React from 'react';
import Navbar from './Navbar';

function Banner() {
  return (
    <div className="banner">
      <Navbar />
      <div className="container text-center py-5">
        <h3 className="text-muted">Demo</h3>
      </div>
    </div>
  );
}

export default Banner;
