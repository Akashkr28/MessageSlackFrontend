import ChannelMessages from "@/context/ChannelMessages";
import { useContext } from "react";

export const useChannelMessages = () => {
    return useContext(ChannelMessages);
};