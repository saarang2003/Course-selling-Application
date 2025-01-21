import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const COURSE_API = "http://localhost:8000/api/v1/course" ;


export const courseApi = createApi({
    reducerPath :"courseApi" , 
    tagTypes : ["Refetch_create_course"] , 
    baseQuery : fetchBaseQuery({
        baseUrl : COURSE_API,
        credentials : "include"
    }) , 
    endpoints : (builder) =>({
        createCourse : builder.mutation({
            query : ({courseTitle , category}) =>({
                url : "/create",
                method : "POST",
                body : {courseTitle , category}
            }),
    invalidatesTags : ["Refetch_create_course"] , 

        }) , 
        getCreatorCourse : builder.query({
            query : () =>({
                url : "",
                method : "GET"
            }),
    invalidatesTags : ["Refetch_create_course"] , 

        }),
    })
});

export const {
    useCreateCourseMutation ,
    useGetCreatorCourseQuery
} = courseApi;