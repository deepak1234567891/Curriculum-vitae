import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header /> 
        {/* <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Clarence
              <span class="text-primary">Taylor</span>
            </h1>
            <div class="subheading mb-5">
              3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
              <a href="mailto:name@email.com">name@email.com</a>
            </div>
            <p class="lead mb-5">
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="#!">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section> */}
        {/* <hr class="m-0" /> */}

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">D.R.M Science college, Davanagere</h3>
                <div class="subheading mb-3">Bachelor of Science[EMCs]</div>
                <div>Computer Science</div>
                <p>Percentage: 55%</p>
              </div>
              <div class="flex-shrink-0">
                {/* <span class="text-primary">August 2010 - May 2013</span> */}
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Pushpa Mahallingappa P.U College, Davanagere</h3>
                <div class="subheading mb-3">P.U.C[PCMCs]</div>
                <p>Percentage: 50%</p>
              </div>
              <div class="flex-shrink-0">
                {/* <span class="text-primary">June 2008 - May 2010</span> */}
              </div>
            </div><br/><br/>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Maandhara Public School, Davanagere</h3>
                <div class="subheading mb-3">SSLC</div>
                <p>Percentage: 66%</p>
              </div>
              <div class="flex-shrink-0">
                {/* <span class="text-primary">May 2008</span> */}
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;