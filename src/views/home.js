import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - exported project</title>
        <meta property="og:title" content="Home - exported project" />
      </Helmet>
      <div className="home-home">
        <div className="home-container1">
          <div className="home-nav">
            <div className="home-logo">
              <img
                alt="QCareLogo1777"
                src="/playground_assets/qcarelogo1777-dfwq-200h.png"
                className="home--care-logo"
              />
              <img
                alt="qcarelogo21787"
                src="/playground_assets/qcarelogo21787-ek1-200h.png"
                className="home-qcarelogo2"
              />
            </div>
            <div className="home-user">
              <div className="home-icon">
                <img
                  alt="Person1757"
                  src="/playground_assets/person1757-vgt-200h.png"
                  className="home-person"
                />
                <img
                  alt="Vector2698"
                  src="/playground_assets/vector2698-talh.svg"
                  className="home-vector"
                />
                <span className="home-text">Hi, User!</span>
              </div>
            </div>
          </div>
          <div className="home-buttons">
            <div className="home-proceed button">
              <Link to="/records" className="home-text1">
                <span>Proceed to Records</span>
                <br></br>
              </Link>
            </div>
          </div>
          <div className="home-title">
            <div className="home-qcare">
              <span className="home-text4">
                Q-Care: Health Monitoring Kiosk
              </span>
              <span className="home-text5">
                <span>Your records are safe here!</span>
              </span>
            </div>
            <img
              alt="PhoneImage2736"
              src="/playground_assets/phoneimage2736-4isg-400h.png"
              className="home-phone-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
