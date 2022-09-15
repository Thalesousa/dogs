import { useContext, useState } from 'react';
import { UserContext } from './../../Context/UserContext';
import { PhotoCommentsForm } from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

export function PhotoComments(props) {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);

  return (
    <>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
}
