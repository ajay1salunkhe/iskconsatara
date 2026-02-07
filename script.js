// Enter Site Function
function enterSite() {
    const landing = document.getElementById('landing');
    const mainSite = document.getElementById('mainSite');
    
    landing.style.opacity = '0';
    landing.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        landing.style.display = 'none';
        mainSite.classList.remove('hidden');
        document.body.style.overflow = 'auto';
        
        // Remember that user has entered the temple
        localStorage.setItem('templeEntered', 'true');
    }, 500);
}

// Check if user has already entered the temple
function checkTempleEntry() {
    const hasEntered = localStorage.getItem('templeEntered');
    const landing = document.getElementById('landing');
    const mainSite = document.getElementById('mainSite');
    
    if (hasEntered === 'true' && landing && mainSite) {
        // Skip landing screen and show main site directly
        landing.style.display = 'none';
        mainSite.classList.remove('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Run check when page loads
window.addEventListener('DOMContentLoaded', checkTempleEntry);

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Daily Quotes Array (Marathi)
const quotes = [
    {
        text: "जो कोणी ईर्ष्या न करता सर्व प्राण्यांचा मित्र आहे, जो स्वतःला मालक समजत नाही आणि खोट्या अहंकारापासून मुक्त आहे, जो सुख आणि दुःख दोन्हीमध्ये समान आहे, जो सहनशील आहे, नेहमी समाधानी आहे, आत्म-नियंत्रित आहे आणि दृढनिश्चयाने भक्तीमध्ये गुंतलेला आहे - असा भक्त मला अत्यंत प्रिय आहे.",
        source: "भगवद्गीता १२.१३-१४"
    },
    {
        text: "जो मला सर्वत्र पाहतो आणि सर्व काही माझ्यामध्ये पाहतो, त्याच्यासाठी मी कधीही हरवत नाही आणि तो माझ्यासाठी कधीही हरवत नाही.",
        source: "भगवद्गीता ६.३०"
    },
    {
        text: "सर्व प्रकारचे धर्म सोडून फक्त माझ्या शरण ये. मी तुला सर्व पापांपासून मुक्त करीन. भीत नको.",
        source: "भगवद्गीता १८.६६"
    },
    {
        text: "विनम्र ज्ञानी, खऱ्या ज्ञानाच्या सद्गुणाने, शिकलेल्या आणि सौम्य ब्राह्मण, गाय, हत्ती, कुत्रा आणि कुत्रा खाणाऱ्याला समान दृष्टीने पाहतात.",
        source: "भगवद्गीता ५.१८"
    },
    {
        text: "जो मित्र आणि शत्रूंना समान आहे, जो सन्मान आणि अपमान, उष्णता आणि थंडी, सुख आणि दुःख, प्रसिद्धी आणि बदनामी यांमध्ये समतोल आहे, जो नेहमी दूषित संगतीपासून मुक्त आहे, नेहमी शांत आहे आणि कशानेही समाधानी आहे - असा व्यक्ती मला अत्यंत प्रिय आहे.",
        source: "भगवद्गीता १२.१८-१९"
    }
];

// Display Random Quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteElement = document.getElementById('quoteText');
    const sourceElement = document.querySelector('.quote-source');
    
    if (quoteElement && sourceElement) {
        quoteElement.textContent = quote.text;
        sourceElement.textContent = `- ${quote.source}`;
    }
}

// Change quote on page load
window.addEventListener('load', displayRandomQuote);

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('तुमच्या संदेशाबद्दल धन्यवाद! आम्ही लवकरच तुमच्याशी संपर्क साधू.\n\nहरे कृष्ण!');
        contactForm.reset();
    });
}

// Donation Button Functionality
document.querySelectorAll('.donation-card .btn').forEach(button => {
    button.addEventListener('click', function() {
        const donationType = this.parentElement.querySelector('h3').textContent;
        alert(`${donationType} साठी दान निवडल्याबद्दल धन्यवाद!\n\nतुमचे योगदान कृष्ण भावनामृताच्या प्रसारात मदत करेल.\n\nहरे कृष्ण!`);
    });
});

// Live Darshan Button
const liveDarshanBtn = document.querySelector('.live-program .btn');
if (liveDarshanBtn) {
    liveDarshanBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('थेट प्रसारण नियोजित वेळी सुरू होईल.\n\nकृपया थेट कार्यक्रमांसाठी आमचे YouTube चॅनेल तपासा.\n\nहरे कृष्ण!');
    });
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.schedule-card, .activity-card, .donation-card, .event-item, .article-card, .gallery-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Prevent body scroll when landing screen is visible (only on index page)
if (document.getElementById('landing')) {
    document.body.style.overflow = 'hidden';
}

// Console Message
console.log('%c🕉️ हरे कृष्ण! 🕉️', 'font-size: 20px; color: #ff6b35; font-weight: bold;');
console.log('%cइस्कॉन सातारा वेबसाइटमध्ये आपले स्वागत आहे', 'font-size: 14px; color: #2c3e50;');
console.log('%cहरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे', 'font-size: 12px; color: #f7931e;');
console.log('%cहरे राम हरे राम राम राम हरे हरे', 'font-size: 12px; color: #f7931e;');
