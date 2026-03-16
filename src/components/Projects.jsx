const projects = [
  {
    title: 'Personal Portfolio (this site)',
    description:
      'A responsive React + Tailwind portfolio template designed for freshers. Includes sections for skills, projects, and contact. Deployable to GitHub Pages.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'GitHub Pages']
  },
  {
    title: 'WeatherWave Responsive weather dashboard',
    description:
      'Integrated OpenWeatherMap API for real-time current weather and 7-day forecasts by city.',
    tags: ['JavaSScript', 'OpenWeatherMap API', 'HTML', 'BootStrap','font-awesome']
  },
  {
    title: 'KropKonnect Spring Boot & MySQL Demo',
    description:
      'A starter backend (Java + Spring Boot) that exposes REST endpoints and connects to MySQL, ready for adding a React frontend.',
    tags: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'REST APIs']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mt-24 scroll-mt-24">
      <div className="text-center">
        <h2 className="section-heading">Projects</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          A few representative projects to demonstrate my understanding of frontend and backend foundations.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="card">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-slate-200">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
