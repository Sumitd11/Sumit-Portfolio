const skills = [
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design']
  },
  {
    title: 'Backend (learning)',
    items: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Postman']
  },
  {
    title: 'Tools',
    items: ['Git & GitHub', 'VS Code', 'Vite', 'NPM', 'Chrome DevTools']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="mt-24 scroll-mt-24">
      <div className="text-center w-full">
        <h2 className="section-heading">Skills</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          A snapshot of the core technologies I work with, and the tools I use to build and ship modern web applications.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.title} className="card">
            <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
            <ul className="mt-4 space-y-2 text-slate-200">
              {skill.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-indigo-300">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
