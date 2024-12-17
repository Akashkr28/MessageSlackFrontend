import CreateWorkspaceContext from "@/context/CreateWorkspaceContext"
import { useContext } from "react"

export const useCreateWorkSpaceModal = () => {
    return useContext(CreateWorkspaceContext);
}