import EditCourse from "@/pages/admin/course/EditCourse";
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
    providesTags : ["Refetch_create_course"] , 
        }),
        editCourse : builder.mutation({
            query : ({formData , courseId}) =>({
                url : `/${courseId}`,
                method : "PUT" , 
                body :formData
            }
            ),
        invalidatesTags : ["Refetch_create_course"] , 
        }),
        getCourseById : builder.query({
            query : ({formData , courseId}) =>({
                url : `/${courseId}`,
                method : 'GET' , 
            })
        }),
        createLecture : builder.mutation({
            query : ({lectureTitle , courseId}) =>({
                url : `/${courseId}/lecture`,
                method : "POST",
                body : {lectureTitle}
            })
        }),
        getCourseLecture : builder.query({
            query : (courseId) =>({
                url : `/${courseId}/lecture`,
                method : "GET",
            })
        }),
    
    })
});

export const {
    useCreateCourseMutation ,
    useGetCreatorCourseQuery ,
    useEditCourseMutation ,
    useGetCourseByIdQuery ,
    useCreateLectureMutation , 
    useGetCourseLectureQuery
} = courseApi;