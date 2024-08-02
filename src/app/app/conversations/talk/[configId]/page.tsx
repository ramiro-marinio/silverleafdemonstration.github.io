import { getHumeAccessToken } from '@/utils/get_hume_access_token'
import { useVoice, VoiceProvider } from '@humeai/voice-react'
import React from 'react'
import { CallButton } from './components/call_button'
import CallInterface from './components/callInterface';
import { ClientSidePart } from '../../components/clientsidepart';

export default async function Talk({params}:any) {
  const accessToken = await getHumeAccessToken();
  // const fn = (accessToken:string)=>{
    return (
      <div className='w-full h-full'>
        {/* <VoiceProvider onMessage={typeof window !== 'undefined' ? (message)=>{
          console.log(message)
        } : undefined} auth={{type:'accessToken',value:accessToken}} configId={params.configId as string}>
          <CallInterface/>
        </VoiceProvider> */}
        <ClientSidePart configId={params.configId as string} accessToken={accessToken}/>
      </div>
    );
}



