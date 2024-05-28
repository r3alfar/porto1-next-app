'use client'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import ProjectsComponent from './sub-components/ProjectsComponent'
import BlogsComponent from './sub-components/BlogsComponent'

function C2() {

  return (
    <div className="flex flex-col flex-1 p-4 outline outline-1">
      <h2 className='mb-1'>Recent Review</h2>
      <Separator />
      <ProjectsComponent />
      <BlogsComponent />

    </div>
  )
}

export default C2