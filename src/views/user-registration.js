import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './user-registration.css'

const UserRegistration = (props) => {
  return (
    <div className="user-registration-container">
      <Helmet>
        <title>UserRegistration - exported project</title>
        <meta
          property="og:title"
          content="UserRegistration - exported project"
        />
      </Helmet>
      <div className="user-registration-user-reg">
        <div className="user-registration-container1">
          <div className="user-registration-forms">
            <div className="user-registration-bm-calculator">
              <span className="user-registration-text">
                <span>Body Mass Index (BMI) Calculator</span>
              </span>
              <span className="user-registration-text2">
                Please input your height and weight:
              </span>
              <div className="user-registration-container2">
                <input
                  type="text"
                  required
                  placeholder="Enter your height"
                  className="user-registration-height input"
                />
                <input
                  type="text"
                  required
                  placeholder="Enter your weight"
                  className="user-registration-weight input"
                />
                <input
                  type="text"
                  required
                  placeholder="BMI Result"
                  className="user-registration-result"
                />
              </div>
            </div>
            <form
              action="signup_action.php"
              method="POST"
              className="user-registration-form"
            >
              <input
                type="text"
                placeholder="Email"
                className="user-registration-email input"
              />
              <input
                type="text"
                placeholder="Password"
                className="user-registration-pw input"
              />
              <div className="user-registration-full-name">
                <input
                  type="text"
                  required
                  placeholder="First name"
                  className="user-registration-fn input"
                />
                <input
                  type="text"
                  required
                  placeholder="Middle name"
                  className="user-registration-mn input"
                />
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  className="user-registration-ln input"
                />
              </div>
              <div className="user-registration-details">
                <input
                  type="text"
                  required
                  placeholder="Age"
                  className="user-registration-age input"
                />
                <input
                  type="text"
                  required
                  placeholder="BMI"
                  className="user-registration-bmi input"
                />
              </div>
              <span className="user-registration-text3">
                <span>Register Here</span>
                <br></br>
              </span>
              <button
                type="button"
                className="user-registration-sign-in button"
              >
                <Link to="/user-login" className="user-registration-navlink">
                  <span>
                    Sign
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="user-registration-text7">In here</span>
                </Link>
              </button>
              <button
                type="submit"
                className="user-registration-register button"
              >
                Register New Account
              </button>
              <span className="user-registration-text8">
                Already have an account?
              </span>
            </form>
          </div>
        </div>
        <div className="user-registration-logo">
          <img
            alt="IMG2023040514131676412944"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/038b75a3-4ea2-49cc-b6c1-dc88440f981b/def98722-fdb6-44d7-b36d-e1e3595417b3?org_if_sml=18920"
            className="user-registration-img202304051413167641"
          />
          <img
            alt="qcarelogo22945"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/038b75a3-4ea2-49cc-b6c1-dc88440f981b/915ac695-3830-4c79-a235-8ea9e591c615?org_if_sml=15678"
            className="user-registration-qcarelogo2"
          />
        </div>
      </div>
    </div>
  )
}

export default UserRegistration
