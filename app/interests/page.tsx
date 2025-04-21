"use client"
import { ReactDOM, useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

export default function Interests(){
    
    const router = useRouter();

    const handleRoommatePreference = () => {
        router.push('/roommatepreferences');
    }
    const [selectedEntertainment, setSelectedEntertainment] = useState<string | null>(null);
    const [selectedLifeStyle, setSelectedLifeStyle] = useState<string | null>(null);
    const [selectedHobby, setSelectedHobby] = useState<string | null>(null);
    const [selectedAcademic, setSelectedAcademic] = useState<string | null>(null);

    const options = {
        Entertainment: ["Gaming", "Netflix & Movies", "Music", "Anime"],
        LifeStyle: ["Fitness", "Cooking", "Socializing", "Coffee"],
        Hobby: ["Photography", "Art", "Reading", "Travel"],
        Academic: ["<> Programming", "Study Groups"]
    };
    return(
        <div className="min-h-screen items-center justify-center bg-white">
            <h2 className="font-bold text-center text-black text-xl mb-2">Select Your Interests</h2>
            <p className="text-center text-black mb-4">Choose the activities and interests you would like to share with your future roommates</p>

            

            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
                {/* Progress Bar */}
                <div className="relative w-full h-2 bg-gray-300 rounded-full mb-4">
                    <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full w-1/3"></div>
                </div>
                {/* Entertainment */}
                <div className="mb-6">
                    <h2 className="font-bold text-black mb-2">Entertainment</h2>

                    <div className="grid grid-cols-4 gap-2">
                        {options.Entertainment.map((option) => (
                            <Button key={option} className={`p-3 rounded-full text-center ${
                                selectedEntertainment === option ? "bg-blue-500" : "bg-gray-300"
                            }`} onClick={() => setSelectedEntertainment(option)}>{option}</Button>
                        ))}
                    </div>
                </div>

                {/* LifeStyle */}
                <div className="mb-6">
                    <h2 className="font-bold text-black mb-2">LifeStyle</h2>

                    <div className="grid grid-cols-4 gap-2">
                        {options.LifeStyle.map((option) => (
                            <Button key={option} className={`p-3 rounded-full text-center ${
                                selectedLifeStyle === option ? "bg-blue-500" : "bg-gray-300"
                            }`} onClick={() => setSelectedLifeStyle(option)}>{option}</Button>
                        ))}
                    </div>
                </div>

                {/* Hobbies */}
                <div className="mb-6">
                    <h2 className="font-bold text-black mb-2">Hobbies</h2>
                    <div className="grid grid-cols-4 gap-2">
                        {options.Hobby.map((option) => (
                            <Button key={option} className={`p-3 rounded-full text-center ${
                                selectedHobby === option ? "bg-blue-500" : "bg-gray-300"
                            }`} onClick={() => setSelectedHobby(option)}>{option}</Button>
                        ))}
                    </div>
                </div>

                {/* Academic */}
                <div className="mb-6">
                    <h2 className="font-bold text-black mb-2">Academic</h2>
                    <div className="grid grid-cols-4 gap-2">
                        {options.Academic.map((option) => (
                            <Button key={option} className={`p-3 rounded-full text-center ${
                                selectedAcademic === option ? "bg-blue-500" : "bg-gray-300"
                            }`} onClick={() => setSelectedAcademic(option)}>{option}</Button>
                        ))}
                    </div>
                </div>

                
                <div className="bg-cyan-200 max-w-lg p-6 rounded-lg">
                    <h2 className="font-bold text-black text-center mb-2">Invite Friends & Earn Rewards</h2>
                    <p className="text-center text-black mb-3">Get priority matching and exclusive perks when your friends join MeteorMate</p>
                    
                    <div className="flex items-center gap-2">
                        <Input type="email" placeholder="Enter friend's email" className="bg-white flex-1 p-2 rounded-md"></Input>
                        <Button className="bg-white text-black text-center rounded-md px-4">Invite</Button>
                    </div>
                    
                </div>

                {/* Button to continue */}
                <Button className="w-full h-12 font-semibold bg-blue-500 text-white text-center mt-10" onClick={handleRoommatePreference}>Continue →</Button>
                
                {/* Back Button */}
                <div className="absolute top-6 left-6">
                    <button onClick={() => router.back()} className="flex items-center text-blue-600 hover: text-blue-800">
                        <ArrowLeft size={24} className="mr-1"/>
                        <span className="text-base font-medium">Back</span>
                    </button>
                </div>
            </div>
        </div>
    )
}