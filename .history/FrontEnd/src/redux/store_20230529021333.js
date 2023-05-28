import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

import { spotify23API } from './services/Spotify23';

export const store = configureStore({
  reducer: {
    [spotify23API.reducerPath]: spotify23API.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotify23API.middleware),
});