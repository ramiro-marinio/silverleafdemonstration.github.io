'use client'
import { getHumeAccessToken } from '@/utils/get_hume_access_token'
import { useVoice, VoiceProvider } from '@humeai/voice-react'
import CallInterface from '../talk/[configId]/components/callInterface';
import React from 'react';
export function ClientSidePart({configId,accessToken}:{configId:string,accessToken:string}) {
    return (
      <VoiceProvider onMessage={(message)=>{
        console.log(message)
      }} auth={{type:'accessToken',value:accessToken}} configId={configId}>
        <CallInterface/>
      </VoiceProvider>
    )
}