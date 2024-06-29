import React from 'react';
import './buttonStyles.scss';
export default function Button(props:{text:string,fill?:boolean}) {
  return (
    <div className={`rounded-md button ${props.fill ? 'fill' : 'hollow'}`}>
      {props.text}
    </div>
  )
}
