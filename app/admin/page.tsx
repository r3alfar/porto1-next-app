'use client'

import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import {useToast} from "@/components/ui/use-toast"

const formSchema = z.object({
  username: z.string().min(3, {message: "Must be 3 or more characters long"}).max(16, {message: "ini username bukan ktp bung kurangi dari 16 character"}),
  password: z.string().min(5, {message:"Must be 5 or more characters long"})
})

function PostForm() {

  const {toast} = useToast()
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

  return (
    <div className="flex flex-col justify-between">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto mt-4 grid max-w-screen-lg grid-cols-2 gap-x-12 gap-y-8">
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="username"
              render={({field}) => {
                return(
                <FormItem>
                  <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name</FormDescription>
                    <FormMessage/>
                </FormItem>
                )
              }}
            />
          </div>
          
          <div>
          <FormField
            control={form.control}
            name="password"
            render={({field}) => {
              return(
              <FormItem>
                <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="min 5 characters" {...field}/>
                  </FormControl>
                  <FormDescription>Please keep your password safe</FormDescription>
                  <FormMessage/>
              </FormItem>
              )
            }}
          />
          </div>
          
          <div>
          <FormField
            control={form.control}
            name="password"
            render={({field}) => {
              return(
              <FormItem>
                <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="min 5 characters" {...field}/>
                  </FormControl>
                  <FormDescription>Please keep your password safe</FormDescription>
                  <FormMessage/>
              </FormItem>
              )
            }}
          />
          </div>
          
          <div className="col-span-2">
            <Button type="submit">Submit</Button>
          </div>
          
        </form>
      </Form>
    </div>
    
  )
}

export default PostForm
