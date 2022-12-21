import { createSlice } from '@reduxjs/toolkit';
import { getProdData } from './departmentOperations';

const currenDate = new Date().toLocaleString();
const day = currenDate.split('').slice(0, 10);
const time = currenDate.split('').slice(12);

const initialState = {
  name: '',
  shift: {
    id: time,
    leader: {
      avatar: '',
      name: '',
    },
    place: {
      cut: {
        id: '',
        quontity: {
          sum: '',
          ok: '',
          nok: '',
          rework: '',
        },
      },
      form: {
        id: '',
        quontity: {
          sum: '',
          ok: '',
          nok: '',
          rework: '',
        },
      },
      finish: {
        id: '',
        quontity: {
          sum: '',
          ok: '',
          nok: '',
          rework: '',
        },
      },
    },
    productions: [{ id: '', sum: '', ok: '', nok: '', rework: '', quote: '' }],
    malfunction: {
      id: '',
      time: {
        start: '',
        end: '',
        sum: '',
      },
      accidentPlace: '',
      title: '',
      discription: '',
      repairsBy: '',
      status: '',
      prioriteit: '',
      foto: {
        befor: '',
        after: '',
      },
    },
  },
};

export const departmentSlice = createSlice({
  name: 'department',
  initialState: initialState,
  reducers: {
    //testDepartmentSlice: () => {},
  },
  extraReducers: builder => {
    builder
      //signUp------------------------------------------------
      .addCase(getProdData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProdData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.shift.productions = payload;
      })
      .addCase(getProdData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { testDepartmentSlice } = departmentSlice.actions;

export default departmentSlice.reducer;
