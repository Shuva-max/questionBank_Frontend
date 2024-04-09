import React, { useState } from "react";
import "./home.css";

function Home() {
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

    const haldleClick = () => {
        alert("Search btn clicked");
        // api func call
    };

    const advclick = () => {
        alert("you clicked the btn");
        // api func call
    };

    return (
        <div className="container">
            <div className="qnBank m-3">
                <h2 className="">Question Bank</h2>
            </div>
            <label className="lebel">
                <button className="btn-lebel">YEAR </button>

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
            <label className="lebel">
                <button className="btn-lebel">SEMESTER </button>

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
            <label className="lebel">
                <button className="btn-lebel">DEPERMENT </button>

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
            <button type="button" className="btn btn-primary btn-lg">Search</button>

            <div className="">
                <p>YEAR: {yr === "null" ? "" : yr}</p>
                <p>DEPARTMENT: {dept === "null" ? "" : dept}</p>
                <p>SEMESTER: {sem === "null" ? "" : sem}</p>
            </div>

            {/* <button className="adv-btn" onClick={advclick}>
                Advance Search
            </button> */}
        </div>
    );
}

export default Home;
