
import React from "react";
// import pdf from "./Kathleen_Murphy_Resume_Dev";


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/



export default function Resume() {
  return (
    <div className="Resume">
      <h1>Resume should display here</h1>
      <a href="https://drive.google.com/file/d/1gDFV01YSG3jDeLpCHccbBx1wzrPr6EkM/view?usp=sharing" target="blank">View Resume</a>
      {/* <img></img> */}
    </div>
    // {/* <div>
    // <img className="img-fluid" 
    //  src={`${process.env.PUBLIC_URL}/assets/Kathleen_Kelly_Resume_Dev.pdf`} 
    //  alt="logo"/>
    //  </div> */}
  );
}

//I just linked mine as a pdf on google docs. Then I created an anchor tag on my site that links to that pdf resume