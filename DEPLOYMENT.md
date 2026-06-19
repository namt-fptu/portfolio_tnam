# 📦 Hướng Dẫn Deploy Lên Vercel

## ✅ Kiểm Tra Trước Deploy

```bash
# 1. Kiểm tra lint/TypeScript errors
npm run lint

# 2. Build local để kiểm tra
npm run build

# 3. Preview build
npm run preview
```

---

## 🚀 Cách 1: Deploy bằng Vercel CLI (Nhanh nhất)

### Bước 1: Cài Vercel CLI
```bash
npm install -g vercel
```

### Bước 2: Login Vercel
```bash
vercel login
```

### Bước 3: Deploy
```bash
# Chạy từ project root
vercel
```

**Vercel sẽ hỏi:**
- "Set up and deploy?" → `y`
- "Which scope?" → Chọn personal account
- "Link to existing project?" → `n` (first time) hoặc `y` (nếu đã tạo)
- "Project name?" → Nhập tên (default: folder name)
- "Directory?" → `./`

### Bước 4: Cấu Hình Environment Variables

**Cách A: Via CLI (sau khi deploy)**
```bash
vercel env add GEMINI_API_KEY
# Paste your key

vercel env add VITE_CONTACT_EMAIL
# Paste value

vercel env add VITE_CONTACT_PHONE
# Paste value

# ... Cũng thế cho các biến khác
```

**Cách B: Via Vercel Dashboard (Khuyên dùng)**
1. Vào https://vercel.com/dashboard
2. Chọn project vừa tạo
3. Settings → Environment Variables
4. Thêm từng biến:
   - `GEMINI_API_KEY` = Your Gemini API Key
   - `VITE_CONTACT_EMAIL` = sofn2004@gmail.com
   - `VITE_CONTACT_PHONE` = +84 964 821 721
   - `VITE_LINKEDIN_URL` = https://linkedin.com/in/your-profile
   - `VITE_GITHUB_URL` = https://github.com/namt-fptu
   - `VITE_GITHUB_API_TOKEN` = (optional)

### Bước 5: Re-Deploy
```bash
vercel --prod
```

---

## 🌐 Cách 2: Deploy via GitHub (Recommended for Teams)

### Bước 1: Đẩy Code Lên GitHub
```bash
git add .
git commit -m "feat: deploy to Vercel"
git push origin main
```

### Bước 2: Kết Nối Vercel + GitHub
1. Vào https://vercel.com
2. Click "Add New Project"
3. Click "Import Git Repository"
4. Paste: `https://github.com/namt-fptu/Nguyen-Thai-Nam-Portfolio`
5. Click "Continue"

### Bước 3: Cấu Hình Build Settings
- **Framework**: Vite (auto-detected)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- Click "Deploy"

### Bước 4: Thêm Environment Variables
1. Sau khi deploy fail (vì thiếu env vars)
2. Vào Project Settings → Environment Variables
3. Thêm từng biến (xem danh sách dưới)

### Bước 5: Redeploy
- Vào Deployments tab
- Click "Redeploy" trên latest deployment

---

## 🔑 Environment Variables Cần Thiết

### Required (Bắt buộc)
```
GEMINI_API_KEY = Your API Key from Google AI Studio
```

### Optional (Tuỳ chọn - có fallback default)
```
VITE_CONTACT_EMAIL = sofn2004@gmail.com
VITE_CONTACT_PHONE = +84 964 821 721
VITE_LINKEDIN_URL = https://linkedin.com/in/your-profile
VITE_GITHUB_URL = https://github.com/namt-fptu
VITE_GITHUB_API_TOKEN = (GitHub personal access token)
```

---

## 📋 Danh Sách Kiểm Tra Trước Deploy

- [ ] `npm run lint` - Không có TypeScript errors
- [ ] `npm run build` - Build success locally
- [ ] Git changes committed: `git status` clean
- [ ] `.env.local` trong `.gitignore` ✅
- [ ] `README.md` updated ✅
- [ ] `vercel.json` tồn tại ✅
- [ ] Có Vercel account (đăng ký tại vercel.com)
- [ ] Có GitHub account (nếu dùng GitHub connection)

---

## 🔗 Sau Deploy

### Lấy Production URL
```bash
# Nếu dùng CLI
vercel --prod
# Output: https://your-project.vercel.app

# Hoặc vào Vercel Dashboard → Project → Domains
```

### Custom Domain (Optional)
1. Vercel Dashboard → Settings → Domains
2. Thêm domain tuỳ chỉnh của bạn
3. Update nameservers theo hướng dẫn

### Monitoring
- Vào https://vercel.com/dashboard/project
- Tab "Deployments" - xem lịch sử deploy
- Tab "Analytics" - xem performance
- Tab "Logs" - debug issues

---

## 🐛 Troubleshooting

### Build Failed
**Error:** "Cannot find module"
```bash
# Fix: Clear node_modules
rm -rf node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Kiểm tra: Vercel Dashboard → Settings → Environment Variables
- Đảm bảo biến được thêm cho environment: Production, Preview, Development
- Redeploy sau khi thêm biến

### GitHub Contributions Not Loading
- Kiểm tra `VITE_GITHUB_API_TOKEN` nếu bị rate limit
- Hoặc chuyển sang personal access token (higher limit)

### Vercel Login Failed
```bash
# Clear cache
vercel logout
vercel login
```

---

## 📊 Performance Tips

1. **Optimized Build:**
   - Vite sẽ tự động code-splitting
   - Tree-shaking bật mặc định

2. **Images:**
   - Cân nhắc sử dụng Vercel Image Optimization
   - Thêm vào `vercel.json`: `"images": { "formats": ["image/webp"] }`

3. **Edge Functions (Advanced):**
   - Có thể tạo API routes trong `/api`
   - Vercel sẽ auto-deploy serverless functions

---

## 🔒 Security Checklist

- [x] `.env.local` không commit (`.gitignore`)
- [x] API keys bảo mật qua Vercel environment variables
- [x] HTTPS enabled by default (tất cả Vercel apps)
- [x] CSP headers configured (`index.html`)
- [x] No hardcoded secrets trong source code

---

## 📞 Support

- **Vercel Docs:** https://vercel.com/docs
- **Vite Docs:** https://vitejs.dev/guide/
- **Vite + React:** https://vitejs.dev/guide/ssr.html

---

**Last Updated:** 2026-06-19
