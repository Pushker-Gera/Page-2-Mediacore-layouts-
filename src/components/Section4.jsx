import React from 'react'

const Section4 = () => {
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
                          <form action="">
                              <div className='name-box'>
                                  <input type="text" className="First-Name" placeholder="First Name"></input>
                                  <input type="text" className="last-Name" placeholder="Last Name"></input>
                              </div>
                              <input type="email" className='email' placeholder='Email Address'></input>
                              <div className="password-box">
                                  <input type="password" className='password' placeholder='Password'></input>
                                  <input type="password" className='confirm-pasword' placeholder='Confirm Password'></input>
                              </div>
                              <textarea className="About-Me" rows="5" placeholder='About Me'></textarea>
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