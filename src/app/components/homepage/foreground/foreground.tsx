"use client";
import React, { useEffect, useState } from 'react'
import {Scrollbars} from 'react-custom-scrollbars'
import { Header } from './header'
import Footer from './footer'
import Main from './main'
import Navbar from './navbar/navbar'
export default function Foreground() {
  const [client,setClient] = useState(false)
  useEffect(()=>{
    setClient(true)
  },[])
  return (
      <div className='absolute top-0 left-0 w-full h-full text-white overflow-hidden flex flex-col items-center'>
            <Navbar invisible/>
            {client ? (
              <Scrollbars>
                <Header/>
                <Main/>
                <Footer/>
              </Scrollbars>
            ) : (<>
              <Header/>
              <Main/>
              <Footer/>
            </>)}
            
      </div>

  )
}