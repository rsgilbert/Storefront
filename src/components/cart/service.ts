import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorMessageFor } from "../../data";
import { enqueueSnackbar } from "notistack";
import configuration from "../../configuration";
import { CartItem, CreateCartItem } from "../../decl";



const { baseUrl } = configuration
export const cartItemServiceApi = createApi({
    reducerPath: 'CartItem',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            // const token = keycloakService.getToken()
            // headers.set('authorization', `Bearer ${token}`)

            // return headers;
        },
    }),

    tagTypes: ['CartItems'],
    endpoints: (builder) => ({
        cartItems: builder.query<CartItem[], void>({
            query: () => `CartItem?sessionId=abcde`,
            providesTags: ['CartItems'],
            transformErrorResponse,
        }),
        cartItemById: builder.query<CartItem, { Id: string }>({
            query: (args) => `CartItem/${args.Id}?sessionId=abcde`,
            providesTags: ['CartItems'],
            transformErrorResponse,
        }),
        createCartItem: builder.mutation<CartItem, CreateCartItem>({
            query: (args) => ({
                url: `CartItem`,
                method: 'POST',
                providesTags: ['CartItems'],
                body: {
                    ItemId: args.ItemId,
                    Quantity: args.Quantity,
                    SessionId: 'abcde',
                    UserId: 'TestUser'
                }
            }),
            transformErrorResponse,
            invalidatesTags: ['CartItems'],

        }),

        checkoutCartItems: builder.mutation<void,void>({
            query: () => ({
                url: `CartItem/Checkout?sessionId=abcde`,
                method: 'POST',
                providesTags: ['CartItems'],
            }),
            transformErrorResponse,
            invalidatesTags: ['CartItems'],

        }),

        updateCartItem: builder.mutation<CartItem, CartItem>({
            query: args => ({
                url: `CartItem/${args.Id}`,
                method: 'PATCH',
                body: args
            }),
            transformResponse: (response) => transformResponseWithSnackbar(response, 'Saved successfully'),
            transformErrorResponse,
            invalidatesTags: ['CartItems']
        }),
        deleteCartItem: builder.mutation<void, { Id: string }>({
            query: ({ Id }) => ({
                url: `CartItem/${Id}`,
                method: 'delete',
            }),
            invalidatesTags: ['CartItems'],
            transformErrorResponse,
        }),

        
    })
});


function transformErrorResponse(response: any) {
    enqueueSnackbar(errorMessageFor(response), { variant: 'error' })
    return response
}

function transformResponseWithSnackbar(response: any, message: string) {
    enqueueSnackbar(message, { variant: 'success' })
    return response
}

export const {
    useCartItemsQuery,
    useCartItemByIdQuery,
    useUpdateCartItemMutation,
    useCreateCartItemMutation,
    useDeleteCartItemMutation,
    useCheckoutCartItemsMutation

} = cartItemServiceApi;
