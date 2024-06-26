import React from 'react';
import './latestItem.css';

const LatestItem = (props) => {
    // destructuring props
    const { sName, sCode, eType, dLink, sem, yr, dept } = props;
    const examType = (eType) => {
        if (eType === 'R' || eType === 'r') {
            return 'Regular'
        } else if (eType === 'B' || eType === 'b') {
            return 'Backlog'
        } else if (eType === 'L' || eType === 'l') {
            return 'Lataral'
        } else if (eType === 'RETAKE' || eType === 'retake') {
            return 'Retake'
        } else {
            return "";
        }
    }

    return (
        <div className="card latestpost-section" style={{minWidth:'13vw'}}>
            <div className="card-body ">
                
                <h6 className="card-title position-relative" style={{marginBottom:'0px'}}> {sName} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1'}}>
                    latest
                </span> </h6>
                <p className="card-text"> {sCode} </p>
                <p className="card-margin"> <span className="p-bold"> Year: </span> {yr} </p>
                <p className="card-margin"> <span className="p-bold"> Department: </span> {dept} </p>
                <p className="card-margin"> <span className="p-bold"> Semester: </span> {sem} </p>
                <p className="card-margin"> <span className="p-bold"> Exam Type: </span> {examType(eType)} </p>
                <a href={dLink} className="card-dn-btn btn btn-primary btn-sm">Download</a>
            </div>
        </div>
    )
}

export default LatestItem;
