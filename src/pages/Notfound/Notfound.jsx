import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const Notfound = () => {
    const navigate = useNavigate();
    return (
        <div
            className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
                <Card className="text-center shadow-lg max-w-lg">
                    <CardHeader>
                        <CardTitle>404 Not Found</CardTitle>
                        <p className="text-gray-600">
                            The page you are looking for does not exist.
                        </p>
                    </CardHeader>
                    <CardContent>

                        <img src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk=" alt="" />

                        <Button
                            variant="outline"
                            onClick={(() => navigate(-1))}
                            className="mt-4"
                        >Go Back</Button>
                    </CardContent>
                </Card>
        </div>
    );
};