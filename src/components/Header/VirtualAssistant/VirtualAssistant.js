import React from "react";
import "./VirtualAssistant.css";
import Typography from "@mui/material/Typography";
import chatbotGif from "./chatbot.gif"; // Import the GIF file

function VirtualAssistant() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Virtual Assistant</div>

        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          <div className="rightcontent">

          {/* Profile description */}
          {/* <h2 className="intro">Introduction</h2> */}
          <Typography className="t">A virtual assistant is a software application or
           platform that utilizes artificial intelligence and natural language processing
            to assist users in various tasks and services. From answering questions, 
            scheduling appointments, and providing customer support to controlling smart 
            home devices and conducting web searches, virtual assistants offer a wide range
             of functionalities. With their ability to streamline tasks, enhance
               productivity, and provide convenient access to information and services, virtual
                assistants play a significant role in modern-day digital interactions.</Typography><br/>

                <Typography className="t"> In addition to providing institutional insights, this AI assistant 
                aids students and individuals in various capacities. It serves as a valuable resource for prospective 
                students seeking information about admission procedures, available programs, and fee structures. 
                Moreover, it offers guidance on reaching the campus, accommodation options, and essential facilities. 
                For current students, the assistant facilitates access to academic resources, information about campus
                 events, and assistance with placement opportunities. Furthermore, it caters to the broader community by
                  disseminating knowledge about the university's vision, mission, and societal contributions. Whether it's 
                  answering queries about the chancellor, vice-chancellor, or academic committees, this AI assistant strives
                   to be a reliable companion in navigating the educational journey at JNTUGV University College of 
                   Engineering Vizianagaram.</Typography><br />

                   <p class="centered-link">
  <div style={{ textAlign: "center" }}>
    <span style={{ fontSize: "20px" }}>Click here</span>
  </div>
  <a href="https://bb8d-2401-4900-4b58-e0af-b52f-4c3c-e6f7-bdd.ngrok-free.app " target="_blank" rel="noopener noreferrer">
    <img src={chatbotGif} alt="Click here" class="gif-image" style={{ width: "150px", height: "150px" }} />
  </a>
</p>



         </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualAssistant;
