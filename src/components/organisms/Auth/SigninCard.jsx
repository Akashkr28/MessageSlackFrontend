import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SigninCard = () => {

    const navigate = useNavigate();

    const [signinForm, setSigninForm] = useState({
        email: '',
        password: ''
    });

    return(
        <Card classname='w-full h-full'>
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Sign in to access your account</CardDescription>
            </CardHeader>

            <CardContent>
                <form className="space-y-3">
                    <Input
                        disabled={false}
                        placeholder='Email'
                        required
                        type='email'
                        value={signinForm.email}
                        onChange={(e) => setSigninForm({...signinForm, email: e.target.value})}    
                    />
                    <Input
                        disabled={false}
                        placeholder='Password'
                        required
                        type='password'
                        value={signinForm.password}
                        onChange={(e) => setSigninForm({...signinForm, password: e.target.value})}    
                    />
                    <Button className="w-full" disabled={false} size="lg" type="submit">
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
    )
}
