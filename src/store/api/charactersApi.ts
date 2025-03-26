import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, CharactersResponse } from '../types';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, void>({
      query: () => '/character',
    }),
    getCharacterById: builder.query<Character, number>({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const { 
  useGetCharactersQuery, 
  useGetCharacterByIdQuery 
} = charactersApi;