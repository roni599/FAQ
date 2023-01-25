import React, { useState} from 'react'
import style from '../Css/Two.module.css'


const Faqs2 = (props) => {
    const { Title, Answer } = props;
    let [toggle, setToggle] = useState(false); 

    let handle=()=>{
        setToggle(!toggle)
    }

    return (
        <div className={style.main}>
            <div className={style.two}>
                <h3>{Title}</h3>
                <button className={style.btn} onClick={handle}>{toggle ? "-" : "+"}</button>
            </div>
            {toggle && <p>{Answer}</p>}
        </div>
    )
}

export default Faqs2
