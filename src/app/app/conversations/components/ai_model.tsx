import Button from '@/app/components/general/button/button'
import { useVoice } from '@humeai/voice-react'
import React from 'react'
import Tag from './tag'
import Link from 'next/link'

export default function AiModel({imageURL,name,tags,id}:{imageURL?:string,name:string,tags?:string[],id:number}) {
  return (
    <div className='w-[400px] h-[150px] rounded-md p-2 flex flex-row items-center bg-blue-700'>
        <div className='h-full aspect-square rounded-md bg-no-repeat bg-cover bg-top' style={{backgroundImage:`url(\'${imageURL ?? '/app/no-profile-picture.png'}\')`}}></div>
        <div className='pl-1 flex flex-col h-full flex-grow justify-between'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-lg'>
                    {name}
                </h1>
                <div className='flex flex-row flex-wrap gap-1 items-center'>
                    {(tags ?? []).map((tag:string)=>{
                        return <Tag text={tag}/>
                    })}
                </div>
            </div>
            <div className='w-[200px]'>
                <Link href={`/app/conversations/talk/${id}`}>
                    <Button text='TALK NOW' fill/>
                </Link>
            </div>
        </div>
    </div>
  )
}
