import React, { Component } from "react";
import Pdf from "../assets/Kathleen_Kelly_Resume_Dev.pdf";


class Resume extends Component() {
    render() {
        return (
            <div className="Pdf">
                <a href={Pdf} alt="Kaite Kelly's Resume">Download Resume</a>
            </div>
        );
    }
}

export default Resume;