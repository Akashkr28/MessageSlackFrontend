import { deleteWorkspaceDetailsRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useDeleteWWorkspace = (workspaceId) => {
    const { auth } = useAuth();

    const { isPending, isSuccess, error, mutateAsync: deleteWorkspaceMutation } = useMutation({
        mutationFn: () => deleteWorkspaceDetailsRequest({ workspaceId, token: auth?.token }),
        onSuccess: () => {
            console.log('Successfully created workspace');
        },
        onError: (error) => {
            console.error('Failed to create workspace', error);
        },
    });

    return {
        isPending,
        isSuccess,
        error,
        deleteWorkspaceMutation,
    };
}