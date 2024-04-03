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
    <div className="mt-4 grid w-full max-w-sm items-center m-10 gap-1.5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default PostForm
