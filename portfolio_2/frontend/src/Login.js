import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: [event.target.value]
    }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email === '' && errors.password === '' ){
      axios.post('http://localhost:8081/login', values)
      .then(res =>{
        if(res.data === 'Success' ){
          navigate('/home');
        } else{
          alert('No record existed.')
        }
      }
      )
      .catch(err => console.log(err));
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white w-25 p-3 rounded">
        <form action="" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type='email'
              name='email'
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              name="password"
              type="password"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Login</strong>
          </button>
          <p>
            <br></br>If you are new user,
          </p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0"
          >
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;