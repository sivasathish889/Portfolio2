# 🚀 Siva Sathish - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite, showcasing my skills as a Full Stack Developer.

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Interactive UI**: Framer Motion animations and smooth scrolling
- **Modern Tech Stack**: Built with latest React 19 and TypeScript
- **Performance Optimized**: Vite for fast development and building

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React version with modern features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **AOS** - Animate On Scroll library
- **Lucide React** - Beautiful icons

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **React Toastify** - Toast notifications

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── assets/           # Images, icons, fonts, and static files
│   │   ├── AnimatedIcon/ # Animated social media icons
│   │   ├── font/         # Custom fonts (Querencia)
│   │   ├── icons/        # Skill and technology icons
│   │   └── images/       # Project screenshots and photos
│   ├── context/          # React context providers
│   │   └── ThemeProvider.tsx
│   ├── pages/            # Main page components
│   │   ├── components/   # Reusable UI components
│   │   ├── About.tsx
│   │   ├── Certificates.tsx
│   │   ├── ContactUs.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Public assets
├── Files/               # Documents and certificates
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sivasathish889/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Sections

### 🏠 Hero Section
- Personal introduction with animated name
- Professional title with typewriter effect
- Social media links (GitHub, LinkedIn, Instagram)
- Download CV and Hire Me buttons
- Smooth scroll navigation

### 👨‍💻 About Section
- Personal background and journey
- Professional experience highlights
- Educational background

### 🛠️ Skills Section
- **Frontend**: HTML, CSS, JavaScript, TypeScript, React, Redux, Tailwind, Next.js, React Native
- **Backend**: Node.js, Express.js, Python, Django, Java, Spring Boot
- **Databases**: MongoDB, MySQL, Prisma
- **Tools**: Git, GitHub, VS Code, Docker, Figma, Postman, WebStorm, IntelliJ, PyCharm

### 🚀 Projects Section
Featured projects with live demos and source code:

1. **Outpass App** - Digital hostel outpass management system
2. **Chat Application** - Real-time messaging with Socket.IO
3. **E-Commerce Website** - Full-featured online store
4. **Thirukural Book** - Digital Sanskrit text reader
5. **Glassmorphism Navbar** - Modern UI component

### 🏆 Certificates Section
- Professional certifications and achievements
- Course completion certificates
- Internship offer letters

### 📞 Contact Section
- Contact form with validation
- Social media links
- Professional email and location

## 🎨 Design Features

- **Glassmorphism Effects**: Modern glass-like UI elements
- **Gradient Backgrounds**: Beautiful color transitions
- **Responsive Grid Layouts**: Optimized for all screen sizes
- **Smooth Animations**: Engaging user interactions
- **Custom Typography**: Querencia font for unique branding

## 🔧 Configuration

### Theme Configuration
The theme system supports light and dark modes with automatic persistence:

```typescript
// Theme context provides:
- toggleTheme(): Switch between themes
- theme: Current theme ('light' | 'dark')
- themeValue: CSS classes for current theme
```

### Animation Configuration
AOS animations are configured globally:

```typescript
AOS.init(); // Initialize animations on app start
```

## 📊 Performance

- **Fast Loading**: Optimized images in WebP format
- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code elimination
- **Modern Bundle**: ES modules for better performance

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sivasathish889/Portfolio/issues).

## 📞 Contact

**Siva Sathish**
- 📧 Email: [sivasathish889.com]
- 💼 LinkedIn: [linkedin.com/in/siva-sathish-120634301](https://www.linkedin.com/in/siva-sathish-120634301/)
- 🐱 GitHub: [github.com/sivasathish889](https://github.com/sivasathish889)
- 📱 Instagram: [@black_baby_zera](https://www.instagram.com/black_baby_zera/)

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the lightning-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **AOS Library** - For scroll animations

---

⭐ **Star this repository if you found it helpful!**