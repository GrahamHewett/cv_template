import React from "react";

export default function({ skill }) {
  return (
    <section className="section projects-section">
      <h2 className="section-title">
        <span className="icon-holder">
          <i className="fas fa-archive"></i>
        </span>
        Projects
      </h2>
      <div className="intro">
        <p>
          You can list your side projects or open source libraries in this
          section. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum et ligula in nunc bibendum fringilla a eu lectus.
        </p>
      </div>
      <div className="item">
        <span className="project-title">
          <a href="#hook">Velocity</a>
        </span>{" "}
        -{" "}
        <span className="project-tagline">
          A responsive website template designed to help startups promote,
          market and sell their products.
        </span>
      </div>
      <div className="item">
        <span className="project-title">
          <a
            href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DevStudio
          </a>
        </span>{" "}
        -
        <span className="project-tagline">
          A responsive website template designed to help web
          developers/designers market their services.{" "}
        </span>
      </div>
      <div className="item">
        <span className="project-title">
          <a
            href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tempo
          </a>
        </span>{" "}
        -{" "}
        <span className="project-tagline">
          A responsive website template designed to help startups promote their
          products or services and to attract users &amp; investors
        </span>
      </div>
      <div className="item">
        <span className="project-title">
          <a
            href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Atom
          </a>
        </span>{" "}
        -{" "}
        <span className="project-tagline">
          A comprehensive website template solution for startups/developers to
          market their mobile apps.{" "}
        </span>
      </div>
      <div className="item">
        <span className="project-title">
          <a
            href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Delta
          </a>
        </span>{" "}
        -{" "}
        <span className="project-tagline">
          A responsive Bootstrap one page theme designed to help app developers
          promote their mobile apps
        </span>
      </div>
    </section>
  );
}
