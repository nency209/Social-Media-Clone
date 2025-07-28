/* eslint-disable @typescript-eslint/no-explicit-any */
// Features/notifications/notificationsSlice.ts
import { createSlice} from '@reduxjs/toolkit';
import { fetchNotifications } from './notificationsThunk';



const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    data: [] as any[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNotifications.pending, state => {
        state.loading = true;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching notifications';
      });
  },
});

export default notificationsSlice.reducer;
