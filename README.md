<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Nguyễn Thái Nam - Professional Portfolio

Modern React 19 + Vite + Tailwind CSS portfolio showcasing SAP ABAP & Web development expertise.

## Features

✅ Real GitHub contributions via GitHub API  
✅ Security: Environment-based configuration  
✅ Responsive design with animations  
✅ Multi-language support (English & Vietnamese)  
✅ Dark/Light mode ready  
✅ Optimized performance (Vite + React 19)

---

## 🚀 Run Locally

**Prerequisites:** Node.js 18+

### 1. Clone & Install

```bash
git clone https://github.com/namt-fptu/Nguyen-Thai-Nam-Portfolio.git
cd Nguyen-Thai-Nam-Portfolio
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Update `.env.local` with your values:

```env
# Required
GEMINI_API_KEY="your_gemini_api_key_here"

# Optional
VITE_CONTACT_EMAIL="your-email@gmail.com"
VITE_CONTACT_PHONE="+84 XXX XXX XXX"
VITE_LINKEDIN_URL="https://linkedin.com/in/your-profile"
VITE_GITHUB_URL="https://github.com/your-username"
VITE_GITHUB_API_TOKEN=""  # Optional - for GitHub API rate limits
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel
```

### Option 2: Deploy via GitHub (Automatic)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. **Connect on Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables on Vercel**
   - In Project Settings → Environment Variables
   - Add all variables from `.env.example`:
     - `GEMINI_API_KEY`
     - `VITE_CONTACT_EMAIL`
     - `VITE_CONTACT_PHONE`
     - `VITE_LINKEDIN_URL`
     - `VITE_GITHUB_URL`
     - `VITE_GITHUB_API_TOKEN` (optional)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

### Environment Variables Setup on Vercel

Go to **Project Settings** → **Environment Variables** and add:

| Variable | Value | Required |
|----------|-------|----------|
| `GEMINI_API_KEY` | Your Gemini API key | ✅ Yes |
| `VITE_CONTACT_EMAIL` | sofn2004@gmail.com | ❌ Optional |
| `VITE_CONTACT_PHONE` | +84 964 821 721 | ❌ Optional |
| `VITE_LINKEDIN_URL` | https://linkedin.com/in/your-profile | ❌ Optional |
| `VITE_GITHUB_URL` | https://github.com/namt-fptu | ❌ Optional |
| `VITE_GITHUB_API_TOKEN` | Your GitHub token | ❌ Optional |

---

## 🔐 Security Notes

✅ `.env.local` is in `.gitignore` - won't be committed  
✅ All sensitive data is environment-based  
✅ Client-side app only - no backend secrets exposed  
✅ GitHub data fetched via public API (rate limit: 60 req/hour)

---

## 📋 Project Structure

```
src/
├── components/          # React components
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── GithubContributions.tsx
│   ├── Header.tsx
│   └── ...
├── context/            # React context
│   └── LanguageContext.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🛠 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Type check with TypeScript |
| `npm run clean` | Remove dist & build artifacts |

---

## 📦 Tech Stack

- **React 19.0.1** - UI Framework
- **Vite 6.2.3** - Build tool
- **Tailwind CSS 4.1.14** - Styling
- **TypeScript 5.8.2** - Type safety
- **Motion** - Animations
- **Lucide React** - Icons

---

## 📞 Contact & Links

- **Email:** [sofn2004@gmail.com](mailto:sofn2004@gmail.com)
- **GitHub:** [@namt-fptu](https://github.com/namt-fptu)
- **LinkedIn:** [Nguyễn Thái Nam](https://linkedin.com/in/your-profile)

---

## 📄 License

Apache License 2.0 - See LICENSE file for details

---

## 🚀 Deployment Status

| Platform | Status | Link |
|----------|--------|------|
| **Vercel** | ✅ Ready | [Deploy Now](https://vercel.com/new) |
| **Netlify** | ✅ Compatible | [Deploy Now](https://netlify.com) |
| **GitHub Pages** | ⚠️ Requires routing config | - |