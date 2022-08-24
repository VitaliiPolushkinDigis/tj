import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { createWrapper } from 'next-redux-wrapper';
import { messageReducer } from './slices/messageReducer';
import { messageApi } from '../services/api/MessageService';
/* import counterReducer from '../features/counter/counterSlice' */

export function makeStore() {
  return configureStore({
    reducer: { user: userReducer, message: messageReducer, [messageApi.reducerPath]: messageApi.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(messageApi.middleware),
  });
}

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export const wrapper = createWrapper<AppStore>(makeStore);
