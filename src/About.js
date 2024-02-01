import React from "react";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import IconButton from '@mui/material/IconButton';

export default function About() {
    return (
        <div className="abo">
            <div className="card bg-light text-light m-3 border-0">
                <div className="card-header border-0 about"><h1>About Me</h1></div>
                <div className="card-body bg-light text-dark about-intro">
                    <p className="card-text text-center m-5">Hey, I am Parthiban, an aspiring developer with a degree in Mechanical
                         Engineering. I am currently learning new skills with a vision of becoming better at what I do.
                        I like Web Development and to Create a new Interfaces. I also have Frontend skills in HTML, CSS, Javascript, React js and Backend skills in
                        node js, mongoDB, express.</p>
                </div>
                <div className="resume">
                    <a href="https://drive.google.com/file/d/1fdkW8zbyNeyx2moFVTGEIDcWNMGk9rNB/view?usp=drive_link"
                        target="_blank">
                        <IconButton >
                            <InsertDriveFileIcon color="secondary" />
                            <span style={{ color: "purple" }}>Resume</span>
                        </IconButton></a>
                </div>
            </div>
        </div>
    )
}