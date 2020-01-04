import React from 'react'

function SessionLength(props){
    function sessionUp() {
        if(props.sessionInterval === 59)
            return;
        props.onIncrease()
    }
    function sessionDown() {
        if(props.sessionInterval === 1)
            return;
        props.onDecrease()
    }
    return(
        <section className='intervalLength'>
            <h2>Session Length</h2>
            <button className='fa fa-sort-asc' onClick={sessionUp}></button>
            <p>{props.sessionInterval}</p>
            <button className='fa fa-sort-desc' onClick={sessionDown}></button>
        </section>
    )
}

export default SessionLength