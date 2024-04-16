import React, { useContext, useState } from "react";
import "./home.css";
import LatestQn from "./LatestQn";
import questionContext from '../context/questionContext';
import Result from "./Result";
import Alert from "./Alert";
import alertContext from "../context/alertContext";

function Home() {
    const context = useContext(questionContext);
    const alertC = useContext(alertContext);
    const { showAlert } = alertC;
    const { filter2, filter3 } = context;    //destructuring context
    // console.log(questions)

    const [yr, setYr] = useState("");
    const [dept, setDept] = useState("");
    const [sem, setSem] = useState("null");
    const [extype, setExtype] = useState("null");

    const [advsearch, setAdvsearch] = useState({ sname: "", scode: "" });
    const [btndisable, setBtndisable] = useState(false);
    const [filterbtndisable, setFilterbtndisable] = useState(false);

    const yrChange = (event) => {
        setYr(event.target.value);
    };
    const deptChange = (event) => {
        setDept(event.target.value);
    };
    const semChange = (event) => {
        setSem(event.target.value);
    };
    const exTypeChange = (event) => {
        setExtype(event.target.value);
    };
    const advSearchChange = (e) => {
        setAdvsearch({ ...advsearch, [e.target.name]: e.target.value });
        // console.log({ advsearch, extype })
    };

    // auto scrolling effect
    // Auto-scroll down 
    function autoScrollDown() {
        window.scrollBy(0, 500); // You can adjust the second parameter to control the speed of the scroll
    }


    const haldleClick = async () => {
        // alert("Search btn clicked");
        // api func call

        // console.log("search btn clicked");
        setBtndisable(true);
        // console.log(dept, sem, yr)
        let update = 'fatch';
        if ((dept !== '' && sem !== 'null') || (yr !== '' && sem !== 'null') || (dept !== '' && sem !== 'null' && yr !== '')) {
            update = await filter2(dept, sem, yr);   //api call

        } else {
            showAlert(": invalid input!!", 'warning')
        }

        if (update === 'OK') {
            // console.log("Search is successful")
            setTimeout(autoScrollDown, 1100);
        } else if (update === 'EMPTY') {
            // console.log("Search is not successful")
            showAlert(": Search Result is Empty", "info")
            alert("Search Result is Empty!!!")
        } else if (update === 'ERROR') {
            showAlert(": Internal Error!!", "danger")
        }
        setBtndisable(false);
    };

    const haldleAdvSearchClick = async () => {
        // console.log("you clicked the btn");
        // api func call
        setFilterbtndisable(true)
        let update = false;
        if (yr !== '' && sem !== 'null') {
            update = await filter3(dept, sem, yr, extype, advsearch.scode, advsearch.sname);   //api call

        } else {
            alert("invalid input!!")
        }
        if (update === "OK") {
            // console.log("filtered successful")
            setTimeout(autoScrollDown, 1100);
        } else if (update === "EMPTY") {
            // console.log("no post found")
            alert("no post found")
            showAlert(": No Post Found!!!", "info")
        } else if (update === "ERROR") {
            showAlert(": Internal Error!!!", "warning")
        }
        setFilterbtndisable(false)
    };

    return (
        <div className="d-flex justify-content-center">

            <div className="home-component">

                {/* Alert component */}
                <div className="alert-component">
                    <Alert />
                </div>

                <div className="container">

                    <div className="qnBank m-3">
                        <h1 className="">Question Bank</h1>
                    </div>

                    {/* <div className="">
                <p>YEAR: {yr === "null" ? "" : yr}</p>
                <p>DEPARTMENT: {dept === "null" ? "" : dept}</p>
                <p>SEMESTER: {sem === "null" ? "" : sem}</p>
            </div> */}

                    {/* <button className="adv-btn" onClick={advclick}>
                Advance Search
            </button> */}

                    {/* Latest post */}
                    <div className="latest-qn-section">
                        <LatestQn />
                    </div>

                    {/* searching and filtering */}
                    <section className="search-filter-section" >
                        <div className="mt-4 search-section" >
                            <div className="d-flex search-items">
                                <label className="lebel-tag">
                                    YEAR*

                                    <select
                                        className="lebel-select custom-lebel"
                                        yr={yr}
                                        onChange={yrChange}
                                    >
                                        <option value="">select</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                    </select>
                                </label>
                                <label className="lebel-tag">
                                    SEMESTER*

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
                                    DEPARTEMNT*

                                    <select
                                        className="lebel-select custom-lebel"
                                        dept={dept}
                                        onChange={deptChange}
                                    >
                                        <option value="">select</option>
                                        <option value="CE">CE</option>
                                        <option value="ME">ME</option>
                                        <option value="EE">EE</option>
                                        <option value="ECE">ECE</option>
                                        <option value="IT">IT</option>
                                        <option value="CSE">CSE</option>
                                        <option value="CST">CST</option>
                                        <option value="CSBS">CSBS</option>
                                        <option value="AIML">AIML</option>
                                        <option value="CSDS">CSDS</option>
                                        <option value="ECSE">ECSE</option>
                                        <option value="EIE">EIE</option>
                                    </select>
                                </label>
                            </div>

                            {/* search button that invoke api func call */}
                            <div className="d-flex search-btn">
                                <button disabled={btndisable} onClick={haldleClick} type="button" className="common-btn btn btn-primary">Search</button>
                            </div>
                        </div>



                        {/* advance search section */}
                        <div className="adv-search-section mt-4" >
                            <div className="subject-name adv-search">

                                <label className="lebel-tag">
                                    SUBJECT NAME
                                </label>
                                <input value={advsearch.sname} onChange={advSearchChange}
                                    name="sname"
                                />
                            </div>

                            <div className="subject-code adv-search">

                                <label className="lebel-tag">
                                    SUBJECT CODE
                                </label>
                                <input value={advsearch.scode} onChange={advSearchChange}
                                    name="scode"
                                />
                            </div>
                            <div className="subject-code adv-search">

                                <label className="lebel-tag">
                                    Exam Type
                                </label>
                                <select name="extype" className="" value={extype} onChange={exTypeChange} >
                                    <option value="null">select</option>
                                    <option value="R">Regular</option>
                                    <option value="B">Backlog</option>
                                    <option value="L">Lataral</option>
                                    <option value="RETAKE">Retake</option>
                                </select>
                            </div>

                            {/*Advance search button that invoke api func call */}
                            <div className="adv-search-btn d-flex justify-content-center">
                                <button disabled={filterbtndisable} onClick={haldleAdvSearchClick} type="button" className="common-btn btn btn-primary">Filter</button>
                            </div>

                        </div>
                    </section>

                    {/* Result showing functunallity */}
                    {/* Results section */}
                    <Result />

                </div>
            </div>
        </div>
    );
}

export default Home;
