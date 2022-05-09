import React from 'react'
import { useSelector } from "react-redux";

export default function Reveal() {
    
    const state1 = useSelector((state) => {
        return state.AnalyseReducer;
      });
  return (

    <div className='Reveal-container'>
        {state1.data != "hey" && state1.data.data.prediction}
    </div>

  )
}
