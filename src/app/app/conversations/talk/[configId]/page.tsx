import { getHumeAccessToken } from '@/utils/get_hume_access_token'
import { useVoice, VoiceProvider } from '@humeai/voice-react'
import React from 'react'
import { CallButton } from './components/call_button'
import CallInterface from './components/callInterface';
import { ClientSidePart } from '../../components/clientsidepart';
import { object } from 'hume/core/schemas';

export default async function Talk({params}:any) {
  const accessToken = await getHumeAccessToken();
  const models = await fetch(process.env.URL+'/app/models.json');
  const modelsJson = await models.json() as {id:number,name:string,tags:string[],image_url:string|null,prompt:string}[];
  const prompt = modelsJson.find((val)=>{
    return val.id == params.configId
  })
  if(!prompt){
    return <div>
      
    </div>
  }
  // const fn = (accessToken:string)=>{
    return (
      <div className='w-full h-full'>
        {/* <VoiceProvider onMessage={typeof window !== 'undefined' ? (message)=>{
          console.log(message)
        } : undefined} auth={{type:'accessToken',value:accessToken}} configId={params.configId as string}>
          <CallInterface/>
        </VoiceProvider> */}
        <ClientSidePart prompt={prompt!.prompt} accessToken={accessToken}/>
      </div>
    );
}



