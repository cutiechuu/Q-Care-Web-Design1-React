import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <div className="landing-page-landing-page">
        <div className="landing-page-contents">
          <div className="landing-page-logo">
            <img
              alt="QCareLogo1777"
              src="/playground_assets/qcarelogo1777-dfwq-200h.png"
              className="landing-page--care-logo"
            />
            <img
              alt="qcarelogo21787"
              src="/playground_assets/qcarelogo21787-ek1-200h.png"
              className="landing-page-qcarelogo2"
            />
          </div>
          <div className="landing-page-buttons">
            <Link to="/user-registration" className="landing-page-navlink">
              <div className="landing-page-register button">
                <span className="landing-page-text">Register</span>
              </div>
            </Link>
            <Link to="/user-login" className="landing-page-navlink1">
              <div className="landing-page-login button">
                <span className="landing-page-text1">
                  <span>Login account</span>
                </span>
              </div>
            </Link>
          </div>
          <div className="landing-page-title">
            <div className="landing-page-qcare">
              <span className="landing-page-text3">
                Q-Care: Health Monitoring Kiosk
              </span>
              <span className="landing-page-text4">
                <span>Your records are safe here!</span>
              </span>
            </div>
            <img
              alt="PhoneImage2736"
              src="/playground_assets/phoneimage2736-4isg-400h.png"
              className="landing-page-phone-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
