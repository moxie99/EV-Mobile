import axios from 'axios';

const BASE_URL = 'https://places.googleapis.com/v1/places';
const API_KEY = '';

const config = {
  headers: {
    'content-type': 'application/json',
    'X-Goog-Api-Key': API_KEY,
    'X-Goog-FieldMask': [
      'places.displayName',
      'places.formattedAddress',
      'places.location',
      'places.evChargerOptions',
      'places.photos',
    ],
  },
};

const NewNearByPlace = (data) => axios.post(BASE_URL, data, config);

export default {
  NewNearByPlace,
};
