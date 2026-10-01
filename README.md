# ByteSpace - Online Course Platform (React + Vite)

A modern, responsive React application built with **React 18**, **Vite**, and **React Router DOM**, directly translating the [ByteSpace Figma Design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0).

---

## 📁 Clean React Project Structure

```
byte-space-landing/
├── public/                      # Static assets served by Vite
│   └── assets/
│       ├── icons/               # Brand SVGs and 3D geometric shapes
│       └── images/              # High-resolution optimized photos
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main routing & application wrapper
│   ├── index.css                # Global design system, animations, & typography
│   ├── context/
│   │   └── CartContext.jsx      # Global cart state & toast notification manager
│   ├── pages/
│   │   ├── HomePage.jsx         # Full interactive Landing Page
│   │   ├── LoginPage.jsx        # Split-screen Login authentication page
│   │   └── RegisterPage.jsx     # Split-screen Registration / Signup page
│   ├── components/
│   │   ├── Header.jsx           # Sticky navbar with cart counter & mobile menu
│   │   ├── Hero.jsx             # Hero section with 3D shapes & search input
│   │   ├── Partners.jsx         # Partner logos strip
│   │   ├── CourseCatalog.jsx    # Interactive category pills & course grid
│   │   ├── CourseCard.jsx       # Individual course card with enrollment action
│   │   ├── CourseModal.jsx      # Modal popup for detailed course preview
│   │   ├── Categories.jsx       # Category cards grid with smooth scroll navigation
│   │   ├── GrowthStats.jsx      # Statistics metrics & achievement badges
│   │   ├── Instructors.jsx      # Creator showcase & course management checklist
│   │   ├── CtaBanner.jsx        # Creator recruitment banner
│   │   ├── Testimonials.jsx     # Student feedback cards & star ratings
│   │   ├── Footer.jsx           # 9-column directory & newsletter form
│   │   └── Toast.jsx            # Dynamic toast alerts
│   └── data/
│       ├── coursesData.js       # Structured course data
│       ├── categoriesData.js    # Learning paths & categories
│       └── testimonialsData.js  # Student testimonials
├── index.html                   # HTML entry point with Plus Jakarta Sans & brand favicon
├── package.json                 # Scripts and React dependencies
├── vite.config.js               # Vite build configuration
└── .gitignore                   # Standard ignore rules
```

---

## 🚀 Getting Started

### 1. Run Development Server

```powershell
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 2. Available Routes

- **`/`**: ByteSpace Landing Page with interactive course filtering, search, modal preview, and cart counter.
- **`/login`**: Split-screen Login with remember-me, show/hide password, and social sign-in.
- **`/register`**: Split-screen Sign-up with full validation.

### 3. Build for Production

```powershell
npm run build
```

Generates an optimized production bundle in the `dist/` folder.
