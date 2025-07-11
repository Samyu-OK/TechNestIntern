import { projects } from '../constants';

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="pink-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3">
        <p>
          I have gained proficiency in Frontend Development, with practical experience in HTML, CSS, and JavaScript. By independently creating responsive web applications, I applied key concepts in layout design, user interaction, and code optimization.
          Some of the projects are built during my internship period.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-10 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-[400px] min-h-[363px] transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          
            <div className="btn-front absolute inset-0 bg-white p-5 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-purple-500 mb-2">{project.name}</h3>
                <ul className="list-disc text-black-500 text-sm pl-5 space-y-1  leading-relaxed">
                  {project.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                    
                  ))}
                </ul>
                 {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 my-20 mx-5 gap-10 relative justify-center text-sm underline hover:text-purple-500"
                  >
                    {project.linkLabel || 'View Project'}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
