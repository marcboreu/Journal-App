import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { JournalEntries } from './JournalEntries'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

// import moment from 'moment';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    const handleAddNew = () => {
        dispatch( startNewNote() );
    }

    // // const time = moment().format("HH");
    // let time = 14;
    // console.log(time);

    // let icon;
    // if (time > 19 || time < 6) {
    //     icon = <i className="far fa-moon"></i>
    // } else if (time >= 6 && time < 13) {
    //     icon = <i className="far fa-sun"></i>;
    // } else if (time >= 13 && time <= 19) {
    //     icon = <i className="far fa-cloud-moon"></i>
    // }


    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar">
                <div>
                    <h3 className="mt-5">
                        Message Customized
                    </h3>
                </div>
                <div>
                    <h3 className="mt-5">
                        { name }
                    </h3>
                </div>
                <button 
                    className="btn"
                    onClick={ hanleLogout }
                >
                    Logout
                </button>
            </div>

            <div 
                className="journal__new-entry"
                onClick={ handleAddNew }
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />    

        </aside>
    )
}
