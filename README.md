# ISKCON Satara Website

A modern, responsive website for ISKCON Satara temple built with HTML, CSS, and JavaScript.

## Features

✅ **Darshan Schedule** - Daily temple timings with beautiful card layout
✅ **Festivals** - Gallery format display of upcoming festivals and celebrations
✅ **Upcoming Events** - List of spiritual programs and gatherings
✅ **Donation Section** - Multiple donation categories for temple support
✅ **About Us** - Information about ISKCON Satara
✅ **Center Information** - Contact details and location map
✅ **Gift Shop** - Online shop for spiritual items and books
✅ **Our Activities** - Various temple programs and services
✅ **YouTube Videos** - Embedded videos and live program streaming
✅ **Our Services** - Puja, counseling, and catering services
✅ **Daily Quotes** - Rotating quotes from Bhagavad Gita
✅ **Articles** - Spiritual teachings and blog posts
✅ **Live Programs** - YouTube live streaming integration
✅ **Responsive Design** - Mobile-friendly layout
✅ **Smooth Animations** - Modern UI/UX with scroll animations

## Structure

```
iskcon-satara/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/             # Image assets folder
    ├── hero-bg.jpg
    ├── temple.jpg
    ├── janmashtami.jpg
    ├── gaura-purnima.jpg
    ├── rathyatra.jpg
    ├── puja.jpg
    ├── counseling.jpg
    ├── prasadam.jpg
    ├── bhagavad-gita.jpg
    ├── japa-mala.jpg
    ├── deity.jpg
    ├── incense.jpg
    ├── article1.jpg
    ├── article2.jpg
    ├── article3.jpg
    └── gallery1-8.jpg
```

## Setup Instructions

1. **Create Images Folder**
   ```bash
   mkdir images
   ```

2. **Add Images**
   - Add your temple photos to the `images` folder
   - Recommended image sizes:
     - Hero background: 1920x1080px
     - Gallery images: 800x600px
     - Festival/Event images: 600x400px
     - Shop items: 400x400px

3. **Update Contact Information**
   - Open `index.html`
   - Replace placeholder phone numbers and email addresses
   - Update temple address in the Contact section
   - Update Google Maps embed URL with actual location

4. **Customize Content**
   - Update temple timings in Darshan Schedule section
   - Add actual festival dates
   - Update event information
   - Modify donation categories as needed
   - Add real YouTube video embed URLs

5. **Launch**
   - Open `index.html` in a web browser
   - Or deploy to a web hosting service

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #f7931e;
    --accent-color: #c1272d;
    --dark-color: #2c3e50;
}
```

### Daily Quotes
Add more quotes in `script.js`:
```javascript
const quotes = [
    {
        text: "Your quote here",
        source: "Bhagavad Gita X.XX"
    }
];
```

### Gallery Images
Update gallery images array in `script.js`:
```javascript
const galleryImages = [
    { src: 'images/your-image.jpg', title: 'Your Title' }
];
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Reference Sites

This website is inspired by:
- ISKCON Pune NVCC (iskconpune.com)
- ISKCON Whitefield (iskconwhitefield.org)
- ISKCON London (iskcon.london)

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Maps Embed

## Features to Add (Future Enhancements)

- Online donation payment gateway integration
- E-commerce functionality for gift shop
- Event registration system
- Newsletter subscription
- Multi-language support
- Blog/CMS integration
- Member login portal
- Photo gallery lightbox
- Video gallery page
- Seva booking system

## Support

For any queries or support:
- Email: info@iskconsatara.org
- Phone: +91-XXXX-XXXXXX

## Credits

Developed for ISKCON Satara
Based on the teachings of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada

---

**Hare Krishna Hare Krishna Krishna Krishna Hare Hare**
**Hare Rama Hare Rama Rama Rama Hare Hare**
