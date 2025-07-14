# Personal Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://portfolio-aman-85037.web.app/)

This is a personal portfolio website for showcasing your skills, projects, and contact information. The site is built using HTML, CSS, and JavaScript, with Firebase integration for handling contact form submissions.

## Features

- **Responsive Design:** Looks great on all devices.
- **Sidebar Navigation:** Quick access to About, Resume, Portfolio, and Contact sections.
- **Project Showcase:** Filterable project gallery with images and categories.
- **Testimonials:** Carousel of client or peer testimonials.
- **Contact Form:** Users can send messages directly from the site (integrated with Firebase).
- **Google Maps Embed:** Shows your location in the Contact section.
- **Social Links:** Quick links to your social media profiles.

## Project Structure

```
portfolio/
  ├── assets/
  │   ├── css/
  │   │   └── style.css
  │   ├── images/
  │   │   └── ... (profile, project, and icon images)
  │   └── js/
  │       ├── firebase.js
  │       └── script.js
  ├── firebase.json
  ├── index.html
  ├── public/
  │   └── 404.html
  └── README.md
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd portfolio
   ```

2. **Open `index.html` in your browser** to view the site locally.

3. **Customize Content:**
   - Update your name, bio, skills, and project details in `index.html`.
   - Replace images in `assets/images/` with your own.
   - Edit styles in `assets/css/style.css` as needed.

4. **Firebase Setup (for Contact Form):**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Replace the Firebase configuration in `assets/js/firebase.js` with your own project credentials.
   - Make sure your Firebase Realtime Database rules allow writing from your site.

5. **Deploy:**
   - You can deploy this site using GitHub Pages, Netlify, Vercel, or Firebase Hosting.

## Dependencies

- [Firebase JS SDK](https://firebase.google.com/docs/web/setup)
- [Ionicons](https://ionic.io/ionicons)
- [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Feel free to customize this template to better fit your personal brand and portfolio!** 
