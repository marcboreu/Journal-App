import React from 'react'

export const Loader = () => {
    return (
        <div className="loader__container">
            <div className="icon__container">
                <i className="fa-3x fas fa-circle-notch fa-spin" aria-hidden="true"></i>
            </div>
            <br/>
            <div className="message__container">
                <span>Loading... Please wait</span>
            </div>
        </div>
    )
}
