import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://miro.medium.com/max/11822/1*9L_6zHCzBW3aN5XwbKAjhQ.jpeg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Sint ipsum sint nulla irure mollit est qui amet sunt consectetur amet consectetur ullamco.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>

            </div>
        </div>
    )
}
