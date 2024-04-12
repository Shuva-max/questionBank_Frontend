import React, { useContext } from 'react';
import './result.css';
import questionContext from '../context/questionContext';
import QnItem from './QnItem';

const Result = () => {
    const context = useContext(questionContext);
    const { questions } = context;

    // console.log(questions);

    // useEffect method to display result dinamically

    return (
        <section className='result-section'>

            {/* fetch all coming result and map all result */}
            <div className="row">

                {questions && questions.map((e) => {
                    return (
                        <div className="col-md-3 mb-3 mt-2" key={e._id}>
                            <QnItem sName={e.Subject_Name}
                                sCode={e.Subject_Code}
                                dept={e.Dept_Name}
                                yr={e.Year}
                                sem={e.Semester}
                                sType={e.Sem_Type}
                                eType={e.Exam_Type}
                                dLink={e.dn_link}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Result
