"use client"
import { useRef, useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {Card, CardContent, CardHeader} from "@/components/ui/card"
import ReactCrop, {PercentCrop,centerCrop, makeAspectCrop} from "react-image-crop"
import "react-image-crop/dist/ReactCrop.css"
import { Camera } from "lucide-react"
import { profile } from "console"
import type {Crop} from "react-image-crop"
import type { PixelCrop } from "react-image-crop"
import { ArrowLeft } from "lucide-react"

export default function SignUp(){

    const router = useRouter();

    const [src, setSrc] = useState<string | undefined>(undefined);
    const [crop, setCrop] = useState<Crop>();
    const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
    const [showCropper, setShowCropper] = useState(false);
    const [profileImage, setProfileImage] = useState<string | null>(null);

    type FormErrors={
        profileImage?: string;
    };
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const imgRef = useRef<HTMLImageElement>(null);

    const handlePreference = () => {

        // Validate if the profile picture is uploaded
        if(!profileImage){
            return;
        }

        setTimeout(() => {
            router.push('/preferences');
        }, 100);
    }

    function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number){
        return centerCrop(
            makeAspectCrop(
                {
                    unit: '%',
                    width: 90,
                },
                aspect,
                mediaWidth,
                mediaHeight,
            ),
            mediaWidth,
            mediaHeight,
        )
    }
    
    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0){
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setSrc(reader.result as string);
                setShowCropper(true);

                // Clear profile image error when selecting a new file
                setFormErrors(prev => ({...prev, profileImage: undefined}));
            });
            reader.readAsDataURL(e.target.files[0]);   
        }
    }

    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const {width, height} = e.currentTarget;
        console.log("Image loaded with dimensions: ", width, height);
        setCrop(centerAspectCrop(width, height,1));
    }

    const onCropComplete = (crop: PixelCrop, percentCrop: PercentCrop) => {
        console.log("Crop completed: ", crop, percentCrop);
        setCompletedCrop(crop);
    }

    const getCroppedImg = () => {
        if(!completedCrop || !imgRef.current){
            console.log("Missing completed crop or image ref");
            return;
        }

        const canvas = document.createElement("canvas");
        const image = imgRef.current;

        // Calculating scaling factors
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        
        // Creating square dimensions
        const cropWidth = completedCrop.width * scaleX;
        const cropHeight = completedCrop.height * scaleY;
        const size = Math.min(cropWidth, cropHeight);

        // Setting canvas dimensions to the desired ouput size
        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext("2d");
        if(!ctx){
            console.log("Failed to get canvas context");
            return;
        }

        // Creating a circular clipping path
        ctx.beginPath();
        ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
        ctx.clip();

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0,0,size,size);

        ctx.drawImage(
            image,
            completedCrop.x * scaleX,
            completedCrop.y * scaleY,
            cropWidth,
            cropHeight,
            0,
            0,
            size,
            size
        );
        canvas.toBlob((blob) => {
            if(blob){
                const url = URL.createObjectURL(blob);
                setProfileImage(url);
                setShowCropper(false);
                console.log("Crop image applied successfully");
            }
            else{
                console.log("Failed to create canvas blob");
            }
            
        }, "image/png", 1.0);
    }

    // Method to cancel the crop
    const cancelCrop = () => {
        setShowCropper(false);
        setSrc(undefined);
        setCompletedCrop(null);
        if(!profileImage){
            setFormErrors(prev => ({...prev, profileImage:undefined}));
            return;
        }
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

            {showCropper ? (
                <div className="mb-4">
                    <div className="mb-4">
                        <ReactCrop
                            crop={crop}
                            onChange={(c) => setCrop(c)}
                            onComplete={onCropComplete}
                            aspect={1}
                            circularCrop
                        >
                            <img
                                ref={imgRef}
                                alt="Crop me"
                                src={src}
                                onLoad={onImageLoad}
                                className="max-w-full h-auto"
                            />
                            
                        </ReactCrop>
                    </div>

                    <div className="flex justify-center gap-2">
                        <Button onClick={getCroppedImg} className="bg-green-500 hover:bg-green-600">Apply Crop</Button>
                        <Button onClick={cancelCrop} className="bg-gray-500 hover:bg-gray-500">Cancel</Button>
                    </div>
                </div>
            ):(
                <div className="flex justify-center mb-4">
                    <label className="cursor-pointer">
                        <div className="flex items-center justify-center w-32 h-32 bg-gray-200 rounded-full border-2 border-gray-300 hover:bg-gray-300 transition-colors overflow-hidden">
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Camera size={48} className="text-gray-500"/>
                            )}
                        </div>
                        <input type="file" accept="image/*" onChange={onSelectFile} className="hidden"/>
                    </label>
                    {formErrors.profileImage && (
                        <p className="text-red-500 text-sm mt-2">{formErrors.profileImage}</p>
                    )}
                </div>
            )}


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

            {/* Button to continue */}
            <Button type="button" className="w-full h-12 text-lg font-semibold bg-blue-500" onClick={handlePreference}>Next Step →</Button>
            
            {/* Back Button */}
            <div className="absolute top-6 left-6">
                <button onClick={() => router.back()} className="flex items-center text-blue-600 hover: text-blue-800">
                    <ArrowLeft size={24} className="mr-1"/>
                    <span className="text-base font-medium">Back</span>
                </button>
            </div>
        </div>
        
      </div>  
    );
}

function setFormErrors(p0: (prev: any) => any) {
    throw new Error("Function not implemented.")
}
