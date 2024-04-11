import React, { useContext, useState } from "react";
import "./home.css";
import LatestQn from "./LatestQn";
import questionContext from '../context/questionContext';
import Result from "./Result";

function Home() {
    const context = useContext(questionContext);
    const { filter2 } = context;    //destructuring context
    // console.log(questions)

    const [yr, setYr] = useState("null");
    const [dept, setDept] = useState("null");
    const [sem, setSem] = useState("null");

    const yrChange = (event) => {
        setYr(event.target.value);
    };
    const deptChange = (event) => {
        setDept(event.target.value);
    };
    const semChange = (event) => {
        setSem(event.target.value);
    };

    const haldleClick = async () => {
        // alert("Search btn clicked");
        // api func call
        console.log("search btn clicked")
        console.log(dept, sem, yr)
        const update = await filter2(dept, sem, yr);   //api call
        if (update) {
            console.log("filtered successful")
        } else {
            console.log("filtered not successful")
        }
    };

    const haldleAdvSearchClick = () => {
        alert("you clicked the btn");
        // api func call
    };

    return (
        <div className="d-flex justify-content-center">

            <div className="home-component">
                <div className="container">
                    <div className="qnBank m-3">
                        <h2 className="">Question Bank</h2>
                    </div>
                    <div className="d-flex justify-content-center" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                        <label className="lebel-tag">
                            YEAR

                            <select
                                className="lebel-select custom-lebel"
                                yr={yr}
                                onChange={yrChange}
                            >
                                <option value="null">select</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>
                        </label>
                        <label className="lebel-tag">
                            SEMESTER

                            <select
                                className="lebel-select custom-lebel"
                                sem={sem}
                                onChange={semChange}
                            >
                                <option value="null">select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </label>
                        <label className="lebel-tag">
                            DEPARTEMNT

                            <select
                                className="lebel-select custom-lebel"
                                dept={dept}
                                onChange={deptChange}
                            >
                                <option value="null">select</option>
                                <option value="CE">CE</option>
                                <option value="ME">ME</option>
                                <option value="EE">EE</option>
                                <option value="ECE">ECE</option>
                                <option value="EIE">EIE</option>
                                <option value="CSE">CSE</option>
                                <option value="CST">CST</option>
                                <option value="IT">IT</option>
                                <option value="AIML">AIML</option>
                                <option value="CSBS">CSBS</option>
                                <option value="CSDS">CSDS</option>
                            </select>
                        </label>

                        {/* search button that invoke api func call */}
                        <div className="search-btn">
                            <button onClick={haldleClick} type="button" className="btn btn-primary">Search</button>
                        </div>
                    </div>

                    {/* <div className="">
                <p>YEAR: {yr === "null" ? "" : yr}</p>
                <p>DEPARTMENT: {dept === "null" ? "" : dept}</p>
                <p>SEMESTER: {sem === "null" ? "" : sem}</p>
            </div> */}

                    {/* <button className="adv-btn" onClick={advclick}>
                Advance Search
            </button> */}


                </div>
                {/* Result showing functunallity */}
                <div className="latest-qn-section">
                    <LatestQn />
                </div>

                <div className="adv-search-section">
                    <div className="subject-name adv-search">

                        <label >
                            SUBJECT NAME
                        </label>
                        <input
                            name="subjectName"
                        />
                    </div>

                    <div className="subject-code adv-search">

                        <label >
                            SUBJECT CODE
                        </label>
                        <input
                            name="subjectCode"
                        />
                    </div>

                    {/*Advance search button that invoke api func call */}
                    <div className="adv-search-btn d-flex justify-content-center">
                        <button onClick={haldleAdvSearchClick} type="button" className="btn btn-primary">Filter</button>
                    </div>

                </div>

                {/* Results section */}
                <Result />

            </div>
        </div>
    );
}

export default Home;
