# 🧮 FunMath Tools

Free interactive math tools for teachers, students, and homeschoolers.  
Multi-language (EN / AR / FR), SEO-optimized, mobile-ready.

---

## 🚀 Quick Start (Windows)

### 1. تأكد من Node.js

فتح `cmd` وكتب:
```cmd
node --version
```

إلا بان ليك `v20.x.x` أو أكثر → ممتاز ✅  
إلا لا → نزل LTS من [nodejs.org](https://nodejs.org)

### 2. فتح المشروع

```cmd
cd path\to\funmath-tools
npm install
```

هاد الـ `npm install` غادي ياخذ 1-3 دقائق (كيحمل المكتبات).

### 3. شغل الـ dev server

```cmd
npm run dev
```

فتح المتصفح على: **http://localhost:4321**

---

## 📂 البنية

```
funmath-tools/
├── public/                    # الملفات الثابتة (favicon, robots.txt)
├── src/
│   ├── i18n/ui.ts             # قاموس الترجمة (3 لغات)
│   ├── layouts/
│   │   └── BaseLayout.astro   # التصميم الأساسي (header, footer, SEO)
│   └── pages/
│       ├── index.astro        # الصفحة الرئيسية (EN)
│       ├── tools/
│       │   └── random-number.astro    # الأداة الأولى
│       ├── ar/                # النسخة العربية
│       │   ├── index.astro
│       │   └── tools/random-number.astro
│       └── fr/                # النسخة الفرنسية
│           ├── index.astro
│           └── tools/random-number.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🌐 URLs

| الصفحة | EN | AR | FR |
|--------|-----|-----|-----|
| الرئيسية | `/` | `/ar/` | `/fr/` |
| Random Number | `/tools/random-number` | `/ar/tools/random-number` | `/fr/tools/random-number` |

---

## 🔨 الأوامر

| الأمر | الوصف |
|------|-------|
| `npm run dev` | شغل dev server على localhost:4321 |
| `npm run build` | build للـ production (ملفات جاهزة فـ `dist/`) |
| `npm run preview` | عرض النسخة المبنية محلياً |

---

## 📝 Next Steps

- [ ] اختبار الأداة الأولى على localhost
- [ ] إضافة الأدوات الأخرى (Dice, Coin Flip, Times Tables, Stopwatch)
- [ ] رفع المشروع لـ GitHub
- [ ] نشره على Cloudflare Pages (مجاني)
- [ ] ربطه بـ funmath.tools
- [ ] تقديم لـ AdSense
