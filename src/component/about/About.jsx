import React, {useState} from 'react';
import Counter from './Counter';



const About = (props) =>{
    const handleClick = () =>{
        setScore(67)
    }
    const [state, setState] = useState(100);
    const [score, setScore] = useState(0);
    console.log(state);
    // console.log(setState(30)); 
    return(
        <>
        <ul>
            <li>{props.first}</li>
            <li>{props.second}</li>
            <li>{props.third}</li>
        </ul>
        <p>{score}</p>
        <button onClick ={handleClick}></button>
    
        <Counter />
        </>
    );
};
export default About;8