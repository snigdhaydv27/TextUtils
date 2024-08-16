import React, { useState } from "react";

export default function About({ mode }) {
  const aboutStyle = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? "black" : "white",
    padding: "20px",
    borderRadius: "5px",
  };

  return (
    <div className="container">
      <h1 className="my-3 mx-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={aboutStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={aboutStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                TextUtils is a utility library or application designed
              </strong>
              to provide a set of tools for text processing and manipulation. It
              is often used in various contexts, including web development, data
              analysis, and software engineering.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={aboutStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={aboutStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong> With TextUtils</strong>, users can easily convert text
              between different cases, such as uppercase and lowercase, and
              format text by trimming excess whitespace or adjusting alignment.
              It also provides functionalities for text analysis, including word
              and character counting, as well as frequency analysis of specific
              words or phrases. Additionally, TextUtils supports text extraction
              through substring extraction and pattern matching using regular
              expressions, and allows for straightforward search and replacement
              operations.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={aboutStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={aboutStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              These capabilities make TextUtils essential for enhancing user
              input, processing large volumes of text data, and building tools
              that require advanced text manipulation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
