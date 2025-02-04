import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { LucideLoader2, TriangleAlert } from "lucide-react";

import { useNavigate } from "react-router-dom";
import {
    IconBrandGithub,
    IconBrandGoogle,
  } from "@tabler/icons-react";

export const SignupCard = ({ 
    signupForm, 
    setSignupForm, 
    validationError, 
    onSignupFormSubmit,
    error,
    isPending,
    isSuccess
    }) => {

    const navigate  = useNavigate();

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input border border-black dark:border-neutral-700 shadow-lg">
          <h2 className="font-bold text-xl ">
            Welcome to Messsage Slack
          </h2>
          <p className=" text-sm max-w-sm mt-2 ">
            Login to aceternity if you can because we don&apos;t have a login flow
            yet
          </p>

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
                        
                        <p>
                            Successfully signed up. You will be redirected to login page in a few seconds.

                            <LucideLoader2 className="animate-spin ml-2"/>
                        </p>
                    </div>
                )}

     
          <form className="my-8" onSubmit={onSignupFormSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label 
                    htmlFor="firstname"
                    
                    >First name</Label>
                <Input 
                
                    id="firstname"  
                    type="text" 
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname" >Last name</Label>
                <Input id="lastname" placeholder="Durden" type="text" />
              </LabelInputContainer>
            </div>


            <LabelInputContainer className="mb-4">
              <Label htmlFor="email" >Email Address</Label>
              <Input 
                id="email" 
                placeholder="projectmayhem@fc.com" 
                type="email"
                required
                onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                value={signupForm.email}
                disabled={isPending}
                />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="password" >Password</Label>
              <Input 
                required
                onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                value={signupForm.password}                
                id="password" 
                placeholder="••••••••" 
                type="password" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="password" >Confirm Password</Label>
              <Input 
                required
                onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                value={signupForm.confirmPassword}             
                id="password" 
                placeholder="••••••••" 
                type="password" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-8">
              <Label htmlFor="username" >Your Username</Label>
              <Input
                required
                onChange={(e) => setSignupForm({...signupForm, username: e.target.value})}
                value={signupForm.username}
                id="UserName"
                placeholder="••••••••"
                type="twitterpassword"
              />
            </LabelInputContainer>
     
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              disabled={isPending}
              
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
     
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
     
            <div className="flex flex-col space-y-4">
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  GitHub
                </span>
                <BottomGradient />
              </button>
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Google
                </span>
                <BottomGradient />
              </button>

            </div>
          </form>
        </div>
      );
    }
     
    const BottomGradient = () => {
      return (
        <>
          <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
      );
    };

    const LabelInputContainer = ({
        children,
        className,
      }) => {
        return (
          <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
          </div>
        );
      };