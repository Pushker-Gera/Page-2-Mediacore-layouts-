import React, { useState } from 'react'

const UserNameCommentsSection = () => {
  const [comments, setComments] = useState([
    [
      {
        id: 1,
        user: "Username",
        text: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        img: "./assets/images/Ellipse 18.png"
      },
      {
        id: 2,
        user: "Username",
        text: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.",
        img: "./assets/images/Ellipse 19.png"
      },
      {
        id: 3,
        user: "Username",
        text: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        img: "./assets/images/Ellipse 20.png"
      },
      {
        id: 4,
        user: "Username",
        text: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        img: "./assets/images/Ellipse 18 (2).png"
      },
      {
        id: 5,
        user: "Username",
        text: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        img: "./assets/images/Ellipse 18 (3).png"
      },
      {
        id: 5,
        user: "Username",
        text: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        img: "./assets/images/Ellipse 18 (4).png"
      },
      {
        id: 5,
        user: "Username",
        text: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        img: "./assets/images/Ellipse 18 (5).png"
      }

    ]
  ]);
  const [commentText, setCommentText] = useState(["", "", "", "", ""]);

  const postComment = (postIndex) => {
    if (commentText[postIndex].trim() === "") return;

    const newComment = {
      id: Date.now(),
      user: "Username",
      text: commentText[postIndex],
      img: "./assets/images/Ellipse 18.png"
    };

    setComments(
      comments.map((list, i) =>
        i === postIndex ? [...list, newComment] : list
      )
    );

    setCommentText(
      commentText.map((t, i) => (i === postIndex ? "" : t))
    );
  };
  const deleteComment = (postIndex, id) => {
    setComments(
      comments.map((list, i) =>
        i === postIndex ? list.filter((c) => c.id !== id) : list
      )
    );
  };
  return (
    <div>
      <div className="tell-box">
        <svg width="115" height="8" viewBox="0 0 115 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.609375" width="114.392" height="8" fill="#01C8FF" />
          <rect width="101.005" height="8" fill="#2C49FE" />
        </svg>
        <h2 className='tell-heading'>Tell Us!</h2>
        <p className='tell-para'>Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
      </div>
      <div className="user-name-comments-box">
        <div className="box-4-2">
          <img src="./assets/images/Ellipse 18.png" className='img-circle' alt="img-circle" />
          <input className='comment' type="text" placeholder='Write your comment here...' value={commentText[0]} onChange={(e) => setCommentText(commentText.map((t, i) => i === 0 ? e.target.value : t))} />
          <button className='post-comment-2' onClick={() => postComment(0)}>Post Comment</button>
        </div>
        <div className="box-type-5 second-type" style={{ display: "flex" }}>
          {comments[0].map((c) => (
            <div className="box-5" key={c.id} >
              <div className="img-box">
                <img src={c.img} alt="img" />
              </div>
              <div className="username-delete-box">
                <div className="username-box">
                  <h3 className='heading-20'>{c.user}</h3>
                  <p className='para-22'>{c.text}</p>
                </div>
                <div className="delete-box" onClick={() => deleteComment(0, c.id)} style={{ cursor: "pointer" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                      <path d="M21.5 6C21.5 6.24493 21.41 6.48134 21.2473 6.66437C21.0845 6.84741 20.8603 6.96434 20.617 6.993L20.5 7H19.655L18.424 19.52C18.357 20.1994 18.0397 20.8295 17.5338 21.2879C17.0279 21.7462 16.3697 22.0001 15.687 22H8.313C7.63035 22.0001 6.97207 21.7462 6.4662 21.2879C5.96033 20.8295 5.64302 20.1994 5.576 19.52L4.345 7H3.5C3.23478 7 2.98043 6.89464 2.79289 6.70711C2.60536 6.51957 2.5 6.26522 2.5 6C2.5 5.73478 2.60536 5.48043 2.79289 5.29289C2.98043 5.10536 3.23478 5 3.5 5H8.5C8.5 4.54037 8.59053 4.08525 8.76642 3.66061C8.94231 3.23597 9.20012 2.85013 9.52513 2.52513C9.85013 2.20012 10.236 1.94231 10.6606 1.76642C11.0852 1.59053 11.5404 1.5 12 1.5C12.4596 1.5 12.9148 1.59053 13.3394 1.76642C13.764 1.94231 14.1499 2.20012 14.4749 2.52513C14.7999 2.20012 15.0577 3.23597 15.2336 3.66061C15.4095 4.08525 15.5 4.54037 15.5 5H20.5C20.7652 5 21.0196 5.10536 21.2071 5.29289C21.3946 5.48043 21.5 5.73478 21.5 6ZM14.25 9.25C14.0688 9.25001 13.8937 9.31564 13.7571 9.43477C13.6205 9.55389 13.5316 9.71845 13.507 9.898L13.5 10V17L13.507 17.102C13.5317 17.2815 13.6206 17.446 13.7571 17.5651C13.8937 17.6842 14.0688 17.7498 14.25 17.7498C14.4312 17.7498 14.6063 17.6842 14.7429 17.5651C14.8794 17.446 14.9683 17.2815 14.993 17.102L15 17V10L14.993 9.898C14.9684 9.71845 14.8795 9.55389 14.7429 9.43477C14.6063 9.31564 14.4312 9.25001 14.25 9.25ZM9.75 9.25C9.56876 9.25001 9.39366 9.31564 9.25707 9.43477C9.12048 9.55389 9.03165 9.71845 9.007 9.898L9 10V17L9.007 17.102C9.0317 17.2815 9.12055 17.446 9.25714 17.5651C9.39372 17.6842 9.5688 17.7498 9.75 17.7498C9.9312 17.7498 10.1063 17.6842 10.2429 17.5651C10.3794 17.446 10.4683 17.2815 10.493 17.102L10.5 17V10L10.493 9.898C10.4684 9.71845 10.3795 9.55389 10.2429 9.43477C10.1063 9.31564 9.93124 9.25001 9.75 9.25ZM12 3.5C11.6022 3.5 11.2206 3.65804 10.9393 3.93934C10.658 4.22064 10.5 4.60218 10.5 5H13.5C13.5 4.60218 13.342 4.22064 13.0607 3.93934C12.7794 3.65804 12.3978 3.5 12 3.5Z" fill="black" />
                    </g>
                  </svg>
                  <p className='para-23'>Remove Comment</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default UserNameCommentsSection