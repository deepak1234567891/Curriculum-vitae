import React from "react";
import Header from "../components/Header";

const Skills = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>HTML<br/><br/>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>CSS<br/><br/>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>JavaScript<br/><br/>
              {/* <li class="list-inline-item">
                <i class="fab fa-angular"></i>
              </li> */}
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>React<br/><br/>
              <li class="list-inline-item">
                <i class="fab fa-python"></i>
              </li>Python<br/><br/>
              <li class="list-inline-item">
              <i class="fa-sharp fa-solid fa-bolt"></i>
              </li>FastAPI<br/>
              {/* <li class="list-inline-item">
                <i class="fab fa-sass"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-less"></i>
              </li> */}
              {/* <li class="list-inline-item">
                <i class="fab fa-wordpress"></i>
              </li> */}
              {/* <li class="list-inline-item">
                <i class="fab fa-gulp"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-grunt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li> */}
            </ul>
            <div class="subheading mb-3"></div>
            {/* <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Problem- Solving
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Decision making
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Multi-tasking Time
              </li>
            </ul> */}
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Skills;
