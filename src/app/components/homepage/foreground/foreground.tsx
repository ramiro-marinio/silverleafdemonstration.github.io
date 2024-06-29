'use client'
import React from 'react'
import { Header } from './header'
import Footer from './footer'
import Main from './main'
import Navbar from './navbar/navbar'
export default function Foreground() {
  return (
    <div className='absolute top-0 left-0 w-full h-full text-white overflow-x-hidden overflow-y-scroll flex flex-col items-center'>
            <Navbar invisible/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
  )
}