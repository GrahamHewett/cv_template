import React from "react";

export default function() {
  return (
    <div className="contact-container container-block">
      <ul className="list-unstyled contact-list">
        <li className="email">
          <a href="mailto: gray@grayghostcoding.com">
            <i className="fas fa-envelope"></i>
            gray@grayghostcoding.com
          </a>
        </li>
        <li className="phone">
          <a href="tel:07710568338">
            <i className="fas fa-phone"></i>07710 568338
          </a>
        </li>
        <li className="linkedin">
          <a
            href="https://www.linkedin.com/in/graham-hewett-88a88390/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
            linkedin.com/in/graham-hewett-88a88390/
          </a>
        </li>
        <li className="github">
          <a
            href="https://github.com/grahamhewett"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            github.com/grahamhewett
          </a>
        </li>
        {/* <li className="website"><i className="fas fa-globe"></i><a href="https://grayghostcoding.com" target="_blank" rel="noopener noreferrer">Gray Ghost Coding</a></li> */}
      </ul>
    </div>
  );
}
