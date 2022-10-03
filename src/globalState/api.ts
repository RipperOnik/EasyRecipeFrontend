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
    getEasyPosts: builder.query({
      query: () => Categories.EASY
    }),
    getKidPosts: builder.query({
      query: () => Categories.KID_FRIENDLY
    }),
    getMainDishPosts: builder.query({
      query: () => Categories.MAIN_DISH
    }),
    getDessertsPosts: builder.query({
      query: () => Categories.DESSERTS
    }),
    getAppetizersPosts: builder.query({
      query: () => Categories.APPETIZERS
    }),
    getSaladsPosts: builder.query({
      query: () => Categories.SALADS
    }),
    getVegetarianPosts: builder.query({
      query: () => Categories.VEGETARIAN
    }),
    getSideDishPosts: builder.query({
      query: () => Categories.SIDE_DISH
    }),
    getCertainDishPosts: builder.query({
      query: (dish) => `${dish}`
    }),
    searchPosts: builder.query({
      query: (searchQuery) => `search/${searchQuery}`

    })


  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
  useGetPopularPostsQuery,
  useGetTrendingPostsQuery,
  useGetCuisinePostsQuery,
  useGetEasyPostsQuery,
  useGetKidPostsQuery,
  useGetAppetizersPostsQuery,
  useGetMainDishPostsQuery,
  useGetDessertsPostsQuery,
  useGetSaladsPostsQuery,
  useGetVegetarianPostsQuery,
  useGetSideDishPostsQuery,
  useGetCertainDishPostsQuery,
  useSearchPostsQuery
} = apiSlice;
export default apiSlice;
