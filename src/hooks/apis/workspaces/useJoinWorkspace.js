import { joinWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useJoinWorkspaceRequest = (workspaceId) => {
    const { auth } = useAuth();
    const { mutateAsync: joinWorkspaceMutation, isPending, isSuccess, error } = useMutation({
        mutationFn: (joinCode) => joinWorkspaceRequest({ workspaceId, joinCode, token: auth?.token }),
        onSuccess: () => {
            console.log('Successfully joined workspace');
        },
        onError: (error) => {
            console.error('Failed to join workspace', error);
        },
    });

    return {
        joinWorkspaceMutation,
        isPending,
        isSuccess,
        error
    }
}