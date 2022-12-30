import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const BASE_URL = process.env.REACT_APP_FIREBASEDATA_URL;
//const API_KEY = process.env.REACT_APP_FIREBASE_APIKEY;
const DATA_SEACRET = process.env.REACT_APP_FIREBASEDATA_SEACRET;
const moco_url = 'https://639cf32d16d1763ab15723af.mockapi.io';

const getTeamData = createAsyncThunk(
  'team/getTeamData',
  async (_, { getState, rejectWithValue }) => {
    const { data } = await axios.get(
      `${BASE_URL}/team.json?auth=${DATA_SEACRET}`,
    );
    const result = [];

    Object.values(data)
      .flat()
      .map(el => Object.values(el).map(el => result.push(el)));
    result.map((el, idx) => (el.id = idx));

    return result;
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
const addDataForEmployee = createAsyncThunk(
  'team/addDataForEmployee',
  async (body, { getState, dispatch }) => {
    //console.log('body', body);
    //getState().team.employee.map(el => console.log('el', el));
    const currentEmployee = getState().team.employee.filter(
      el =>
        body.department === el.department &&
        body.process === el.process &&
        body.project === el.project &&
        body.employee === el.id,
    );
    console.log('body', body);
    //console.log('currentEmployee', currentEmployee);
    //const dispatch = useDispatch();
    //const data = await axios.put(`${moco_url}/employee/${body.id}`, {
    //  ...body,
    //});
    ////dispatch(getTeamData());
    //return data;
  },
);
const addEmployee = createAsyncThunk(
  'team/addEmployee',
  async (body, { getState, dispatch }) => {
    const localId = getState().auth.localId;
    const data = await axios.post(
      `${BASE_URL}/team/${localId}.json?auth=${DATA_SEACRET}`,
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
    const localId = getState().auth.localId;
    const data = await axios.post(
      `${BASE_URL}/team/${localId}.json?auth=${DATA_SEACRET}`,
      {
        ...body,
      },
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
