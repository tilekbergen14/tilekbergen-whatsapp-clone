import React from 'react'

export default function Message() {
    return (
        <div className="message self-message">
            <div>
                <h6 className="message__sender">Sender</h6>
                <p>Hello I'm message</p>
            </div>
            <h6 style={{color: "gray",width: "max-content", marginTop: "auto", marginLeft:10}}>2:22PM</h6>
        </div>
    )
}
