'use client'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: 'Integrating API and CRON jobs',
    description: "Valorant simple match tracker and bundle pricing",
    image: '/projects/7val.webp',
    tag: ["All", "Backend"],
    gitUrl: '/',
    previewUrl: '/'
  }
];

function C2() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: any) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )

  return (
    <div className="flex flex-col flex-1 p-4 outline outline-1">
        <h2 className='mb-1'>Recent Review</h2>
        <Separator/>
        <div className='mt-2'>
            <Tabs defaultValue="All" className='items-center object-center' onValueChange={handleTagChange}>
            <TabsList className="w-full">
                <TabsTrigger value="All">All</TabsTrigger>
                <TabsTrigger value="Web">Web</TabsTrigger>
                <TabsTrigger value="Mobile">Mobile</TabsTrigger>
                <TabsTrigger value="Backend">Backend</TabsTrigger>
            </TabsList>     
            </Tabs>
        </div>
        <div className='grid grid-cols-2 mt-3 gap-2'>
          {
            filteredProjects.map((project) => (
              <Card key={project.id}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  height={200} width={300}
                  className='rounded-t-lg h-[200px] object-cover'  
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription> 
                </CardHeader>
                <CardContent>
                  <h2>{project.description}</h2>
                </CardContent>
              </Card>
            ))
          }
        </div>
    </div>
  )
}

export default C2