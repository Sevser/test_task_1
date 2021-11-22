import axios from 'axios';
// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export async function fetchListPhotos() {
  try {
    const res = await axios.get('https://boiling-refuge-66454.herokuapp.com/images')
    return res && res.data;
  } catch (e) {
    throw Error(e.message || 'fetch list photos error');
  }
}

export async function fetchPhotoById(imageId = null) {
  if (!imageId) {
    throw Error('imageId is required parameter');
  }
  try {
    const res = await axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}`)
    return res && res.data;
  } catch (e) {
    throw Error(e.message || 'fetch photo by id error');
  }
}

export async function addCommentToPhoto(imageId, comment) {
  try {
    const res = await axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}/comments`, comment);
    if (res.status === 204) {
      return res && res.data;
    }
    throw Error(res.data);
  } catch (e) {
    throw Error(e.message || 'add comment to photo error');
  }
}

