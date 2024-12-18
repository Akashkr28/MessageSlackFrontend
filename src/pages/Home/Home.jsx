import { UserButton } from "@/components/atoms/UserButton/UserButton"
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const { isFetching, workspaces } = useFetchWorkspace();

    const navigate = useNavigate();

    useEffect(() => {
        if(isFetching) return;

        console.log('Workspaces downloaded is', workspaces);

        if(workspaces.length === 0 || !workspaces) {
            console.log('No workspaces found, create one');
        } else {
            navigate(`/workspaces/${workspaces[0].id}`);
        }

    }, [isFetching, workspaces, navigate]);

    return (
        <>
            <h1>Home</h1>
            <UserButton/>
        </>
    )
}