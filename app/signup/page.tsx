"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {Card, CardContent, CardHeader} from "@/components/ui/card"


export default function SignUp(){

    const router = useRouter();

    const handlePreference = () => {
        setTimeout(() => {
            router.push('/preferences');
        }, 100);
    }

    return (
        
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="background-white ">
            <h1 className="text-center font-bold text-4xl text-black mb-4">Create Your Profile</h1>
            <p className="text-center text-black mb-4 font-medium">Tell us about yourself</p>

            <CardHeader>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div className="bg-blue-500 h-2 rounded-full w-1/3"></div>
                </div>
            </CardHeader>

            <div className="flex justify-center mb-4">
                <label className="cursor-pointer">
                    <div className="flex items-center w-32 h-32 rounded-full justify-center">
                        📷
                    </div>
                    <input type="file" className="hidden"/>
                </label>
            </div>

            <p className="text-center text-black mb-10">Upload your profile picture</p>
            <form className="space=y-4 mb-4">
                <p className="text-left text-black mb-2">Full Name</p>
                <Input type="text" name="Full Name" placeholder="Enter your name" className="mb-8 w-full"/>

                <p className="text-left text-black mb-2">Age</p>
                <Input type="number" name="Age" placeholder="Enter your age" className="mb-8 w-full"/>

                <p className="text-left text-black mb-2">Gender</p>
                <select className="w-full border p-2 rounded-md mb-8" name="Gender">
                    <option value={""}>Select Gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"other"}>Other</option>
                </select>

                <p className="text-left text-black mb-2">Major</p>
                <Input type="text" name="Major" placeholder="Enter your major" className="w-full mb-8 p-2 rounded-md"/>

                <p className="text-left text-black mb-2">Year</p>
                <select className="w-full border p-2 rounded-md mb-8" name="Year">
                    <option value={""}>Select Year</option>
                    <option value={"freshman"}>Freshman</option>
                    <option value={"sophomore"}>Sophomore</option>
                    <option value={"junior"}>Junior</option>
                    <option value={"senior"}>Senior</option>
                </select>
                
            </form>
            <Button type="button" className="w-full h-12 text-lg font-semibold bg-blue-500" onClick={handlePreference}>Next Step →</Button>
        </div>
        
      </div>  
    );
}