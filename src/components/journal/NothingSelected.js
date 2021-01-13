import React from 'react';
import moment from 'moment';
import Clock from '../Clock';


export const NothingSelected = () => {
    return (
        <div className="nothing__main-content">
            <p>Today is...</p>
            <span className="nothing__date">{moment().format("dddd, MMMM Do YYYY")}</span>
            <p>and now it's...</p>
            <Clock/>
            <p>
                Select something
                <br />
                or create entry!
            </p>
            <i className="far fa-star fa-4x mt-5"></i>
        </div>
    )
}
