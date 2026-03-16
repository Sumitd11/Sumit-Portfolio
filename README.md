# React Portfolio (Fresher)

A simple, static portfolio template built with **React**, **Vite**, and **Tailwind CSS**. This template is designed for freshers to showcase skills like React, Spring Boot, MySQL, and frontend tooling.

## ✅ Features

- Modern **React + Vite** starter setup
- **Tailwind CSS** for styling
- Responsive layout with sections: About, Skills, Projects, Contact
- Mobile-friendly navigation
- Ready to deploy on **GitHub Pages**

## 🚀 Getting Started

From the `portfolio` folder, run:

```bash
npm install
npm run dev
```

Then open the URL shown in your terminal (usually `http://localhost:5173`).

## � Set up GitHub repository (Sumitd11 / Sumit-Portfolio)

From within the `portfolio` folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Sumitd11/Sumit-Portfolio.git
git push -u origin main
```

> If your repo already exists on GitHub, you can skip `git init` and just set the `origin` remote.

## �🛠 Customization

- Update your name / bio in `src/components/Hero.jsx`
- Update your skills in `src/components/Skills.jsx`
- Add or adjust projects in `src/components/Projects.jsx`
- Update contact links in `src/components/Contact.jsx`

## 📦 Build & Deploy

Build a production version:

```bash
npm run build
```

### GitHub Pages (optional)

1. Create a GitHub repo and push the `portfolio` folder.
2. Set the repo’s **Pages** source to `gh-pages` branch or `main`/`docs` folder.
3. (Optional) Use a GitHub Actions workflow or the `gh-pages` package to deploy automatically.

---

Feel free to extend this template with your own styling, animations, or additional sections.
