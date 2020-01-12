import React from "react";
import "./App.css";
import SkillItem from "./sections/items/SkillItem";
import ContactSection from "./sections/contactLinks";
// import ProjectsSection from "./sections/Projects"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="main-wrapper">
          <section className="section summary-section">
            <h2 className="section-title">
              <span className="icon-holder">
                <i className="fas fa-user"></i>
              </span>
              Personal Profile
            </h2>
            <div className="summary">
              <p>
                An experienced full-stack developer/teacher who is grateful and
                excited to be able to work in the ever-evolving field of
                software development. My previous experience in the Education,
                Financial and Medical sectors has allowed me to develop my
                teaching skills and assist in the training of new tech talent. I
                am a confident public speaker having organised and led many
                public events and workshops around the London tech scene. I
                specialise in data-driven JavaScript applications utilising
                modern JavaScript methods in combination with tools such as
                React.js, Node.js and Gatsby.
              </p>
            </div>
          </section>

          <section className="section experiences-section">
            <h2 className="section-title">
              <span className="icon-holder">
                <i className="fas fa-briefcase"></i>
              </span>
              Relevant Experience
            </h2>

            <div className="item">
              <div className="meta">
                <div className="upper-row">
                  <h3 className="job-title">
                    Lead Instructor and JavaScript Developer
                  </h3>
                  <div className="time">Jan 2019 - Present</div>
                </div>
                <div className="company">Kodiri, London</div>
              </div>
              <div className="details">
                <p>
                  {`Main instructor for a London based software development bootcamp, teaching cohorts of approximately 15 people at a time.
                Topics taught included JavaScript, React, Node.js, MongoDB, Git, CSS and HTML. `}
                  <a
                    href="https://www.kodiri.com/bootcamp"
                    alt="Kodiri Website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.kodiri.com/bootcamp
                  </a>
                </p>
                <p>
                  {`Meetup event organiser for over 30 Tech Events `}
                  <a
                    href="https://www.meetup.com/kodiri/"
                    alt="Kodiri Meetup group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.meetup.com/kodiri/
                  </a>
                </p>
              </div>
            </div>

            <div className="item">
              <div className="meta">
                <div className="upper-row">
                  <h3 className="job-title">
                    Database Administrator and Statistical Researcher
                  </h3>
                  <div className="time">Jan 2014 - Dec 2015</div>
                </div>
                <div className="company">
                  Uropath, Leederville, WA, Australia
                </div>
              </div>
              <div className="details">
                <p>
                  R, SQL and MySQL were the prevalent technologies I used as a
                  DBA for the main prostate and renal cancer database in Western
                  Australia.
                </p>
                <p>
                  I also used the database data to assist in the development of
                  life saving nomograms, performed statistical analyses and
                  contributed to peer-reviewed Urological journal articles.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="meta">
                <div className="upper-row">
                  <h3 className="job-title">Actuarial Statistician</h3>
                  <div className="time">March 2013 - June 2013</div>
                </div>
                <div className="company">
                  Friends Life Group plc, Pixham Lane, Dorking, Surrey
                </div>
              </div>
              <div className="details">
                <p>
                  Working alongside two senior actuaries I was responsible for
                  the analysis, verification and simplification of external
                  financial risk models based on Moody's data.
                </p>
                <p>
                  I produced some custom programming in R to calculate a more
                  accurate time value of options and guarantees (TVOG) estimate
                  for Friends Life with profit funds.
                  {/* This enabled a unified TVOG calculation in time for the
                companies’ annual reports following their merger with AXA Life. */}
                </p>
              </div>
            </div>
          </section>

          <section className="skills-section section">
            <h2 className="section-title">
              <span className="icon-holder">
                <i className="fas fa-rocket"></i>
              </span>
              Skills, Technologies and Tools
            </h2>
            <div className="skillset">
              <SkillItem
                title="JavaScript: "
                skills="ES6+ including Async and Await, React, Node, Express, Gatsby"
              />
              <div className="flexRow">
                <SkillItem title="Databases: " skills="MYSQL, MongoDB" />

                <SkillItem title="Data Layer: " skills="SQL, GraphQL, JSON" />
              </div>
              <div className="flexRow">
                <SkillItem title="Browser: " skills="HTML5, CSS3, fetch API" />

                <SkillItem title="Testing: " skills="Jest and Enzyme" />
              </div>
              <div className="flexRow">
                <SkillItem
                  title="Version Control: "
                  skills="Git, Github, Travis"
                />

                <SkillItem title="Linux: " skills="10+ yrs Debian user, bash" />
              </div>

              {/* <SkillItem skill="Python: &amp; Django" /> */}
              {/* <SkillItem skill='Design: Inkscape, Figma, SVG' /> */}
            </div>
          </section>

          <section className="section experiences-section">
            <h2 className="section-title">
              <span className="icon-holder">
                <i className="fas fa-briefcase"></i>
              </span>
              Additional Experience
            </h2>
            <div className="item">
              <div className="meta">
                <div className="upper-row">
                  <h3 className="job-title">
                    Mathematics Teacher and Private Tutor
                  </h3>
                  <div className="time">May 2016 - Nov 2018</div>
                </div>
                <div className="company">
                  Wycliffe College and self employed
                </div>
              </div>
              <div className="details">
                <p>
                  Private Maths Tutor serving Gloucestershire County. Link?
                </p>
                <p>
                  Responsible for the maths education of approximately 120
                  students across 5 classes and the personal wellbeing of 30
                  students in my tutor group. Athletics, UKMT
                  Maths Challenges and Badminton were extra-curricular
                  activities I helped offer to all pupils.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="meta">
                <div className="upper-row">
                  <h3 className="job-title">
                    School of Business Sessional Tutor
                  </h3>
                  <div className="time">July 2013 - Dec 2013</div>
                </div>
                <div className="company">
                  Notre Dame University, Freemantle, WA, Australia
                </div>
              </div>
              <div className="details">
                <p>
                  Quantitative Methods for Business Tutor responsible for the
                  delivery of group tutorials, student support sessions and the
                  marking of five assessments per semester.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="sidebar-wrapper">
          <div className="profile-container">
            <h1 className="name">Graham Hewett</h1>
            <h3 className="tagline">Full Stack JavaScript Developer</h3>
          </div>

          <ContactSection />

          <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            <div className="item">
              <h4 className="degree">PGDip in Biometry</h4>
              <h5 className="meta">University of Reading</h5>
              <div className="time">2011 - 2012</div>
            </div>
            <div className="item">
              <h4 className="degree">BSc Hons Mathematics and Statistics</h4>
              <h5 className="meta">The Open University</h5>
              <div className="time">2008 - 2011</div>
            </div>
            <div className="item">
              <h4 className="degree">
                A Levels in Maths, Physics and Physical Education
              </h4>
              <h5 className="meta">Fullbrook Sixth Form, Surrey</h5>
              <div className="time">2002 - 2004</div>
            </div>
            <div className="item">
              <h4 className="degree">GCSEs 4A's, 6B's</h4>
              <h5 className="meta">
                Heathside Secondary School, Weybridge, Surrey
              </h5>
              <p className="time">1997 - 2002</p>
            </div>
          </div>

          <div className="interests-container container-block">
            <h2 className="container-block-title">Hobbies</h2>
            <ul className="list-unstyled interests-list">
              <li>Running</li>
              <li>Cycling</li>
              <li>Yoga</li>
              <li>Dog Walking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <ProjectsSection /> */}
    </div>
  );
}

export default App;
