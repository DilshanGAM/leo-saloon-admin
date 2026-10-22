"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div className="h-screen flex justify-center items-center">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle className="text-center">Login to Saloon Leo Admin</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="">
                        <Label className="mb-2">Email</Label>

                        <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email" />

                        <Label className="my-2">Password</Label>
                        <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password" />

                        <Button
                            onClick={
                                ()=>{
                                    toast.success(email + " " + password)
                                    //send a http request to the backend
                                }
                            }
                        className="w-full mt-4">Login</Button>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}