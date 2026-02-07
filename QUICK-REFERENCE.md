# 🚀 Quick Reference Guide

## 📁 Website Structure

```
ISKCON Satara Website
│
├── index.html              (Homepage with landing screen)
├── festivals.html          (All festivals with details)
├── events.html            (Upcoming events calendar)
├── activities.html        (Prerana, Chetana, other activities)
├── articles.html          (Articles listing with filters)
├── article-atma.html      (Sample article page)
│
├── styles.css             (All styles + responsive)
├── script.js              (All JavaScript functionality)
├── articles-filter.js     (Article category filtering)
│
└── images/                (Place all images here)
```

---

## 🎨 How to Update Content

### 1. Update Temple Information
**File:** `index.html`
**Section:** Contact Section (line ~400)

```html
<p><i class="fas fa-map-marker-alt"></i> इस्कॉन सातारा<br>
[Your actual temple address]<br>
सातारा, महाराष्ट्र, भारत</p>

<p><i class="fas fa-phone"></i> +९१-XXXX-XXXXXX</p>
<p><i class="fas fa-envelope"></i> info@iskconsatara.org</p>
```

---

### 2. Add Real YouTube Videos
**File:** `index.html`
**Section:** Videos Section (line ~270)

**Steps:**
1. Go to YouTube video
2. Click "Share" → "Embed"
3. Copy the video ID (e.g., `dQw4w9WgXcQ`)
4. Replace in code:

```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        frameborder="0" 
        allowfullscreen 
        loading="lazy">
</iframe>
```

---

### 3. Add Real Google Maps
**File:** `index.html`
**Section:** Contact Section (line ~417)

**Steps:**
1. Go to Google Maps
2. Search for your temple
3. Click "Share" → "Embed a map"
4. Copy the entire iframe code
5. Replace in index.html (keep `loading="lazy"`)

```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" 
        width="100%" 
        height="400" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

---

### 4. Add Real Images
**Folder:** `images/`

**Required Images:**
```
images/
├── landing-bg.jpg         (1920x1080) - Landing page background
├── hero-bg.jpg           (1920x600)  - Hero section background
├── temple.jpg            (800x600)   - Temple photo
├── janmashtami.jpg       (600x400)   - Festival photos
├── gaura-purnima.jpg     (600x400)
├── rathyatra.jpg         (600x400)
├── radhashtami.jpg       (600x400)
├── diwali.jpg            (600x400)
├── govardhan-puja.jpg    (600x400)
├── article1.jpg          (600x400)   - Article images
├── article2.jpg          (600x400)
└── article3.jpg          (600x400)
```

**How to add:**
1. Place images in `images/` folder
2. Images will automatically load (fallback URLs already in place)

---

### 5. Update Darshan Schedule
**File:** `index.html`
**Section:** Darshan Schedule (line ~100)

```html
<div class="schedule-card">
    <div class="time">सकाळी ४:३० - ५:३०</div>
    <h3>मंगळा आरती</h3>
</div>
```

Change times and names as needed.

---

### 6. Add New Festival
**File:** `festivals.html`
**Section:** Festivals Grid (line ~50)

**Copy this template:**
```html
<div class="festival-detail-card">
    <div class="festival-image">
        <img src="images/your-festival.jpg" alt="Festival Name">
        <div class="festival-badge">Month Year</div>
    </div>
    <div class="festival-content">
        <h2>Festival Name</h2>
        <div class="festival-meta">
            <span><i class="far fa-calendar"></i> Date</span>
            <span><i class="far fa-clock"></i> Time</span>
        </div>
        <p>Description...</p>
        <div class="festival-highlights">
            <h3>मुख्य आकर्षणे:</h3>
            <ul>
                <li><i class="fas fa-star"></i> Highlight 1</li>
                <li><i class="fas fa-star"></i> Highlight 2</li>
            </ul>
        </div>
        <a href="index.html#contact" class="btn btn-primary">संपर्क करा</a>
    </div>
</div>
```

---

### 7. Add New Event
**File:** `events.html`
**Section:** Events Category (line ~50)

**Copy this template:**
```html
<div class="event-detail-card">
    <div class="event-header">
        <div class="event-date-large">
            <span class="day">Day</span>
            <span class="time">Time</span>
        </div>
        <div class="event-title">
            <h3>Event Name</h3>
            <p class="event-type"><i class="fas fa-tag"></i> Type</p>
        </div>
    </div>
    <div class="event-body">
        <p>Description...</p>
        <div class="event-schedule">
            <h4>कार्यक्रम वेळापत्रक:</h4>
            <ul>
                <li><i class="far fa-clock"></i> Time - Activity</li>
            </ul>
        </div>
        <div class="event-info">
            <span><i class="fas fa-users"></i> Audience</span>
            <span><i class="fas fa-ticket-alt"></i> Entry</span>
        </div>
    </div>
</div>
```

---

### 8. Add New Article
**File:** `articles.html`
**Section:** Articles Grid (line ~60)

**Copy this template:**
```html
<article class="article-card-page" data-category="philosophy">
    <div class="article-image">
        <img src="images/article-name.jpg" alt="Article Title">
        <span class="article-category">Category</span>
    </div>
    <div class="article-content-page">
        <h3>Article Title</h3>
        <div class="article-meta">
            <span><i class="far fa-calendar"></i> Date</span>
            <span><i class="far fa-clock"></i> X minutes read</span>
        </div>
        <p>Brief description...</p>
        <a href="article-slug.html" class="read-more-btn">
            संपूर्ण वाचा <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</article>
```

**Categories available:**
- `philosophy` - तत्त्वज्ञान
- `lifestyle` - जीवनशैली
- `practice` - साधना
- `stories` - कथा
- `bhagavad-gita` - भगवद्गीता

---

## 🎨 Color Scheme

```css
Primary Orange: #ff6b35
Secondary Orange: #f7931e
Dark Blue: #2c3e50
Light Gray: #f8f9fa
White: #ffffff
```

---

## 📱 Responsive Breakpoints

```css
Desktop: 1920px+
Tablet: 768px - 1919px
Mobile: 375px - 767px
Small Mobile: 320px - 374px
```

---

## 🔧 Common Tasks

### Change Font Size
**File:** `styles.css`
Search for the element and change `font-size`

### Change Colors
**File:** `styles.css`
Search for color codes and replace

### Add New Page
1. Copy any existing page (e.g., `festivals.html`)
2. Rename it
3. Update content
4. Add link in navigation menu

### Update Navigation Menu
**File:** All HTML files
**Section:** Header Navigation

```html
<ul class="nav-menu" id="navMenu">
    <li><a href="index.html">मुख्यपृष्ठ</a></li>
    <li><a href="your-page.html">Your Page</a></li>
</ul>
```

---

## 🐛 Troubleshooting

### Scrolling Not Working?
- Check if page has `id="landing"` element
- Only index.html should have landing screen

### Images Not Loading?
- Check image path: `images/filename.jpg`
- Check image exists in `images/` folder
- Fallback URLs will show if image missing

### Mobile Menu Not Working?
- Check `script.js` is loaded
- Check hamburger icon exists
- Clear browser cache

### Loader Keeps Spinning?
- Check all iframes have `loading="lazy"`
- Check YouTube video IDs are valid
- Check Google Maps URL is correct

---

## 📞 Support

For any issues or questions:
- Check `FIXES-APPLIED.md` for detailed fixes
- Check `FINAL-STATUS.md` for complete status
- All features are documented in code comments

---

**हरे कृष्ण! 🙏**

Happy website building!
