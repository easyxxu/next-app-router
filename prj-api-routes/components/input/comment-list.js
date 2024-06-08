import { useEffect, useState } from "react";
import classes from "./comment-list.module.css";

function CommentList(props) {
  const commentId = props.eventId;
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/${commentId}`)
      .then((res) => res.json())
      .then((data) => {
        setCommentData(data.comment);
      });
  }, []);

  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {commentData.map((comment, idx) => (
        <li key={idx}>
          <p>{comment.content}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
      {/* <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li> */}
    </ul>
  );
}

export default CommentList;

// export async function getStaticProps() {
//   const res = await fetch("/api/comment");
//   const data = res.json();
//   return {
//     props: {
//       comments: data,
//     },
//   };
// }
