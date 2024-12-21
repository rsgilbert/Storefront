import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorMessageFor } from "../../data";
import { enqueueSnackbar } from "notistack";
import configuration from "../../configuration";



const { baseUrl } = configuration
export const itemServiceApi = createApi({
    reducerPath: 'Item',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            // const token = keycloakService.getToken()
            // headers.set('authorization', `Bearer ${token}`)

            // return headers;
        },
    }),

    tagTypes: ['Items'],
    endpoints: (builder) => ({
        items: builder.query({
            query: () => `Item`,
            providesTags: ['Items'],
            transformErrorResponse,
        }),
        itemByNo: builder.query({
            query: (args) => `Item/${args.Id}`,
            providesTags: ['Items'],
            transformErrorResponse,
        }),
        createItem: builder.mutation({
            query: (args) => ({
                url: `Item`,
                method: 'POST',
                providesTags: ['Items'],
                body: args
            }),
            transformErrorResponse,
            invalidatesTags: ['Items'],

        }),

        updateItem: builder.mutation({
            query: args => ({
                url: `Item/${args.Id}`,
                method: 'PATCH',
                body: args
            }),
            transformResponse: (response) => transformResponseWithSnackbar(response, 'Saved successfully'),
            transformErrorResponse,
            invalidatesTags: ['Items']
        }),
        deleteItem: builder.mutation({
            query: ({ Id }) => ({
                url: `Item/${Id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Items'],
            transformErrorResponse,
        }),
    })
});


function transformErrorResponse(response) {
    enqueueSnackbar(errorMessageFor(response), { variant: 'error' })
    return response
}

function transformResponseWithSnackbar(response, message) {
    enqueueSnackbar(message, { variant: 'success' })
    return response
}

export const {
    useItemsQuery,
    useItemByNoQuery,
    useUpdateItemMutation,
    useCreateItemMutation,
    useDeleteItemMutation,

} = itemServiceApi;
