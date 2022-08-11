import React from "react";
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

function TopSection() {
    return (
        <header className="header">
            <div>
                <img src='./images/photo.jpg' alt="user" className="user-image" />
            </div>
            <div className="identity-container">
                <h1 className="name">Alexis Senga</h1>
                <h3 className="role">Frontend Developer</h3>
                <h5 className="website">laurasmith.website</h5>
            </div>
            <div className="contact">
                <button className="btn btn-white"><AiOutlineMail /> Email</button>
                <button className="btn btn-blue"><AiFillLinkedin /> Linkedin</button>
            </div>
        </header>
    )
}

export default TopSection;