import { createSlice } from '@reduxjs/toolkit';
import { getTeamData, addDataForEmployee } from './teamOperations';

const initialState = {
  employee: [],
  //createdAt: null,
  //name: null,
  //avatar: null,
  //number: null,
  //email: null,
  //comment: null,
  //rate: null,
  //sixS: null,
  //id: null,

  error: null,
  loading: null,
};

export const teamSlice = createSlice({
  name: 'team',
  initialState: initialState,
  reducers: {
    testTeamSlice: () => {},
  },
  extraReducers: builder => {
    builder
      .addCase(getTeamData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTeamData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.employee = payload.map(el => el);
      })
      .addCase(getTeamData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addDataForEmployee.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addDataForEmployee.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log('first', payload);
        //state.employee = payload.map(el => el);
      })
      .addCase(addDataForEmployee.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { testTeamSlice } = teamSlice.actions;

export default teamSlice.reducer;
