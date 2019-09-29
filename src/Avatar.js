import React from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import 'tachyons';
const Avatar=(props) =>
{

    function myFunction() {
        alert("8617736997");
           }
    return (
            <div className="main_div ma4 bg-light-purple dib pa4 grow">
                <img src={`https://joeschmoe.io/api/v1/${props.gender}/${props.name}`} alt="avatar" />
"
                <h1 className="tc">{props.name}</h1>
                <p>{props.work}</p>
                <button type="button" className="btn btn-primary" onClick={myFunction}>Contact me!!</button>
                
                
             


            </div>

    )
}
export default Avatar;