import mongoose from 'mongoose'; // Import mongoose
import Course from '../models/course.model.js';
import Lecture from '../models/lecture.model.js'
import { deleteMediaFromCloudinary, uploadMedia } from '../utils/cloudinary.js';


export const createCourse = async (req, res) => {
    try {
        const { courseTitle, category } = req.body;
        
        if (!courseTitle || !category) {
            return res.status(400).json({
                message: "Course title and category are required."
            });
        }

        const course = await Course.create({
            courseTitle,
            category,
            creator: req.id
        });

        return res.status(201).json({
            course,
            message: "Course created."
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to create course"
        });
    }
};



export const getCreatorCourse = async( req,res) =>{

    try {      
        const userId = req.id;
        const courses = await Course.find({creator:userId});
        if(!courses){
            return res.status(404).json({
                courses:[],
                message:"Course not found"
            })
        };
        return res.status(200).json({
            courses,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Failed to create course"
        });
    }
}

export const editCourse =  async(req,res) =>{
    try {
        const courseId = req.params.courseId;
        const {courseTitle, subTitle, description, category, courseLevel, coursePrice} = req.body;
        const thumbnail = req.file;

        let course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({
                message:"Course not found!"
            })
        }
        let courseThumbnail;
        if(thumbnail){
            if(course.courseThumbnail){
                const publicId = course.courseThumbnail.split("/").pop().split(".")[0];
                await deleteMediaFromCloudinary(publicId);
            }
            courseThumbnail = await uploadMedia(thumbnail.path);
        }

        const updateData = {courseTitle, subTitle, description, category, courseLevel, coursePrice, courseThumbnail:courseThumbnail?.secure_url};
        course = await Course.findByIdAndUpdate(courseId, updateData, {new:true});

        return res.status(200).json({
            course,
            message:"Course updated successfully."
        })

    } catch (error) {
        return res.status(500).json({
            message: "Failed to create course"
        });
    }
}

export const getCourseById = async (req,res) => {
    try {
        const {courseId} = req.params;

        const course = await Course.findById(courseId);

        if(!course){
            return res.status(404).json({
                message:"Course not found!"
            })
        }
        return res.status(200).json({
            course
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Failed to get course by id"
        })
    }
}


export const createLecture = async (req, res) => {
    try {
        const { lectureTitle } = req.body;
        const { courseId } = req.params;

        if (!lectureTitle || !courseId) {
            return res.status(404).json({
                message: "Lecture Title and Course ID are required"
            });
        }

        // Create the lecture
        const lecture = await Lecture.create({ lectureTitle });

        // Find the course by ID
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        // Add the lecture to the course
        course.lectures.push(lecture._id);
        await course.save();

        return res.status(201).json({
            lectures: course.lectures,  // Corrected variable name
            message: "Lecture created successfully"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to create lecture"
        });
    }
}


export const getCourseLecture = async(req , res) =>{
    try {
        const {courseId} = req.params;
        const course = await Course.findById(courseId).populate("lecture title");

        if(!course){
            return res.status(404).json({
                message : "Course not found"
            })
        }

       return res.status(404).json({
        lecture : course.lectures
       })
        

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Failed to get course by id"
        })
    }
}


