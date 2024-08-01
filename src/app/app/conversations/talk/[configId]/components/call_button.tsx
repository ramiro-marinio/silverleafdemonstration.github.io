"use client"
import { PhoneFill } from "@/app/app/components/icons/icons";
import { useVoice } from "@humeai/voice-react";
import { useRef } from "react";

export const CallButton = ()=>{
    const {connect,disconnect,messages} = useVoice();
    const callActive = useRef(false);
    const startCall = async()=>{
        await connect();
        callActive.current = true;
    }
    const endCall = async()=>{
        disconnect();
        callActive.current = false;
    }
    return (
        <>
        <div onClick={()=>{callActive.current ? endCall() : startCall()}} className="p-4 w-fit transition-all hover:cursor-pointer hover:scale-105 active:scale-95 rounded-md bg-black dark:bg-white flex flex-row items-center justify-center">
            <i className="ph-phone-fill text-white dark:text-black ph-lg m-1"></i>
            <h1 className="font-bold text-white dark:text-black">Start Call</h1>
        </div></>
    )
}