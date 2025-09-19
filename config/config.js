export const API_URL = "http://localhost:8000/api/v1";
const IMAGE_URL = "http://localhost:8000/storage";
export const getImageUrl = (image) => {
    let data = image ? `${IMAGE_URL}/${image}` : '';
    return data;
  }