import React from "react";
import './footer.css';
import jisLogo from '../images/jis_logo.png';
import facebookSvg from '../images/svg/fabook-icon-white.svg';
import twitterSvg from '../images/svg/twitter-icon-white.svg';
import whatsappSvg from '../images/svg/whatsapp-icon-white.svg';
import linkedinSvg from '../images/svg/inkedin-icon-white.svg';
import instaSvg from '../images/svg/Instagram_black.svg';

const Footer = () => {
    return (
        <>
            {/* <!-- footer --> */}
            <footer className="footer-section">
                <div className="footer-raper container">
                    <div className="joinSection d-flex justify-content-between ">
                        <div className="joinDesc">
                            <h1 className="sectionHeader" >Contribute to this project</h1>
                        </div>

                        <a href="https://github.com/baban2022/project_share" target="_blank" rel="noreferrer" style={{ marginTop: '30px' }}>
                            <button className="btn-style"> Contribute </button>
                        </a>
                    </div>

                    <div className="d-flex justify-content-around" style={{ flexWrap: 'wrap' }}>

                        <div className="footerAboutus">
                            <div className="jisLogo">
                                <img src={jisLogo} width="90px" alt="" />
                            </div>
                            <div className="footersociallinkContainer">
                                <a href="https://www.facebook.com/nitnarula"> <img className="sociallink" src={facebookSvg} alt="" /></a>
                                <a href="https://www.instagram.com/nitnarula/"> <img className="sociallink" src={instaSvg} alt="" /></a>
                                <img className="sociallink" src={twitterSvg} alt="" />
                                <img className="sociallink" src={linkedinSvg} alt="" />
                                <img className="sociallink" src={whatsappSvg} alt="" />
                            </div>
                        </div>

                        <div className="footerlink">
                            <h1 className="linkTitle">Explore</h1>
                            <a href="/" className="eachLink">About us</a>
                            <a href="/" className="eachLink">FAQ</a>
                            <a href="/" className="eachLink">Blog</a>
                            <a href="/" className="eachLink">Contact</a>
                        </div>

                        <div className="footerlink">
                            <h1 className="linkTitle">Service</h1>
                            <a href="/" className="eachLink">Mining</a>
                            <a href="/" className="eachLink">Control Data</a>
                            <a href="/" className="eachLink">Design</a>
                            <a href="/" className="eachLink">Security</a>
                        </div>

                        <div className="footerlink">
                            <h1 className="linkTitle">Resource</h1>
                            <a href="/" className="eachLink">Style Guide</a>
                            <a href="/" className="eachLink">Change Log</a>
                            <a href="/" className="eachLink">License</a>
                        </div>


                    </div>
                    <div className="footerAboutusMin">
                        <div className="jisLogo">
                            <img src={jisLogo} width="90px" alt="" />
                        </div>
                        <div className="footersociallinkContainer">
                            <a href="https://www.facebook.com/nitnarula"> <img className="sociallink" src={facebookSvg} alt="" /></a>
                            <a href="https://www.instagram.com/nitnarula/"> <img className="sociallink" src={instaSvg} alt="" /></a>
                            <img className="sociallink" src={twitterSvg} alt="" />
                            <img className="sociallink" src={linkedinSvg} alt="" />
                            <img className="sociallink" src={whatsappSvg} alt="" />
                        </div>
                    </div>

                    <div className="footerCopyright d-flex justify-content-center">
                        <p>&copy; 2024 design and developed by <span className="developedBy">Shuv575 & Team</span>.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;