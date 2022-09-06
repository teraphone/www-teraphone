import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { peachoneApi } from './api';

export const store = configureStore({
    reducer: {
        [peachoneApi.reducerPath]: peachoneApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peachoneApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;