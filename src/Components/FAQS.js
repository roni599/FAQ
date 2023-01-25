import React from 'react'
import style from '../Css/One.module.css'
import Faqs2 from '../Components/Faqs2'
import Data from '../Components/Data'


const FAQS = () => {
  return (
    <div className={style.main}>
        {Data.map((data,index)=><Faqs2 key={data.id} item={index} {...data}/>)}
    </div>
  )
}

export default FAQS
