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
            <form
              action="signup_action.php"
              method="POST"
              className="user-registration-form"
            >
              <div className="user-registration-inputs">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  className="user-registration-fullname input"
                />
                <input
                  type="text"
                  required
                  placeholder="Age"
                  className="user-registration-age input"
                />
                <input
                  type="text"
                  placeholder="BMI"
                  className="user-registration-bmi input"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="user-registration-username input"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="user-registration-email input"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="user-registration-password input"
                />
                <button
                  type="button"
                  className="user-registration-register button"
                >
                  Register New Account
                </button>
                <div className="user-registration-sign-in">
                  <span className="user-registration-question">
                    Already have an account?
                  </span>
                  <button
                    type="button"
                    className="user-registration-sign-in button"
                  >
                    <Link
                      to="/user-login"
                      className="user-registration-navlink"
                    >
                      <span>
                        Sign
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="user-registration-text1">In here</span>
                    </Link>
                  </button>
                </div>
                <button
                  type="submit"
                  className="user-registration-b-icalq button"
                >
                  BMI Calculator
                </button>
              </div>
              <span className="user-registration-register-here">
                <span>Register Here</span>
                <br></br>
              </span>
            </form>
          </div>
        </div>
        <div className="user-registration-logo">
          <img
            alt="qcarelogo22945"
            src="/playground_assets/qcarelogo22945-wohp-200h.png"
            className="user-registration-qcarelogo2"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-wwkt-200h.png"
            className="user-registration-qcarelogo"
          />
        </div>
      </div>
    </div>
  )
}

export default UserRegistration
