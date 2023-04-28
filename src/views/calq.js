import React from 'react'

import { Helmet } from 'react-helmet'

import './calq.css'

const Calq = (props) => {
  return (
    <div className="calq-container">
      <Helmet>
        <title>calq - exported project</title>
        <meta property="og:title" content="calq - exported project" />
      </Helmet>
      <div className="calq-bm-calculator">
        <div className="calq-content">
          <div className="calq-text">
            <span className="calq-text1">
              <span>Body Mass Index (BMI) Calculator</span>
            </span>
            <span className="calq-text3">
              Please input your height and weight:
            </span>
          </div>
          <input
            type="text"
            required
            placeholder="Enter your height (cm)"
            className="calq-height input"
          />
          <input
            type="text"
            required
            placeholder="Enter your weight (kg)"
            className="calq-weight input"
          />
          <button type="submit" className="calq-b-icalq button">
            Calculate
          </button>
          <input
            type="text"
            required
            placeholder="BMI Result"
            className="calq-result"
          />
        </div>
      </div>
    </div>
  )
}

export default Calq
