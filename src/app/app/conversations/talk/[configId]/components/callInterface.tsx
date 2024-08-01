'use client'
import { useVoice } from '@humeai/voice-react'
import React, { useEffect } from 'react'
import { CallButton } from './call_button';
import AudioVisualizer from  './audio/visualizer/AudioVisualizer';
export default function CallInterface() {
  const {status} = useVoice();
  if(status.value == 'disconnected'){
    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold text-center m-2'>The call is ready to start!</h1>
            <CallButton/>
        </div>
    )
  }
  if(status.value == 'connecting'){
    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <span className="loading loading-spinner loading-md"></span>
        </div>
    )
  }
  if(status.value=='error'){
    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold text-error'>An error has occurred.</h1>
        </div>
    )
  }
  useEffect(()=>{
    if(status.value == 'connected'){
        const visualizer = new AudioVisualizer('visualizerBox')
        visualizer.init()

    }
  },[status]);
  return (
    <div>
        <div id='visualizerBox'></div>
    </div>
  )
}
