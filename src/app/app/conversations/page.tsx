import React from 'react'
import { Info } from '../components/icons/icons'
import AiModel from './components/ai_model'

export default async function  Conversations() {
  const models = await fetch(process.env.URL+'/app/models.json');
  const modelsJson = await models.json() as {id:number,name:string,tags:string[],image_url:string|null,prompt:string}[];
  return (
    <div className='w-full h-full flex flex-col p-2 items-center'>
          <div className='flex flex-row justify-center items-center'>
            <h1 className='text-5xl font-bold'>
                Conversations
            </h1>
            <span className='text-5xl'>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button"><Info/></div>
                    <div
                        tabIndex={0}
                        className="dropdown-content card card-compact bg-slate-400 dark:bg-neutral z-[1] w-64 p-2 shadow">
                        <div className="card-body">
                            <h3 className="card-title">Conversations</h3>
                            <p>Here you will be able to talk with our AI models, and also, to find all your previous conversations. We will also save your insights, so that you can
                                know what to improve and keep track of your progress.
                            </p>
                        </div>
                    </div>
                </div>
            </span>
          </div>
          <div className='flex flex-row flex-wrap gap-1 justify-center w-full'>
            {modelsJson.map((model)=>{
              return <AiModel name={model.name} imageURL={model.image_url ?? undefined} tags={model.tags} id={model.id} key={model.id}/>;
            })}
          </div>
    </div>
  )
}
