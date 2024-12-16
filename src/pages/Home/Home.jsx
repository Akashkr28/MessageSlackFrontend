import { UserButton } from "@/components/atoms/UserButton/UserButton"
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace"

export const Home = () => {

    const { isFetching, workspaces } = useFetchWorkspace();

    return (
        <>
            <h1>Home</h1>
            <UserButton/>
        </>
    )
}