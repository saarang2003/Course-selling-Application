import {createApi} from '@reduxjs/toolkit/query/react' 
import { userLoggedIn } from '../authSlice';


const USER_API = "http://localhost:8000/api/v1/user/login";


export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:USER_API,
        credentials:'include'
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
          query: (inputData) => ({
            url : "register",
            method : 'POST',
            body : inputData
          })
        }),
      }),
      endpoints: (builder) => ({
        loginUser: builder.mutation({
          query: (inputData) => ({
            url : "login",
            method : 'POST',
            body : inputData
          })
        }),

        async onQueryStarted(_ , {queryFulfilled , dispatch }){
            try {
                const result = await queryFulfilled;
                dispatch(userLoggedIn({user : result?.data?.user}));
            } catch (error) {
                console.log(error.message);
            }
        }
      }),

      logoutUser : builder.mutation({
        query : () =>({
            url : "logout",
            method : "GET"
        }),
        async onQueryStarted(_ , {queryFulfilled , dispatch}){
            try {
                dispatch(userLoggedOut());
            }catch (error) {
                console.log(error.message);
            }
        }
      })

   

});