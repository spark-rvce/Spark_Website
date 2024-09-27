import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home" style={{marginTop:'10px'}}>
      {/* Primary Sections */}
      <section className="primary-section vision">
        <div className="section-content">
          <div className="section-body">
          <div className="text-content">
            <h2>Vision</h2>
            <p>Believe in studying through projects and activities for renewing knowledge.</p>
            </div>
            <img src="/images/vision.jpg" alt="Vision" className="section-image" />
          </div>
        </div>
      </section>

      <section className="primary-section mission reverse">
        <div className="section-content">
          <div className="section-body">
            <img src="/images/mission.jpeg" alt="Mission" className="section-image" />
            <div className="text-content">
              <h2>Mission</h2>
              <p>Aim to enrich and enhance our community through technical and cultural diversity, curiosity, and the overall development of engineering students. 
                Improving the educational experience beyond classroom walls and enhancing our ethical values. 
                Innovations by out-of-the-box thinking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="primary-section about-chapter">
        <div className="section-content">
          <div className="section-body">
          <div className="text-content">
            <h2>About the Chapter</h2>
            <p>RV College is dedicated to the holistic development of individuals, shaping their personalities with strong values and ethics. The institution focuses on providing quality education and, through this chapter, promises a practical, hands-on learning platform to enhance students’ knowledge. The IUCEExRVCE student chapter offers an innovative experience beyond conventional classroom learning. It aims to cultivate leadership qualities and social responsibility among engineers, encouraging them to contribute to society and the environment. By adopting a practical approach to problem-solving and fostering unique ideas and solutions, the chapter motivates students to undertake projects beneficial to society. These projects are integrated into both self-learning topics and the curriculum. Additionally, students are encouraged to participate in competitions and present their ideas, gaining valuable feedback for improvement and development. This approach not only enhances their technical skills but also prepares them to make meaningful contributions to the broader community.</p>
            </div>
            <img src="/images/about.png" alt="About the Chapter" className="section-image" />
          </div>
        </div>
      </section>

      <section className="primary-section about-logo reverse">
        <div className="section-content">
          <div className="section-body">
            <img src="/images/logo.png" alt="About the Logo" className="section-image" />
            <div className="text-content">
              <h2>About our Logo</h2>
              <p>The logo of the student chapter signifies how we as humans started off with small milestones in technology and to where we have come till now, the transformation of a hand holding a light bulb till using the available technology and tools (the human hand on the top and the bionic arm at the bottom)we like to move a step ahead making our planet a better place to live. Through this logo we like to spread the awareness of connecting globally across the world to contribute ourselves in building a sustainable planet through the initiation of this student chapter. And even after this drastic and huge development in the technology, we still have concern about the nature around us and the living beings within this nature and through measures like SDGs we aspire to create a balance and make a difference. Hence, 'Changing the World'  little by little...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Sections */}
      <section className="secondary-section dignitaries-messages">
        <div className="section-content">
          <div className="section-body">
            <h2>Dignitaries Messages</h2>
          </div>
        </div>
      </section>

      <section className="secondary-section principal-message reverse">
        <div className="section-content">
          <div className="section-body">
            <img src="/images/princi.jpg" alt="Principal's Message" className="section-image" />
            <div className="text-content">
              <h2>Principal's Message</h2>
              <p>Technical education in the country is seeing a sea change post covid and after the implementation of NEP-2020. The curriculum design has been revised very frequently keeping in mind. The fundamental principles of OBE with a focus on Experiential Learning, the interdisciplinary nature of courses, and integrating liberal arts with science and technology. IUCEE is hand holding and mentoring our institution since one decade on academic innovation in technology, courses on the latest technological trends, and understanding the Learning styles of students. Many faculty have trained in various courses and methodology of teaching students.</p>
              <p><strong>Dr. K N Subramanya<br />Principal <br />RV College of Engineering</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="secondary-section vice-principal-message">
        <div className="section-content">
          <div className="section-body">
          <div className="text-content">
            <h2>Vice Principal's Message</h2>
            <p>STUDY THROUGH PROJECTS and ACTIVITY for RENEWING KNOWLEDGE (SPARK) symbolizes the new dimension towards the learning methodology. This probject based learning hones the critical thinking, innovative ideas, team work, good communication skills along with soft skills which are the need of the hour today. RVCE had a pilot project of SPARK last year which was taken in good spirit and enthusiasm by the students and faculty. I believe that the outcome of these methods of learning would be measurable and more visible.</p>
            <p><strong>Dr. K S Geetha<br />Vice Principal <br />RV College of Engineering</strong></p>
          </div>
            <img src="/images/vp.jpeg" alt="Vice Principal's Message" className="section-image" />
          </div>
        </div>
      </section>

      <section className="secondary-section dean-academics-message reverse">
        <div className="section-content">
          <div className="section-body">
            <img src="/images/dean.jpg" alt="Dean Academic's Message" className="section-image" />
            <div className="text-content">
              <h2>Dean Academics Message</h2>
              <p>RV College of Engineering is always ahead of the curve in implementing new methods of teaching-learning so that our students gets the best. One such initiative is STUDY THROUGH PROJECTS and ACTIVITY for RENEWING KNOWLEDGE (SPARK). This concept of project-based learning was introduced last year as a pilot project for a set of first year students. This kindled the creative and critical thinking amongst students, made them more interactive and exhibited innovative solutions to problems. We hope that this methodology shall ensure sustained growth in the learning curve of the students. </p>
              <p><strong>Dr. Shanmukha N<br />Dean Academics<br />RV College of Engineering</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="secondary-section dsa-message">
        <div className="section-content">
          <div className="section-body">
          <div className="text-content">
            <h2>Dean Student Affairs' Message</h2>
            <p>Students must read, write, discuss, solve problems and engage in higher-order thinking such as analysis, synthesis, and assessment. Students should be involved in learning by doing along with exploring to attitudes and values. Active learning practices emphasize on the above student-centric approaches providing the students experiences that go beyond the class learning. The students in SPARK section are exposed to various active learning methods such as think pair share, discussion, case study, simulations, enacting, reflecting on topics covered in class and project-based learning etc. it is observed that there is an improvement in Creative thinking skills of Students of this group. It is a good initiative from RV College of Engineering in association with IUCEE. I congratulate the team involved in implementing this idea. </p>
            <p><strong>Dr. B V Uma<br />Dean Student Affairs<br />RV College of Engineering</strong></p>
          </div>
            <img src="/images/DSA.jpeg" alt="Vice Principal's Message" className="section-image" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;