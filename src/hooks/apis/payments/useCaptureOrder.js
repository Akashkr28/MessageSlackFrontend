import { capturePaymentRequest } from "@/apis/payments";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query"

export const useCaptureOrder = () => {
    const { auth } = useAuth();
    const {
        mutateAsync: captureOrderMutation,
        isPending,
        isSuccess,
        error
    } = useMutation({
        mutationFn: ({ orderId, status, paymentId, signature }) => capturePaymentRequest({
            token: auth?.token,
            orderId,
            status,
            paymentId,
            signature
        }),
        onSuccess: () => {
            console.log('Successfully captured payment');
        },
        onError: (error) => {
            console.error('Failed to capture payment', error);
        }
    });

    return {
        captureOrderMutation,
        isPending,
        isSuccess,
        error
    }
}