import {UiInput} from '../../components/UiKit/UiInput/UiInput';
import styles from './AddNewComment.module.css';
import {UiButton} from '../../components/UiKit/UiButton/UiButton';

export function AddNewComment() {
  return <div className={styles['add-new-comment-container']}>
    <UiInput placeholder="Your name" />
    <UiInput placeholder="Your comment" />
    <UiButton>
      Send comment
    </UiButton>
  </div>
}
