import { useEffect, useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (!toastVisible) return;
    const timeout = window.setTimeout(() => setToastVisible(false), 2800);
    return () => window.clearTimeout(timeout);
  }, [toastVisible]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setToastVisible(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="mt-24 scroll-mt-24">
      <div className="text-center">
        <h2 className="section-heading">Contact</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          I’m open to internships and entry-level roles. Feel free to reach out for collaborations or
          questions.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="card relative">
          <h3 className="text-xl font-semibold text-white">Send a message</h3>
          <p className="mt-2 text-slate-200">
            This form is static (no backend), but you can copy the email below or connect via LinkedIn.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-200">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-indigo-500"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-200">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-indigo-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-200">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-indigo-500"
                placeholder="Write a quick message..."
                required
              />
            </div>
            <div className="relative">
              <button
                type="submit"
                className="w-full rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                Send message
              </button>

              {toastVisible && (
                <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full rounded-full bg-slate-800/90 px-5 py-3 text-center text-sm font-semibold text-slate-100 shadow-lg shadow-black/50 backdrop-blur-md">
                  Thanks for connecting! I’ll get back to you soon.
                </div>
              )}
            </div>
          </form>

          <div className="mt-6 border-t border-slate-800 pt-6">
            <p className="text-sm text-slate-300">Reach me directly via:</p>
            <ul className="mt-3 space-y-2 text-slate-200">
              <li>
                <strong>Email:</strong> <a href="mailto:sumitdongare1998@gmail.com" className="text-indigo-200 hover:text-indigo-100">sumitdongare1998@gmail.com</a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/sumit-dongare"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-200 hover:text-indigo-100"
                >
                  linkedin.com/in/sumit-donagre
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{' '}
                <a
                  href="https://github.com/Sumitd11"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-200 hover:text-indigo-100"
                >
                  github.com/Sumitd11
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-2xl bg-slate-900/60 p-8 shadow-xl shadow-black/50">
          <div>
            <h3 className="text-xl font-semibold text-white">What I’m learning now</h3>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 text-indigo-300">•</span>
                <span>
                  Building REST APIs in Spring Boot and connecting them to MySQL.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-indigo-300">•</span>
                <span>Writing unit/integration tests for Java applications.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-indigo-300">•</span>
                <span>Deploying apps on GitHub Pages and learning CI/CD basics.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
