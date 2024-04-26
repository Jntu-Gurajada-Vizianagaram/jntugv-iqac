import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import SendIcon from '@mui/icons-material/Send';
import chatbotGif from "../Header/VirtualAssistant/chatbot.gif"; 
// import { alignProperty } from "@mui/material/styles/cssUtils";

function Home() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentProfile">
          <div className="columns-container">
            <div className="column">
              <ul>
                <div className="link-container">
                  <SendIcon/> <Link to="/about-us/about-iqac" className="nav-link">About IQAC</Link><br /><br />
                  <SendIcon/> <Link to="/about-us/about-jntugv" className="nav-link">About JNTUGV</Link><br /><br />
                  <SendIcon/> <Link to="/about-faculty-awards" className="nav-link">Faculty Awards</Link><br /><br />
                  <SendIcon/> <Link to="/about-strategies" className="nav-link">IQAC Strategies & Objectives</Link><br /><br />
                  {/* <SendIcon/> <Link to="/about-vision-mission" className="nav-link">The JNTU-GV University Vision & Mission</Link><br /><br /> */}
                  <SendIcon/> <Link to="/about-functions" className="nav-link">IQAC Functions</Link><br /><br />
                  <SendIcon/> <Link to="/about-outcomes" className="nav-link">IQAC Outcomes</Link><br /><br />
                  <SendIcon/> <Link to="/about-events" className="nav-link">IQAC Events</Link><br /><br />
                  <SendIcon/> <Link to="/about-benefits" className="nav-link">IQAC Benefits</Link><br /><br />
                 
                </div>
              </ul>
            </div>
            <div className="column">
              <ul>
                <div className="link-container">
                 
                  <SendIcon/> <Link to="/about-course-details/about-ug-syllabus" className="nav-link">Syllabus</Link><br /><br />
                  <SendIcon/> <Link to="/feedbackforms/faculty-form" className="nav-link">Feedback details of curriculum</Link><br /><br />
                  <SendIcon/> <Link to="/AQAR" className="nav-link">AQAR</Link><br /><br />
                  {/* <SendIcon/> <Link to="/about-consulty-services" className="nav-link">Rules for Consultancy Services</Link><br /><br /> */}
                  <SendIcon/> <Link to="/about-operational" className="nav-link">Operational Features of IQAC</Link><br /><br />
                  <SendIcon/> <Link to="/about-monitoring" className="nav-link">Monitoring Mechanism</Link><br /><br />
                  <SendIcon/> <Link to="/about-aicte-approvals" className="nav-link">AICTE Approvals</Link><br /><br />
                  <SendIcon/> <Link to="/about-mou" className="nav-link">MOU</Link><br /><br />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'right' }}>
  <div style={{ fontWeight: 'bold', color: '#2e0669' }}>Click here to Visit Chatbot</div>
  <div className="right">
    <p className="centered-link">
      <a href="https://bb8d-2401-4900-4b58-e0af-b52f-4c3c-e6f7-bdd.ngrok-free.app" target="_blank" rel="noopener noreferrer">
        <img src={chatbotGif} alt="Click here" className="gif-image" style={{ width: "150px", height: "150px" }} />
      </a>
    </p>
  </div>
</div>




      <br /><br />
      <div className="iqacMessageContainer">
        <div className="iqacMessage">
        <h3 className="iqacmsg"><b>IQAC Cell Message </b></h3>
          <p>"To ensure quality culture as the prime concern for the Higher Education Institutions through institutionalizing and internalizing all the initiatives taken with internal and external support."</p>
          <p className="signature">Dr. K. Chandra Bhushana Rao<br />IQAC Cell Director</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
