import React from 'react'

const StyleTag = (props) => {
    console.log(props);
  return (
    
    <div>
        <p style={{color:props.isLoggedIn ? "red" : "green"}} >
            {props.text}
        </p>
    </div>
  )
}

export default StyleTag