import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )

function C1() {
  return (
    <div className="flex flex-col p-2 mx-2 w-1/5 outline outline-1">
        <div className="max-h-80 p-2 outline outline-1">
            <h2 className="">Popular Tags</h2>
            <Separator />
            <ScrollArea className="h-40">
                    {tags.map((tag) => (       
                        <div key={tag} className="text-sm mb-4 pl-4">
                            #{tag}
                        </div>
                    ))}
            </ScrollArea>
        </div>

        <Separator className="my-4 bg-black"/>

        <div className="max-h-80 p-2 outline outline-1">
            <h2 className="">Popular Tags</h2>
            <Separator />
            <ScrollArea className="h-40">
                    {tags.map((tag) => (       
                        <div key={tag} className="text-sm mb-4 pl-4">
                            #{tag}
                        </div>
                    ))}
            </ScrollArea>
        </div>
        
    </div>
        
  )
}

export default C1