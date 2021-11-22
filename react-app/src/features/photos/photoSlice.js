import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './photosAPI';

const initialState = {
  photoList: [],
  photoListStatus: 'idle',
  currentPhoto: null,
  currentPhotoStatus: 'idle',
  newCommentText: '',
  newCommentName: '',
  createNewCommentStatus: 'idle',
};

export const fetchListPhotos = createAsyncThunk(
  'photo/fetchListPhotos',
  async () => {
    const response = await API.fetchListPhotos();
    return response;
  }
);

export const fetchPhotoById = createAsyncThunk(
  'photo/fetchPhotoById',
  async (photoId) => {
    const response = await API.fetchPhotoById(photoId);
    return response;
  }
);

export const addCommentToPhoto = createAsyncThunk(
  'photo/addCommentToPhoto',
  async ({ imageId, comment }) => {
    const response = await API.addCommentToPhoto(imageId, comment);
    return response;
  }
);

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    clearRequestedPhoto(state) {
      state.currentPhotoStatus = 'idle';
      state.currentPhoto = null;
    },
    updateCommentText(state, action) {
      state.newCommentText = action.payload;
    },
    updateCommentName(state, action) {
      state.newCommentName = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListPhotos.pending, (state) => {
        state.photoListStatus = 'loading';
      })
      .addCase(fetchListPhotos.fulfilled, (state, action) => {
        state.photoListStatus = 'success';
        state.photoList = action.payload;
      })
      .addCase(fetchPhotoById.pending, (state) => {
        state.currentPhotoStatus = 'loading';
      })
      .addCase(fetchPhotoById.fulfilled, (state, action) => {
        state.currentPhotoStatus = 'success';
        state.currentPhoto = action.payload;
      })
      .addCase(addCommentToPhoto.pending, (state) => {
        state.createNewCommentStatus = 'pending';
      })
      .addCase(addCommentToPhoto.fulfilled, (state, action) => {
        state.createNewCommentStatus = 'idle';
      });
  },
});

export const {
  clearRequestedPhoto,
  updateCommentText,
  updateCommentName,
} = photoSlice.actions;

export const selectPhotoList = (state) => state.photo.photoList;
export const selectPhoto = (state) => state.photo.currentPhoto;
export const newComment = (state) => ({
  comment: state.photo.newCommentText,
  name: state.photo.newCommentName,
});

export default photoSlice.reducer;
