import { fetchWorkspaceDetailsRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useQuery } from "@tanstack/react-query";

export const useGetWorkspaceId = (id) => {
    const { auth } = useAuth();
    const { isFetching, isSuccess, error, data: workspace } = useQuery({
        queryFn: (data) => fetchWorkspaceDetailsRequest({ workspaceId: id, token: auth?.token}),
        queryKey: [`getWorkspaceById-${id}`],
        staleTime: 10000
    });

    return {
        isFetching,
        isSuccess,
        error,
        workspace
    }
};