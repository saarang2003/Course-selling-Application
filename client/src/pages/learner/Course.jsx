import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import React from 'react'

function Course() {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
    <div className="relative">
      <img
        src= 'https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg'
        alt="course"
        className="w-full h-36 object-cover rounded-t-lg"
      />
    </div>
    <CardContent className="px-5 py-4 space-y-3">
      <h1 className="hover:underline font-bold text-lg truncate">
      Next js Beginner to Advance
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={ "https://github.com/shadcn.png"} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="font-medium text-sm">Abhishek Singh</h1>
        </div>
        <Badge className={'bg-green-400 text-slate-800 px-2 border hover:text-white py-1 text-xs rounded-full'}>
          Best Seller  
        </Badge>
      </div>
      <div className='flex flex-col gap-2 '>
        <CardDescription>
          
        </CardDescription>

      </div>
      <div className="text-lg font-bold">
          <span>₹300</span>
      </div>
    </CardContent>
  </Card>
  )
}

export default Course