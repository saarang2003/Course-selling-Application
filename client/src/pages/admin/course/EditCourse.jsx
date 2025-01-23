import React from 'react'
import CourseTab from './CourseTab'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

function EditCourse() {
  return (
    <div className="my-24">
    <div className="flex items-center justify-between mb-5">
      <h1 className="font-bold text-xl">
        Add detail information regarding course
      </h1>
      <Link to="lecture">
        <Button className="hover:text-blue-600" variant="link">Go to lectures page</Button>
      </Link>
    </div>
    <CourseTab/>
  </div>
  )
}

export default EditCourse