'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import styles from './styles.module.scss'
export const SlideIn:React.FC<{children:ReactNode,animateId:string}> = ({children,animateId})=> {
  const [show,setShow] = useState(false) 
  useEffect(()=>{
    let observer:IntersectionObserver;
    requestAnimationFrame(()=>{
      observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            setShow(true)
          }
          else{
            setShow(false)
          }
        })
      });
      observer.observe(
        document.querySelector(`#anim${animateId}`)!
      );
    }) 
    return ()=>{
      observer?.disconnect()
    }
  },[])
  
  return (
    <div id={`anim${animateId}`} className={`${show ? styles.slideIn : styles.hide}`}>
      {children}
    </div>
  )
}
