import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const BASE_URL = process.env.REACT_APP_FIREBASEDATA_URL;
//const API_KEY = process.env.REACT_APP_FIREBASE_APIKEY;
const DATA_SEACRET = process.env.REACT_APP_FIREBASEDATA_SEACRET;
const moco_url = 'https://639cf32d16d1763ab15723af.mockapi.io';

const getTeamData = createAsyncThunk(
  'team/getTeamData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${moco_url}/employee`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  },
);

const addCommentForEmployee = createAsyncThunk(
  'team/addCommentForEmployee',
  async (body, { getState, dispatch }) => {
    //const dispatch = useDispatch();
    const data = await axios.put(`${moco_url}/employee/${body.id}`, {
      ...body,
    });
    dispatch(getTeamData());
    return data;
  },
);
const addTeamData = createAsyncThunk(
  'team/addTeamData',
  async (body, { getState, dispatch }) => {
    const data = await axios.post(`${moco_url}/employee`, {
      ...body,
    });
    dispatch(getTeamData());
    return data;
  },
);
const deleteTeamData = createAsyncThunk(
  'team/deleteTeamData',
  async (body, { getState, dispatch }) => {
    const data = await axios.delete(`${moco_url}/employee/${body}`, {
      ...body,
    });
    dispatch(getTeamData());
    return data;
  },
);

export { addCommentForEmployee, getTeamData, addTeamData, deleteTeamData };
