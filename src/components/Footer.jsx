export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 py-10">
      <div className="max-w-5xl mx-auto px-4 text-center text-slate-400">
        <p>
          Built with React + Tailwind CSS. Hosted on GitHub Pages.
        </p>
        <p className="mt-2 text-sm">
          © {new Date().getFullYear()} Sumit Dongare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
