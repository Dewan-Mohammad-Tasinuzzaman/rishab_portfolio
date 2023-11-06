import React from 'react';

function EducationItem (props) {


    return (
        <div className='educationItem'>
            <div className="educationItem__bulletBox">
                <div className="educationItem__bulletBox_circle"></div>
                <div className="educationItem__bulletBox_line"></div>
            </div>

            <div className="educationItem__infoBox">
                <div className="educationItem__infoBox_title">{props.title}</div>
                <div className="educationItem__infoBox_date">{props.date}</div>
            </div>
        </div>
    );
}


export default EducationItem;