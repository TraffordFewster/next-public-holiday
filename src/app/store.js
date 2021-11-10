import { configureStore } from '@reduxjs/toolkit';
import HolidayReducer from '../features/TodayHoliday/HolidayReducer';

export const store = configureStore({
  reducer: {
    holiday: HolidayReducer,
  },
});
