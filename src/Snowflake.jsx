import './App.css'
import { useState, useEffect } from 'react'

function Snowflake({ animation, snowflake, x, y, onRemove, id }) {

    // const [mounted, setMounted] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            onRemove(id)
        }, 1500)
    }, [])

    return (
            <div style={{ animationName: animation, left: x - 15, top: y - 15 }} className='snowflake-wrapper'>
                <img className='snowflake' src={snowflake}></img>
                <img className='background-snowflake' src={snowflake} style={{ filter: 'blur(20px)' }}></img>
            </div>
    )
}

export default Snowflake