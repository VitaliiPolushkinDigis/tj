import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { io } from 'socket.io-client';

export const messageApi = createApi({
  reducerPath: 'messageApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});

const your_url = 'http://localhost:8001';

export const wsApi = messageApi.injectEndpoints({
  endpoints: (build) => ({
    subscribeToEvents: build.query<string[], void>({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(_arg, { dispatch, updateCachedData, cacheEntryRemoved }) {
        // Path is a prefix that will be used right after domain name
        const socket = io(`${your_url}`, {
          path: '/socket.io',
        });

        socket.on('disconnect', (reason) => {
          if (reason === 'io server disconnect') {
            // the disconnection was initiated by the server, you need to reconnect manually
            socket.connect();
          }
          // else the socket will automatically try to reconnect
        });

        socket.on('message', (event: any) => {
          // Here we should add the logic
          updateCachedData((draft) => {
            draft.push(event);
          });
          console.log('test', event);
        });

        await cacheEntryRemoved;
        socket.close();
      },
    }),
  }),
  overrideExisting: false,
});

export const { useSubscribeToEventsQuery } = wsApi;

// export const messageApi = createApi({
//   reducerPath: 'messageApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8001' }),
//   endpoints: (build) => ({
//     getWebsocketResponse: build.query<any, void>({
//       query: () => ``,
//       async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
//         try {
//           // wait for the initial query to resolve before proceeding
//           await cacheDataLoaded;

//           const socket = io('http://localhost:8001', {});
//           console.log(`socket.connected: ${socket.connected}`);
//           socket.on('connect', () => {
//             console.log('socket connected on rtk query');
//           });

//           socket.on('message', (message) => {
//             console.log(`received message: ${message}`);
//             // updateCachedData((draft) => {
//             //     draft.push(message);
//             // });
//           });

//           await cacheEntryRemoved;
//         } catch {
//           // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
//           // in which case `cacheDataLoaded` will throw
//         }
//       },
//     }),
//   }),
// });
