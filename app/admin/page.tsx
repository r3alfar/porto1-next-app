'use client'

import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Fragment, useRef, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  username: z.string().min(3, { message: "Must be 3 or more characters long" }).max(16, { message: "ini username bukan ktp bung kurangi dari 16 character" }),
  password: z.string().min(5, { message: "Must be 5 or more characters long" }),
  blog_type: z.string(),
  rating: z.number().max(10, { message: "Rating max on 10" }),
  review: z.string(),
  memorable_moment: z.string(),
  memorable_track: z.string(),
  //api independent
  title: z.string(),
  release_date: z.string(),
  genre: z.string(),
  thumbnail: z.string(),
  //api dependant (for detail page)
  description: z.string(),
  short_review: z.string(),
  chips: z.string({ required_error: "Please choose at least one" })
})

const select_blogItem = [
  { id: 1, tags: 'mopie' },
  { id: 2, tags: 'blogs' },
  { id: 3, tags: 'games' },
  { id: 4, tags: 'learn' }
]

function PostForm() {
  const [tag, setTag] = useState("movie")

  const handleTagChange = (newTag: any) => {
    setTag(newTag)
    console.log(tag)
  }

  const { toast } = useToast()
  // 1. define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  })

  //2. onsubmit function
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You Submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
    console.log(values)
  }

  function FormBlog() {
    const [range, setRange] = useState();
    const [lastChange, setLastChange] = useState();
    const [readOnly, setReadOnly] = useState(false);

    const quillRef = useRef();

    return (
      <>
        <div className="col-span-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>Tell us what you learn, experience, and what you want to share :)</FormDescription>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>

        <div className="col-span-2">
          <FormField
            control={form.control}
            name="review"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us your review in here"
                    />
                  </FormControl>
                  <FormDescription>This text will be shown in review section</FormDescription>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>

        <div className="col-span-2">
          <FormField
            control={form.control}
            name="chips"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="What is your post genre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      select_blogItem.map((item) => (
                        <SelectItem value={item.tags}>{item.tags}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>


      </>
    )
  }

  function FormBlog2() {
    return (
      <div className="col-span-2 flex flex-col items-center">
        <div className="col-span-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>Tell us what you learn, experience, and what you want to share :)</FormDescription>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>

        <div className="col-span-2">
          <FormField
            control={form.control}
            name="review"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us your review in here"
                    />
                  </FormControl>
                  <FormDescription>This text will be shown in review section</FormDescription>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>

        <div className="col-span-2">
          <FormField
            control={form.control}
            name="chips"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="What is your post genre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      select_blogItem.map((item) => (
                        <SelectItem value={item.tags}>{item.tags}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
      </div>

    )
  }

  function DummyForms() {
    <>
      <div className="col-span-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your public display name</FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>

      <div className="col-span-2">
        <FormField
          control={form.control}
          name="review"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Review</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us your review in here"
                  />
                </FormControl>
                <FormDescription>This text will be shown in review section</FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>

      <div className="col-span-2">
        <FormField
          control={form.control}
          name="short_review"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Short-Review</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Nutshell review"
                  />
                </FormControl>
                {/* <FormDescription>This text will be shown in review section</FormDescription> */}
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>

      <div>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your public display name</FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>

      <div>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your public display name</FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>
    </>
  }

  function DummyFormsOld() {
    <>
      <div className="col-span-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your public display name</FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>

      <div>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="min 5 characters" {...field} />
                </FormControl>
                <FormDescription>Please keep your password safe</FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>

      <div>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="min 5 characters" {...field} />
                </FormControl>
                <FormDescription>Please keep your password safe</FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>

      <div className="col-span-2">
        <Button type="submit">Submit</Button>
      </div>
    </>
  }

  return (
    <div className="flex flex-col justify-between">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto mt-4 grid max-w-screen-lg grid-cols-2 gap-x-12 gap-y-4">
          <div className="col-span-2 flex flex-col items-center">
            <Tabs defaultValue="movie" className="" onValueChange={handleTagChange}>
              <TabsList className="grid w-[200px] grid-cols-3">
                <TabsTrigger value="movie">Movie</TabsTrigger>
                <TabsTrigger value="game">Game</TabsTrigger>
                <TabsTrigger value="blog">Blog</TabsTrigger>
              </TabsList>

              <TabsContent value="movie">
                <p>movie</p>
              </TabsContent>

              <TabsContent value="game">
                <p>Game</p>
              </TabsContent>

              <TabsContent value="blog">
                <p>blog</p>
              </TabsContent>
            </Tabs>
          </div>

          {
            tag === "movie" ?
              <p>Movie</p>
              : tag === "game" ?
                <p>Game</p>
                : tag === "blog" ?
                  <FormBlog />
                  : null
          }

        </form>
      </Form>
    </div>

  )
}

export default PostForm
