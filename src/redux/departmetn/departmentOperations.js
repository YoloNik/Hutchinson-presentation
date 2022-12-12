import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_FIREBASEDATA_URL;
//const API_KEY = process.env.REACT_APP_FIREBASE_APIKEY;
const DATA_SEACRET = process.env.REACT_APP_FIREBASEDATA_SEACRET;

const getProdData = createAsyncThunk(
  'department/getProdData',
  async (_, { getState }) => {
    const { data } = await axios.get(
      `${BASE_URL}/prodData.json?auth=${DATA_SEACRET}`,
    );
    return data;
  },
  //Object.values(data).map(el =>
  //    Object.values(el).map(el => dataForChart.push(el)),
  //  );
);

const addProdData = createAsyncThunk(
  'department/addProdData',
  async (body, { getState }) => {
    const localId = getState().auth.localId;
    const time = new Date().toLocaleString();

    const data = await axios.post(
      `${BASE_URL}/prodData/${localId}.json?auth=${DATA_SEACRET}`,
      {
        ...body,
        time: time,
      },
    );
    return data;
  },
);

export { addProdData, getProdData };