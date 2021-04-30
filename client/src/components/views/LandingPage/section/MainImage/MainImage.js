import React from 'react'
import './MainImage.css'

export default function MainImage(props) {

    return (
        <div className="main_image" >
            <img src={props.image}/>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }}>
                    <h2 style={{ color: 'white' }}>  {props.title} </h2>
                    <p style={{ color: 'white', fontSize: '1rem' }}> {props.text}</p>

                </div>
            </div>
        </div>
    )
}
