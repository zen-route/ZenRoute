import axiosInstance from '../services/axiosInstance';

export const getCoordsFromPlace = async (place: string) => {
  try {
    const res = await axiosInstance.post('/locations/geocode/', {
      name: place,
    });
    return res.data;
  } catch (err) {
    console.log('ERROR FETCHING COORDS FROM PLACE: ', err);
  }
};
