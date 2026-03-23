# Al Ayashi Specialized Hospital | مستشفى العياشي التخصصي

Professional hospital website for Al Ayashi Specialized Hospital in Tanta, Egypt.

## Features

- 🌍 Bilingual support (Arabic primary, English secondary) with RTL
- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🏥 Professional medical design
- 📱 Fully responsive design
- 🚀 Static export for fast deployment
- 🐳 Docker support

## Hospital Information

- **Name:** Al Ayashi Specialized Hospital (مستشفى العياشي التخصصي)
- **Location:** Tanta, Egypt
- **Manager:** Dr. Fouad Ali Al Ayashi
- **Highlight:** Emergency Department (24/7)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Docker

```bash
docker build -t alayashi-site .
docker run -p 3000:3000 alayashi-site
```

## Deployment on Coolify

1. Push to GitHub
2. Connect repo in Coolify
3. Coolify will auto-detect Dockerfile
4. Deploy to alayashi.rainomotion.com
