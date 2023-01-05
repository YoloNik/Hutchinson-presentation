import { Construction } from '@mui/icons-material';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const BASE_URL = process.env.REACT_APP_FIREBASEDATA_URL;
//const API_KEY = process.env.REACT_APP_FIREBASE_APIKEY;
const DATA_SEACRET = process.env.REACT_APP_FIREBASEDATA_SEACRET;
const moco_url = 'https://639cf32d16d1763ab15723af.mockapi.io';

const getTeamData = createAsyncThunk(
  'team/getTeamData',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/team.json?auth=${DATA_SEACRET}`,
      );

      const result = [];

      Object.values(data).map((nestedObj, idx) => {
        const comments = [];
        const prodData = [];
        for (let key in nestedObj.comments) {
          comments.push(nestedObj.comments[key]);
        }
        for (let key in nestedObj.prodData) {
          prodData.push(nestedObj.prodData[key]);
        }
        return result.push({
          ...nestedObj,
          id: Object.keys(data)[idx],
          comments: comments,
          prodData: prodData,
        });
      });

      return result;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error.response.data.error.message);
    }
  },
);

const addCommentForEmployee = createAsyncThunk(
  'team/addCommentForEmployee',
  async (body, { getState, dispatch }) => {
    const data = await axios.post(
      `${BASE_URL}/team/${body.currentEmployee.id}/comments.json?auth=${DATA_SEACRET}`,
      {
        ...body.values,
      },
    );

    dispatch(getTeamData());
    return data;
  },
);
const addDataForEmployee = createAsyncThunk(
  'team/addDataForEmployee',
  async (body, { getState, dispatch }) => {
    const data = await axios.post(
      `${BASE_URL}/team/${body.employeeId}/prodData.json?auth=${DATA_SEACRET}`,
      {
        ...body,
      },
    );
    return data;
  },
);
const addEmployee = createAsyncThunk(
  'team/addEmployee',
  async (body, { getState, dispatch }) => {
    const localId = getState().auth.localId;
    const data = await axios.post(
      `${BASE_URL}/team.json?auth=${DATA_SEACRET}`,
      {
        ...body,
      },
    );
    dispatch(getTeamData());
    return data;
  },
);
const deleteTeamData = createAsyncThunk(
  'team/deleteTeamData',
  async (body, { getState, dispatch }) => {
    const data = await axios.delete(
      `${BASE_URL}/team/${body}.json?auth=${DATA_SEACRET}`,
    );
    dispatch(getTeamData());
    return data;
  },
);

export {
  addCommentForEmployee,
  addDataForEmployee,
  getTeamData,
  addEmployee,
  deleteTeamData,
};
