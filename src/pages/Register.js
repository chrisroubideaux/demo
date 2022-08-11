import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/Form.css';

function Register() {
  return (
    <div>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="sign up page" />
      </Helmet>

      <div className=" text-center py-5">
        <Link to="/" className="nav-item">
          <img
            className="mb-4"
            src="https://pngimg.com/uploads/book/book_PNG51078.png "
            alt=""
            width="72"
            height="57"
          />
        </Link>
        <p className="">back to menu</p>
        <h2 className="">Create your Account</h2>

        <form className="form text-center">
          <input
            className="form-control m-2"
            required
            type="name"
            placeholder="Enter name"
          />
          <input
            className="form-control m-2"
            required
            type="email"
            placeholder="Enter Email"
          />
          <input
            className="form-control m-2"
            required
            type="password"
            placeholder="Enter Password"
          />
          <input
            className="form-control m-2"
            required
            type="password"
            placeholder="Confirm Password"
          />
          <div className="container">
            <button className="w-100 btn btn-md" type="submit" to="">
              Sign up
            </button>
          </div>
          <p className="pt-3">
            Already have an account?
            <Link className="btn btn lg w-75" to="/Login">
              Login
            </Link>
          </p>
          <p className="mt-5 mb-3 text-muted">&copy; Demo, 2022</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
