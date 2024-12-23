import { resetJoinCodeRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useResetJoinCode = (workspaceId) => {
    const { auth } = useAuth();

    const queryClient = useQueryClient();

    const { mutateAsync: resetJoinCodeMutation, isSuccess, isPending, error} = useMutation({
        mutationFn: () => resetJoinCodeRequest({ workspaceId, token: auth?.token }),
        onSuccess: () => {
            console.log('Successfully reset join code');
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspaceId}`);
        },
        onError: (error) => {
            console.log('Failed to reset join code', error);
        }
    });

    return {
        resetJoinCodeMutation,
        isSuccess,
        isPending,
        error
    };
};