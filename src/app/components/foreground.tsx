import React from 'react'
import './style.css'
import Testimonial from './testimonial/testimonial'
import { SlideIn } from './slideIn/slideIn'
import { PillarCard } from './pillarCard/pillarCard'
import { Handshake } from './pillarCard/icons/handshake'
import { Clock } from './pillarCard/icons/clock'
import { Heart } from './pillarCard/icons/heart'
import { Brain } from './pillarCard/icons/brain'
import Button from './button/button'
export default function Foreground() {
  const testimonials = require('./testimonials.json') as {testimonials:{name:string,message:string,country:string,rating:string}[]}
  return (
    <div className='absolute top-0 left-0 w-full h-full text-white overflow-x-hidden overflow-y-scroll flex flex-col items-center'>
            <h1 className='text-8xl gradient font-extrabold'>SILVERLEAF</h1>
            <div><p className='text-center gradient text-4xl mb-2 sm:w-full'>
                Your dream job, made a reality.
            </p></div>
            <div>
                <iframe 
                width={560}
                height={315}
                src="https://www.youtube.com/embed/qLAUIVXFcfo?si=4PkYi0JQu_lWCAxW" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className='mt-5 mb-2 rounded-lg border border-white'>
                </iframe>
            </div>
            <div className='w-full flex flex-row items-center justify-center gap-2'>
                <Button text='More Information' fill={false}/>
                <Button text='Go to App' fill={true}/>
            </div>
            <p className='text-center p-4'>
                Welcome to SilverLeaf, where opportunity blossoms. 
                Our innovative employment network empowers small businesses and individuals with fewer opportunities by 
                providing ultra-precise filters to match talent with ideal job offers. At SilverLeaf, we bridge the gap 
                between potential and success, allowing businesses to tailor their workforce to their budget while ensuring 
                that every candidate finds not just a job, but the perfect fit for their skills and aspirations. 
                Discover a future where every connection counts, and every opportunity thrives.
            </p>
            <div className='flex flex-row w-full items-center justify-center'>
                <div className='flex flex-row carousel'>
                    {
                        testimonials.testimonials.map((testimonial:any)=>{
                            return (
                                <Testimonial testimonial={testimonial} key={Math.random()}/>
                            )
                        })
                    }
                    {
                        testimonials.testimonials.map((testimonial:any)=>{
                            return (
                                <Testimonial testimonial={testimonial} key={Math.random()}/>
                            )
                        })
                    }
                    {
                        testimonials.testimonials.map((testimonial:any)=>{
                            return (
                                <Testimonial testimonial={testimonial} key={Math.random()}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-[70%] sm:w-full p-2'>
                <h1 className='font-extrabold text-[72px] gradientB mb-2'>WHAT DEFINES US?</h1>
                <div className='w-full p-2 flex flex-row justify-between'>
                    <PillarCard animId='cardA' title='Opportunities,' body='Because you deserve progress.' icon={<Handshake/>}/>
                    <PillarCard animId='cardB' title='Efficiency,' body='Because your time is priceless.' icon={<Clock/>}/>
                    <PillarCard animId='cardC' title='Customer Appreciation,' body='Because you give us purpose, feedback and resources.' icon={<Heart/>}/>
                    <PillarCard animId='cardD' title='Innovation,' body='To focus on what you care about, not on inconveniences.' icon={<Brain/>}/>
                </div>
                <Subtitle>OPPORTUNITIES</Subtitle>
                <p className='text-[18px]'>
                    This is the absolute core of our mission. Our app was designed to give an opportunity to smaller people and organizations.
                    If you do not have college studies, live in a peripheral country, and/or have no experience, resources or reputation,
                    you probably have more than once found yourself in an agonic struggle to find an employment (or to employ) in major 
                    hiring platforms.<span className='font-bold'> We are planning on getting rid of such a problem</span>, and we plan on
                    doing so by giving you, the customer, ultra-fine-grained control of what you are looking for, and balance your ambitions
                    to what is available for you in the market.
                </p>
                <Subtitle>EFFICIENCY</Subtitle>
                <p className='text-[18px]'>
                    Here at SilverLeaf, what defines us is our dilligent and exhaustive approach to solving problems.
                    You will not struggle to find a good job offer;
                    <span className='font-bold'> our search engine does that job for you. </span>
                    Filters are not to find mediocre offers, which could be overall good for you, but not quite the best.
                    Our filters are <span className='font-bold'>outstanding</span>. We allow you to customize virtually anything,
                    down to the smallest number or category.
                </p>
                <Subtitle>CUSTOMER APPRECIATION</Subtitle>
                <p className='text-[18px]'>
                    In our business, our most valuable asset is not our knowledge, not our resources, not our reputation, and not even our skills.<br/>
                    <span className='font-bold'>Our most valuable asset is you, the customer</span>, which is why we have compromised ourselves to be
                    fully servile and available; if you have a message to send, we <span className='font-bold'>will</span> answer in 10 minutes or less.
                    If you need an extensive conversation with technical support, we will answer as soon as possible, and even though you are given the
                    option, you won't even need to make a phone call. We will procure to always deliver the most comfortable experience.
                </p>
                <Subtitle>INNOVATION</Subtitle>
                <p className='text-[18px]'>
                    Besides implemeting a common search engine, we have also decided to use AI services, services that are guaranteed to make
                    our customers' lives easier. For candidates, barriers such as being limited on your job-seeking
                    because of limited filters are now gone; just by describing what your ideal job looks like as if you were doing so to a person,
                    you'll find yourself satisfied in a matter of seconds.
                </p>
            </div>
            <div className='w-full p-3'>
             <hr className='border-[0.5px] border-[rgba(255,255,255,1)] w-full'/>
            </div>
            <div className='flex flex-row w-full p-3 justify-around'>
                <p className='transition-all hover:cursor-pointer hover:brightness-110 active:brightness-95 text-white font-thin'>
                    About Us
                </p>
                <p className='transition-all hover:cursor-pointer hover:brightness-110 active:brightness-95 text-white font-thin'>
                    TOS
                </p>
                <p className='transition-all hover:cursor-pointer hover:brightness-110 active:brightness-95 text-white font-thin'>
                    Privacy Policy
                </p>
                <p className='transition-all hover:cursor-pointer hover:brightness-110 active:brightness-95 text-white font-thin'>
                    Help
                </p>
            </div>
        </div>
  )
}

function Subtitle({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <h2 className='font-bold gradientB text-[24px]'>
        {children}
    </h2>
  )
}
