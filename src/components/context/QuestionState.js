import React, { useState } from 'react'
import questionContext from './questionContext'

const QuestionState = (props) => {

    const host = "http://localhost:8000";

    const [questions, setQuestions] = useState();

      const check = async()=>{
        try {
            const response = await fetch(`${host}/qn/`, {
              method: "GET", // *GET, POST, PUT, DELETE, etc.
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify()
            });
            // return response.json(); // parses JSON response into native JavaScript objects
            const json = await response.json();
            console.log(json);
            // setQuestions(json);  
            // return json.status;
            
        } catch (error) {
            console.log(error)
        }
      }
    
      //Get all notes
      const filter2 = async(dept, sem, year)=>{
        //API call
        //fetch api call
        // Default options are marked with *
        try {
            const response = await fetch(`${host}/qn/filter2?dept=${dept}&sem=${sem}&year=${year}`, {
              method: "GET", // *GET, POST, PUT, DELETE, etc.
              headers: {
                "Content-Type": "application/json"
              }
            });
            // return response.json(); // parses JSON response into native JavaScript objects
            const json = await response.json();
            console.log(json);
            setQuestions(json.result);  
            return json.status;
            
        } catch (error) {
            console.log(error)
        }
      }

    return (
        <questionContext.Provider value={{ filter2, questions, setQuestions, check }}>
            {props.children}
        </questionContext.Provider>
    )
}

export default QuestionState;
