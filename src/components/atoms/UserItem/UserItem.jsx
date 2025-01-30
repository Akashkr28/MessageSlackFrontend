import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Link } from "react-router-dom"

const userItemVariants = cva(
    'flex items-center gap-1.5 justify-start font-normal h-7 px-4 mt-3 text-sm',
    {
        variants: {
            variant: {
                default: 'text-[#f9edffcc]',
                active: 'text-[#481350] bg-white/90 hover:bg-white/80'
            }
        },
        defaultVariants: 'default'
    }
);

export const UserItem = ({
    id,
    label = 'Member',
    image,
    variant,
    onRemove 
}) => {
    const { workspace } = useCurrentWorkspace();
    

    return (
        <Button className={cn(userItemVariants({variant}))}
            variant="transparent"
            sizw="sm"
            asChild
            >
            <Link to={`/workspace/${workspace?._id}/members/${id}`}>
                <Avatar>
                    <AvatarImage src={image} className='rounded-md'/>
                    <AvatarFallback
                        className='rounded-md bg-sky-500 text-white'
                    >
                        {label.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <span className="text-sm truncate">
                    {label}
                </span>
                {onRemove && (
                    <Button
                        variant="transparent"
                        size="sm"
                        className="ml-auto"
                        onClick={onRemove}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/>
                        </svg>
                    </Button>
                )}
            </Link>

        </Button>
    )
}