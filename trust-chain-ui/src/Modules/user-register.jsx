import React, { useState } from 'react';
// import '../styles/User_registration';
// import '../styles/Landing_page'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '../Components/Button/Button';


const UserRegister = () =>{
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) =>{
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hwllo");

        const data = {
            "firstName" : formData.firstName,
            "lastName" : formData.lastName,
            "email" : formData.email,
            "password" : formData.password,
            "confirmPassword" : formData.confirmPassword
        }
    };

    return(
      <div className="app">
      <div className="slider-container">
        <div className="slider">
          <h2>Slider Component</h2>
        </div>
      </div>
      {/* <div className="form-container"> */}
      <div className="form-container">
      <div className="register"></div>
      <div className="registration-form">
        <div className = "header-text">
          <p className= "welcome-text">Welcome to</p>
          <h1 className= "title">TrustChain</h1>
          <p className = "description">Issue and Verify Credentials with trust of BlockChain</p>
        </div>
        
        {/* <h1>Welcome to <span className="brand-name">TrustChain</span></h1> */}
        
        <div className = 'user-registraion-form-section'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="user-form">
            <lable className = "user-form-label">First Name</lable>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
        </form>
        </div>
        <div className="login-login-buttons">
          <button type="submit" className="login-login-user-button">Register as User</button>
          </div>
          
          <div className="user-login-button">
          <button className='login-login-org-button'>
          Already Have an Account? <a href="/user/login" className="login-link">Login Here</a>
        </button>
        </div>
        <div className='login-login-buttons'>
        <button className="login-login-org-button">Register as an Organisation</button>
        </div>
      </div>
    </div>
      </div>
  
    );

}
export default UserRegister;
  
  // return (
  //   <div className="registration-form-container">
  //     <div className="registration-image-placeholder"></div>
  //     <div className="registration-form">
  //       <h1>Welcome to <span className="brand-name">TrustChain</span></h1>
  //       <p>Issue and Verify Credentials with trust of Blockchain</p>
  //       <form onSubmit={handleSubmit}>
  //         <div className="form-group">
  //           <input
  //             type="text"
  //             name="firstName"
  //             placeholder="Enter First Name"
  //             value={formData.firstName}
  //             onChange={handleChange}
  //             required
  //           />
  //           <input
  //             type="text"
  //             name="lastName"
  //             placeholder="Enter Last Name"
  //             value={formData.lastName}
  //             onChange={handleChange}
  //             required
  //           />
  //         </div>
  //         <div className="form-group">
  //           <input
  //             type="email"
  //             name="email"
  //             placeholder="Enter Your Email ID"
  //             value={formData.email}
  //             onChange={handleChange}
  //             required
  //           />
  //         </div>
  //         <div className="form-group">
  //           <input
  //             type="password"
  //             name="password"
  //             placeholder="Enter Password"
  //             value={formData.password}
  //             onChange={handleChange}
  //             required
  //           />
  //           <input
  //             type="password"
  //             name="confirmPassword"
  //             placeholder="Confirm Password"
  //             value={formData.confirmPassword}
  //             onChange={handleChange}
  //             required
  //           />
  //         </div>
  //         <button type="submit" className="submit-button">Register as User</button>
  //       </form>
  //       <p>
  //         Already Have an Account? <a href="/login" className="login-link">Login Here</a>
  //       </p>
  //       <button className="register-org-button">Register as an Organisation</button>
  //     </div>
  //   </div>
  // );
  // }

  // export default user_registration;