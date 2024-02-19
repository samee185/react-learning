import React from 'react';


const DatePage = (props) =>{
    const now = new Date()
    const a = 10;
    const b = 4;
    console.log( now, a + b);
    return(
         <div>
            {props.name} is a {props.condition} guy, he prays at {now.toString()}
         </div>
    )
}

export default DatePage