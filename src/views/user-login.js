import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './user-login.css'

const UserLogin = (props) => {
  return (
    <div className="user-login-container">
      <Helmet>
        <title>UserLogin - exported project</title>
        <meta property="og:title" content="UserLogin - exported project" />
      </Helmet>
      <div className="user-login-user-login">
        <div className="user-login-container1">
          <div className="user-login-logo">
            <img
              alt="IMG2023040514131676412944"
              src="/playground_assets/img2023040514131676412944-xovq-200h.png"
              className="user-login-img202304051413167641"
            />
            <img
              alt="qcarelogo22945"
              src="/playground_assets/qcarelogo22945-wohp-200h.png"
              className="user-login-qcarelogo2"
            />
          </div>
          <form
            action="signup_action.php"
            method="POST"
            className="user-login-form"
          >
            <input
              type="text"
              enctype="Email"
              placeholder="Email"
              className="user-login-email input"
            />
            <input
              type="text"
              required
              placeholder="Password"
              className="user-login-password input"
            />
            <button type="submit" className="user-login-login button">
              Login to account
            </button>
            <Link to="/user-login" className="user-login-register button">
              Register New Account
            </Link>
            <span className="user-login-text">Forgot Password?</span>
            <span className="user-login-text1">
              <span>Sign in to your account</span>
              <br></br>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
