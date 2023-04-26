import React from 'react'

import { Helmet } from 'react-helmet'

import './records.css'

const Records = (props) => {
  return (
    <div className="records-container">
      <Helmet>
        <title>Records - exported project</title>
        <meta property="og:title" content="Records - exported project" />
      </Helmet>
      <div className="records-user-profile">
        <div className="records-contents">
          <div className="records-nav">
            <div className="records-logo">
              <img
                alt="QCareLogo1777"
                src="/playground_assets/qcarelogo1777-dfwq-200h.png"
                className="records--care-logo"
              />
              <img
                alt="qcarelogo21787"
                src="/playground_assets/qcarelogo21787-ek1-200h.png"
                className="records-qcarelogo2"
              />
            </div>
            <div className="records-user">
              <button type="button" className="records-button button">
                Log out
              </button>
              <div className="records-icon">
                <img
                  alt="Person1757"
                  src="/playground_assets/person1757-vgt-200h.png"
                  className="records-person"
                />
                <img
                  alt="Vector2698"
                  src="/playground_assets/vector2698-talh.svg"
                  className="records-vector"
                />
                <span className="records-text">Hi, User!</span>
              </div>
            </div>
          </div>
          <span className="records-title">Vital Signs Records</span>
          <button type="button" className="records-button1 button">
            Print Records
          </button>
        </div>
      </div>
    </div>
  )
}

export default Records
