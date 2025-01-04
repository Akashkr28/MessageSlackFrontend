import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CheckCheckIcon, CheckIcon, LucideLoader2, TriangleAlert } from "lucide-react";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full bg-gray-800 text-white flex items-center justify-between px-4 py-4">
            <h1 className="text-lg font-bold">
                Message Slack</h1>
            <Button variant="ghost" className="text-sm">
                Learn More
            </Button>
        </nav>
    );
};

export const SigninCard = ({
    signinForm,
    setSigninForm,
    onSigninFormSubmit,
    validationError,
    error,
    isSuccess,
    isPending
}) => {

    const navigate = useNavigate();



    return(
        <>
        <Navbar />
        <div className="flex flex-row gap-10 items-center justify-center mt-52">  
            <div className="flex flex-col items-center justify-center" style={{width: '350px'}}>
                <h1 className="text-6xl font-bold gap-10">
                    Welcome to {" "}
                    <ReactTyped className="text-blue-500" strings={["Message Slack"]} typeSpeed={100} />
                </h1>
                <p className="mt-10 text-2xl text-muted-foreground italic ">
                    "A Place where people collaborate with ease, share ideas, and connect."
                </p>
            </div>

        
        <Card className='w-full h-full' style={{width: '400px'}}>
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Sign in to access your account</CardDescription>

                {validationError && (
                    <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                        <TriangleAlert className="size-5"/>
                        <p>{validationError.message}</p>
                    </div>
                )}

                {error && (
                    <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                        <TriangleAlert className="size-5"/>
                        <p>{error.message}</p>
                    </div>
                )}

                {isSuccess && (
                    <div className="bg-primary/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-primary mb-5">
                        
                        <p className="flex flex-row gap-4">
                            

                            <LucideLoader2 className="animate-spin ml-2"/>
                            Successfully signed in.
                            
                        </p>
                        <CheckIcon className="size-5 ml-2"/>
                    </div>
                )}


            </CardHeader>

            <CardContent>
                <form className="space-y-3" onSubmit={onSigninFormSubmit}>
                    <Input
                        disabled={isPending}
                        placeholder='Email'
                        required
                        type='email'
                        value={signinForm.email}
                        onChange={(e) => setSigninForm({...signinForm, email: e.target.value})}    
                    />
                    <Input
                        disabled={isPending}
                        placeholder='Password'
                        required
                        type='password'
                        value={signinForm.password}
                        onChange={(e) => setSigninForm({...signinForm, password: e.target.value})}    
                    />
                    <Button className="w-full" disabled={isPending} size="lg" type="submit">
                        Sign In
                    </Button>
                </form>

                <Separator className="my-5" />
                <p className="text-s text-muted-foreground mt-4">
                    Do not have an account ? {' '}
                    <span 
                    className="text-sky-600 hover:underline cursor-pointer"
                    onClick={() => navigate('/auth/signup')}
                    
                    >Sign Up</span>
                </p>
            </CardContent>
        </Card>
        </div>
        </>
    )
}
