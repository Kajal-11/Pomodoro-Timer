import React from 'react'

function BreakInterval(props){
    
    function breakUp() {
        if(props.breakInterval === 59)
            return
        props.onIncrease()
    }
    
    function breakDown() {
        if(props.breakInterval === 1)
            return
        props.onDecrease()
    }
    
    return(
        <section className='intervalLength'>
            <h2>Break Length</h2>
            <button className='fa fa-sort-asc' onClick={breakUp}></button>
            <p>{props.breakInterval}</p>
            <button className='fa fa-sort-desc' onClick={breakDown}></button>
        </section>
    )
}

export default BreakInterval