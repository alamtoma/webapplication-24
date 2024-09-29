import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SingupValidation";
import axios from 'axios'

function Signup() {
  const [values, setValues] = useState({
    name:'',
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
    if(errors.name === '' && errors.email === '' && errors.password === '' ){
      axios.post('http://localhost:8081/signup', values)
      .then(res =>{
        navigate('/');
      }
      )
      .catch(err => console.log(err));
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white w-25 p-3 rounded">
        <form action="" onSubmit={handleSubmit}>
            <h1>Sign up</h1>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              name="name"
              type="type"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              name="email"
              type="email"
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
          <button type = 'submit' className="btn btn-success w-100 rounded-0">
            <strong>Signup</strong>
          </button>
          <Link to='/' className='btn btn-default border w-100 bg-light rounded-0'>Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;