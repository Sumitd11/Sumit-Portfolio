export default function About() {
  return (
    <section id="about" className="mt-20 scroll-mt-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          <h2 className="section-heading">About Me</h2>
                  <p className="section-subtitle">
                      Full stack web developer skilled in HTML, CSS, JavaScript, React.js, Java, Spring Boot and MySQL with practical
                      experience from building project that showcase strong application development abilities. Eager to contribute
                      technical skills, problem-solving abilities, and innovative ideas to dynamic development teams.
                  </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card">
              <dt className="text-sm font-medium text-indigo-200">Location</dt>
              <dd className="mt-1 text-base text-slate-200">Pune, Maharashtra</dd>
            </div>
            <div className="card">
              <dt className="text-sm font-medium text-indigo-200">Experience</dt>
              <dd className="mt-1 text-base text-slate-200">Fresher </dd>
            </div>
            <div className="card">
              <dt className="text-sm font-medium text-indigo-200">Education</dt>
              <dd className="mt-1 text-base text-slate-200">Bachelor of Engineering</dd>
            </div>
            <div className="card">
              <dt className="text-sm font-medium text-indigo-200">Interests</dt>
              <dd className="mt-1 text-base text-slate-200">Building scalable web applications, designing RESTful APIs, and learning modern development tools.</dd>
            </div>
          </dl>
        </div>

        <div className="w-full max-w-sm self-start rounded-2xl bg-slate-900/60 p-6 shadow-xl shadow-black/50">
          <h3 className="text-xl font-semibold text-white">Quick facts</h3>
          <ul className="mt-4 space-y-3 text-slate-200">
            <li className="flex gap-3">
              <span className="mt-1 text-indigo-300">•</span>
              <span className="leading-relaxed">
                Comfortable working with JavScript, React and SpringBoot.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-indigo-300">•</span>
              <span className="leading-relaxed">
                Learning backend with Spring Boot, RESTful APIs, and MySQL.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-indigo-300">•</span>
              <span className="leading-relaxed">
                Version control with Git, collaborating via GitHub.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-indigo-300">•</span>
              <span className="leading-relaxed">
                Strong problem-solving mindset and a desire to ship polished products.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
