import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchListPhotos, fetchPhotoById, selectPhoto, selectPhotoList,
} from './photoSlice';
import styles from './Photos.module.css';
import { Photo } from './Photo';

export function Photos() {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotoList);
  const photo = useSelector(selectPhoto);
  const photosStatus = useSelector(state => state.photo.photoListStatus);

  useEffect(() => {
    if (photosStatus === 'idle') {
      dispatch(fetchListPhotos());
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {photos.map(photo =>
          <img
            onClick={() => dispatch(fetchPhotoById(photo.id))}
            className={styles.image}
            key={photo.id}
            src={photo.url}/>)}
      </div>
      {photo ? <Photo photo={photo} /> : ''}
    </div>
  );
}
