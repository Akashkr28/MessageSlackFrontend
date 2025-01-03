import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { useCreateWorkspace } from "@/hooks/apis/workspaces/useCreateWorkspace";
import { useCreateWorkSpaceModal } from "@/hooks/context/useCreateWorkspaceModals";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateWorkspaceModal = () => {

    const queryClient = useQueryClient()

    const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } = useCreateWorkSpaceModal();

    const { isPending, createWorkspaceMutation } =useCreateWorkspace();

    const [workspaceName, setWorkspaceName] = useState('');

    const navigate = useNavigate();

    function handleClose() {
        setOpenCreateWorkspaceModal(false);
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        try {
            const data = await createWorkspaceMutation({
                name: workspaceName
            });
            console.log('Successfully created workspace', data);
            navigate(`/workspaces/${data._id}`);
            queryClient.invalidateQueries('fetchWorkspaces');
        } catch (error) {
            console.log('Error creating workspace', error);
        } finally {
            setWorkspaceName('');
            setOpenCreateWorkspaceModal(false);
        }
    }

    return (
        <Dialog
            open={openCreateWorkspaceModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a New Workspace</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleFormSubmit}>
                    <Input
                        required
                        minLength={3}
                        placeholder="Put the workspace name e.g. My Workspace, Dev Workspace etc..."
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                    />


                    <div className="flex justify-end mt-5">
                        <Button disabled={isPending}>Create Workspace</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}