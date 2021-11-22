import React, {useEffect} from 'react';
import BaseModal from '../../components/modals/BaseModal';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearRequestedPhoto,
} from './photoSlice';
import styles from './Photos.module.css';

export function Photo(props) {
  const dispatch = useDispatch();

  return (
    <BaseModal  hideModal={() => dispatch(clearRequestedPhoto())}>
      <BaseModal.Header>
        <h1>Photo id = {props.photo.id}</h1>
      </BaseModal.Header>
      <BaseModal.Body>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </BaseModal.Body>
    </BaseModal>
  );
}

