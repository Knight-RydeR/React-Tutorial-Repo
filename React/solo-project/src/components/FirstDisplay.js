import React from 'react';
// import ReactDOM from 'react-dom';
import revan from '../revan.jpg'
import '../App.css';

export default function FirstDisplay() {
    return(
        <div>
            <img src={revan} className="App-logo" alt="logo" />
            <h2>Knight_RydeR*</h2>
            <h6 className='name'>Frontend Developer/ Blockchain Developer and Auditor</h6>
        </div>
    );
}