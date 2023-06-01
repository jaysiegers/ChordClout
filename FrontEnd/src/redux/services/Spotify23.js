import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotify23API = createApi({
  reducerPath: 'spotify23API',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'c9b2502866msh1562b56ffc5a076p17e390jsnb44c2cd5ff67');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTodaysHits: builder.query({ query: () => '/playlist_tracks/?id=3mMZ3xGAURyJ71YSpVcGCK&offset=0&limit=100'}),
    getRNBPlaylist: builder.query({query: () => '/playlist/?id=37i9dQZF1EQoqCH7BwIYb7'}),
    getTodaysHitsPlaylist: builder.query({query: () => '/playlist/?id=37i9dQZF1DXcBWIGoYBM5M'}),
    getNewReleasesPlaylist : builder.query({query: () => '/playlist/?id=37i9dQZF1DX4JAvHpjipBk'}),
    getSongsBySearch: builder.query({query: (searchTerm) => `/search/?q=${searchTerm}&type=tracks`}),
    getSongsByID: builder.query({query: ({songid}) => `/tracks/?id=${songid}`}),
    getPlaylistTracksByID: builder.query({query: ({playlistid}) => `/playlist_tracks/?id=${playlistid}`}),
    getPlaylistByID: builder.query({query: ({playlistid}) => `/playlist/?id=${playlistid}`}),
  }),
});

export const {
  useGetTodaysHitsQuery,
  useGetRNBPlaylistQuery,
  useGetTodaysHitsPlaylistQuery,
  useGetNewReleasesPlaylistQuery,
  useGetSongsBySearchQuery,
  useGetSongsByIDQuery,
  useGetPlaylistTracksByIDQuery,
  useGetPlaylistByIDQuery,
} = spotify23API;