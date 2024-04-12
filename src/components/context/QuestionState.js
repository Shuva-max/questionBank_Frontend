import React, { useContext, useEffect, useState } from 'react';
import questionContext from './questionContext';
import alertContext from './alertContext';

const QuestionState = (props) => {
  
  const host = "http://localhost:8000";
  
  const [questions, setQuestions] = useState();

  const alertC = useContext(alertContext);
  const {showAlert} = alertC;
  
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
      // console.log(json);
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
    // console.log({dept, sem, year})
    try {
      let apiString = "";

      if(dept ===''){
        apiString=`${host}/qn/filter2?dept&sem=${sem}&year=${year}`;
      }else if (year === '') {
        apiString=`${host}/qn/filter2?dept=${dept}&sem=${sem}&year`;
      }else {
        apiString=`${host}/qn/filter2?dept=${dept}&sem=${sem}&year=${year}`;
      }
      // console.log(apiString)

      const response = await fetch(apiString, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
        }
      });
      // return response.json(); // parses JSON response into native JavaScript objects
      const json = await response.json();
      // console.log(json);
      if(json.status === "OK"){
        setQuestions(json.result);
      }else if(json.status === "EMPTY") {
        // console.log("no search conetent")
        // alert componrnt
        showAlert(` ${json.result}`, "info")
      }
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
      let apiString = "";

      let d = (dept==='')?"":"=" + dept;
      let y = (year==='')?"":"=" + year;
      let xmt = (extype==='null')?"":"=" + extype;
      let sc = (scode==='')?"":"=" + scode;
      let sn = (sname==='')?"":"=" + sname; 
      
      apiString=`${host}/qn/filter3?dept${d}&sem=${sem}&exam_type${xmt}&year${y}&subj${sn}&subjCode${sc}`;
      console.log(apiString);

      const response = await fetch(apiString, {
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
  
  useEffect(()=>{
    // console.log("useEffect from qnState runs")
  },[questions])

  return (
    <questionContext.Provider value={{ filter2, questions, setQuestions, getLatestpost, filter3 }}>
      {props.children}
    </questionContext.Provider>
  )
}

export default QuestionState;
