import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences, socialLinks } from '../constants';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="pink-gradient_text font-semibold drop-shadow">Samyuktha</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3">
        <p>
          Frontend Developer with hands-on experience in building interactive web applications and a Java Programmer.
          I'm eager to contribute to innovative tech teams, continue learning, and grow within the software development industry.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="pink-gradient_text subhead-text">Technical Skills</h3>
        <hr />
        <div className="mt-5 flex flex-col gap-3">
          <p>Languages: HTML / CSS, JavaScript, C / C++, Python, Java</p>
          <p>Developer Tools: VS Code, GitHub, Eclipse</p>
          <p>Frameworks: Django, React.js</p>
        </div>
      </div>

  
      <div className="py-10 flex flex-col">
        <h3 className="pink-gradient_text subhead-text">Experience</h3>
        <hr />
        <div className="mt-5 flex flex-col gap-3">
          <p>
            I've worked as an intern at various companies and developed interactive web applications that leveled up my frontend skills. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                dateClassName="text-white"
                contentStyle={{ background: '#f3f4f6', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid #f3f4f6' }}
                iconStyle={{ background: '#ec4899', color: '#fff' }} 
              >
                <div className="cursor-pointer">
                  <h3 className="text-xl font-poppins font-semibold text-purple-500">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, idx) => (
                      <li
                        key={`experience-point-${idx}`}
                        className="text-black-500/80 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

  
      <div className="mt-10">
        <h3 className="pink-gradient_text subhead-text">Connect with Me</h3>
        <ul className="list-disc ml-5 mt-4 space-y-2">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-purple-500 transition"
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
