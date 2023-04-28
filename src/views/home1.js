import React from 'react'

import { Helmet } from 'react-helmet'

import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Home1 - exported project</title>
        <meta property="og:title" content="Home1 - exported project" />
      </Helmet>
      <div className="home1-home">
        <div className="home1-container1">
          <div className="home1-nav">
            <div className="home1-logo">
              <img
                alt="QCareLogo1777"
                src="/playground_assets/qcarelogo1777-dfwq-200h.png"
                className="home1--care-logo"
              />
              <img
                alt="qcarelogo21787"
                src="/playground_assets/qcarelogo21787-ek1-200h.png"
                className="home1-qcarelogo2"
              />
            </div>
            <div className="home1-user">
              <div className="home1-icon">
                <img
                  alt="Person1757"
                  src="/playground_assets/person1757-vgt-200h.png"
                  className="home1-person"
                />
              </div>
            </div>
            <div id="greeting" className="home1-container2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home1
