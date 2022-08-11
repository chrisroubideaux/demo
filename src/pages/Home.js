import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Test from '../components/Test';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>Demo</title>
        <meta name="description cover page" content="/" />
      </Helmet>

      <div className="layout">
        <Navbar />

        <Test />

        <Footer />
      </div>
    </>
  );
}

export default Home;
