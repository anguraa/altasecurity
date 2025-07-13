# 🚀 Alta Security Website Setup Guide

## 📋 Quick Start

### 1. Clone or Download
```bash
git clone https://github.com/yourusername/alta-security-website.git
cd alta-security-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### 4. Build for Production
```bash
npm run build
```

## ✏️ How to Edit Content

### 📝 Text and Prices
All content is in `src/config/content.ts`:

```typescript
// Change company name
siteName: "Your Company Name",

// Update contact info
contact: {
  phone: "Your Phone",
  email: "your@email.com",
  address: "Your Address",
},

// Modify prices
products: {
  items: [
    {
      name: "Camera Name",
      price: "Your Price", // Change this
      // ...
    }
  ]
}
```

### 🖼️ Images
Replace image URLs in the same file:

```typescript
hero: {
  image: "https://your-image-url.jpg"
},

products: {
  items: [
    {
      image: "https://your-product-image.jpg"
    }
  ]
}
```

**Image Sources:**
- Use your own hosted images
- Free stock photos: [Pexels](https://pexels.com), [Unsplash](https://unsplash.com)
- Upload to: [Imgur](https://imgur.com), [Cloudinary](https://cloudinary.com)

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Push code to GitHub
2. Go to Settings → Pages
3. Select "Deploy from a branch" → main
4. Your site will be at: `https://yourusername.github.io/alta-security-website`

### Netlify (Recommended)
1. Connect your GitHub repo to [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Auto-deploys on every push

### Vercel
1. Connect repo to [Vercel](https://vercel.com)
2. Auto-detects settings
3. Instant deployments

## 📁 Project Structure

```
src/
├── config/
│   └── content.ts          # 📝 Edit all text, prices, images here
├── App.tsx                 # Main component
├── main.tsx               # App entry point
└── index.css              # Styles

public/                     # Static files
package.json               # Dependencies
README.md                  # Documentation
```

## 🛠️ Customization

### Colors
Edit in `tailwind.config.js` or use Tailwind classes in components.

### Fonts
Add Google Fonts in `index.html` and update CSS.

### Sections
Modify or add sections in `App.tsx`.

## 📞 Support

- **Documentation**: This README file
- **Issues**: Create GitHub issues for bugs
- **Customization**: Edit `src/config/content.ts` for most changes

## 📄 License

MIT License - Free for commercial use.

---

**Built with ❤️ for Alta Security**