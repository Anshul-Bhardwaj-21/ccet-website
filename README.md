# CCET College Website

Welcome to the **CCET College Website** project!  
This guide will help beginners get started, contribute, and understand the setup.

---

## 🚀 Project Overview

This is a modern React-based website for CCET, using:
- **Vite** for fast development
- **React Router** for navigation
- **Tailwind CSS** and **Bootstrap** for styling

---

## 🛠️ Getting Started

### 1. **Fork the Repository**

- Go to [the GitHub repo](https://github.com/RohanSinghTakhi/CCET-website-.git)
- Click the **Fork** button (top right) to create your own copy.

### 2. **Clone Your Fork**

```sh
git clone https://github.com/<your-username>/CCET-website-.git
cd CCET-website-
```

### 3. **Install Dependencies**

```sh
npm install
```

### 4. **Start the Development Server**

```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the site.

---

## 🧩 Project Structure

```
ccet-website-/
├── src/
│   ├── components/
│   │   ├── header/
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   └── Nopage/
│   │       └── NoPage.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── ...
```

- **Header/Footer**: Shown on every page.
- **Home**: Main landing page.
- **NoPage**: 404 page for unmatched routes.

---

## 🎨 Styling

- **Bootstrap**: For ready-to-use components.
- **Tailwind CSS**: For utility-first custom styling.
- Both are imported in `App.jsx`.

---

## 🗺️ Routing

- Uses `react-router-dom`.
- `/` → Home page
- Any other path → 404 NoPage

---

## 👩‍💻 How to Contribute

### 1. **Create a New Branch**

```sh
git checkout -b my-feature
```

### 2. **Make Your Changes**

- Edit or add files as needed.
- Test your changes locally.

### 3. **Commit and Push**

```sh
git add .
git commit -m "Describe your changes"
git push origin my-feature
```

### 4. **Create a Pull Request (PR)**

- Go to your fork on GitHub.
- Click **Compare & pull request**.
- Fill in details and submit.

---

## 🤝 How We Review and Accept Changes

- We review all PRs for code quality, clarity, and usefulness.
- If changes are needed, we’ll comment on your PR.
- Once approved, your PR will be merged into the main repo.
- You’ll be credited as a contributor!

---

## ❓ Need Help?

Open an [issue](https://github.com/RohanSinghTakhi/CCET-website-/issues) or ask in the discussions tab.

---

Happy coding! 🎉
