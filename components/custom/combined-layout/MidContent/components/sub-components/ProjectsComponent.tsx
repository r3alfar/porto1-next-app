'use client'
import React, { useState } from 'react'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaRegStar } from "react-icons/fa6";
import { Rating } from 'react-simple-star-rating'


const projectsData = [
	{
		id: 1,
		title: "React Portfolio Website",
		description: "Project 1 description",
		image: "/projects/1.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
		rating: 5
	},
	{
		id: 2,
		title: "Potography Portfolio Website",
		description: "Project 2 description",
		image: "/projects/2.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
		rating: 4
	},
	{
		id: 3,
		title: "E-commerce Application",
		description: "Project 3 description",
		image: "/projects/3.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
		rating: 2.5
	},
	{
		id: 4,
		title: "Food Ordering Application",
		description: "Project 4 description",
		image: "/projects/4.png",
		tag: ["All", "Mobile"],
		gitUrl: "/",
		previewUrl: "/",
		rating: 3
	},
	{
		id: 5,
		title: "React Firebase Template",
		description: "Authentication and CRUD operations",
		image: "/projects/5.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
		rating: 0.5
	},
	{
		id: 6,
		title: "Full-stack Roadmap",
		description: "Project 5 description",
		image: "/projects/6.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
		rating: 0
	},
	{
		id: 7,
		title: 'Integrating API and CRON jobs',
		description: "Valorant simple match tracker and bundle pricing",
		image: '/projects/7val.webp',
		tag: ["All", "Backend"],
		gitUrl: '/',
		previewUrl: '/',
		rating: 1
	}
];

function ProjectsComponent() {
	const [rating, setRating] = useState(0)
	const [tag, setTag] = useState("All");

	const handleTagChange = (newTag: any) => {
		setTag(newTag)
	}

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	)

	const handleCardClick = (project: any) => {
		console.log("project clicked: ", project.title);
	}

	//RATING
	const handleRating = (rate: number) => {
		setRating(rate)
	}
	const onPointerEnter = () => console.log('Enter')
	const onPointerLeave = () => console.log('Leave')
	const onPointerMove = (value: number, index: number) => console.log(value, index)

	return (
		<div className='mt-2'>
			<div className='mt-2 flex justify-center'>
				<Tabs defaultValue="All" className='' onValueChange={handleTagChange}>
					<TabsList className="grid w-[300px] grid-cols-4">
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

						<HoverCard key={project.id}>
							<HoverCardTrigger asChild>
								<Card
									className='outline outline-black outline-1'
									key={project.id}
								>
									<CardContent className='pb-0 pl-0'>
										<div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center'>
											<div className='relative col-span-8 md:col-span-4'>
												<Image
													src={project.image}
													alt={project.title}
													height={200} width={200}
													className='h-[200px] object-cover w-[200px] rounded-l-lg'
												/>
											</div>

											<div className='flex flex-col col-span-6 md:col-span-8'>
												<div className='flex justify-between items-start'>

													<div className='flex flex-col gap-0'>
														<Rating
															key={project.id}
															size={15}
															initialValue={project.rating}
															allowFraction
															readonly
															// onClick={handleRating}
															// onPointerEnter={onPointerEnter}
															// onPointerMove={onPointerMove}
															// onPointerLeave={onPointerLeave}
															SVGclassName={`inline-block`}
														/>
														<h3 className='font-semibold text-foreground/90'>{project.title}</h3>
														<p className='text-small text-foreground/80'>{project.tag.join(', ')}</p>
														<h1 className='text-large font-medium mt-2'>{project.description}</h1>
													</div>
													<Button
														size="icon"
														variant="ghost"
														className='text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2'
													>
														<FaRegStar
															className=''
														/>

													</Button>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</HoverCardTrigger>
							<HoverCardContent>
								<div className="flex justify-between space-x-4">
									<Avatar>
										<AvatarImage src={project.image} />
										<AvatarFallback>R3</AvatarFallback>
									</Avatar>
									<div className="space-y-1">
										<h4 className="text-sm font-semibold">@nextjs</h4>
										<p className="text-sm">
											The React Framework – created and maintained by @vercel.
										</p>
										<div className="flex items-center pt-2">
											<CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
											<span className="text-xs text-muted-foreground">
												Joined December 2021
											</span>
										</div>
									</div>
								</div>
							</HoverCardContent>
						</HoverCard>



					))
				}
			</div>
		</div>

	)
}

export default ProjectsComponent