import React, { useState } from 'react'

const Section4 = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        aboutMe: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
      let newErrors = {};

      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Enter a valid email";
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }

      if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      if (!formData.aboutMe.trim()) {
        newErrors.aboutMe = "Please tell something about yourself";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    return (
        <div>
            <div className="section-4">
                <div className="container">
                    <div className="row-4  justify-center">
                        <div className="col-6 row-4-box  justify-center">
                            <div className="svg-box-2">
                                <svg width="189" height="8" viewBox="0 0 189 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" width="188" height="8" fill="#01C8FF" />
                                    <rect width="166" height="8" fill="#2C49FE" />
                                </svg>
                            </div>
                            <h2 className='heading-8'>Explore our latest events</h2>
                            <p className='para-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.</p>
                            <h4 className='learn-more'>LEARN MORE</h4>
                            <div className="img-mask">
                                <img className='line-img w-100' src="./assets/images/Vector (1).png" alt="line-img" />
                            </div>
                        </div>
                        <div className="col-6  row-4-box justify-center">
                            <div className="row-5">
                                <div className="card">
                                    <img className='w-100' src="./assets/images/Rectangle 31.png" alt="rectangle-1" />
                                    <p className='date'>09/23/2021</p>
                                    <h4 className='card-heading'>Lorem ipsum</h4>
                                    <p className='card-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in </p>
                                </div>
                                <div className="card">
                                    <img className='w-100' src="./assets/images/Rectangle 32.png" alt="rectangle-2" />
                                    <p className='date'>09/23/2021</p>
                                    <h4 className='card-heading'>Lorem ipsum</h4>
                                    <p className='card-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in </p>
                                </div>
                            </div>
                            <div className="svg-box-3">
                                <svg width="189" height="8" viewBox="0 0 189 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" width="188" height="8" fill="#01C8FF" />
                                    <rect width="166" height="8" fill="#2C49FE" />
                                </svg>
                            </div>
                            <h2 className='heading-9'>Join Us !</h2>
                            <p className='para-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue </p>
                            <h3 className='sign-up'>Sign Up</h3>
                            <form
                              className='form'
                              onSubmit={(e) => {
                                e.preventDefault();
                                if (validateForm()) {
                                  alert("Form submitted successfully!");
                                }
                              }}
                            >
                                <div className='name-box'>
                                    <div className="input-1">
                                    <input
                                        type="text"
                                        className="First-Name"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        />
                                        {errors.firstName && <p style={{ color: "red", marginTop: "10px",textAlign:"center" }}>{errors.firstName}</p>}</div>
                                    <div className="input-1">
                                    <input
                                        type="text"
                                        className="last-Name"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                        {errors.lastName && <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>{errors.lastName}</p>}</div>
                                </div>
                                <input
                                    type="email"
                                    className="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                                <div className="password-box">
                                    <div className="input-1">
                                    <input
                                        type="password"
                                        className="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                        {errors.password && <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>{errors.password}</p>}</div>
                                    <div className="input-1">
                                    <input
                                        type="password"
                                        className="confirm-pasword"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                        {errors.confirmPassword && <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>{errors.confirmPassword}</p>}</div>
                                </div>
                                <textarea
                                    className="About-Me"
                                    rows="5"
                                    name="aboutMe"
                                    placeholder="About Me"
                                    value={formData.aboutMe}
                                    onChange={handleChange}
                                />
                                {errors.aboutMe && <p style={{ color: "red" }}>{errors.aboutMe}</p>}
                                <button className='sign-up-button'>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4