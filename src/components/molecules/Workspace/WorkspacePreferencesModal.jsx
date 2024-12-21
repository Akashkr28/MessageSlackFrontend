import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useDeleteWWorkspace } from "@/hooks/apis/workspaces/useDeleteWorkspace";
import { useWorkspacePreferencesModals } from "@/hooks/context/useWorkspacePreferencesModals";
import { useToast } from "@/hooks/use-toast";
import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const WorkspacePreferencesModal = () => {

    const { initialValue, openPreferences, setOpenPreferences, workspace } = useWorkspacePreferencesModals();

    const [workspaceId, setWorkspaceId] = useState(null);

    const { toast } = useToast(); 

    const { deleteWorkspaceMutation } = useDeleteWWorkspace(workspaceId);

    function handleClose() {
        setOpenPreferences(false);
    };

    useEffect(() => {
        setWorkspaceId(workspace?._id);
    }, [workspace])

    async function handleDelete() {
        try {
            await deleteWorkspaceMutation();
            toast({
                title: 'Workspace Deleted',
                type: 'success'
            })
        } catch (error) {
            console.log('Error deleting workspace', error);
            toast({
                title: 'Error deleting workspace',
                type: 'error'
            })
        }
    }

    return (
        <Dialog open={openPreferences} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader className="p-0 bg-gray-50 overflow-hidden">
                    <DialogTitle className="p-4 border-b bg-white">
                        {initialValue}
                    </DialogTitle>
                </DialogHeader>
                <div className="px-4 pb-4 flex flex-col gap-y-2">
                    <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm">
                                Workspace Name
                            </p>
                            <p className="text-sm font-semibold hover:underline">
                                Edit
                            </p>
                        </div>
                        <p className="text-sm">
                            {initialValue}
                        </p>
                    </div>
                    
                    <button 
                        className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50"
                        onClick={handleDelete}>
                        <TrashIcon className="size-5"/>
                        <p className="text-sm font-semibold">Delete Workspace</p>
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};