import React from "react"
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import profile from "./profile.jpg"

export default function Intro() {
    return (
        <div className="home">
            <div className="card bg-light text-light m-3 border-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={profile}
                            className="img-fluid rounded-start image m-3" alt="Profile"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body bg-light text-light content">
                            <h1 className="card-title">I am Parthiban K</h1>
                            <p className="card-text">Full Stack Developer</p>
                            <p className="card-text">I am know well about responsive web design and enhanced my skill .</p>
                            <div className="icon">
                                <a className="link" href="https://www.linkedin.com/in/parthiban-k-68b35a1a1/"
                                    target="_blank" rel="noreferrer">
                                    <IconButton>
                                        <LinkedInIcon color="primary" />
                                    </IconButton></a>
                                <a className="link" href="https://github.com/parthibanvedha"
                                    target="_blank" rel="noreferrer">
                                    <IconButton>
                                        <GitHubIcon style={{ color: "grey" }} />
                                    </IconButton></a>
                                <a className="link" href="mailto: kparthikumar@gmail.com"
                                    target="_blank" rel="noreferrer">
                                    <IconButton>
                                        <EmailIcon color="error" />
                                    </IconButton></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}