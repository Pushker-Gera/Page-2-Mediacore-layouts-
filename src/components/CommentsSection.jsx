import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const CommentsSection = () => {
  const [showComments, setShowComments] = useState([true, false, false, false, false]);
  const [likes, setLikes] = useState([10, 10, 10, 10, 10]);
  const [liked, setLiked] = useState([false, false, false, false, false]);
  const toggleComments = (index) => {
    setShowComments(
      showComments.map((v, i) => {
        if (i === index) {
          return !v; 
        }
        return false;
      })
    );
  };
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
      }
    ],
    [
      {
        id: 1,
        user: "Username",
        text: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi.",
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
        text: "Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        img: "./assets/images/Ellipse 20.png"
      }
    ],
    [
      {
        id: 1,
        user: "Username",
        text: "Senectus gravida sed interdum pretium at quam morbi.",
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
        text: "Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit.",
        img: "./assets/images/Ellipse 20.png"
      }
    ],
    [
      {
        id: 1,
        user: "Username",
        text: "Ut vitae dolor fringilla urna eget aliquet.",
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
        text: "Senectus gravida sed interdum pretium at quam morbi.",
        img: "./assets/images/Ellipse 20.png"
      }
    ],
    [
      {
        id: 1,
        user: "Username",
        text: "Hendrerit vulputate in duis donec sit.",
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
        text: "Senectus gravida sed interdum pretium at quam morbi.",
        img: "./assets/images/Ellipse 20.png"
      }
    ]
  ]);
  const [commentText, setCommentText] = useState(["", "", "", "", ""]);
  const [commentError, setCommentError] = useState(["", "", "", "", ""]);

  const postComment = (postIndex) => {
    if (commentText[postIndex].trim() === "") {
      setCommentError(
        commentError.map((err, i) =>
          i === postIndex ? "Comment cannot be empty" : err
        )
      );
      return;
    }

    setCommentError(
      commentError.map((err, i) => (i === postIndex ? "" : err))
    );

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
    <div className="parent-box-2">
      {comments.map((postComments, postIndex) => (
      <div className="box-type-3" key={postIndex}>
        <div className="box-type-4">
          <div className="card-box">
            <div className="card-1">
              <div className="box-1">
                <img src="./assets/image-icon-svg.svg" alt="" />
                <div className="h-p-box-2">
                  <h3 className='heading-17'>Username</h3>
                  <p className='para-15'>Post event name</p>
                </div>
              </div>
              <h3 className='heading-18'>Fusce adipiscing nunc et tellus eu, tristique sodales sit aliquet.</h3>
              <p className='para-16'><svg className='svg-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                  <path d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z" fill="black" />
                  <path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z" fill="black" />
                </g>
              </svg>10/02/2022</p>
              <p className='para-17'>Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
              <p className='para-18'>Sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
              <div className="comments-box">
                <p className='para-19' onClick={() => {
                  setLiked(liked.map((v, i) => i === postIndex ? !v : v));
                  setLikes(likes.map((v, i) => i === postIndex ? (liked[postIndex] ? v - 1 : v + 1) : v));
                }} style={{ cursor: "pointer", color: liked[postIndex] ? "red" : "black" }}>
                  <svg className='svg-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 4C4.4625 4 2 6.4625 2 9.5C2 15 8.5 20 12 21.163C15.5 20 22 15 22 9.5C22 6.4625 19.5375 4 16.5 4C14.64 4 12.995 4.9235 12 6.337C11.4928 5.6146 10.8191 5.02505 10.0358 4.61824C9.25245 4.21144 8.38265 3.99938 7.5 4Z"
                      stroke={liked[0] ? "red" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg> {likes[postIndex]}
                </p>
                <p className='para-20' onClick={() => toggleComments(postIndex)} >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_34717_1989)">
                      <path d="M6.75018 9.75C5.92049 9.75 5.25018 10.4203 5.25018 11.25C5.25018 12.0797 5.92049 12.75 6.75018 12.75C7.57987 12.75 8.25018 12.0797 8.25018 11.25C8.25018 10.4203 7.57987 9.75 6.75018 9.75ZM12.0002 9.75C11.1705 9.75 10.5002 10.4203 10.5002 11.25C10.5002 12.0797 11.1705 12.75 12.0002 12.75C12.8299 12.75 13.5002 12.0797 13.5002 11.25C13.5002 10.4203 12.8299 9.75 12.0002 9.75ZM17.2502 9.75C16.4205 9.75 15.7502 10.4203 15.7502 11.25C15.7502 12.0797 16.4205 12.75 17.2502 12.75C18.0799 12.75 18.7502 12.0797 18.7502 11.25C18.7502 10.4203 18.0799 9.75 17.2502 9.75ZM12.0002 1.5C5.37206 1.5 0.000181322 5.86406 0.000181322 11.25C0.000181322 13.4812 0.932994 15.525 2.47987 17.1703C1.78143 19.0172 0.328306 20.5828 0.304869 20.6016C-0.00450618 20.9297 -0.0888812 21.4078 0.0892438 21.8203C0.267369 22.2328 0.675181 22.5 1.12518 22.5C4.00799 22.5 6.28143 21.2953 7.64549 20.3297C9.00018 20.7563 10.4627 21 12.0002 21C18.6283 21 24.0002 16.6359 24.0002 11.25C24.0002 5.86406 18.6283 1.5 12.0002 1.5ZM12.0002 18.75C10.7486 18.75 9.51112 18.5578 8.32518 18.1828L7.26112 17.8453L6.34706 18.4922C5.67674 18.9656 4.75799 19.4953 3.65174 19.8516C3.99393 19.2844 4.32674 18.6469 4.58456 17.9672L5.08143 16.65L4.11581 15.6281C3.26737 14.7234 2.25018 13.2281 2.25018 11.25C2.25018 7.11563 6.62362 3.75 12.0002 3.75C17.3767 3.75 21.7502 7.11563 21.7502 11.25C21.7502 15.3844 17.3767 18.75 12.0002 18.75Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_34717_1989">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{postComments.length}</p>
              </div>
            </div>
            <div className="card-2">
              <div className="flex-box-1">
                <div className="box-img"><img className='width-100' src="./assets/images/img-1.png" alt="" /></div>
                  <div className="box-img"><img className='width-100' src="./assets/images/img-2.png" alt="" /></div>
              </div>
              <div className="flex-box-1">
                  <div className="box-img"><img className='width-100' src="./assets/images/img-3.png" alt="" /></div>
                  <div className="box-img"><img className='width-100' src="./assets/images/img-4.png" alt="" /></div>
              </div>
              <Link to='/Events'>
              <div className="box-2">
                <h2 className='heading-19'>+15</h2>
                <p className='para-21'>more</p>
                </div>
              </Link>

            </div>
          </div>
          <svg className='svg-line' max-width="1251" height="1" viewBox="0 0 1251 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line opacity="0.2" x1="4.37114e-08" y1="0.5" x2="1251" y2="0.500109" stroke="black" />
          </svg>
          <div className="box-4">
            <img src="./assets/images/Ellipse 18.png" className='img-circle' alt="img-circle" />
            <input
              className='comment'
              type="text"
              placeholder='Write your comment here...'
              value={commentText[postIndex]}
              onChange={(e) =>
                setCommentText(
                  commentText.map((t, i) => i === postIndex ? e.target.value : t)
                )
              }
            />
            {commentError[postIndex] && (
                <p style={{ color: "red", fontSize: "16px", marginTop: "10px", textAlign: "center" }}>
                {commentError[postIndex]}
              </p>
            )}
            <button className='post-comment' onClick={() => postComment(postIndex)}>Post Comment</button>
          </div>
          <div className="box-type-5"
            style={{
              display: showComments[postIndex] ? "flex" : "none",
            }}
          >
            {postComments.map((c) => (
              <div className="box-5" key={c.id} >
                <div className="img-box">
                  <img src={c.img} alt="img" />
                </div>
                <div className="username-delete-box">
                  <div className="username-box">
                    <h3 className='heading-20'>{c.user}</h3>
                    <p className='para-22'>{c.text}</p>
                  </div>
                  <div className="delete-box" onClick={() => deleteComment(postIndex, c.id)} style={{ cursor: "pointer" }}>
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
      ))}
    </div>
  )
}

export default CommentsSection