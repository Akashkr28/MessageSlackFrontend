import { updateWorkspaceDetailsRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useUpdateWorkspace = (workspaceId) => {
    const { auth } = useAuth();

    const { isPending, isSuccess, error, mutateAsync: updateWorkspaceMutation } = useMutation({
        mutationFn: (name) => updateWorkspaceDetailsRequest({ workspaceId, name, token: auth?.token }),
        onSuccess: () => {
            console.log('Successfully updated workspace');
        },
        onError: (error) => {
            console.error('Failed to update workspace', error);
        },
    });

    return {
        isPending,
        isSuccess,
        error,
        updateWorkspaceMutation,
    };
}