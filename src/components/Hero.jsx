export default function Hero() {
  return (
    <section className="pt-24" id="home">
      <div className="text-center">
        <p className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600/20 px-4 py-2 text-sm font-medium text-indigo-100">
          ✨ Full stack enthusiast • Open to new opportunities
        </p>

        <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Hi, I'm <span className="text-indigo-300">Sumit</span> — Full Stack Java Developer.
        </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
                  Aspiring Full Stack Java Developer passionate about building scalable web applications.
              </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-8 py-3 text-base font-semibold text-slate-100 transition hover:border-indigo-500 hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
