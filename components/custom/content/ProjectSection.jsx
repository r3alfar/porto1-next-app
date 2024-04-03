'use client'
import ProjectCard from "./ProjectCard";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

function ProjectSection() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )


  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold mt-4 mb-4 md:mb-6">My Projects</h2>
      <div className="flex-1">
        <Tabs defaultValue="All" onValueChange={handleTagChange}>
          <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[520px] xl:border dark:border-none">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Web">Web</TabsTrigger>
            <TabsTrigger value="Mobile">Mobile</TabsTrigger>
            <TabsTrigger value="Backend">Backend</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>
        ))}
      </div>
    </section>
  )
}

export default ProjectSection