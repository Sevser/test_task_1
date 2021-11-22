import {UiInput} from '../../components/UiKit/UiInput/UiInput';
import styles from './AddNewComment.module.css';
import {UiButton} from '../../components/UiKit/UiButton/UiButton';
import {useDispatch, useSelector} from 'react-redux';
import {newComment, updateCommentText, updateCommentName, addCommentToPhoto} from './photoSlice';

export function AddNewComment(props) {
  const dispatch = useDispatch();
  const { comment, name } = useSelector(newComment)

  return <div className={styles['add-new-comment-container']}>
    <UiInput
      value={name}
      onInput={(e) => dispatch(updateCommentName(e))}
      placeholder="Your name" />
    <UiInput
      value={comment}
      onInput={(e) => dispatch(updateCommentText(e))}
      placeholder="Your comment" />
    <UiButton
      onClick={() => dispatch(addCommentToPhoto({ imageId: props.imageId, comment: { comment, name }}))}
      disabled={!name || !comment}>
      Send comment
    </UiButton>
  </div>
}
