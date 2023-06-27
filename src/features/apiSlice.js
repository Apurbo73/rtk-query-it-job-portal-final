import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://it-job-portal-server.onrender.com"
  }),
  tagTypes: ["Jobs", "Detail"],
  endpoints: builder => ({
    getAllJobs: builder.query({
      query: () => "/jobs",
      providesTags: ["Jobs"]
    }),
    addJob: builder.mutation({
      query: data => ({
        url: `/jobs`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Jobs", "Detail"]
    }),
    seeDetail: builder.query({
      query: id => `/jobs/${id}`,
      providesTags: ["Detail"]
    }),
    deleteJob: builder.mutation({
      query: id => ({
        url: `/jobs/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Jobs", "Detail"]
    }),
    updateJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/jobs/${id}`,
        method: "PATCH",
        body: data
      }),
      invalidatesTags: ["Jobs", "Detail"]
    })
  })
});

export const {
  useGetAllJobsQuery,
  useAddJobMutation,
  useSeeDetailQuery,
  useDeleteJobMutation,
  useUpdateJobMutation
} = apiSlice;
