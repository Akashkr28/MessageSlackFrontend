import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useWorkspacePreferencesModals } from "@/hooks/context/useWorkspacePreferencesModals";

import { TrashIcon } from "lucide-react";

export const WorkspacePreferencesModal = () => {

    const { initialValue, openPreferences, setOpenPreferences } = useWorkspacePreferencesModals();

    function handleClose() {
        setOpenPreferences(false);
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
                    
                    <button className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                        <TrashIcon className="size-5"/>
                        <p className="text-sm font-semibold">Delete Workspace</p>
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};