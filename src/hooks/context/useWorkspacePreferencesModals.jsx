import WorkspacePreferencesModalContext from "@/context/WorkspacePreferencesModalContext";
import { useContext } from "react";

export const useWorkspacePreferencesModals = () => {
    return useContext(WorkspacePreferencesModalContext);
}