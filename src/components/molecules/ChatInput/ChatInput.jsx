import { getPresignedUrl, uploadImageToAWSpresignedUrl } from "@/apis/s3";
import { Editor } from "@/components/atoms/Editor/Editor";
import { useAuth } from "@/hooks/context/useAuth";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace";
import { useSocket } from "@/hooks/context/useSocket";
import { useQueryClient } from "@tanstack/react-query";

export const ChatInput = () => {

    const { socket, currentChannel } = useSocket();
    const { auth } = useAuth();
    const { currentWorkspace } = useCurrentWorkspace();
    const queryClient = useQueryClient();

    async function handleSubmit ({ body, image }) {

                if (!auth?.user?.id) {
                    console.error('Sender ID (auth.user._id) is missing!');
                    return;
                }


        console.log(body, image);
        let fileUrl = null;
        if(image) {
            const preSignedUrl = await queryClient.fetchQuery({
                queryKey: ['getPresignedUrl'],
                queryFn: () => getPresignedUrl({ token: auth?.token }),
            });

            console.log('Presigned url', preSignedUrl);

            const responeAws = await uploadImageToAWSpresignedUrl({
                url: preSignedUrl,
                file: image
            });
            console.log('File upload success', responeAws);
            fileUrl = preSignedUrl.split('?')[0];
        }


        socket?.emit('NewMessage', {
            channelId: currentChannel,
            body,
            image: fileUrl,
            senderId: auth?.user?.id,
            workspaceId: currentWorkspace?._id
        }, (data) => {
            console.log('Message sent', data);
        });
    }


    return (
        <div className="px-5 w-full ">
            <Editor
                placeholder="Type a message..."
                onSubmit={handleSubmit}
                onCancel={() => {}}
                disabled={false}
                defaultValue=""
                
            />
        </div>
    )
}