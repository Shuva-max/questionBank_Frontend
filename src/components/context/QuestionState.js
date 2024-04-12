import React, { useState } from 'react'
import questionContext from './questionContext'

const QuestionState = (props) => {

  const host = "https://backend-qn.onrender.com";

  const [questions, setQuestions] = useState();

  const getLatestpost = async () => {
    try {
      const response = await fetch(`${host}/qn/latest`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
        }
      });
      // return response.json(); // parses JSON response into native JavaScript objects
      const json = await response.json();
      console.log(json);
      if(json.status){
        return json;
      }else{
        // do nothing
        return {status: false}
      }
    } catch (error) {
      console.log(error)
    }
  }

  //Get filter2
  const filter2 = async (dept, sem, year) => {
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

  //Get filter3
  const filter3 = async (dept, sem, year, extype, scode, sname) => {
    //API call
    //fetch api call
    // Default options are marked with *
    try {
      const response = await fetch(`${host}/qn/filter3?dept=${dept}&sem=${sem}&exam_type=${extype}&year=${year}&subj=${sname}&subjCode=${scode}`, {
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
    <questionContext.Provider value={{ filter2, questions, setQuestions, getLatestpost, filter3 }}>
      {props.children}
    </questionContext.Provider>
  )
}

export default QuestionState;
