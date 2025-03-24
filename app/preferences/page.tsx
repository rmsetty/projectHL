"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export default function preferences(){
    const router = useRouter();

    const handleInterest = () => {
        router.push('/interests');
    }

    const [selectedWakeUp, setSelectedWakeUp] = useState<string | null>(null);
    const [selectedCleanliness, setselectedCleanliness] = useState<string | null>(null);
    const [selectedNoiseLevel, setSelectedNoiseLevel] = useState<string | null>(null);

    const options = {
        WakeUp: ["Early Bird", "Flexible", "Night Owl"],
        Cleanliness: ["Relaxed", "Tidy", "Neat Freak"],
        Noise: ["Quiet", "Moderate", "Social"]
    };

    return(

        <div className="min-h-screen items-center justify-center bg-white">
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">

                <h2 className="text-center text-black text-xl font-bold mb-2">LifeStyle Preferences</h2>
                <p className="text-center mb-4 text-black">Help us find your ideal roommate by selecting your preferences</p>
                {/* Progress Bar */}
                <div className="relative w-full h-2 bg-gray-300 rounded-full mb-4">
                    <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full w-1/3"></div>
                </div>

                {/* Wake Up Time */}

                <div className="mb-6">
                    <h2 className="font-semibold mb-2 text-black">Wake-up Time</h2>
                    <p className="text-gray-600 mb-2">When are you most active during the day?</p>

                    <div className="grid grid-cols-3 gap-2">
                        {options.WakeUp.map((option) => (
                            <Button key={option} className={`p-3 border rounded-lg text-center ${
                                selectedWakeUp === option ? "bg-blue-500 text-white" : "bg-gray-300"
                            }`} onClick={() => setSelectedWakeUp(option)}>{option}</Button>
                        ))}
                    </div>
                </div>

                {/* Cleanliness */}
                <div className="mb-6">
                    <h2 className="font-semibold mb-2 text-black">Cleanliness</h2>
                    <p className="text-gray-600 mb-2">What's your preferred level of tidiness?</p>

                    <div className="grid grid-cols-3 gap-2">
                        {options.Cleanliness.map((option) => (
                            <Button key={option} className={`p-3 border rounded-lg text-center ${
                                selectedCleanliness === option ? "bg-blue-500 text-white" : "bg-gray-300"
                            }`} onClick={() => setselectedCleanliness(option)}>{option}</Button>
                        ))}
                    </div>
                </div>

                {/* Noise Tolerance */}
                <div className="mb-6">
                    <h2 className="font-semibold mb-2 text-black">Noise Tolerance</h2>
                    <p className="text-gray-600 mb-2">What noise level are you comfortable with?</p>

                    <div className="grid grid-cols-3 gap-2">
                        {options.Noise.map((option) => (
                            <Button key={option} className={`p-3 border rounded-lg text-center ${
                                selectedNoiseLevel === option ? "bg-blue-500 text-white" : "bg-gray-300"
                            }`} onClick={() => setSelectedNoiseLevel(option)}>{option}</Button>
                        ))}
                    </div>
                </div>

                <Button className="w-full h-12 font-semibold text-lg bg-blue-500" onClick={handleInterest}>Continue →</Button>
            </div>

            
        </div>
        
    )
}