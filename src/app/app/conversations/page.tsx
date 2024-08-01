import React from 'react'
import { Info } from '../components/icons/icons'
import AiModel from './components/ai_model'

export default function Conversations() {
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
          <div className='flex flex-row w-full'>
            <AiModel configurationId='47dbc212-94af-402e-9180-57f79cefd550' name='Hiring Manager' imageURL='/app/man-in-suit.png' tags={['Concise', 'Proffessional', 'Direct']}/>
          </div>
    </div>
  )
}
