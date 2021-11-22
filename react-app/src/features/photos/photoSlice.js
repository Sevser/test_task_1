import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './photosAPI';

const initialState = {
  photoList: [],
  photoListStatus: 'idle',
  currentPhoto: null,
  currentPhotoStatus: 'idle',
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

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    clearRequestedPhoto(state) {
      state.currentPhotoStatus = 'idle';
      state.currentPhoto = null;
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
      });
  },
});

export const {
  clearRequestedPhoto,
} = photoSlice.actions;

export const selectPhotoList = (state) => state.photo.photoList;
export const selectPhoto = (state) => state.photo.currentPhoto;

export default photoSlice.reducer;
