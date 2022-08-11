import React from "react";
import './style.css';
import { AiFillGithub } from 'react-icons/ai';
import { SiTwitter, SiInstagram } from 'react-icons/si'
import { ImFacebook } from 'react-icons/im'

function BottomSection() {
    return (
        <footer className="social-media">
            <button className="btn-social-media"><SiTwitter /></button>
            <button className="btn-social-media"><ImFacebook /></button>
            <button className="btn-social-media"><SiInstagram /></button>
            <button className="btn-social-media"><AiFillGithub /></button>
        </footer>
    );
}

export default BottomSection;