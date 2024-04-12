import React from 'react';
import './qnItem.css';

const QnItem = (props) => {
    // destructuring props
    const {sName, sCode, sType, eType, dLink, sem, yr, dept} = props;

    // decoding for eType
    const examType = (eType)=> {
        if(eType==='R' || eType==='r'){
            return 'Regular'
        }else if(eType==='B' || eType==='b') {
            return 'Backlog'
        }else if(eType==='L' || eType==='l') {
            return 'Lataral'
        }else if(eType==='RETAKE' || eType==='retake') {
            return 'Retake'
        }else {
            return "";
        }
    }

    return (
        <div className="">
            <div className="">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"> {sName} </h5>
                        <p className="card-text"> {sCode} </p>
                        <p className="card-margin"> <span className="p-bold"> Year: </span> {yr} </p>
                        <p className="card-margin"> <span className="p-bold"> Department: </span> {dept} </p>
                        <p className="card-margin"> <span className="p-bold"> Semester: </span> {sem} </p>
                        <p className="card-margin"> <span className="p-bold"> Exam Type: </span> {examType(eType)} </p>
                        <a href={dLink} className="btn btn-primary btn-sm card-dn-btn">Download</a>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default QnItem;
