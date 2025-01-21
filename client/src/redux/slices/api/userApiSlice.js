import { apiSlice } from "../apiSlice.js";

const USER_URL = "/user"

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        updateUser: builder.mutation({
            query: (data)=> ({
                url: `${USER_URL}/profile`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),

        register: builder.mutation({
            query: (data)=> ({
                url: `${USER_URL}/register`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),
    }),
});

export const { useUpdateUserMutation }= userApiSlice