import './App.css';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiTwitter, SiInstagram } from 'react-icons/si'
import { ImFacebook } from 'react-icons/im'

function App() {
  return (
    <div className='app-container'>
      <div>
        <div>
          <img src='./images/photo.jpg' alt="user" />
        </div>
        <div>
          <h1>Laura Smith</h1>
          <h2>Frontend Developer</h2>
          <h5>laurasmith.website</h5>
        </div>
        <div>
          <div><button><AiOutlineMail /> Email</button></div>
          <div><button><AiFillLinkedin /> Linkedin</button></div>
        </div>
        <div>
          <div>
            <h2>About</h2>
            <div>
              <p>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
              </p>
            </div>
            <h2>Interests</h2>
            <div>
              <p>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button><SiTwitter /></button>
        <button><ImFacebook /></button>
        <button><SiInstagram /></button>
        <button><AiFillGithub /></button>
      </div>
    </div>
  );
}

export default App;
