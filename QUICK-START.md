# Quick Start Guide - ISKCON Satara Website

## 🚀 Get Started in 5 Minutes

### Step 1: Open the Website
Simply open `index.html` in your web browser. The website will work immediately with placeholder images.

### Step 2: Customize Essential Information

#### Update Contact Details
Open `index.html` and find these sections to update:

**Header Contact (Line ~12-14)**
```html
<span><i class="fas fa-phone"></i> +91-XXXX-XXXXXX</span>
<span><i class="fas fa-envelope"></i> info@iskconsatara.org</span>
```

**Contact Section (Line ~600+)**
```html
<p><i class="fas fa-map-marker-alt"></i> ISKCON Satara<br>
[Your Temple Address]<br>
Satara, Maharashtra, India</p>
```

#### Update Google Maps
Find the map iframe (around line 650) and replace with your location:
1. Go to Google Maps
2. Search for your temple location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in index.html

### Step 3: Add Your Images

Create these essential images first:
1. **hero-bg.jpg** - Main banner image (temple exterior)
2. **temple.jpg** - For About Us section
3. **gallery1.jpg to gallery8.jpg** - Temple photos

Place them in the `images` folder.

### Step 4: Update Temple Schedule

Find the Darshan Schedule section and update timings according to your temple:

```html
<div class="schedule-card">
    <div class="time">04:30 AM - 05:30 AM</div>
    <h3>Mangala Aarti</h3>
    <p>Morning worship of the deities</p>
</div>
```

### Step 5: Add Your YouTube Channel

Replace placeholder YouTube URLs:
1. Find the videos section
2. Replace `dQw4w9WgXcQ` with your actual video IDs
3. Update the live streaming link

## 📱 Test on Mobile

Open the website on your phone to see the responsive design in action!

## 🎨 Customize Colors

Edit `styles.css` (lines 8-13):
```css
:root {
    --primary-color: #ff6b35;      /* Main orange color */
    --secondary-color: #f7931e;    /* Secondary orange */
    --accent-color: #c1272d;       /* Red accent */
    --dark-color: #2c3e50;         /* Dark blue-gray */
}
```

## ✅ Checklist

- [ ] Update phone numbers and email
- [ ] Update temple address
- [ ] Add Google Maps location
- [ ] Upload temple images
- [ ] Update darshan schedule
- [ ] Add YouTube video links
- [ ] Update festival dates
- [ ] Add upcoming events
- [ ] Test on mobile devices
- [ ] Test all links and buttons

## 🆘 Need Help?

Common issues:
- **Images not showing?** Check file names match exactly (case-sensitive)
- **Layout broken on mobile?** Clear browser cache and refresh
- **Map not showing?** Ensure you have a valid Google Maps embed URL

## 🌐 Deploy Online

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in settings

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag and drop your folder
3. Get instant live URL

### Option 3: Traditional Hosting
Upload files via FTP to your web hosting provider.

## 📞 Support

For technical support or customization:
- Review the full README.md
- Check image-placeholders.txt for image requirements

---

**Hare Krishna! 🙏**

Your website is ready to spread Krishna Consciousness online!
