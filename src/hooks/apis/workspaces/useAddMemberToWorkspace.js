import { addMemberToWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useAddMemberToWorkspace = (workspaceId) => {
    const { auth } = useAuth();

    const { mutateAsync: addMemberToWorkspaceMutation, isPending, isSuccess, error } = useMutation({
        mutationFn: () => addMemberToWorkspaceRequest({ workspaceId, token: auth?.token }),
        onSuccess: () => {
            console.log('Successfully added member to workspace');
        },
        onError: (error) => {
            console.error('Failed to add member to workspace', error);
        },
    });

    return {
        addMemberToWorkspaceMutation,
        isPending,
        isSuccess,
        error
    };
};