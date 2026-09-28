/* ==========================================================================
   ديوان البدر | للشاعر محمد البدر الصمادي
   Advanced Logic: 30 Ready-Made Themes, Comprehensive Analytics Dashboard,
   Supercharged Verse Card Studio with PNG Export & Aspect Ratios
   ========================================================================== */

// --- 30 Distinct Master Arabic Poetry & Desert Themes ---
const THEMES_30 = [
    { id: "th-1", name: "ليل الصحراء والواحة (الافتراضي)", desc: "سواد الليل البدوي العميق مع الذهب والأزرق الواحي", bgPrimary: "#060911", bgSecondary: "#0c1221", accentGold: "#e5b869", accentCyan: "#06b6d4", textPrimary: "#f8fafc", textVerse: "#fef08a" },
    { id: "th-2", name: "البدر الذهبي المتلألئ", desc: "أشعة البدر الساطعة بأنوار الذهب والكهرمان", bgPrimary: "#090a10", bgSecondary: "#151422", accentGold: "#fbbf24", accentCyan: "#f59e0b", textPrimary: "#ffffff", textVerse: "#fde68a" },
    { id: "th-3", name: "واحة الأفق الكحلي", desc: "زرقة سماء البادية الصافية مع نجوم الفضة", bgPrimary: "#020b17", bgSecondary: "#07182e", accentGold: "#38bdf8", accentCyan: "#0284c7", textPrimary: "#f0f9ff", textVerse: "#bae6fd" },
    { id: "th-4", name: "غسق الليل الأندلسي", desc: "ألوان الشفق الخمري والأرجواني الفاخر", bgPrimary: "#11060a", bgSecondary: "#220d15", accentGold: "#f43f5e", accentCyan: "#fb7185", textPrimary: "#fff1f2", textVerse: "#fecdd3" },
    { id: "th-5", name: "الزمرد الملكي الفاخر", desc: "خضرة الواحات العميقة مع حواف الذهب العتيق", bgPrimary: "#03120e", bgSecondary: "#08241d", accentGold: "#34d399", accentCyan: "#10b981", textPrimary: "#ecfdf5", textVerse: "#a7f3d0" },
    { id: "th-6", name: "الفجر الصادق المضيء", desc: "أول خيوط نور الصباح الدافئة في الصحراء", bgPrimary: "#0a0f1d", bgSecondary: "#131d36", accentGold: "#60a5fa", accentCyan: "#93c5fd", textPrimary: "#f8fafc", textVerse: "#bfdbfe" },
    { id: "th-7", name: "عقيق اليمن الدافئ", desc: "حمرة العقيق اليماني مع لمسات برونزية", bgPrimary: "#140806", bgSecondary: "#26120d", accentGold: "#f97316", accentCyan: "#fb923c", textPrimary: "#fff7ed", textVerse: "#fed7aa" },
    { id: "th-8", name: "كحل الحجاز الأصيل", desc: "سواد خالص ومهيب مستوحى من كحل العين العربية", bgPrimary: "#030305", bgSecondary: "#0b0c10", accentGold: "#d4af37", accentCyan: "#64748b", textPrimary: "#f1f5f9", textVerse: "#e2e8f0" },
    { id: "th-9", name: "رمال نجد الذهبية", desc: "ألوان الكثبان المذهبة في ضوء القمر", bgPrimary: "#100d08", bgSecondary: "#1f1a10", accentGold: "#eab308", accentCyan: "#ca8a04", textPrimary: "#fefce8", textVerse: "#fef08a" },
    { id: "th-10", name: "قرطبة الفيحاء", desc: "طراز معماري أندلسي راقٍ بنكهة تاريخية", bgPrimary: "#0d0914", bgSecondary: "#1a1228", accentGold: "#c084fc", accentCyan: "#a855f7", textPrimary: "#faf5ff", textVerse: "#e9d5ff" },
    { id: "th-11", name: "شفق بغداد الرشيد", desc: "الأرجوان والذهب التراثي العباسي", bgPrimary: "#0e0717", bgSecondary: "#1c0f2e", accentGold: "#e879f9", accentCyan: "#d946ef", textPrimary: "#fdf4ff", textVerse: "#f5d0fe" },
    { id: "th-12", name: "ياقوت بابل والفرات", desc: "حمرة الياقوت القاني المشع في ليل الرافدين", bgPrimary: "#130509", bgSecondary: "#250d15", accentGold: "#e11d48", accentCyan: "#f43f5e", textPrimary: "#fff1f2", textVerse: "#fecdd3" },
    { id: "th-13", name: "نرجس دمشق الفواح", desc: "الهدوء الأخضر والزيتوني لغوطة دمشق", bgPrimary: "#060f0c", bgSecondary: "#0e201b", accentGold: "#a3e635", accentCyan: "#84cc16", textPrimary: "#f7fee7", textVerse: "#d9f99d" },
    { id: "th-14", name: "عنبر ومسك البادية", desc: "تدرجات البني الدافئ والعنبر العطري", bgPrimary: "#0e0906", bgSecondary: "#1d140e", accentGold: "#d97706", accentCyan: "#b45309", textPrimary: "#fffbeb", textVerse: "#fde68a" },
    { id: "th-15", name: "لؤلؤ الخليج العربي", desc: "ألوان المحار واللؤلؤ البحري الفضي", bgPrimary: "#040d13", bgSecondary: "#0a1c26", accentGold: "#38bdf8", accentCyan: "#7dd3fc", textPrimary: "#f0f9ff", textVerse: "#e0f2fe" },
    { id: "th-16", name: "الرخام الأسود الإمبراطوري", desc: "فخامة الرخام الداكن مع عروق الذهب الخالص", bgPrimary: "#050507", bgSecondary: "#0f1015", accentGold: "#f59e0b", accentCyan: "#e2e8f0", textPrimary: "#ffffff", textVerse: "#fef3c7" },
    { id: "th-17", name: "صهيل الخيل العربي", desc: "اللون البرونزي والجلد العربي الأصيل", bgPrimary: "#0f0805", bgSecondary: "#22130c", accentGold: "#ea580c", accentCyan: "#c2410c", textPrimary: "#fff7ed", textVerse: "#ffedd5" },
    { id: "th-18", name: "سماء الشهب والبروج", desc: "كحلي عميق مع وميض أزرق متألق", bgPrimary: "#020612", bgSecondary: "#051129", accentGold: "#0284c7", accentCyan: "#38bdf8", textPrimary: "#f0f9ff", textVerse: "#bae6fd" },
    { id: "th-19", name: "زهرة الخزامى العطرية", desc: "البنفسج واللافندر الهادئ والمريح للعين", bgPrimary: "#0b0813", bgSecondary: "#171226", accentGold: "#818cf8", accentCyan: "#6366f1", textPrimary: "#eef2ff", textVerse: "#c7d2fe" },
    { id: "th-20", name: "كهرمان مكة وطيبة", desc: "الأصفر الكهرماني الروحاني الهادئ", bgPrimary: "#0c0a04", bgSecondary: "#1b170c", accentGold: "#facc15", accentCyan: "#eab308", textPrimary: "#fefce8", textVerse: "#fef9c3" },
    { id: "th-21", name: "الرماد الفضي المهيب", desc: "تدرج بلاتيني وفضي شاعري أنيق", bgPrimary: "#080a0e", bgSecondary: "#121620", accentGold: "#94a3b8", accentCyan: "#cbd5e1", textPrimary: "#ffffff", textVerse: "#f1f5f9" },
    { id: "th-22", name: "فيروز سيناء القديم", desc: "حجر الفيروز الطبيعي الممزوج بالليل", bgPrimary: "#031012", bgSecondary: "#082126", accentGold: "#2dd4bf", accentCyan: "#14b8a6", textPrimary: "#f0fdfa", textVerse: "#99f6e4" },
    { id: "th-23", name: "نخيل وادي رم الأردني", desc: "طبيعة الجنوب الأردني الصخرية والرمال الحمراء", bgPrimary: "#140706", bgSecondary: "#27100e", accentGold: "#ef4444", accentCyan: "#f87171", textPrimary: "#fef2f2", textVerse: "#fecaca" },
    { id: "th-24", name: "سحر قصر الحمراء", desc: "زخارف قصر الحمراء بالغرناطة العتيقة", bgPrimary: "#0c0710", bgSecondary: "#1a1024", accentGold: "#f472b6", accentCyan: "#ec4899", textPrimary: "#fdf2f8", textVerse: "#fbcfe8" },
    { id: "th-25", name: "سديم المجرة البعيدة", desc: "ألوان الكون السحيق والنجوم المتوهجة", bgPrimary: "#06030d", bgSecondary: "#120924", accentGold: "#a855f7", accentCyan: "#06b6d4", textPrimary: "#fdf4ff", textVerse: "#e0e7ff" },
    { id: "th-26", name: "أرز لبنان الشامخ", desc: "الأخضر الغابي الوقور مع الذهبي الناعم", bgPrimary: "#040e08", bgSecondary: "#0a1d13", accentGold: "#22c55e", accentCyan: "#16a34a", textPrimary: "#f0fdf4", textVerse: "#bbf7d0" },
    { id: "th-27", name: "شاي الحطب والسمر", desc: "أجواء جلسات السمر البدوية الدافئة", bgPrimary: "#110a07", bgSecondary: "#24160f", accentGold: "#b45309", accentCyan: "#d97706", textPrimary: "#fffbeb", textVerse: "#fed7aa" },
    { id: "th-28", name: "نسيم صمخ والبحر", desc: "زرقة مائية هادئة مع انسيابية ليلية", bgPrimary: "#030c14", bgSecondary: "#071b2d", accentGold: "#0ea5e9", accentCyan: "#38bdf8", textPrimary: "#f0f9ff", textVerse: "#7dd3fc" },
    { id: "th-29", name: "شمس الأصيل الذهبية", desc: "أشعة الغروب قبل حلول ليل الصحراء", bgPrimary: "#120a04", bgSecondary: "#241609", accentGold: "#f59e0b", accentCyan: "#ea580c", textPrimary: "#fffbeb", textVerse: "#fde68a" },
    { id: "th-30", name: "بدر التمام الساطع", desc: "أعلى درجات التوهج القمري الأبيض الناصع", bgPrimary: "#05070e", bgSecondary: "#0d1324", accentGold: "#ffffff", accentCyan: "#e5b869", textPrimary: "#ffffff", textVerse: "#ffffff" }
];

// --- Comprehensive Arabic Font Collection ---
const ARABIC_FONTS = [
    { name: "خط الرقعة المعاصر (Aref Ruqaa)", family: "'Aref Ruqaa', serif", id: "aref-ruqaa" },
    { name: "خط الديواني والنسخ المزخرف (Gulzar)", family: "'Gulzar', serif", id: "gulzar" },
    { name: "خط النسخ الأميري الكلاسيكي (Amiri)", family: "'Amiri', serif", id: "amiri" },
    { name: "خط شهرزاد التراثي (Scheherazade)", family: "'Scheherazade New', serif", id: "scheherazade" },
    { name: "خط ريم الكوفي (Reem Kufi)", family: "'Reem Kufi', sans-serif", id: "reem-kufi" },
    { name: "خط القاهرة العصري (Cairo)", family: "'Cairo', sans-serif", id: "cairo" },
    { name: "خط تجوال الأنيق (Tajawal)", family: "'Tajawal', sans-serif", id: "tajawal" },
    { name: "خط المراعي المريح (Almarai)", family: "'Almarai', sans-serif", id: "almarai" },
    { name: "خط نوتر نَسخ (Noto Naskh)", family: "'Noto Naskh Arabic', serif", id: "noto-naskh" },
    { name: "خط نوتر كوفي (Noto Kufi)", family: "'Noto Kufi Arabic', sans-serif", id: "noto-kufi" },
    { name: "خط ريدكس برو (Readex Pro)", family: "'Readex Pro', sans-serif", id: "readex-pro" },
    { name: "خط المسيري الشاعري (El Messiri)", family: "'El Messiri', sans-serif", id: "el-messiri" },
    { name: "خط كتيبة التراثي (Katibeh)", family: "'Katibeh', cursive", id: "katibeh" },
    { name: "خط لطيف (Lateef)", family: "'Lateef', cursive", id: "lateef" },
    { name: "خط رقّاص الفلكلوري (Rakkas)", family: "'Rakkas', cursive", id: "rakkas" },
    { name: "خط لاليزار البارز (Lalezar)", family: "'Lalezar', cursive", id: "lalezar" },
    { name: "خط مرحي الحداثي (Marhey)", family: "'Marhey', cursive", id: "marhey" },
    { name: "خط قاهري التراثي (Qahiri)", family: "'Qahiri', cursive", id: "qahiri" },
    { name: "خط الإسكندرية (Alexandria)", family: "'Alexandria', sans-serif", id: "alexandria" },
    { name: "خط كوفام (Kufam)", family: "'Kufam', sans-serif", id: "kufam" },
    { name: "خط مَدَى (Mada)", family: "'Mada', sans-serif", id: "mada" },
    { name: "خط تشانجا (Changa)", family: "'Changa', sans-serif", id: "changa" }
];

// --- Default Configuration ---
const DEFAULT_SETTINGS = {
    heroBadge: "للشاعر محمد البدر الصمادي",
    heroTitle: "إحياء الشعر العربي",
    heroSubtitle: "هذا الموقع يعرض لكم قصائد الشاعر محمد البدر الصمادي , مبادرة لحفظ اشعاره",
    bannerVerse: "إذا أقبلَ البدرُ المُنيرُ بدَجنةٍ .. تَبَدَّدَ في الآفاقِ ليلُ المواجعِ",
    poetName: "محمد البدر الصمادي",
    poetBio: "شاعر وأديب أردني عربي، عُرف برصانة اللفظ وعمق المعنى وإحكام السبك الشعري على أعاريض الخليل بن أحمد الفراهيدي. تجسد قصائده روح الأصالة العربية المستمدة من صهيل الخيل ونور البدر في ليالي الصحراء، ممزوجة بنبض الوجدانيات المعاصرة ورقة الغزل العفيف وحكمة التأمل في تقلبات الحياة والدهر.",
    poetImageUrl: "",
    moonImageUrl: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=600&q=80",
    desertBackdropUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
    currentFont: "'Tajawal', sans-serif",
    readerFont: "'Amiri', serif"
};

const DEFAULT_THEME = THEMES_30[0];

// --- Application State ---
let poems = JSON.parse(localStorage.getItem('diwan_clean_poems')) || [];
let siteSettings = JSON.parse(localStorage.getItem('diwan_settings')) || DEFAULT_SETTINGS;
let siteTheme = JSON.parse(localStorage.getItem('diwan_theme')) || DEFAULT_THEME;
let favorites = JSON.parse(localStorage.getItem('diwan_favorites')) || [];
let users = JSON.parse(localStorage.getItem('diwan_users')) || [];
let currentUser = JSON.parse(localStorage.getItem('diwan_current_user')) || null;
let diwanRequests = JSON.parse(localStorage.getItem('diwan_activation_requests')) || [];
let isAdminLoggedIn = sessionStorage.getItem('diwan_admin_auth') === 'true';

// Analytics state
let analytics = JSON.parse(localStorage.getItem('diwan_analytics')) || {
    totalVisits: 1,
    copiedVersesCount: 0,
    poemViews: {},
    recentActivities: [
        { type: "visit", text: "تم تسجيل زيارة جديدة إلى ديوان البدر", time: new Date().toLocaleTimeString('ar-EG') }
    ]
};

let currentPoemId = null;
let currentFontSizeMultiplier = 1;
let isExplanationVisible = false;
let currentCardRatio = 'square';

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
    applyThemeColors(siteTheme);
    applyCustomImages();
    ThemeSceneEngine.init();
    ThemeSceneEngine.loadScene(siteTheme.id || 'th-1');
    updateSiteTexts();
    populateFontSelectors();
    initDailyStreak();
    render30ThemesGrid();
    renderAnalyticsDashboard();
    renderStats();
    renderFeaturedPoem();
    renderHomePoemsGrid();
    renderCategoryFilterPills();
    updateFavoritesBadge();
    refreshAdminIndicator();
    updateUserButtonState();

    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('poem-')) {
        openPoemReader(hash);
    } else if (hash && ['home', 'poems', 'categories', 'about', 'favorites'].includes(hash)) {
        navigateTo(hash);
    }

    if (window.lucide) lucide.createIcons();
});

// ==========================================================================
// DYNAMIC 3D THEMED SCENE ENGINE (محرك المشاهد البصرية ثلاثية الأبعاد)
// ==========================================================================
const ThemeSceneEngine = {
    currentSceneId: null,
    canvas: null,
    ctx: null,
    animationFrameId: null,
    particles: [],

    init() {
        this.canvas = document.getElementById('sceneAtmosphereCanvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.startAtmosphereLoop();
    },

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.initParticlesForScene(this.currentSceneId || siteTheme.id || 'th-1');
    },

    initParticlesForScene(themeId) {
        this.particles = [];
        const w = this.canvas.width;
        const h = this.canvas.height;

        // Base Stars
        const starCount = Math.floor((w * h) / 3500);
        for (let i = 0; i < starCount; i++) {
            this.particles.push({
                type: 'star',
                x: Math.random() * w,
                y: Math.random() * h,
                size: Math.random() * 1.5 + 0.3,
                alpha: Math.random() * 0.8 + 0.2,
                speed: Math.random() * 0.015 + 0.005,
                dir: Math.random() > 0.5 ? 1 : -1
            });
        }

        // Theme specific particles
        if (themeId === 'th-1' || themeId === 'th-9' || themeId === 'th-27') {
            // Campfire / Oasis Spark particles
            for (let i = 0; i < 25; i++) {
                this.particles.push({
                    type: 'fireSpark',
                    x: w * (0.45 + Math.random() * 0.1),
                    y: h - Math.random() * 120,
                    size: Math.random() * 2.2 + 0.8,
                    alpha: Math.random() * 0.8 + 0.2,
                    vx: (Math.random() - 0.5) * 1.2,
                    vy: -(Math.random() * 1.8 + 0.8),
                    color: Math.random() > 0.5 ? '#f59e0b' : '#ea580c'
                });
            }
        } else if (themeId === 'th-13') {
            // Damascus Jasmine floating petals
            for (let i = 0; i < 20; i++) {
                this.particles.push({
                    type: 'petal',
                    x: Math.random() * w,
                    y: Math.random() * h,
                    size: Math.random() * 5 + 3,
                    alpha: Math.random() * 0.6 + 0.3,
                    vx: Math.random() * 0.8 + 0.2,
                    vy: Math.random() * 0.6 + 0.3,
                    angle: Math.random() * Math.PI * 2,
                    spin: (Math.random() - 0.5) * 0.04
                });
            }
        } else if (themeId === 'th-15' || themeId === 'th-28') {
            // Gulf Pearl rising bubbles
            for (let i = 0; i < 22; i++) {
                this.particles.push({
                    type: 'bubble',
                    x: Math.random() * w,
                    y: h + Math.random() * 100,
                    size: Math.random() * 3.5 + 1.2,
                    alpha: Math.random() * 0.5 + 0.2,
                    vy: -(Math.random() * 1.2 + 0.4),
                    wobble: Math.random() * Math.PI * 2
                });
            }
        } else if (themeId === 'th-18' || themeId === 'th-25' || themeId === 'th-2') {
            // Meteor / Shooting star system
            this.shootingStar = { x: 0, y: 0, length: 0, speed: 0, active: false, timer: 60 };
        }
    },

    startAtmosphereLoop() {
        const loop = () => {
            if (this.ctx && this.canvas) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.updateAndDrawParticles();
            }
            this.animationFrameId = requestAnimationFrame(loop);
        };
        loop();
    },

    updateAndDrawParticles() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        const ctx = this.ctx;

        for (let p of this.particles) {
            if (p.type === 'star') {
                p.alpha += p.speed * p.dir;
                if (p.alpha > 0.95 || p.alpha < 0.2) p.dir *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(248, 250, 252, ${p.alpha})`;
                ctx.fill();
            } else if (p.type === 'fireSpark') {
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= 0.008;
                if (p.alpha <= 0 || p.y < h - 250) {
                    p.x = w * (0.45 + Math.random() * 0.1);
                    p.y = h - 20;
                    p.alpha = Math.random() * 0.8 + 0.2;
                }
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 8;
                ctx.shadowColor = p.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            } else if (p.type === 'petal') {
                p.x += p.vx;
                p.y += p.vy;
                p.angle += p.spin;
                if (p.x > w + 20 || p.y > h + 20) {
                    p.x = -20;
                    p.y = Math.random() * h * 0.6;
                }
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.angle);
                ctx.fillStyle = `rgba(254, 240, 138, ${p.alpha})`;
                ctx.beginPath();
                ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            } else if (p.type === 'bubble') {
                p.y += p.vy;
                p.wobble += 0.03;
                p.x += Math.sin(p.wobble) * 0.4;
                if (p.y < -20) {
                    p.y = h + 10;
                    p.x = Math.random() * w;
                }
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
                ctx.strokeStyle = `rgba(224, 242, 254, ${p.alpha * 1.5})`;
                ctx.lineWidth = 1;
                ctx.fill();
                ctx.stroke();
            }
        }

        // Shooting Star trigger
        if (this.shootingStar) {
            if (!this.shootingStar.active) {
                this.shootingStar.timer--;
                if (this.shootingStar.timer <= 0) {
                    this.shootingStar.active = true;
                    this.shootingStar.x = Math.random() * w * 0.8;
                    this.shootingStar.y = Math.random() * h * 0.4;
                    this.shootingStar.length = Math.random() * 120 + 80;
                    this.shootingStar.speed = Math.random() * 15 + 12;
                    this.shootingStar.timer = Math.floor(Math.random() * 200) + 120;
                }
            } else {
                this.shootingStar.x += this.shootingStar.speed;
                this.shootingStar.y += this.shootingStar.speed * 0.5;
                ctx.beginPath();
                ctx.moveTo(this.shootingStar.x, this.shootingStar.y);
                ctx.lineTo(this.shootingStar.x - this.shootingStar.length, this.shootingStar.y - this.shootingStar.length * 0.5);
                ctx.strokeStyle = 'rgba(253, 230, 138, 0.85)';
                ctx.lineWidth = 2;
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#e5b869';
                ctx.stroke();
                ctx.shadowBlur = 0;

                if (this.shootingStar.x > w + 200 || this.shootingStar.y > h) {
                    this.shootingStar.active = false;
                }
            }
        }
    },

    loadScene(themeId) {
        this.currentSceneId = themeId;
        const stage = document.getElementById('scenicStage');
        if (!stage) return;

        // Determine matching scene template
        let sceneHtml = '';
        if (themeId === 'th-1' || themeId === 'th-9' || themeId === 'th-3' || themeId === 'th-7' || themeId === 'th-14') {
            sceneHtml = this.getDesertOasisSceneHtml();
        } else if (themeId === 'th-4' || themeId === 'th-10' || themeId === 'th-24') {
            sceneHtml = this.getAlhambraLionsSceneHtml();
        } else if (themeId === 'th-25' || themeId === 'th-18') {
            sceneHtml = this.getCosmicNebulaSceneHtml();
        } else if (themeId === 'th-27') {
            sceneHtml = this.getBedouinSamarSceneHtml();
        } else if (themeId === 'th-23') {
            sceneHtml = this.getWadiRumSceneHtml();
        } else {
            sceneHtml = this.getDesertOasisSceneHtml(); // Default desert oasis
        }

        stage.innerHTML = sceneHtml;
        const env = stage.querySelector('.scene-env');
        if (env) {
            setTimeout(() => env.classList.add('active'), 50);
        }

        this.initParticlesForScene(themeId);

        // Update home showcase labels
        const currentTh = THEMES_30.find(t => t.id === themeId) || siteTheme;
        const nameLabel = document.getElementById('currentThemeNameLabel');
        const descLabel = document.getElementById('currentThemeDescLabel');
        if (nameLabel) nameLabel.textContent = currentTh.name;
        if (descLabel) descLabel.textContent = currentTh.desc;
    },

    getDesertOasisSceneHtml() {
        return `
            <div class="scene-env scene-desert-oasis">
                <div class="dune-layer dune-back"></div>
                <div class="dune-layer dune-mid"></div>
                <div class="dune-layer dune-front"></div>

                <!-- Oasis Lagoon with Water Shimmer -->
                <div class="oasis-lagoon-container">
                    <div class="oasis-water-pond">
                        <div class="water-shimmer-ripple"></div>
                    </div>

                    <!-- Animated Swaying Palms -->
                    <div class="oasis-palms-group">
                        <svg class="palm-svg" viewBox="0 0 240 260" width="100%" height="100%">
                            <!-- Palm 1 Trunk -->
                            <path class="palm-trunk" d="M 95 250 Q 98 180 100 80 Q 104 180 107 250 Z" />
                            <!-- Palm 1 Fronds -->
                            <g class="palm-fronds-cluster">
                                <path fill="#15803d" d="M 100 80 Q 50 40 20 70 Q 60 70 100 80 Z" />
                                <path fill="#16a34a" d="M 100 80 Q 70 20 50 30 Q 80 50 100 80 Z" />
                                <path fill="#22c55e" d="M 100 80 Q 110 10 130 15 Q 115 50 100 80 Z" />
                                <path fill="#15803d" d="M 100 80 Q 140 30 170 50 Q 130 70 100 80 Z" />
                                <path fill="#166534" d="M 100 80 Q 150 70 180 100 Q 135 90 100 80 Z" />
                                <path fill="#14532d" d="M 100 80 Q 60 90 30 110 Q 70 95 100 80 Z" />
                            </g>

                            <!-- Palm 2 (Smaller) -->
                            <path class="palm-trunk" d="M 160 250 Q 155 190 150 110 Q 158 190 166 250 Z" />
                            <g class="palm-fronds-cluster palm-2">
                                <path fill="#16a34a" d="M 150 110 Q 110 80 85 100 Q 120 100 150 110 Z" />
                                <path fill="#22c55e" d="M 150 110 Q 130 60 110 70 Q 135 90 150 110 Z" />
                                <path fill="#15803d" d="M 150 110 Q 160 50 180 60 Q 165 90 150 110 Z" />
                                <path fill="#166534" d="M 150 110 Q 190 80 215 105 Q 175 105 150 110 Z" />
                            </g>
                        </svg>
                    </div>

                    <!-- Camels Drinking by the Oasis -->
                    <div class="oasis-camels-group">
                        <svg viewBox="0 0 180 120" width="100%" height="100%">
                            <!-- Camel Drinking (Bending Neck) -->
                            <g class="camel-svg-drinking">
                                <path fill="#0f172a" d="M 45 95 L 45 65 Q 55 50 70 50 Q 80 50 90 60 L 90 95 Q 85 95 80 95 L 80 70 Q 75 60 65 60 Q 55 60 55 70 L 55 95 Z" />
                                <path fill="#0f172a" d="M 55 55 Q 68 32 80 55 Z" />
                                <path fill="#0f172a" d="M 46 62 Q 30 75 18 95 Q 12 95 10 90 Q 20 80 38 55 Z" />
                                <ellipse cx="20" cy="100" rx="14" ry="4" fill="rgba(6, 182, 212, 0.35)" />
                            </g>

                            <!-- Standing Camel Silhouette -->
                            <g transform="translate(75, 5)">
                                <path fill="#090d16" d="M 40 90 L 40 55 Q 50 40 65 40 Q 75 40 82 50 L 82 90 Q 78 90 74 90 L 74 60 Q 68 50 60 50 Q 52 50 50 60 L 50 90 Z" />
                                <path fill="#090d16" d="M 50 45 Q 62 25 72 45 Z" />
                                <path fill="#090d16" d="M 40 50 Q 28 35 22 25 Q 16 26 18 32 Q 26 42 34 54 Z" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        `;
    },

    getAlhambraLionsSceneHtml() {
        return `
            <div class="scene-env scene-alhambra-lions">
                <div class="alhambra-architecture">
                    <svg class="arcade-columns-svg" viewBox="0 0 1200 400" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="goldArchGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.4" />
                                <stop offset="100%" stop-color="#fb7185" stop-opacity="0.1" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#goldArchGrad)" d="M 0 0 L 1200 0 L 1200 80 
                            C 1150 150 1050 150 1000 80 
                            C 950 150 850 150 800 80 
                            C 750 150 650 150 600 80 
                            C 550 150 450 150 400 80 
                            C 350 150 250 150 200 80 
                            C 150 150 50 150 0 80 Z" />
                    </svg>

                    <div class="lion-fountain-center">
                        <svg class="fountain-basin-svg" viewBox="0 0 500 240">
                            <ellipse cx="250" cy="70" rx="140" ry="24" fill="#2d121c" stroke="#f43f5e" stroke-width="2" />
                            <ellipse cx="250" cy="70" rx="130" ry="18" fill="rgba(244, 63, 94, 0.25)" />
                            
                            <path d="M 250 70 Q 248 20 250 15 Q 252 20 250 70" stroke="#fecdd3" stroke-width="3" fill="none" opacity="0.85" />
                            <rect x="235" y="70" width="30" height="70" fill="#1f0a12" stroke="#f43f5e" stroke-width="1.5" />
                            
                            <ellipse cx="250" cy="150" rx="220" ry="38" fill="#1a070f" stroke="#f43f5e" stroke-width="2.5" />
                            <ellipse cx="250" cy="150" rx="205" ry="30" fill="rgba(244, 63, 94, 0.3)" />

                            <g transform="translate(80, 135)">
                                <path fill="#3b1320" stroke="#f43f5e" stroke-width="1" d="M 0 35 Q 15 10 35 15 Q 50 20 55 45 L 0 45 Z" />
                                <circle cx="10" cy="22" r="8" fill="#4c192a" />
                                <path class="lion-water-stream" d="M 4 25 Q -15 45 -25 70" stroke="#bae6fd" stroke-width="3" fill="none" />
                                <circle class="water-splash-ring" cx="-25" cy="70" r="8" stroke="#38bdf8" fill="none" />
                            </g>

                            <g transform="translate(365, 135)">
                                <path fill="#3b1320" stroke="#f43f5e" stroke-width="1" d="M 55 35 Q 40 10 20 15 Q 5 20 0 45 L 55 45 Z" />
                                <circle cx="45" cy="22" r="8" fill="#4c192a" />
                                <path class="lion-water-stream" d="M 51 25 Q 70 45 80 70" stroke="#bae6fd" stroke-width="3" fill="none" />
                                <circle class="water-splash-ring" cx="80" cy="70" r="8" stroke="#38bdf8" fill="none" />
                            </g>

                            <g transform="translate(210, 148)">
                                <path fill="#4c192a" stroke="#f43f5e" stroke-width="1" d="M 20 30 Q 40 10 60 30 L 70 50 L 10 50 Z" />
                                <path class="lion-water-stream" d="M 40 32 L 40 65" stroke="#bae6fd" stroke-width="3.5" fill="none" />
                                <circle class="water-splash-ring" cx="40" cy="65" r="10" stroke="#38bdf8" fill="none" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        `;
    },

    getCosmicNebulaSceneHtml() {
        return `
            <div class="scene-env scene-cosmic-nebula">
                <div class="nebula-cloud nebula-1"></div>
                <div class="nebula-cloud nebula-2"></div>
            </div>
        `;
    },

    getBedouinSamarSceneHtml() {
        return `
            <div class="scene-env scene-bedouin-samar">
                <div class="dune-layer dune-back"></div>
                <div class="dune-layer dune-mid"></div>
                <div class="campfire-container">
                    <div class="campfire-flame-glow"></div>
                    <svg viewBox="0 0 140 100" width="100%" height="100%">
                        <line x1="20" y1="90" x2="120" y2="70" stroke="#451a03" stroke-width="10" stroke-linecap="round" />
                        <line x1="20" y1="70" x2="120" y2="90" stroke="#78350f" stroke-width="10" stroke-linecap="round" />
                        <path fill="#d97706" d="M 105 85 L 115 85 L 118 70 L 110 55 L 105 70 Z" />
                        <path fill="#b45309" d="M 110 55 Q 115 45 110 40 L 105 55 Z" />
                    </svg>
                </div>
            </div>
        `;
    },

    getWadiRumSceneHtml() {
        return `
            <div class="scene-env scene-wadi-rum">
                <div class="dune-layer dune-back" style="background: linear-gradient(180deg, transparent, rgba(127, 29, 29, 0.8));"></div>
                <div class="dune-layer dune-front" style="background: linear-gradient(180deg, rgba(153, 27, 27, 0.4), rgba(20, 7, 6, 1));"></div>
            </div>
        `;
    }
};

function openAdminModalWithTab(tabName) {
    openAdminModal();
    if (isAdminLoggedIn) {
        switchAdminTab(tabName);
    }
}

// --- Theme Management ---
function applyThemeColors(theme) {
    const root = document.documentElement;
    root.style.setProperty('--bg-primary', theme.bgPrimary);
    root.style.setProperty('--bg-secondary', theme.bgSecondary);
    root.style.setProperty('--accent-gold', theme.accentGold);
    root.style.setProperty('--accent-cyan', theme.accentCyan);
    root.style.setProperty('--text-primary', theme.textPrimary);
    root.style.setProperty('--text-verse', theme.textVerse);
    syncAdminColorInputs(theme);
}

function syncAdminColorInputs(theme) {
    const map = [
        { id: 'colBgPrimary', hexId: 'colBgPrimaryHex', val: theme.bgPrimary },
        { id: 'colBgSecondary', hexId: 'colBgSecondaryHex', val: theme.bgSecondary },
        { id: 'colAccentGold', hexId: 'colAccentGoldHex', val: theme.accentGold },
        { id: 'colAccentCyan', hexId: 'colAccentCyanHex', val: theme.accentCyan },
        { id: 'colTextPrimary', hexId: 'colTextPrimaryHex', val: theme.textPrimary },
        { id: 'colTextVerse', hexId: 'colTextVerseHex', val: theme.textVerse }
    ];
    map.forEach(item => {
        const input = document.getElementById(item.id);
        const hex = document.getElementById(item.hexId);
        if (input && hex) { input.value = item.val; hex.value = item.val; }
    });
}

function previewThemeColors() {
    const theme = {
        bgPrimary: document.getElementById('colBgPrimary').value,
        bgSecondary: document.getElementById('colBgSecondary').value,
        accentGold: document.getElementById('colAccentGold').value,
        accentCyan: document.getElementById('colAccentCyan').value,
        textPrimary: document.getElementById('colTextPrimary').value,
        textVerse: document.getElementById('colTextVerse').value
    };
    syncAdminColorInputs(theme);
    applyThemeColors(theme);
}

function syncColorHex(colorInputId, hexValue) {
    if (/^#[0-9A-F]{6}$/i.test(hexValue)) {
        document.getElementById(colorInputId).value = hexValue;
        previewThemeColors();
    }
}

function saveThemeSettings() {
    const theme = {
        bgPrimary: document.getElementById('colBgPrimary').value,
        bgSecondary: document.getElementById('colBgSecondary').value,
        accentGold: document.getElementById('colAccentGold').value,
        accentCyan: document.getElementById('colAccentCyan').value,
        textPrimary: document.getElementById('colTextPrimary').value,
        textVerse: document.getElementById('colTextVerse').value
    };
    siteTheme = theme;
    localStorage.setItem('diwan_theme', JSON.stringify(theme));
    applyThemeColors(theme);
    render30ThemesGrid();
    showToast("تم حفظ وتطبيق ألوان الموقع بنجاح ✨");
}

function resetDefaultTheme() {
    siteTheme = { ...DEFAULT_THEME };
    localStorage.setItem('diwan_theme', JSON.stringify(siteTheme));
    applyThemeColors(siteTheme);
    render30ThemesGrid();
    showToast("تمت استعادة ألوان ليل الصحراء الأصلية");
}

// --- 30 Themes Grid Renderer ---
function render30ThemesGrid() {
    const container = document.getElementById('themes30Container');
    if (!container) return;

    container.innerHTML = THEMES_30.map((th, index) => {
        const isCurrent = siteTheme.bgPrimary === th.bgPrimary && siteTheme.accentGold === th.accentGold;
        return `
            <div class="theme-card-30 ${isCurrent ? 'active-theme' : ''}" onclick="applyThemeFrom30List(${index})">
                <div class="theme-card-header">
                    <span class="theme-card-title">${th.name}</span>
                    <small class="text-muted">#${index + 1}</small>
                </div>
                <p class="theme-card-desc">${th.desc}</p>
                <div class="theme-color-palette-bubbles">
                    <span class="color-bubble" style="background: ${th.bgPrimary};" title="الخلفية"></span>
                    <span class="color-bubble" style="background: ${th.bgSecondary};" title="الكروت"></span>
                    <span class="color-bubble" style="background: ${th.accentGold};" title="الذهب"></span>
                    <span class="color-bubble" style="background: ${th.accentCyan};" title="التوهج"></span>
                    <span class="color-bubble" style="background: ${th.textVerse};" title="الأبيات"></span>
                </div>
                <button class="btn-apply-theme">
                    ${isCurrent ? '✔ الثيم الحالي المطبق' : 'تطبيق هذا الثيم الآن'}
                </button>
            </div>
        `;
    }).join('');
}

function applyThemeFrom30List(index) {
    const selected = THEMES_30[index];
    if (!selected) return;
    siteTheme = { ...selected };
    localStorage.setItem('diwan_theme', JSON.stringify(siteTheme));
    applyThemeColors(siteTheme);
    ThemeSceneEngine.loadScene(selected.id);
    render30ThemesGrid();
    logActivity(`قام الأدمن بتغيير ثيم الموقع إلى "${selected.name}"`);
    showToast(`تم تطبيق ثيم: ${selected.name} 🎨`);
}

// --- Comprehensive Analytics Engine (إحصائيات الموقع الشاملة) ---
function renderAnalyticsDashboard() {
    const metricVisits = document.getElementById('metricTotalVisits');
    const metricUsers = document.getElementById('metricRegisteredUsers');
    const metricStreak = document.getElementById('metricCurrentStreak');
    const metricCopied = document.getElementById('metricCopiedVerses');

    const streakData = JSON.parse(localStorage.getItem('diwan_streak_data')) || { streak: 1, totalVisits: 1 };

    if (metricVisits) metricVisits.textContent = streakData.totalVisits || analytics.totalVisits || 1;
    if (metricUsers) metricUsers.textContent = users.length;
    if (metricStreak) metricStreak.textContent = `🔥 ${streakData.streak}`;
    if (metricCopied) metricCopied.textContent = analytics.copiedVersesCount || 0;

    // Top Read Poems Ranking
    const topListEl = document.getElementById('topReadPoemsList');
    if (topListEl) {
        if (poems.length === 0) {
            topListEl.innerHTML = `<p class="text-muted text-center" style="padding:1rem;">لا توجد قصائد مسجلة في الديوان بعد.</p>`;
        } else {
            const sorted = [...poems].sort((a, b) => (analytics.poemViews[b.id] || 0) - (analytics.poemViews[a.id] || 0));
            topListEl.innerHTML = sorted.slice(0, 5).map((p, idx) => `
                <div class="ranking-item">
                    <div style="display:flex; align-items:center;">
                        <span class="rank-badge ${idx === 0 ? 'top' : ''}">${idx + 1}</span>
                        <span class="ranking-poem-title diwani-font">${p.title}</span>
                    </div>
                    <span class="ranking-views-count"><i data-lucide="eye" style="width:14px;height:14px;display:inline;"></i> ${analytics.poemViews[p.id] || 0} قراءة</span>
                </div>
            `).join('');
        }
    }

    // Recent Activities Log
    const actListEl = document.getElementById('recentActivitiesList');
    if (actListEl) {
        actListEl.innerHTML = (analytics.recentActivities || []).slice(0, 6).map(act => `
            <div class="activity-item">
                <span class="activity-dot"></span>
                <span style="flex-grow:1;">${act.text}</span>
                <small class="text-muted">${act.time}</small>
            </div>
        `).join('');
    }

    if (window.lucide) lucide.createIcons();
}

function trackPoemView(poemId) {
    if (!analytics.poemViews) analytics.poemViews = {};
    analytics.poemViews[poemId] = (analytics.poemViews[poemId] || 0) + 1;
    localStorage.setItem('diwan_analytics', JSON.stringify(analytics));
    renderAnalyticsDashboard();
}

function trackVerseCopy() {
    analytics.copiedVersesCount = (analytics.copiedVersesCount || 0) + 1;
    logActivity("تم نسخ بيت شعري ومشاركته من قِبل زائر");
    localStorage.setItem('diwan_analytics', JSON.stringify(analytics));
    renderAnalyticsDashboard();
}

function logActivity(text) {
    if (!analytics.recentActivities) analytics.recentActivities = [];
    analytics.recentActivities.unshift({
        text,
        time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    });
    if (analytics.recentActivities.length > 25) analytics.recentActivities.pop();
    localStorage.setItem('diwan_analytics', JSON.stringify(analytics));
}

// --- Supercharged Verse Card Studio Logic ---
function openCardStudio() {
    const backdrop = document.getElementById('cardStudioBackdrop');
    backdrop.classList.add('open');
    updateCardCanvas();
    if (window.lucide) lucide.createIcons();
}

function closeCardStudio() {
    document.getElementById('cardStudioBackdrop').classList.remove('open');
}

function switchStudioTab(tabId) {
    document.querySelectorAll('.studio-tab').forEach(t => t.classList.toggle('active', t.dataset.stab === tabId));
    document.querySelectorAll('.studio-tab-content').forEach(c => c.classList.toggle('active', c.id === `sTab-${tabId}`));
}

function setCardRatio(ratio) {
    currentCardRatio = ratio;
    document.querySelectorAll('.ratio-btn').forEach(b => b.classList.toggle('active', b.dataset.ratio === ratio));
    const wrapper = document.getElementById('cardRatioWrapper');
    if (wrapper) {
        wrapper.className = `card-aspect-ratio-wrapper ratio-${ratio}`;
    }
}

function updateCardCanvas() {
    const sadr = document.getElementById('cardStudioSadr').value || 'إذا أقبلَ البدرُ المُنيرُ بدَجنةٍ';
    const ajez = document.getElementById('cardStudioAjez').value || 'تَبَدَّدَ في الآفاقِ ليلُ المواجعِ';
    const poetSign = document.getElementById('cardStudioPoetSign').value || '— الشاعر محمد البدر الصمادي';
    const font = document.getElementById('cardStudioFontSelect').value;
    const fontSize = document.getElementById('cardFontSizeRange').value;
    const lineHeight = document.getElementById('cardLineHeightRange').value;
    const theme = document.getElementById('cardStudioTheme').value;
    const customBgUrl = document.getElementById('cardCustomBgUrl').value;
    const verseColor = document.getElementById('cardVerseColor').value;
    const accentColor = document.getElementById('cardAccentColor').value;
    const overlayOpacity = document.getElementById('cardOverlayOpacity').value;
    const frameStyle = document.getElementById('cardFrameStyle').value;

    const canvas = document.getElementById('poetryCardCanvas');
    const sadrEl = document.getElementById('cardCanvasSadr');
    const ajezEl = document.getElementById('cardCanvasAjez');
    const poetEl = document.getElementById('cardCanvasPoet');
    const verseContainer = document.getElementById('cardCanvasVerse');
    const customBgLayer = document.getElementById('cardCustomBgLayer');
    const frameBorder = document.getElementById('cardFrameBorder');
    const sepEl = document.getElementById('cardCanvasSep');

    sadrEl.textContent = sadr;
    ajezEl.textContent = ajez;
    poetEl.textContent = poetSign;

    verseContainer.style.fontFamily = font;
    verseContainer.style.fontSize = `${fontSize}px`;
    verseContainer.style.lineHeight = lineHeight;
    verseContainer.style.color = verseColor;

    if (sepEl) sepEl.style.color = accentColor;

    // Show/hide custom image input
    const customGroup = document.getElementById('customBgUrlGroup');
    if (customGroup) customGroup.style.display = (theme === 'custom-image') ? 'block' : 'none';

    // Theme Backgrounds
    customBgLayer.style.opacity = `${overlayOpacity / 100}`;
    switch (theme) {
        case 'golden-moon':
            canvas.style.background = 'radial-gradient(circle at center, #241604 0%, #0c0802 100%)';
            customBgLayer.style.backgroundImage = 'none';
            break;
        case 'deep-indigo':
            canvas.style.background = 'linear-gradient(135deg, #0f172a 0%, #030712 100%)';
            customBgLayer.style.backgroundImage = 'none';
            break;
        case 'emerald-oasis':
            canvas.style.background = 'radial-gradient(circle at center, #062b24 0%, #020f0c 100%)';
            customBgLayer.style.backgroundImage = 'none';
            break;
        case 'crimson-dusk':
            canvas.style.background = 'linear-gradient(135deg, #2b0612 0%, #0c0205 100%)';
            customBgLayer.style.backgroundImage = 'none';
            break;
        case 'dark-marble':
            canvas.style.background = 'radial-gradient(circle at center, #18191d 0%, #08090b 100%)';
            customBgLayer.style.backgroundImage = 'none';
            break;
        case 'desert-sand':
            canvas.style.background = 'linear-gradient(135deg, #1c150c 0%, #090703 100%)';
            customBgLayer.style.backgroundImage = 'none';
            break;
        case 'custom-image':
            if (customBgUrl) customBgLayer.style.backgroundImage = `url('${customBgUrl}')`;
            break;
        case 'real-moon-night':
        default:
            canvas.style.background = 'radial-gradient(circle at center, #101a2f 0%, #05080e 100%)';
            customBgLayer.style.backgroundImage = `url('${siteSettings.moonImageUrl || "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=600&q=80"}')`;
            break;
    }

    // Frame styling
    if (frameBorder) {
        if (frameStyle === 'none') {
            frameBorder.style.display = 'none';
        } else if (frameStyle === 'double-border') {
            frameBorder.style.display = 'block';
            frameBorder.style.border = `3px double ${accentColor}`;
            frameBorder.style.boxShadow = 'none';
        } else if (frameStyle === 'glow-border') {
            frameBorder.style.display = 'block';
            frameBorder.style.border = `1px solid ${accentColor}`;
            frameBorder.style.boxShadow = `0 0 15px ${accentColor}`;
        } else {
            frameBorder.style.display = 'block';
            frameBorder.style.border = `1px solid ${accentColor}66`;
            frameBorder.style.boxShadow = 'none';
        }
    }
}

function syncStudioColor(pickerId, hexValue) {
    if (/^#[0-9A-F]{6}$/i.test(hexValue)) {
        document.getElementById(pickerId).value = hexValue;
        updateCardCanvas();
    }
}

// Download Card Image HD PNG
function downloadCardImagePNG() {
    const canvasEl = document.getElementById('poetryCardCanvas');
    if (!canvasEl || typeof html2canvas === 'undefined') {
        showToast("جارٍ تجهيز محرك الصور...");
        return;
    }

    showToast("جارٍ إنشاء بطاقتك الشعرية بدقة عالية 🖼️...");

    html2canvas(canvasEl, {
        scale: 2.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null
    }).then(renderedCanvas => {
        const link = document.createElement('a');
        link.download = `diwan-albadr-card-${Date.now()}.png`;
        link.href = renderedCanvas.toDataURL('image/png');
        link.click();
        logActivity("تم تصميم وتحميل بطاقة شعرية جديدة (PNG)");
        showToast("تم تحميل البطاقة الشعرية بنجاح على جهازك 🎉");
    }).catch(err => {
        console.error(err);
        showToast("حدث خطأ أثناء حفظ الصورة، يمكنك نسخ النص");
    });
}

function copyCardTextFormatted() {
    const sadr = document.getElementById('cardCanvasSadr').textContent;
    const ajez = document.getElementById('cardCanvasAjez').textContent;
    const poet = document.getElementById('cardStudioPoetSign').value || '— الشاعر محمد البدر الصمادي';
    const formatted = `🌙✨ دِيْوانُ البَدْر ✨🌙\n\n"${sadr} .. ${ajez}"\n\n${poet}\nhttps://diwan-albadr.com`;
    navigator.clipboard.writeText(formatted).then(() => {
        trackVerseCopy();
        showToast("تم نسخ نص البيت مصمماً وجاهزاً للنشر 🌟");
    });
}

function openCardStudioWithVerse(sadr, ajez) {
    document.getElementById('cardStudioSadr').value = sadr;
    document.getElementById('cardStudioAjez').value = ajez;
    openCardStudio();
}

function openCardStudioWithQuote() {
    const parts = siteSettings.bannerVerse.split('..');
    const sadr = parts[0] ? parts[0].trim() : siteSettings.bannerVerse;
    const ajez = parts[1] ? parts[1].trim() : '';
    openCardStudioWithVerse(sadr, ajez);
}

function openCardStudioForPoem() {
    const poem = poems.find(p => p.id === currentPoemId);
    if (poem && poem.verses && poem.verses[0]) {
        openCardStudioWithVerse(poem.verses[0].sadr, poem.verses[0].ajez);
    } else {
        openCardStudio();
    }
}

// --- Dynamic Starfield Background ---
function initStarsCanvas() {
    const canvas = document.getElementById('starsCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const numStars = Math.floor((width * height) / 4000);
    const stars = [];

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.3,
            alpha: Math.random() * 0.8 + 0.2,
            speed: Math.random() * 0.02 + 0.005,
            direction: Math.random() > 0.5 ? 1 : -1
        });
    }

    function animateStars() {
        ctx.clearRect(0, 0, width, height);
        for (let star of stars) {
            star.alpha += star.speed * star.direction;
            if (star.alpha > 0.95 || star.alpha < 0.2) star.direction *= -1;

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(248, 250, 252, ${star.alpha})`;
            ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
            ctx.shadowColor = 'rgba(229, 184, 105, 0.8)';
            ctx.fill();
        }
        requestAnimationFrame(animateStars);
    }
    animateStars();
}

// --- Navigation ---
function navigateTo(targetView) {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.target === targetView);
    });

    const targetEl = document.getElementById(`${targetView}View`);
    if (targetEl) targetEl.classList.add('active');

    if (targetView === 'singlePoem') {
        document.body.classList.add('reading-mode');
    } else {
        document.body.classList.remove('reading-mode');
    }

    if (targetView === 'poems') renderPoemsView();
    if (targetView === 'categories') renderCategoriesView();
    if (targetView === 'favorites') renderFavoritesView();

    if (window.lucide) lucide.createIcons();
}

function toggleMobileMenu() {
    const drawer = document.getElementById('mobileDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (drawer && backdrop) {
        drawer.classList.toggle('open');
        backdrop.classList.toggle('active');
    }
}

// --- Images & Custom Backgrounds ---
function applyCustomImages() {
    if (siteSettings.moonImageUrl) {
        const moonImg = document.getElementById('realMoonImage');
        if (moonImg) moonImg.src = siteSettings.moonImageUrl;
    }
    if (siteSettings.desertBackdropUrl) {
        const overlay = document.getElementById('desertPhotoOverlay');
        if (overlay) overlay.style.backgroundImage = `url('${siteSettings.desertBackdropUrl}')`;
    }
    if (siteSettings.poetImageUrl) {
        const imgEl = document.getElementById('aboutPoetImage');
        if (imgEl) imgEl.innerHTML = `<img src="${siteSettings.poetImageUrl}" alt="${siteSettings.poetName}">`;
    }
}

function saveCustomImages(e) {
    e.preventDefault();
    siteSettings.moonImageUrl = document.getElementById('adminMoonImageUrl').value.trim();
    siteSettings.desertBackdropUrl = document.getElementById('adminDesertBackdropUrl').value.trim();
    siteSettings.poetImageUrl = document.getElementById('adminPoetPhotoUrl').value.trim();

    localStorage.setItem('diwan_settings', JSON.stringify(siteSettings));
    applyCustomImages();
    showToast("تم حفظ وتطبيق صور القمر والخلفيات بنجاح 🌕");
}

// --- Font Selectors Populator ---
// --- Font Selectors Populator & Robust Font Switcher ---
function populateFontSelectors() {
    const globalMenu = document.getElementById('globalFontOptions');
    if (globalMenu) {
        globalMenu.innerHTML = ARABIC_FONTS.map(f => `
            <button class="font-option-btn ${siteSettings.currentFont === f.family ? 'active' : ''}" 
                    style="font-family: ${f.family};" 
                    onclick="changeGlobalFont('${f.family}', '${f.name}')">
                ${f.name}
            </button>
        `).join('');
    }

    const drawerFontSelect = document.getElementById('drawerFontSelect');
    if (drawerFontSelect) {
        drawerFontSelect.innerHTML = ARABIC_FONTS.map(f => `
            <option value="${f.family}" ${siteSettings.currentFont === f.family ? 'selected' : ''}>
                ${f.name}
            </option>
        `).join('');
    }

    const currentFontObj = ARABIC_FONTS.find(f => f.family === siteSettings.currentFont) || ARABIC_FONTS[6];
    const currentLabel = document.getElementById('currentFontNameLabel');
    if (currentLabel) {
        currentLabel.textContent = `الخط الحالي: ${currentFontObj.name}`;
    }

    const readerSelect = document.getElementById('readerFontSelect');
    if (readerSelect) {
        readerSelect.innerHTML = ARABIC_FONTS.map(f => `
            <option value="${f.family}" ${siteSettings.readerFont === f.family ? 'selected' : ''}>
                خط الأبيات: ${f.name}
            </option>
        `).join('');
    }

    const cardFontSelect = document.getElementById('cardStudioFontSelect');
    if (cardFontSelect) {
        cardFontSelect.innerHTML = ARABIC_FONTS.map(f => `
            <option value="${f.family}">${f.name}</option>
        `).join('');
    }

    if (siteSettings.currentFont) {
        applyGlobalFontEverywhere(siteSettings.currentFont);
    }
}

function applyGlobalFontEverywhere(fontFamily) {
    document.documentElement.style.setProperty('--font-current', fontFamily);
    document.documentElement.style.setProperty('--font-body', fontFamily);
    document.documentElement.style.setProperty('--font-heading', fontFamily);
    document.body.style.fontFamily = fontFamily;
}

function toggleFontDropdown() {
    const menu = document.getElementById('fontDropdownMenu');
    if (menu) menu.classList.toggle('open');
}

document.addEventListener('click', (e) => {
    const wrapper = document.querySelector('.font-selector-wrapper');
    if (wrapper && !wrapper.contains(e.target)) {
        const menu = document.getElementById('fontDropdownMenu');
        if (menu) menu.classList.remove('open');
    }
});

function changeGlobalFont(fontFamily, fontName) {
    siteSettings.currentFont = fontFamily;
    localStorage.setItem('diwan_settings', JSON.stringify(siteSettings));
    applyGlobalFontEverywhere(fontFamily);
    populateFontSelectors();
    showToast(`تم تطبيق الخط بنجاح: ${fontName} ✨`);
}

function changeReaderFont(fontFamily) {
    siteSettings.readerFont = fontFamily;
    localStorage.setItem('diwan_settings', JSON.stringify(siteSettings));
    const slate = document.getElementById('classicalPoetrySlate');
    if (slate) slate.style.fontFamily = fontFamily;
    showToast("تم تحديث خط الأبيات على الصفيحة");
}

// --- Daily Visits Streak ---
function initDailyStreak() {
    const todayStr = new Date().toISOString().slice(0, 10);
    let streakData = JSON.parse(localStorage.getItem('diwan_streak_data')) || {
        streak: 1,
        lastVisitDate: todayStr,
        totalVisits: 1
    };

    if (streakData.lastVisitDate !== todayStr) {
        const lastDate = new Date(streakData.lastVisitDate);
        const currentDate = new Date(todayStr);
        const diffDays = Math.floor((currentDate - lastDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            streakData.streak += 1;
        } else if (diffDays > 1) {
            streakData.streak = 1;
        }
        streakData.totalVisits += 1;
        streakData.lastVisitDate = todayStr;
        localStorage.setItem('diwan_streak_data', JSON.stringify(streakData));
    }

    const streakCountEl = document.getElementById('streakCount');
    const statStreakEl = document.getElementById('statStreakDisplay');
    const modalStreakCountEl = document.getElementById('modalStreakCount');
    const totalVisitsCountEl = document.getElementById('totalVisitsCount');
    const lastVisitDateEl = document.getElementById('lastVisitDate');

    if (streakCountEl) streakCountEl.textContent = streakData.streak;
    if (statStreakEl) statStreakEl.textContent = `🔥 ${streakData.streak}`;
    if (modalStreakCountEl) modalStreakCountEl.textContent = streakData.streak;
    if (totalVisitsCountEl) totalVisitsCountEl.textContent = streakData.totalVisits;
    if (lastVisitDateEl) lastVisitDateEl.textContent = streakData.lastVisitDate;
}

function openStreakModal() {
    document.getElementById('streakModalBackdrop').classList.add('open');
    if (window.lucide) lucide.createIcons();
}

function closeStreakModal() {
    document.getElementById('streakModalBackdrop').classList.remove('open');
}

// --- Update Texts from Settings ---
function updateSiteTexts() {
    document.getElementById('heroBadgeText').textContent = siteSettings.heroBadge;
    document.getElementById('heroTitleText').textContent = siteSettings.heroTitle;
    document.getElementById('heroSubtitleText').textContent = siteSettings.heroSubtitle;
    document.getElementById('bannerVerseText').textContent = `"${siteSettings.bannerVerse}"`;
    document.getElementById('footerQuoteBlock').textContent = `"${siteSettings.bannerVerse}"`;
    document.getElementById('aboutPoetName').textContent = siteSettings.poetName;
    document.getElementById('aboutPoetBio').innerHTML = `<p>${siteSettings.poetBio}</p>`;

    document.getElementById('adminHeroBadgeInput').value = siteSettings.heroBadge;
    document.getElementById('adminHeroTitleInput').value = siteSettings.heroTitle;
    document.getElementById('adminHeroSubtitleInput').value = siteSettings.heroSubtitle;
    document.getElementById('adminBannerVerseInput').value = siteSettings.bannerVerse;
    document.getElementById('adminPoetBioInput').value = siteSettings.poetBio;
    document.getElementById('adminPoetPhotoUrl').value = siteSettings.poetImageUrl || '';
    document.getElementById('adminMoonImageUrl').value = siteSettings.moonImageUrl || '';
    document.getElementById('adminDesertBackdropUrl').value = siteSettings.desertBackdropUrl || '';
}

// --- Stats Ribbon ---
function renderStats() {
    const totalPoems = poems.length;
    let totalVerses = 0;
    const catSet = new Set();

    poems.forEach(p => {
        totalVerses += (p.verses ? p.verses.length : 0);
        if (p.category) catSet.add(p.category);
    });

    document.getElementById('statPoemsCount').textContent = totalPoems;
    document.getElementById('statVersesCount').textContent = totalVerses;
    document.getElementById('statCategoriesCount').textContent = catSet.size;
}

// --- Featured Poem Card ---
function renderFeaturedPoem() {
    const featuredSec = document.getElementById('featuredSectionContainer');
    const container = document.getElementById('featuredPoemContainer');
    if (!featuredSec || !container) return;

    if (poems.length === 0) {
        featuredSec.style.display = 'none';
        return;
    }

    featuredSec.style.display = 'block';
    const featured = poems.find(p => p.featured) || poems[0];
    const sampleVerse = featured.verses && featured.verses[0] 
        ? `${featured.verses[0].sadr} ❊ ${featured.verses[0].ajez}` 
        : "—";

    container.innerHTML = `
        <div class="featured-card-header">
            <span class="featured-badge">⭐ قصيدة مختارة من ديوان البدر</span>
            <span class="poem-card-category">${featured.category}</span>
        </div>
        <h3 class="featured-title diwani-font" onclick="openPoemReader('${featured.id}')" style="cursor:pointer;">${featured.title}</h3>
        <div class="featured-meta">
            <span><i data-lucide="music-2"></i> ${featured.meter}</span>
            <span><i data-lucide="hash"></i> ${featured.verses ? featured.verses.length : 0} أبيات</span>
            <span><i data-lucide="user"></i> الشاعر محمد البدر الصمادي</span>
        </div>
        <div class="featured-verses-sample">
            "${sampleVerse}"
        </div>
        <div class="featured-footer">
            <button class="btn-primary-gradient" onclick="openPoemReader('${featured.id}')">
                <i data-lucide="book-open"></i> قراءة القصيدة كاملة على الصفيحة
            </button>
            <button class="btn-glass" onclick="togglePoemFavorite('${featured.id}')">
                <i data-lucide="bookmark" class="${favorites.includes(featured.id) ? 'gold' : ''}"></i>
                <span>${favorites.includes(featured.id) ? 'محفوظة في المفضلة' : 'حفظ في المفضلة'}</span>
            </button>
        </div>
    `;
    if (window.lucide) lucide.createIcons();
}

// --- Home Category Filter & Poems Grid ---
function renderCategoryFilterPills() {
    const container = document.getElementById('homeCategoryFilterPills');
    if (!container) return;
    const cats = Array.from(new Set(poems.map(p => p.category)));
    
    if (cats.length === 0) {
        container.innerHTML = '';
        return;
    }

    let html = `<button class="hero-tag active" onclick="filterHomeGrid('all')">الكل (${poems.length})</button>`;
    cats.forEach(c => {
        const count = poems.filter(p => p.category === c).length;
        html += `<button class="hero-tag" onclick="filterHomeGrid('${c}')">${c} (${count})</button>`;
    });
    container.innerHTML = html;
}

function filterHomeGrid(category) {
    document.querySelectorAll('#homeCategoryFilterPills .hero-tag').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.includes(category) || (category === 'all' && btn.textContent.includes('الكل')));
    });
    renderHomePoemsGrid(category);
}

function renderHomePoemsGrid(catFilter = 'all') {
    const grid = document.getElementById('homePoemsGrid');
    if (!grid) return;

    if (poems.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i data-lucide="feather"></i>
                <h3>مرحباً بك في ديوان البدر</h3>
                <p>الموقع نظيف وجاهز، يمكنك كمسؤول (الأدمن) الدخول وإضافة القصائد والأبيات كما تحب.</p>
                <button class="btn-primary-gradient" onclick="openAdminModal()">
                    <i data-lucide="shield-check"></i> دخول الأدمن لإضافة قصائد
                </button>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    const filtered = catFilter === 'all' 
        ? poems.slice(0, 6) 
        : poems.filter(p => p.category === catFilter).slice(0, 6);

    grid.innerHTML = filtered.map(p => generatePoemCardHtml(p)).join('');
    if (window.lucide) lucide.createIcons();
}

function generatePoemCardHtml(p) {
    const isFav = favorites.includes(p.id);
    const v1 = p.verses && p.verses[0] ? p.verses[0] : { sadr: '...', ajez: '...' };

    return `
        <div class="poem-card">
            <div class="poem-card-header">
                <span class="poem-card-category">${p.category}</span>
                <button class="card-fav-btn ${isFav ? 'active' : ''}" onclick="togglePoemFavorite('${p.id}')" title="حفظ">
                    <i data-lucide="bookmark"></i>
                </button>
            </div>
            <h3 class="poem-card-title diwani-font" onclick="openPoemReader('${p.id}')">${p.title}</h3>
            <div class="poem-card-preview" onclick="openPoemReader('${p.id}')" style="cursor:pointer;">
                <span class="sadr-prev">${v1.sadr}</span>
                <span class="ajez-prev">... ${v1.ajez}</span>
            </div>
            <div class="poem-card-footer">
                <span><i data-lucide="music-2" style="width:14px;height:14px;display:inline;"></i> ${p.meter}</span>
                <span>${p.verses ? p.verses.length : 0} أبيات</span>
                <button class="btn-sm-glass" onclick="openPoemReader('${p.id}')">
                    عرض على الصفيحة <i data-lucide="arrow-left" style="width:14px;height:14px;"></i>
                </button>
            </div>
        </div>
    `;
}

// --- Live Global Search ---
function handleSearchFocus() {
    const input = document.getElementById('globalSearchInput');
    if (input.value.trim().length > 0) handleSearchInput(input.value);
}

function handleSearchInput(query) {
    const q = query.trim().toLowerCase();
    const dropdown = document.getElementById('searchDropdown');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (q.length === 0) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        if (clearBtn) clearBtn.style.display = 'none';
        return;
    }

    if (clearBtn) clearBtn.style.display = 'flex';

    const matches = [];
    poems.forEach(p => {
        const titleMatch = p.title.toLowerCase().includes(q);
        const catMatch = p.category.toLowerCase().includes(q);
        const meterMatch = p.meter.toLowerCase().includes(q);
        
        let matchedVerse = null;
        if (p.verses) {
            for (let v of p.verses) {
                if (v.sadr.toLowerCase().includes(q) || v.ajez.toLowerCase().includes(q) || (v.explanation && v.explanation.toLowerCase().includes(q))) {
                    matchedVerse = v;
                    break;
                }
            }
        }
        if (titleMatch || catMatch || meterMatch || matchedVerse) {
            matches.push({ poem: p, matchedVerse });
        }
    });

    if (matches.length === 0) {
        dropdown.innerHTML = `<div class="search-no-results">لم نجد أي نتائج مطابقة لـ "<strong>${query}</strong>" في الديوان.</div>`;
    } else {
        dropdown.innerHTML = matches.map(m => `
            <div class="search-result-item" onclick="openPoemReader('${m.poem.id}'); clearSearch();">
                <div class="result-item-header">
                    <span class="result-title diwani-font">${m.poem.title}</span>
                    <span class="result-category">${m.poem.category} - ${m.poem.meter}</span>
                </div>
                ${m.matchedVerse ? `
                    <div class="result-verse-match">
                        ${m.matchedVerse.sadr} ... ${m.matchedVerse.ajez}
                    </div>
                ` : ''}
            </div>
        `).join('');
    }
    dropdown.classList.add('open');
}

function clearSearch() {
    const input = document.getElementById('globalSearchInput');
    if (input) input.value = '';
    const dropdown = document.getElementById('searchDropdown');
    if (dropdown) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
    }
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) clearBtn.style.display = 'none';
}

document.addEventListener('click', (e) => {
    const searchWrapper = document.querySelector('.hero-search-wrapper');
    if (searchWrapper && !searchWrapper.contains(e.target)) {
        const dropdown = document.getElementById('searchDropdown');
        if (dropdown) dropdown.classList.remove('open');
    }
});

function filterByTag(tag) {
    if (tag === 'all') {
        navigateTo('poems');
    } else {
        navigateTo('poems');
        const select = document.getElementById('filterCategorySelect');
        if (select) {
            select.value = tag;
            renderPoemsView();
        }
    }
}

// --- Page 2: Poems Listing View ---
function renderPoemsView() {
    const searchVal = (document.getElementById('poemsListSearch')?.value || '').toLowerCase().trim();
    const catVal = document.getElementById('filterCategorySelect')?.value || 'all';
    const meterVal = document.getElementById('filterMeterSelect')?.value || 'all';
    const sortVal = document.getElementById('sortPoemsSelect')?.value || 'newest';

    populateFilterSelects();

    let filtered = poems.filter(p => {
        const matchesSearch = !searchVal || 
            p.title.toLowerCase().includes(searchVal) ||
            p.category.toLowerCase().includes(searchVal) ||
            p.meter.toLowerCase().includes(searchVal) ||
            (p.verses && p.verses.some(v => v.sadr.toLowerCase().includes(searchVal) || v.ajez.toLowerCase().includes(searchVal)));

        const matchesCat = catVal === 'all' || p.category === catVal;
        const matchesMeter = meterVal === 'all' || p.meter === meterVal;

        return matchesSearch && matchesCat && matchesMeter;
    });

    if (sortVal === 'views') {
        filtered.sort((a, b) => (analytics.poemViews[b.id] || 0) - (analytics.poemViews[a.id] || 0));
    } else if (sortVal === 'verses') {
        filtered.sort((a, b) => (b.verses?.length || 0) - (a.verses?.length || 0));
    } else if (sortVal === 'title') {
        filtered.sort((a, b) => a.title.localeCompare(b.title, 'ar'));
    }

    const grid = document.getElementById('allPoemsGrid');
    const empty = document.getElementById('emptyPoemsState');

    if (filtered.length === 0) {
        grid.innerHTML = '';
        empty.style.display = 'block';
    } else {
        empty.style.display = 'none';
        grid.innerHTML = filtered.map(p => generatePoemCardHtml(p)).join('');
    }
    if (window.lucide) lucide.createIcons();
}

function populateFilterSelects() {
    const catSelect = document.getElementById('filterCategorySelect');
    const meterSelect = document.getElementById('filterMeterSelect');
    if (!catSelect || !meterSelect) return;

    const currentCat = catSelect.value;
    const currentMeter = meterSelect.value;

    const categories = Array.from(new Set(poems.map(p => p.category)));
    const meters = Array.from(new Set(poems.map(p => p.meter)));

    catSelect.innerHTML = `<option value="all">جميع الأغراض (${categories.length})</option>` + 
        categories.map(c => `<option value="${c}">${c}</option>`).join('');
    
    meterSelect.innerHTML = `<option value="all">جميع البحور (${meters.length})</option>` + 
        meters.map(m => `<option value="${m}">${m}</option>`).join('');

    catSelect.value = currentCat;
    meterSelect.value = currentMeter;
}

// --- Page 3: Categories View ---
function renderCategoriesView() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;

    if (poems.length === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;"><h3>لا توجد تصنيفات بعد</h3><p>أضف قصائدك من لوحة الإدارة لتظهر تصنيفاتها وبحورها هنا تلقائياً.</p></div>`;
        return;
    }

    const catMap = {};
    poems.forEach(p => {
        if (!catMap[p.category]) catMap[p.category] = [];
        catMap[p.category].push(p);
    });

    const categoryIcons = {
        'غزل': 'heart',
        'حكمة': 'compass',
        'فخر': 'shield',
        'وجدانيات': 'moon',
        'وطنيات': 'flag',
        'رثاء': 'cloud-rain',
        'مديح': 'crown'
    };

    grid.innerHTML = Object.keys(catMap).map(catName => {
        const iconName = categoryIcons[catName] || 'feather';
        const count = catMap[catName].length;
        return `
            <div class="category-card" onclick="filterByTag('${catName}')">
                <div class="category-icon-box">
                    <i data-lucide="${iconName}"></i>
                </div>
                <h3 class="diwani-font">${catName}</h3>
                <p>يحتوي على ${count} قصيدة في الديوان</p>
            </div>
        `;
    }).join('');
    if (window.lucide) lucide.createIcons();
}

// --- Page 5: Favorites View ---
function renderFavoritesView() {
    const grid = document.getElementById('favoritesGrid');
    const empty = document.getElementById('emptyFavoritesState');
    if (!grid) return;

    const favPoems = poems.filter(p => favorites.includes(p.id));

    if (favPoems.length === 0) {
        grid.innerHTML = '';
        empty.style.display = 'block';
    } else {
        empty.style.display = 'none';
        grid.innerHTML = favPoems.map(p => generatePoemCardHtml(p)).join('');
    }
    if (window.lucide) lucide.createIcons();
}

function togglePoemFavorite(poemId) {
    if (favorites.includes(poemId)) {
        favorites = favorites.filter(id => id !== poemId);
        showToast("تمت إزالة القصيدة من المفضلة");
    } else {
        favorites.push(poemId);
        showToast("تمت إضافة القصيدة إلى المفضلة 🔖");
    }
    localStorage.setItem('diwan_favorites', JSON.stringify(favorites));
    updateFavoritesBadge();
    renderHomePoemsGrid();
    renderFeaturedPoem();
    if (document.getElementById('poemsView').classList.contains('active')) renderPoemsView();
    if (document.getElementById('favoritesView').classList.contains('active')) renderFavoritesView();
    if (currentPoemId === poemId) updateReaderFavButton();
}

function updateFavoritesBadge() {
    const counter = document.getElementById('favCounter');
    if (counter) counter.textContent = favorites.length;
}

// --- VIEW 6: SINGLE POEM READER ---
function openPoemReader(poemId) {
    const poem = poems.find(p => p.id === poemId);
    if (!poem) return;

    currentPoemId = poemId;
    window.location.hash = poemId;

    // Track views
    trackPoemView(poemId);

    document.getElementById('poemReaderCategory').textContent = poem.category;
    document.getElementById('poemReaderTitle').textContent = poem.title;
    document.getElementById('poemReaderMeter').textContent = poem.meter;
    document.getElementById('poemReaderVersesCount').textContent = poem.verses ? poem.verses.length : 0;
    document.getElementById('poemReaderDate').textContent = poem.date || '—';
    document.getElementById('poemReaderViews').textContent = analytics.poemViews[poemId] || 1;

    const storyBox = document.getElementById('poemStoryBox');
    if (poem.story) {
        document.getElementById('poemStoryText').textContent = poem.story;
        storyBox.style.display = 'block';
    } else {
        storyBox.style.display = 'none';
    }

    const slate = document.getElementById('classicalPoetrySlate');
    if (slate && siteSettings.readerFont) {
        slate.style.fontFamily = siteSettings.readerFont;
    }

    const slateContainer = document.getElementById('slateVersesContainer');
    if (poem.verses && poem.verses.length > 0) {
        slateContainer.innerHTML = poem.verses.map((v, index) => `
            <div class="slate-verse-line" id="slate-line-${index}">
                <div class="slate-verse-num">${index + 1}</div>
                <div class="slate-sadr">${v.sadr}</div>
                <div class="slate-separator">❊</div>
                <div class="slate-ajez">${v.ajez}</div>
                <div class="slate-tools">
                    <button class="slate-tool-btn" title="نسخ البيت" onclick="copySingleVerse('${escapeQuotes(v.sadr)}', '${escapeQuotes(v.ajez)}')">
                        <i data-lucide="copy"></i>
                    </button>
                    <button class="slate-tool-btn" title="تصميم بطاقة للبيت" onclick="openCardStudioWithVerse('${escapeQuotes(v.sadr)}', '${escapeQuotes(v.ajez)}')">
                        <i data-lucide="image"></i>
                    </button>
                    ${v.explanation ? `
                        <button class="slate-tool-btn" title="الشرح" onclick="toggleSlateExplanation(${index})">
                            <i data-lucide="help-circle"></i>
                        </button>
                    ` : ''}
                </div>
                ${v.explanation ? `
                    <div class="slate-explanation-row" id="exp-row-${index}">
                        <strong>معنى وشرح البيت:</strong> ${v.explanation}
                    </div>
                ` : ''}
            </div>
        `).join('');
    } else {
        slateContainer.innerHTML = '<p class="text-muted text-center" style="padding: 2rem;">لا توجد أبيات مسجلة لهذه القصيدة بعد.</p>';
    }

    updateAdjacentPoemButtons(poemId);
    updateReaderFavButton();

    navigateTo('singlePoem');
    if (window.lucide) lucide.createIcons();
}

function toggleSlateExplanation(index) {
    const el = document.getElementById(`exp-row-${index}`);
    if (el) el.classList.toggle('visible');
}

function toggleExplanationMode() {
    isExplanationVisible = !isExplanationVisible;
    document.querySelectorAll('.slate-explanation-row').forEach(el => {
        el.classList.toggle('visible', isExplanationVisible);
    });
    const label = document.getElementById('explanationToggleLabel');
    if (label) label.textContent = isExplanationVisible ? 'إخفاء الشروح والمعاني' : 'إظهار الشروح والمعاني';
}

function updateAdjacentPoemButtons(currentId) {
    const currentIndex = poems.findIndex(p => p.id === currentId);
    const prevBtn = document.getElementById('prevPoemBtn');
    const nextBtn = document.getElementById('nextPoemBtn');

    if (currentIndex > 0) {
        const prevPoem = poems[currentIndex - 1];
        document.getElementById('prevPoemTitle').textContent = prevPoem.title;
        prevBtn.style.visibility = 'visible';
    } else {
        prevBtn.style.visibility = 'hidden';
    }

    if (currentIndex < poems.length - 1) {
        const nextPoem = poems[currentIndex + 1];
        document.getElementById('nextPoemTitle').textContent = nextPoem.title;
        nextBtn.style.visibility = 'visible';
    } else {
        nextBtn.style.visibility = 'hidden';
    }
}

function navigateAdjacentPoem(direction) {
    const currentIndex = poems.findIndex(p => p.id === currentPoemId);
    const targetIndex = currentIndex + direction;
    if (targetIndex >= 0 && targetIndex < poems.length) {
        openPoemReader(poems[targetIndex].id);
    }
}

function openRandomPoem() {
    if (poems.length === 0) {
        showToast("الديوان فارغ حالياً، قم بإضافة قصائد من لوحة الأدمن");
        return;
    }
    const randomIndex = Math.floor(Math.random() * poems.length);
    openPoemReader(poems[randomIndex].id);
    showToast(`انتقلت إلى: ${poems[randomIndex].title} 🎲`);
}

function toggleCurrentPoemFavorite() {
    if (currentPoemId) togglePoemFavorite(currentPoemId);
}

function updateReaderFavButton() {
    const btn = document.getElementById('readerFavBtn');
    if (!btn || !currentPoemId) return;
    const isFav = favorites.includes(currentPoemId);
    btn.classList.toggle('active', isFav);
    btn.querySelector('span').textContent = isFav ? 'محفوظة في المفضلة' : 'حفظ في المفضلة';
}

function adjustFontSize(delta) {
    if (delta > 0 && currentFontSizeMultiplier < 1.5) {
        currentFontSizeMultiplier += 0.1;
    } else if (delta < 0 && currentFontSizeMultiplier > 0.8) {
        currentFontSizeMultiplier -= 0.1;
    }
    document.querySelectorAll('.slate-sadr, .slate-ajez').forEach(el => {
        el.style.fontSize = `${1.6 * currentFontSizeMultiplier}rem`;
    });
}

function copySingleVerse(sadr, ajez) {
    const text = `${sadr} .. ${ajez}\n— للشاعر محمد البدر الصمادي (ديوان البدر)`;
    navigator.clipboard.writeText(text).then(() => {
        trackVerseCopy();
        showToast("تم نسخ البيت الشعري بنجاح 📋");
    });
}

function copyBannerQuote() {
    const text = `${siteSettings.bannerVerse}\n— الشاعر محمد البدر الصمادي (ديوان البدر)`;
    navigator.clipboard.writeText(text).then(() => {
        trackVerseCopy();
        showToast("تم نسخ بيت الحكمة بنجاح 📋");
    });
}

function shareCurrentPoem() {
    const poem = poems.find(p => p.id === currentPoemId);
    if (!poem) return;

    if (navigator.share) {
        navigator.share({
            title: `${poem.title} | للشاعر محمد البدر الصمادي`,
            text: `استمتع بقراءة قصيدة "${poem.title}" من ديوان البدر`,
            url: window.location.href
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast("تم نسخ رابط القصيدة لمشاركتها 🔗");
        });
    }
}

// --- USER ACCOUNTS & DIWAN ACTIVATION REQUESTS ---
function openUserModal() {
    const backdrop = document.getElementById('userModalBackdrop');
    backdrop.classList.add('open');

    if (currentUser) {
        document.getElementById('userAuthSection').style.display = 'none';
        document.getElementById('userDashboardSection').style.display = 'block';
        document.getElementById('userNameGreeting').textContent = `مرحباً، ${currentUser.name}`;
        document.getElementById('userEmailTag').textContent = currentUser.email;
        refreshUserRequestStatus();
    } else {
        document.getElementById('userAuthSection').style.display = 'block';
        document.getElementById('userDashboardSection').style.display = 'none';
        switchAuthTab('login');
    }
    if (window.lucide) lucide.createIcons();
}

function closeUserModal() {
    document.getElementById('userModalBackdrop').classList.remove('open');
}

function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('authLoginTab').classList.toggle('active', isLogin);
    document.getElementById('authRegisterTab').classList.toggle('active', !isLogin);
    document.getElementById('userLoginForm').style.display = isLogin ? 'block' : 'none';
    document.getElementById('userRegisterForm').style.display = !isLogin ? 'block' : 'none';
    document.getElementById('userLoginFeedback').textContent = '';
    document.getElementById('userRegFeedback').textContent = '';
}

function handleUserRegister(e) {
    e.preventDefault();
    const name = document.getElementById('userRegName').value.trim();
    const email = document.getElementById('userRegEmail').value.trim();
    const password = document.getElementById('userRegPassword').value.trim();
    const bio = document.getElementById('userRegBio').value.trim();
    const feedback = document.getElementById('userRegFeedback');

    if (users.some(u => u.email === email)) {
        feedback.textContent = '❌ هذا البريد الإلكتروني مسجل بالفعل!';
        return;
    }

    const newUser = { id: `user-${Date.now()}`, name, email, password, bio, registeredAt: new Date().toISOString() };
    users.push(newUser);
    localStorage.setItem('diwan_users', JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem('diwan_current_user', JSON.stringify(currentUser));
    updateUserButtonState();

    logActivity(`قام مستخدم جديد بالتسجيل: "${name}" (${email})`);
    renderAnalyticsDashboard();

    showToast(`تم إنشاء حسابك بنجاح، أهلاً بك يا ${name} 🌟`);
    openUserModal();
}

function handleUserLogin(e) {
    e.preventDefault();
    const emailOrUser = document.getElementById('userLoginEmail').value.trim();
    const password = document.getElementById('userLoginPassword').value.trim();
    const feedback = document.getElementById('userLoginFeedback');

    const user = users.find(u => (u.email === emailOrUser || u.name === emailOrUser) && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem('diwan_current_user', JSON.stringify(currentUser));
        updateUserButtonState();
        logActivity(`تسجيل دخول المستخدم: "${user.name}"`);
        renderAnalyticsDashboard();
        showToast(`تم تسجيل الدخول بنجاح! مرحباً ${user.name}`);
        openUserModal();
    } else {
        feedback.textContent = '❌ بيانات الدخول غير صحيحة، يرجى التحقق أو إنشاء حساب جديد.';
    }
}

function handleUserLogout() {
    currentUser = null;
    localStorage.removeItem('diwan_current_user');
    updateUserButtonState();
    showToast("تم تسجيل الخروج من حسابك");
    openUserModal();
}

function updateUserButtonState() {
    const label = document.getElementById('userBtnLabel');
    if (label) {
        label.textContent = currentUser ? currentUser.name : 'حسابي / طلب تفعيل ديوان';
    }
    const drawerLabel = document.getElementById('drawerUserLabel');
    if (drawerLabel) {
        drawerLabel.textContent = currentUser ? `حسابي (${currentUser.name})` : 'حسابي / طلب تفعيل ديوان';
    }
}

function handleSendDiwanRequest(e) {
    e.preventDefault();
    if (!currentUser) return;

    const diwanName = document.getElementById('reqDiwanName').value.trim();
    const poetName = document.getElementById('reqPoetName').value.trim();
    const description = document.getElementById('reqDescription').value.trim();

    const newRequest = {
        id: `req-${Date.now()}`,
        userId: currentUser.id,
        userName: currentUser.name,
        userEmail: currentUser.email,
        diwanName,
        poetName,
        description,
        status: 'pending',
        submittedAt: new Date().toISOString()
    };

    const existingIndex = diwanRequests.findIndex(r => r.userId === currentUser.id);
    if (existingIndex >= 0) {
        diwanRequests[existingIndex] = newRequest;
    } else {
        diwanRequests.push(newRequest);
    }

    localStorage.setItem('diwan_activation_requests', JSON.stringify(diwanRequests));
    refreshUserRequestStatus();
    logActivity(`طلب تفعيل ديوان جديد: "${diwanName}" للشاعر "${poetName}"`);
    renderAnalyticsDashboard();
    showToast("تم إرسال طلب تفعيل الديوان للأدمن بنجاح 📨");
}

function refreshUserRequestStatus() {
    if (!currentUser) return;
    const req = diwanRequests.find(r => r.userId === currentUser.id);
    const badge = document.getElementById('myRequestStatusBadge');
    if (!badge) return;

    if (!req) {
        badge.textContent = 'لم يتم إرسال طلب';
        badge.className = 'status-badge';
    } else if (req.status === 'pending') {
        badge.textContent = '⏳ قيد المراجعة من الأدمن';
        badge.className = 'status-badge pending';
    } else if (req.status === 'approved') {
        badge.textContent = '✅ تم قبول تفعيل الديوان!';
        badge.className = 'status-badge approved';
    } else if (req.status === 'rejected') {
        badge.textContent = '❌ تم رفض الطلب من الأدمن';
        badge.className = 'status-badge rejected';
    }
}

// --- ADMIN DASHBOARD (smady / raneem11) ---
function openAdminModal() {
    const backdrop = document.getElementById('adminModalBackdrop');
    backdrop.classList.add('open');

    if (isAdminLoggedIn) {
        document.getElementById('adminLoginSection').style.display = 'none';
        document.getElementById('adminDashboardSection').style.display = 'block';
        document.getElementById('adminModalTitle').textContent = 'لوحة تحكم المسؤول (الأدمن: smady)';
        renderAnalyticsDashboard();
        render30ThemesGrid();
        renderAdminRequestsList();
        renderAdminPoemsTable();
    } else {
        document.getElementById('adminLoginSection').style.display = 'block';
        document.getElementById('adminDashboardSection').style.display = 'none';
        document.getElementById('adminModalTitle').textContent = 'بوابة إدارة ديوان البدر (smady)';
    }
    if (window.lucide) lucide.createIcons();
}

function closeAdminModal() {
    document.getElementById('adminModalBackdrop').classList.remove('open');
}

function handleAdminLogin(e) {
    e.preventDefault();
    const user = document.getElementById('adminUsername').value.trim();
    const pass = document.getElementById('adminPassword').value.trim();
    const feedback = document.getElementById('loginErrorFeedback');

    if (user === 'smady' && pass === 'raneem11') {
        isAdminLoggedIn = true;
        sessionStorage.setItem('diwan_admin_auth', 'true');
        feedback.textContent = '';
        logActivity("تسجيل دخول الأدمن الرئيسي (smady)");
        showToast("مرحباً بك أستاذ smady في لوحة تحكم ديوان البدر 👑");
        refreshAdminIndicator();
        openAdminModal();
    } else {
        feedback.textContent = '❌ اسم المستخدم أو كلمة المرور غير صحيحة!';
    }
}

function adminLogout() {
    isAdminLoggedIn = false;
    sessionStorage.removeItem('diwan_admin_auth');
    showToast("تم تسجيل الخروج من لوحة الإدارة");
    refreshAdminIndicator();
    closeAdminModal();
}

function refreshAdminIndicator() {
    const ind = document.getElementById('adminStatusIndicator');
    if (ind) ind.style.display = isAdminLoggedIn ? 'block' : 'none';
}

function switchAdminTab(tabName) {
    document.querySelectorAll('.admin-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tabName);
    });
    document.querySelectorAll('.admin-tab-content').forEach(c => {
        c.classList.toggle('active', c.id === `tabContent-${tabName}`);
    });
    if (tabName === 'analytics') renderAnalyticsDashboard();
    if (tabName === 'themes30') render30ThemesGrid();
    if (tabName === 'requests') renderAdminRequestsList();
    if (tabName === 'poems') renderAdminPoemsTable();
    if (window.lucide) lucide.createIcons();
}

// --- Admin Diwan Activation Requests ---
function renderAdminRequestsList() {
    const list = document.getElementById('adminRequestsList');
    const badge = document.getElementById('adminPendingRequestsBadge');
    if (!list) return;

    const pendingCount = diwanRequests.filter(r => r.status === 'pending').length;
    if (badge) badge.textContent = pendingCount;

    if (diwanRequests.length === 0) {
        list.innerHTML = `<div class="empty-state"><h4>لا توجد طلبات تفعيل واردة حالياً</h4><p>عندما يسجل أي مستخدم ويرسل طلب تفعيل ديوان ستظهر تفاصيله هنا.</p></div>`;
        return;
    }

    list.innerHTML = diwanRequests.map(r => `
        <div class="request-card">
            <div>
                <div class="req-header">
                    <span class="req-title diwani-font">${r.diwanName}</span>
                    <span class="req-author">الشاعر/صاحب الطلب: <strong>${r.poetName}</strong></span>
                    <span class="status-badge ${r.status}">${r.status === 'pending' ? '⏳ معلق' : (r.status === 'approved' ? '✅ مقبول' : '❌ مرفوض')}</span>
                </div>
                <p class="req-desc"><strong>تفاصيل الطلب والأبيات:</strong> ${r.description}</p>
                <small class="text-muted">مقدم الطلب: ${r.userName} (${r.userEmail}) — بتاريخ: ${new Date(r.submittedAt).toLocaleDateString('ar-EG')}</small>
            </div>
            <div class="req-actions">
                <button class="btn-approve" onclick="updateRequestStatus('${r.id}', 'approved')">
                    <i data-lucide="check"></i> قبول الطلب
                </button>
                <button class="btn-reject" onclick="updateRequestStatus('${r.id}', 'rejected')">
                    <i data-lucide="x"></i> رفض الطلب
                </button>
            </div>
        </div>
    `).join('');
    if (window.lucide) lucide.createIcons();
}

function updateRequestStatus(requestId, newStatus) {
    const req = diwanRequests.find(r => r.id === requestId);
    if (!req) return;

    req.status = newStatus;
    localStorage.setItem('diwan_activation_requests', JSON.stringify(diwanRequests));
    renderAdminRequestsList();
    logActivity(`قام الأدمن بـ ${newStatus === 'approved' ? 'قبول' : 'رفض'} طلب تفعيل ديوان: "${req.diwanName}"`);
    showToast(newStatus === 'approved' ? "تم قبول طلب تفعيل الديوان بنجاح ✅" : "تم رفض الطلب ❌");
}

// --- Admin Poems CRUD ---
function renderAdminPoemsTable() {
    const tbody = document.getElementById('adminPoemsTableBody');
    if (!tbody) return;

    if (poems.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center" style="padding: 2rem;">الديوان فارغ حالياً. اضغط على "إضافة قصيدة جديدة" لبدء إضافة قصائدك.</td></tr>`;
        return;
    }

    tbody.innerHTML = poems.map(p => `
        <tr>
            <td><strong class="diwani-font">${p.title}</strong></td>
            <td><span class="poem-card-category">${p.category}</span></td>
            <td>${p.meter}</td>
            <td>${p.verses ? p.verses.length : 0}</td>
            <td><i data-lucide="eye" style="width:14px;height:14px;display:inline;"></i> ${analytics.poemViews[p.id] || 0}</td>
            <td>${p.featured ? '⭐ نعم' : '—'}</td>
            <td>
                <div class="table-action-btns">
                    <button class="action-icon-btn edit" onclick="openPoemEditorModal('${p.id}')" title="تعديل">
                        <i data-lucide="edit-3"></i>
                    </button>
                    <button class="action-icon-btn delete" onclick="deletePoem('${p.id}')" title="حذف">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
    if (window.lucide) lucide.createIcons();
}

function deletePoem(poemId) {
    const poem = poems.find(p => p.id === poemId);
    if (!poem) return;

    if (confirm(`هل أنت متأكد من حذف قصيدة "${poem.title}" نهائياً من الديوان؟`)) {
        poems = poems.filter(p => p.id !== poemId);
        localStorage.setItem('diwan_clean_poems', JSON.stringify(poems));
        logActivity(`قام الأدمن بحذف قصيدة: "${poem.title}"`);
        renderAdminPoemsTable();
        renderStats();
        renderHomePoemsGrid();
        renderFeaturedPoem();
        renderAnalyticsDashboard();
        showToast("تم حذف القصيدة بنجاح");
    }
}

// --- Poem Editor Modal ---
function openPoemEditorModal(poemId = null) {
    const backdrop = document.getElementById('poemEditorBackdrop');
    const titleEl = document.getElementById('poemEditorModalTitle');
    const container = document.getElementById('versesInputsContainer');

    container.innerHTML = '';

    if (poemId) {
        const p = poems.find(x => x.id === poemId);
        if (!p) return;
        titleEl.textContent = `تعديل قصيدة: ${p.title}`;
        document.getElementById('editPoemId').value = p.id;
        document.getElementById('editPoemTitle').value = p.title;
        document.getElementById('editPoemCategory').value = p.category;
        document.getElementById('editPoemMeter').value = p.meter;
        document.getElementById('editPoemDate').value = p.date || '';
        document.getElementById('editPoemFeatured').checked = !!p.featured;
        document.getElementById('editPoemStory').value = p.story || '';

        if (p.verses && p.verses.length > 0) {
            p.verses.forEach(v => addVerseRow(v.sadr, v.ajez, v.explanation));
        } else {
            addEmptyVerseRow();
        }
    } else {
        titleEl.textContent = 'إضافة قصيدة جديدة للديوان';
        document.getElementById('poemEditorForm').reset();
        document.getElementById('editPoemId').value = '';
        addEmptyVerseRow();
        addEmptyVerseRow();
    }

    backdrop.classList.add('open');
    if (window.lucide) lucide.createIcons();
}

function closePoemEditorModal() {
    document.getElementById('poemEditorBackdrop').classList.remove('open');
}

function addEmptyVerseRow() { addVerseRow('', '', ''); }

function addVerseRow(sadr = '', ajez = '', explanation = '') {
    const container = document.getElementById('versesInputsContainer');
    const row = document.createElement('div');
    row.className = 'verse-input-row';
    row.innerHTML = `
        <div class="verse-input-cols">
            <input type="text" placeholder="الصدر (الشطر الأول)" value="${escapeQuotes(sadr)}" class="sadr-input" required>
            <input type="text" placeholder="العجز (الشطر الثاني)" value="${escapeQuotes(ajez)}" class="ajez-input" required>
            <button type="button" class="verse-row-delete-btn" onclick="this.closest('.verse-input-row').remove()" title="حذف البيت">
                <i data-lucide="x"></i>
            </button>
        </div>
        <input type="text" placeholder="شرح أو مناسبة هذا البيت (اختياري)..." value="${escapeQuotes(explanation)}" class="verse-explanation-input">
    `;
    container.appendChild(row);
    if (window.lucide) lucide.createIcons();
}

function handleSavePoem(e) {
    e.preventDefault();
    const id = document.getElementById('editPoemId').value || `poem-${Date.now()}`;
    const title = document.getElementById('editPoemTitle').value.trim();
    const category = document.getElementById('editPoemCategory').value;
    const meter = document.getElementById('editPoemMeter').value.trim();
    const date = document.getElementById('editPoemDate').value.trim();
    const featured = document.getElementById('editPoemFeatured').checked;
    const story = document.getElementById('editPoemStory').value.trim();

    const verseRows = document.querySelectorAll('#versesInputsContainer .verse-input-row');
    const verses = [];
    verseRows.forEach(row => {
        const sadr = row.querySelector('.sadr-input').value.trim();
        const ajez = row.querySelector('.ajez-input').value.trim();
        const explanation = row.querySelector('.verse-explanation-input').value.trim();
        if (sadr && ajez) verses.push({ sadr, ajez, explanation });
    });

    if (verses.length === 0) {
        alert('يرجى إضافة بيت واحد على الأقل للقصيدة!');
        return;
    }

    if (featured) {
        poems.forEach(p => p.featured = false);
    }

    const newPoem = { id, title, category, meter, date, featured, story, verses };

    const existingIndex = poems.findIndex(p => p.id === id);
    if (existingIndex >= 0) {
        poems[existingIndex] = newPoem;
        logActivity(`قام الأدمن بتحديث بيانات قصيدة: "${title}"`);
        showToast("تم تحديث بيانات القصيدة بنجاح ✨");
    } else {
        poems.unshift(newPoem);
        logActivity(`قام الأدمن بإضافة قصيدة جديدة: "${title}" (${verses.length} بيت)`);
        showToast("تمت إضافة القصيدة الجديدة إلى ديوان البدر 📜");
    }

    localStorage.setItem('diwan_clean_poems', JSON.stringify(poems));

    closePoemEditorModal();
    renderAdminPoemsTable();
    renderStats();
    renderFeaturedPoem();
    renderHomePoemsGrid();
    renderCategoryFilterPills();
    renderAnalyticsDashboard();
    if (document.getElementById('poemsView').classList.contains('active')) renderPoemsView();
}

// --- Batch Verses Paste ---
function openBatchVersesPasteModal() { document.getElementById('batchPasteModalBackdrop').classList.add('open'); }
function closeBatchPasteModal() { document.getElementById('batchPasteModalBackdrop').classList.remove('open'); }

function applyBatchPasteVerses() {
    const raw = document.getElementById('batchPasteTextarea').value;
    if (!raw.trim()) return;

    const lines = raw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    lines.forEach(line => {
        let parts = [];
        if (line.includes('...')) parts = line.split('...');
        else if (line.includes('..')) parts = line.split('..');
        else if (line.includes('❊')) parts = line.split('❊');
        else if (line.includes('-')) parts = line.split('-');
        else parts = [line, ''];

        const sadr = parts[0] ? parts[0].trim() : '';
        const ajez = parts[1] ? parts[1].trim() : '';
        if (sadr) addVerseRow(sadr, ajez, '');
    });

    document.getElementById('batchPasteTextarea').value = '';
    closeBatchPasteModal();
    showToast("تم تحويل ولصق الأبيات بنجاح");
}

// --- Save Site Info Texts ---
function saveSiteInfo(e) {
    e.preventDefault();
    siteSettings.heroBadge = document.getElementById('adminHeroBadgeInput').value.trim();
    siteSettings.heroTitle = document.getElementById('adminHeroTitleInput').value.trim();
    siteSettings.heroSubtitle = document.getElementById('adminHeroSubtitleInput').value.trim();
    siteSettings.bannerVerse = document.getElementById('adminBannerVerseInput').value.trim();
    siteSettings.poetBio = document.getElementById('adminPoetBioInput').value.trim();

    localStorage.setItem('diwan_settings', JSON.stringify(siteSettings));
    updateSiteTexts();
    logActivity("قام الأدمن بتحديث نصوص وهوية الموقع");
    showToast("تم حفظ نصوص الموقع وسيرة الشاعر بنجاح 💾");
}

// --- Backup & Export ---
function exportDataBackup() {
    const data = {
        poems,
        settings: siteSettings,
        theme: siteTheme,
        requests: diwanRequests,
        users,
        analytics,
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `diwan-albadr-master-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("تم تصدير النسخة الاحتياطية بنجاح 💾");
}

function importDataBackup(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            if (data.poems) poems = data.poems;
            if (data.settings) siteSettings = data.settings;
            if (data.theme) siteTheme = data.theme;
            if (data.requests) diwanRequests = data.requests;
            if (data.users) users = data.users;
            if (data.analytics) analytics = data.analytics;

            localStorage.setItem('diwan_clean_poems', JSON.stringify(poems));
            localStorage.setItem('diwan_settings', JSON.stringify(siteSettings));
            localStorage.setItem('diwan_theme', JSON.stringify(siteTheme));
            localStorage.setItem('diwan_activation_requests', JSON.stringify(diwanRequests));
            localStorage.setItem('diwan_users', JSON.stringify(users));
            localStorage.setItem('diwan_analytics', JSON.stringify(analytics));

            applyThemeColors(siteTheme);
            applyCustomImages();
            updateSiteTexts();
            renderStats();
            renderFeaturedPoem();
            renderHomePoemsGrid();
            renderAdminPoemsTable();
            renderAdminRequestsList();
            render30ThemesGrid();
            renderAnalyticsDashboard();

            showToast("تم استيراد كافة البيانات بنجاح 🎉");
        } catch (err) {
            alert("حدث خطأ أثناء قراءة ملف النسخة الاحتياطية.");
        }
    };
    reader.readAsText(file);
}

// --- Utilities ---
function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="sparkles"></i><span>${message}</span>`;
    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function escapeQuotes(str) {
    if (!str) return '';
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
