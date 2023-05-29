import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotify23API = createApi({
  reducerPath: 'spotify23API',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '5acd975bddmsh009980f5cb03d07p1a6706jsnc44dc5691472');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTodaysHits: builder.query({ query: () => '/playlist_tracks/?id=3mMZ3xGAURyJ71YSpVcGCK&offset=0&limit=100'}),
    getRNBPlaylist: builder.query({query: () => '/playlist/?id=37i9dQZF1EQoqCH7BwIYb7'}),
    getTodaysHitsPlaylist: builder.query({query: () => '/playlist/?id=37i9dQZF1DXcBWIGoYBM5M'}),
  }),
});

export const {
  useGetTodaysHitsQuery,
  useGetRNBPlaylistQuery,
  useGetTodaysHitsPlaylistQuery,
} = spotify23API;