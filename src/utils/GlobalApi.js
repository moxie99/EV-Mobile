const BASE_URL = 'https://places.googleapis.com/v1/places';
const API_KEY = '';

const config = {
  headers: {
    'content-type': 'application/json',
    'X-Goog-Api-Key': API_KEY,
    'X-Goog-FieldMask': ['places.displayName', 'places.formattedAddress'],
  },
};
