import React from "react";
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import { Link } from "react-router-dom";
import ProductBox from './../../includes/productBox.component';
import ProductBox2 from './../../includes/productBox2.component';

const Homepage = props => {
		
	return (
     <>
        <section>
            <div className="container-fluid">
                <div className="row row1">
                    <div className="col-md-12 center mobileOff">
                        <big>E-Learning Platform for</big><br/>
                        <Typed
                            strings={['WAEC','Professional Exams','JAMB','NECO','Post UTME','ICT Courses']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </div>
                    <div className="col-md-12 center desktopOff">
                        <h4>E-Learning Platform for WAEC, JAMB, NECO ...</h4>
                    </div>
                </div>
                <div className="row row2">
                    <div className="col-md-12 center">
                        <input type="text" placeholder="What would you love to learn?"/>
                        <input type="submit" value="Search" className="bigbutton"/>
                    </div>
                </div>
                <div className="row row3">
                    <div className="col-md-12 center">
                       Popular keywords: <Link><span>Neco</span></Link><Link><span>Waec</span></Link><Link><span>Ican</span></Link>
                    </div>
                </div>
            </div>
            <div className="ballon1">
                <div className="ballon1Image"></div>
            </div>
            <div className="ballon2">
                <div className="ballon2Image"></div>
            </div>
            <div className="divider"></div>
        </section>
        <div className="container-fluid partTwo">
            <h1 className="center">Free Past Questions</h1>
            <div className="row">
               <ProductBox 
                imageURL={require('./../../../assets/img/waec.png')}
                title="WAEC"
                description="The West African Examinations Council (WAEC) is an examination board established by law to determine the examinations required... "
                />
                <ProductBox 
                imageURL={require('./../../../assets/img/gce.png')}
                title="GCE"
                description="It is General Certificate Examination. The GCE as it usually called by many people are two based on the bodies that conduct them..."
                />
                <ProductBox 
                imageURL={require('./../../../assets/img/jamb.png')}
                title="JAMB"
                description="The Joint Admissions and Matriculations Board (JAMB) is a Nigerian entrance examination board for tertiary-level institutions..."
                />
                <ProductBox 
                imageURL={require('./../../../assets/img/neco.jpg')}
                title="NECO"
                description="The National Examinations Council (also known as NECO) is an examination body in Nigeria that conducts the Senior Secondary..."
                />
            </div>
        </div>
        <div className="container-fluid partThree">
            <h1 className="center">Professional Exams</h1>
            <p className="center p1"> We have a range of resources that will aid you in preparing for your professional exams. Lets do this!!!</p>
            <div className="row">
                <ProductBox2
                    title="ICAN Exam"
                    description=" Institute of Chartered Accountants of Nigeria. The Institute of Chartered Accountants of Nigeria is a professional accountancy..."
                />
                <ProductBox2
                    title="Web Development"
                    description="Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from de..."
                />
            </div>
        </div>
        <footer className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <h2>Afrilearn</h2>
                </div>
                <div className="col-md-3">
                    <h4>Navigation</h4>
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Forum</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4>Accounts</h4>
                    <ul>
                        <li><Link to="/">Register</Link></li>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/">Forget Password</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><Link to="/">Facebook</Link></li>
                        <li><Link to="/">Instagram</Link></li>
                        <li><Link to="/">Twitter</Link></li>
                        <li><Link to="/">Linkedin</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
    );
};
export default Homepage;