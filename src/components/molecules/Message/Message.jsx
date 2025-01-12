import { MessageImageThumbnail } from "@/components/atoms/MessageImageThumbnail/MessageImageThumbnail"
import { MessageRenderer } from "@/components/atoms/MessageRenderer/MessageRenderer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Message = ({ 
    authorImage,
    authorName,
    createdAt,
    body,
    image,
    isSender  // Add a prop to determine if the message is sent by the current user
 }) => {
    return (
        <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} p-1.5 px-5 hover:bg-gray-100/60 group relative`}>
            <div className="flex items-center gap-2">
                {!isSender && (
                    <button>
                        <Avatar>
                            <AvatarImage className='rounded-md' src={authorImage}/>
                            <AvatarFallback className='rounded-md bg-sky-500 text-white text-sm'>
                                {authorName}
                            </AvatarFallback>
                            console.log('Author name: ', authorName);
                        </Avatar>
                    </button>
                )}
                
                <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 ${isSender ? 'bg-blue-100' : 'bg-gray-100'} rounded-xl ${isSender ? 'rounded-bl-xl' : 'rounded-br-xl'} dark:${isSender ? 'bg-blue-700' : 'bg-gray-700'}`}>
                    <div className="text-xs">
                        <button>
                            {authorName}
                        </button>
                        <span>&nbsp;&nbsp;</span>
                        <button className="text-xs text-muted-foreground hover:underline">
                            {createdAt || 'Just now'}
                        </button>
                    </div>

                    <MessageRenderer value={body}/>
                    {/* Any images if there are */}
                    {image && <MessageImageThumbnail url={image}/>}
                </div>
                
                {isSender && (
                    <button>
                        <Avatar>
                            <AvatarImage className='rounded-md' src={authorImage}/>
                            <AvatarFallback className='rounded-md bg-sky-500 text-white text-sm'>
                                {authorName}
                            </AvatarFallback>
                            console.log('Author name: ', authorName);
                        </Avatar>
                    </button>
                )}
            </div>
        </div>
    )
}
