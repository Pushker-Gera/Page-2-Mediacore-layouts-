import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CommentsSection from './CommentsSection'

const FeedSection1 = () => {
  const location = useLocation();
  return (
    <div>
      <div className="container margin-top-84">
        <div className="row-7">
          <div className="col-box-4">
            <img className='w-100' src="./assets/images/Rectangle 74.png" alt="img" />
          </div>
          <div className="col-8">
            <div className="box-8">
              <p className='para-12'>
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
                {" > "}
                {location.pathname.replace("/", "")}
              </p>
              <h2 className='heading-12'>Jhone Doe</h2>
              <p className='para-13'>Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
              <h4 className='heading-13'>Following Events :</h4>
              <div className="box-row-1">
                <div className="box-type-1">
                  <img src="./assets/images/Rectangle 78.png" alt="img" />
                  <div className="h-p-box-1">
                    <h4 className='heading-14'>Augue etiam</h4>
                    <p className='para-14'>Quis et id urna sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis.</p>
                  </div>
                </div>
                <div className="box-type-1">
                  <img src="./assets/images/Rectangle 81.png" alt="img" />
                  <div className="h-p-box-1">
                    <h4 className='heading-14'>Augue etiam</h4>
                    <p className='para-14'>Quis et id urna sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis.</p>
                  </div>
                </div>
                <Link to='/Events'>
                <div className="box-type-2">
                  <h3 className="heading-15">+15</h3>
                  <p className='para-15'>more</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="h-line-box">
          <svg width="189" height="8" viewBox="0 0 189 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" width="188" height="8" fill="#01C8FF" />
            <rect width="166" height="8" fill="#2C49FE" />
          </svg>
          <h3 className='heading-16'>
            New Posts
          </h3>
        </div>
        <CommentsSection />
      </div>
      
    </div>
  )
}

export default FeedSection1