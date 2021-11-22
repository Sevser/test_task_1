import React, {useEffect} from 'react';
import BaseModal from '../../components/modals/BaseModal';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearRequestedPhoto,
} from './photoSlice';
import styles from './Photo.module.css';
import { formatDate } from '../../utills/formatters';
import {AddNewComment} from './AddNewComment';

export function Photo(props) {
  const dispatch = useDispatch();
  const hasComments = props.photo && props.photo.comments && props.photo.comments.length;

  return (
    <BaseModal  hideModal={() => dispatch(clearRequestedPhoto())}>
      <BaseModal.Header>
      </BaseModal.Header>
      <BaseModal.Body>
        <div className={styles['photo-modal-body']}>
          <div className={styles['image-comments-container']}>
            <img
              alt={`image ${props.photo.id}`}
              src={props.photo.url}/>
            <div className={styles['comments-container']}>
              {hasComments ? props.photo.comments.map((comment) =>
                <div
                  key={comment.id}
                  className={styles['comment-container']}>
                  <div className={styles['comment-date']}>{formatDate(comment.date)}</div>
                  <div className={styles['comment-text']}>{comment.text}</div>
                </div>) : ''}
            </div>
          </div>
          <AddNewComment imageId={props.photo.id} />
        </div>
      </BaseModal.Body>
      <BaseModal.Footer>
      </BaseModal.Footer>
    </BaseModal>
  );
}

