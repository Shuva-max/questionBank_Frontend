import React from 'react';
import './about.css';
import Footer from '../inc/Footer';
import hoverImage from '../images/my-question-bank.png';
import member1 from '../images/member1.png'
import member2 from '../images/member2.jpg'
import member3 from '../images/member3.png'
import facebookSvg from '../images/svg/fabook-icon-white.svg';
import twitterSvg from '../images/svg/twitter-icon-white.svg';
import linkedinSvg from '../images/svg/inkedin-icon-white.svg';
import instaSvg from '../images/svg/Instagram_black.svg';
import emailSvg from '../images/svg/emailL.svg';

function About() {
    return (
        <>
            <div className='about-section container'>
                <div className="about-proj-section row">


                    <div className="proj-details col" >
                        <h1>Project: Question Bank</h1>
                        <p> <span id='tagNiT'>NiT - Previous Year Questions</span>, a question bank, a valuable tool for anyone seeking structured information on a particular topic. By taking specific arguments, it generates relevant results, offering a tailored experience to users. This versatility suggests that it is designed to accommodate a variety of needs and preferences, making it accessible and useful to a wide audience.</p>
                    </div>

                    <div id="sectionPic" className='col'>
                        <img className='floating' src={hoverImage} alt='' />
                    </div>
                </div>

                {/* Member Section */}
                <section className="member-section">

                    <h1>Our Strong & Creative Team</h1>

                    <div className="row all-member">
                        {/* member 1 */}
                        <div className="col">

                            <div className=" eachTeam">

                                <div className='teamPic'>
                                    <img src={member1} alt="member 1" className='' />
                                </div>
                                <div className="teamSocialLink">
                                    <a  href="https://www.facebook.com/shuva.paul.7902"> <img src={facebookSvg} alt="" /> </a>
                                    <img src={twitterSvg} alt="" />
                                    <a  href="https://www.instagram.com/__shuv575/"> <img src={instaSvg} alt="" /> </a>
                                    <a  href="https://www.linkedin.com/in/shuva575"> <img src={linkedinSvg} alt="" /> </a>
                                    <a href="mailto:shuva575paul@gmail.com"><img src={emailSvg} alt="" /></a> 
                                </div>

                                <div className="teamDesc ">
                                    <h1 className="teamName">Shuva Paul</h1>
                                    <p className="position">Developer | Tech Lead | Database Administrator</p>
                                </div>
                            </div>
                        </div>

                        {/* member 2 */}
                        <div className="col">
                            <div className=" eachTeam">

                                <div className='teamPic'>
                                    <img src={member2} alt="member 2" className='col' />
                                </div>
                                <div className="teamSocialLink">
                                   <a  href="https://www.facebook.com/lahasayantan91"> <img src={facebookSvg} alt="" /> </a>
                                    <img src={twitterSvg} alt="" /> 
                                   <a  href="https://www.instagram.com/sayantan_laha/"> <img src={instaSvg} alt="" /> </a>
                                    <img src={linkedinSvg} alt="" /> 
                                   <a href="mailto:sayantanlaha2022@gmail.com"> <img src={emailSvg} alt="" /> </a>
                                </div>

                                <div className="teamDesc col">
                                    <h1 className="teamName">Sayantan Laha</h1>
                                    <p className="position">UX Designer | Database Manager</p>
                                </div>
                            </div>
                        </div>

                        {/* member 3 */}
                        <div className="col">
                            <div className=" eachTeam">

                                <div className='teamPic'>
                                    <img src={member3} alt="member 2" className='col' />
                                </div>
                                <div className="teamSocialLink">
                                   <a  href="https://www.facebook.com/debjit.saha.9674?mibextid=ZbWKwL"> <img src={facebookSvg} alt="" /> </a>
                                    <a  href="https://x.com/DEBWEB_official?t=HTu_mwc6wGswCYtP693MYA&s=09"> <img src={twitterSvg} alt="" /> </a> 
                                   <a  href="https://www.instagram.com/debjit_saha_2?igsh=YzF0eWIyZWk2Mzc1"> <img src={instaSvg} alt="" /> </a>
                                    <img src={linkedinSvg} alt="" /> 
                                   <a href="mailto:sahadebjit357@gmail.com"> <img src={emailSvg} alt="" /> </a>
                                </div>

                                <div className="teamDesc col">
                                    <h1 className="teamName">Debjit Saha</h1>
                                    <p className="position">UX Designer & Developer </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Footer component */}

            </div>
            <Footer />
        </>
    );
}

export default About;