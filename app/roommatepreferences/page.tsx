"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"
import { Label } from "recharts"

export default function RoommatePreferences(){

    

    const [preferences, setPreferences] = useState({

        moveIn: "",
        sameGender: false,
        sameMajor: false,
        sameAcademicYear: false,
        petFriendly: false,
        smokingAllowed: false,
        alcoholAllowed: false,
        overnightGuestsAllowed: false,
        shareKitchen: false,
        shareGroceries: false,
        shareCleaningSupplies: false,
        shareFurniture: false
    })

    const handleChange = (e: { target: { name: any; value: any; type: any; checked: any } }) => {
        const {name, value, type, checked} = e.target;
        setPreferences(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    };

    const router = useRouter();

    return(
        <div className="min-h-screen bg-white items-center justify-center">
            <h2 className="text-black text-center font-bold text-xl mb-2">Roommate Preferences</h2>
            <p className="text-center text-black mb-4">Set your preferences to help us find your ideal roommate match</p>

            {/* Making a card */}
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg border border-black">
                <h2 className="text-black font-bold mb-2">Monthly Budget Range</h2>
                <p className="text-black mb-4">What's your preferred monthly rent budget?</p>

                <div className="flex space-x-4 mb-4">
                    <select className="border p-2 rounded w-full bg-white text-black" name="minBudget">
                        <option value="">Select minimum</option>
                        <option value="500">$500</option>
                        <option value="1000">$1000</option>
                    </select>

                    <select className="border p-2 rounded w-full bg-white text-black" name="maxBudget">
                        <option value="">Select maximum</option>
                        <option value="1500">$1500</option>
                        <option value="2000">$2000</option>
                    </select>    
                </div>

                <h2 className="text-black font-bold mt-4 mb-2">Move-in Timeline</h2>
                <p className="text-black mb-4">When are you planning to move?</p>

                <div className="flex space-x-6">
                    {["ASAP", "Fall Semester", "Spring Semester"].map(option => (
                        <label key={option} className="mr-4">
                            <input
                                type="radio"
                                name="moveIn"
                                value={option}
                                checked={preferences.moveIn === option}
                                onChange={handleChange}
                                className="bg-white border border-black"
                            />
                            <span className="text-black">{option}</span>
                        </label>
                    ))}
                </div>
                <h2 className="text-black font-bold mt-4 mb-2">Basic Preferences</h2>
                <p className="text-black mb-4">Set your fundamental roommate preferences</p>


                {["Same Gender Roommate Only", "Same Major/Department Preferred", "Same Academic Year Preferred"].map(key => (
                    <div className="flex items-center mb-2" key={key}>
                        <input
                            type="checkbox"
                            name={key}
                            checked={Boolean(preferences[key as keyof typeof preferences])}
                            onChange={handleChange}
                            className="border-gray-300 bg-transparent"
                        />
                        <label className="text-black ml-2">{key}</label>
                    </div>
                ))}

                <h2 className="text-black font-bold mt-4 mb-2">LifeStyle Preferences</h2>
                <p className="text-black mb-4">Define acceptable lifestyle choices</p>
                {["Pet-Friendly", "Smoking Allowed", "Alcohol Consumption Allowed", "Overnight Guests Allowed"].map(key => (
                    <div className="flex items-center mb-2" key={key}>
                        <input
                            type="checkbox"
                            name={key}
                            checked={Boolean(preferences[key as keyof typeof preferences])}
                            onChange={handleChange}
                        />
                        <label className="text-black ml-2">{key}</label>
                    </div>
                ))}

                <h2 className="text-black font-bold mt-4 mb-2">Sharing Preferences</h2>
                <p className="text-black mb-4">Indicate what you're comfortable sharing</p>

                {["Share Kitchen Items", "Share Groceries", "Share Cleaning Supplies", "Share Common Area Furniture"].map(key => (
                    <div className="flex items-center mb-2" key={key}>
                        <input
                            type="checkbox"
                            name={key}
                            checked={Boolean(preferences[key as keyof typeof preferences])}
                            onChange={handleChange}
                        />
                        <label className="text-black ml-2">{key}</label>
                    </div>
                ))}
                
                <Button className="bg-blue-500 cursor-pointer flex items-center font-semibold mt-8 w-full h-12">Save Preferences →</Button>
            </div>
        </div>
    )
}