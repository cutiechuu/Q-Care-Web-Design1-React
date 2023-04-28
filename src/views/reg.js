import React from 'react'

import { Helmet } from 'react-helmet'

import './reg.css'

const REG = (props) => {
  return (
    <div className="reg-container">
      <Helmet>
        <title>REG - exported project</title>
        <meta property="og:title" content="REG - exported project" />
      </Helmet>
      <div className="reg-signupcontainer">
        <span className="reg-text">
          <span>Register here!</span>
        </span>
        <div className="reg-inputs">
          <div className="reg-m-frame">
            <div className="reg-mn">
              <span className="reg-text02">
                <span>Middle name</span>
              </span>
            </div>
          </div>
          <div className="reg-l-frame">
            <div className="reg-ln">
              <span className="reg-text04">
                <span>Last name</span>
              </span>
            </div>
          </div>
          <div className="reg-age-frame">
            <div className="reg-age">
              <span className="reg-text06">
                <span>Age</span>
              </span>
            </div>
          </div>
          <div className="reg-bm-frame">
            <div className="reg-bmi">
              <span className="reg-text08">
                <span>BMI</span>
              </span>
            </div>
          </div>
          <div className="reg-u-frame">
            <div className="reg-un">
              <span className="reg-text10">
                <span>Username</span>
              </span>
            </div>
          </div>
          <div className="reg-p-frame">
            <div className="reg-password">
              <span className="reg-text12">
                <span>Password</span>
              </span>
            </div>
          </div>
          <div className="reg-register-frame">
            <span className="reg-text14">
              <span>Register new account</span>
            </span>
          </div>
          <input
            type="text"
            placeholder="First name"
            className="reg-firstname input"
          />
          <input
            type="text"
            placeholder="Middle name"
            className="reg-middlename input"
          />
        </div>
      </div>
    </div>
  )
}

export default REG
