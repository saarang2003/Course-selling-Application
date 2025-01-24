import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from "@/components/ui/switch"

import React, { useState } from 'react'

function LectureTab() {

    const [title, setTitle] = useState("");
    const [uploadVideoInfo, setUploadVideoInfo] = useState(null);
    const [isFree, setIsFree] = useState(false);
    const [mediaProgress, setMediaProgress] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0); // Fixed typo here
    const [btnDisable, setBtnDisable] = useState(true); // Fixed typo here


    const fileChanehandler =async(e) =>{
        const file = e.target.files[0];
        if(file){
            
        }
    }
    
  return (
    <Card>
        <CardHeader className = 'flex justify-between '>
            <div>
                <CardTitle>Edit Lectures</CardTitle>
                <CardDescription>Make changes and click save when done </CardDescription>
            </div>
            <div className='flex items-center gap-2'>
                <Button variant = 'destructive'>remove Lecture</Button>
            </div>
        </CardHeader> 

        <CardContent>
            <div>
                <Label>Title</Label>
                <Input
                type ='text'
                placeholder = 'Ex.Introduction to Javascript  '
                />
            </div>

            <div className='my-5'>
                <Label>Video <span className='text-red-500'>*</span></Label>
                <Input
                type ='file'
                accept = 'video/*'
                placeholder = 'Ex.Introduction to Javascript  '
                className = 'w-fit'
                />
            </div>

            <div className='flex items-center space-x-2 my-5'>
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Is this Preview Free</Label> 
            </div>

            <div className='mt-4'>
                <Button>Update Lecture</Button>
            </div>
            </CardContent>  
    </Card>
  )
}

export default LectureTab;
