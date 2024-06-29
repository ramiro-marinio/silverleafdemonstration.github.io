import React from 'react'
import styles from './testimonial.module.scss'
export default function Testimonial(props:{testimonial:{name:string,message:string,country:string,rating:string}}) {
  return (
    <div className={`shadow rounded-md flex flex-col items-center ${styles.testimonial}`}>
      <img src={`https://flagsapi.com/${props.testimonial.country}/flat/64.png`}></img>
      <h1 className='text-lg font-bold'>{props.testimonial.name}</h1>
      <p className={`font-extrabold ${styles[props.testimonial.rating.toLowerCase()]}`}>{props.testimonial.rating}</p>
      <p className='text-center p-1'>
        {props.testimonial.message}
      </p>
    </div>
  )
}
