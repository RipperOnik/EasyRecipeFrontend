// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Categories } from "../resources/categories";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/posts/",
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getPopularPosts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => Categories.POPULAR,
    }),
    getTrendingPosts: builder.query({
      query: () => Categories.TRENDING,
    }),
    getCuisinePosts: builder.query({
      query: (cuisineTag) => `${cuisineTag}`,
    }),
    getCertainDishPosts: builder.query({
      query: (dish) => `${dish}`
    }),
    searchPosts: builder.query({
      query: (searchQuery) => `search/${searchQuery}`
    }),
    getCertainBrowseItem: builder.query({
      query: (browseItem) => `${browseItem}`
    })



  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
  useGetPopularPostsQuery,
  useGetTrendingPostsQuery,
  useGetCuisinePostsQuery,
  useGetCertainDishPostsQuery,
  useSearchPostsQuery,
  useGetCertainBrowseItemQuery
} = apiSlice;
export default apiSlice;
