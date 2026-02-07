/**
 * ISKCON SATARA WEBSITE CONFIGURATION
 * 
 * Copy this file and rename to config.js
 * Update the values below to customize your website
 */

const siteConfig = {
    // Temple Information
    temple: {
        name: "ISKCON Satara",
        fullName: "International Society for Krishna Consciousness - Satara",
        tagline: "Hare Krishna Movement",
        address: {
            street: "[Your Temple Address]",
            city: "Satara",
            state: "Maharashtra",
            country: "India",
            pincode: "XXXXXX"
        }
    },

    // Contact Information
    contact: {
        phone: "+91-XXXX-XXXXXX",
        email: "info@iskconsatara.org",
        whatsapp: "+91-XXXXXXXXXX"
    },

    // Social Media Links
    social: {
        facebook: "https://facebook.com/iskconsatara",
        youtube: "https://youtube.com/@iskconsatara",
        instagram: "https://instagram.com/iskconsatara",
        twitter: "https://twitter.com/iskconsatara"
    },

    // Temple Timings
    schedule: [
        {
            time: "04:30 AM - 05:30 AM",
            title: "Mangala Aarti",
            description: "Morning worship of the deities"
        },
        {
            time: "07:30 AM - 08:00 AM",
            title: "Sringara Aarti & Guru Puja",
            description: "Deity dressing ceremony"
        },
        {
            time: "08:00 AM - 09:00 AM",
            title: "Bhagavatam Class",
            description: "Scripture discourse"
        },
        {
            time: "12:30 PM - 01:10 PM",
            title: "Raj-bhog Offering",
            description: "Afternoon offering to deities"
        },
        {
            time: "07:00 PM - 08:00 PM",
            title: "Gaura Sandhya Arati",
            description: "Evening worship ceremony"
        },
        {
            time: "08:30 PM - 08:45 PM",
            title: "Last Darshan",
            description: "Final viewing of the day"
        }
    ],

    // Upcoming Festivals
    festivals: [
        {
            name: "Sri Krishna Janmashtami",
            date: "August 2026",
            description: "Celebrate the appearance day of Lord Krishna with grand festivities",
            image: "images/janmashtami.jpg"
        },
        {
            name: "Gaura Purnima",
            date: "March 2026",
            description: "Appearance day of Lord Chaitanya Mahaprabhu",
            image: "images/gaura-purnima.jpg"
        },
        {
            name: "Rath Yatra",
            date: "July 2026",
            description: "Grand chariot festival of Lord Jagannath",
            image: "images/rathyatra.jpg"
        }
    ],

    // Upcoming Events
    events: [
        {
            day: "15",
            month: "MAR",
            title: "Bhagavad Gita Discourse",
            time: "6:00 PM - 8:00 PM",
            description: "Weekly discourse on the teachings of Bhagavad Gita"
        },
        {
            day: "22",
            month: "MAR",
            title: "Kirtan Evening",
            time: "7:00 PM - 9:00 PM",
            description: "Join us for an evening of devotional singing and chanting"
        },
        {
            day: "29",
            month: "MAR",
            title: "Sunday Feast",
            time: "5:00 PM - 8:00 PM",
            description: "Spiritual program followed by sumptuous prasadam"
        }
    ],

    // Activities
    activities: [
        {
            icon: "fas fa-book-open",
            title: "Bhakti Courses",
            description: "Learn the science of devotion through structured courses on Bhagavad Gita and Vedic scriptures"
        },
        {
            icon: "fas fa-utensils",
            title: "Food For Life",
            description: "Daily distribution of sanctified vegetarian meals to those in need"
        },
        {
            icon: "fas fa-child",
            title: "Youth Programs",
            description: "Engaging activities and spiritual education for children and youth"
        },
        {
            icon: "fas fa-music",
            title: "Kirtan & Bhajan",
            description: "Regular devotional singing sessions and musical programs"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Vedic Studies",
            description: "In-depth study of ancient Vedic wisdom and philosophy"
        },
        {
            icon: "fas fa-hands-helping",
            title: "Community Service",
            description: "Various charitable initiatives serving the local community"
        }
    ],

    // Donation Categories
    donations: [
        {
            icon: "fas fa-seedling",
            title: "Sponsor Flowers",
            description: "Offer fresh flowers for daily deity worship",
            amount: null // null for custom amount
        },
        {
            icon: "fas fa-bread-slice",
            title: "Anna Daan",
            description: "Sponsor meals for devotees and visitors",
            amount: null
        },
        {
            icon: "fas fa-tshirt",
            title: "Vastra Daan",
            description: "Donate clothes for deity dressing",
            amount: null
        },
        {
            icon: "fas fa-om",
            title: "Deity Seva",
            description: "Sponsor daily worship services",
            amount: null
        },
        {
            icon: "fas fa-building",
            title: "Temple Construction",
            description: "Contribute to temple development",
            amount: null
        },
        {
            icon: "fas fa-heart",
            title: "General Donation",
            description: "Support overall temple activities",
            amount: null
        }
    ],

    // Gift Shop Items
    giftShop: [
        {
            name: "Bhagavad Gita As It Is",
            price: 350,
            image: "images/bhagavad-gita.jpg"
        },
        {
            name: "Tulsi Japa Mala",
            price: 150,
            image: "images/japa-mala.jpg"
        },
        {
            name: "Radha Krishna Deity",
            price: 1200,
            image: "images/deity.jpg"
        },
        {
            name: "Incense Sticks",
            price: 80,
            image: "images/incense.jpg"
        }
    ],

    // YouTube Videos
    videos: [
        {
            title: "Bhagavad Gita Discourse",
            videoId: "YOUR_VIDEO_ID_1"
        },
        {
            title: "Kirtan Session",
            videoId: "YOUR_VIDEO_ID_2"
        },
        {
            title: "Festival Celebration",
            videoId: "YOUR_VIDEO_ID_3"
        }
    ],

    // Live Streaming
    liveStream: {
        enabled: true,
        youtubeChannelUrl: "https://youtube.com/@iskconsatara",
        schedule: "Every Sunday at 5:00 PM"
    },

    // Google Maps
    maps: {
        embedUrl: "https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE",
        latitude: 17.6789012,
        longitude: 73.9876543
    },

    // Website Settings
    settings: {
        enableAnimations: true,
        enableDailyQuotes: true,
        enableNewsletter: false,
        enableOnlineBooking: false,
        enableEcommerce: false
    }
};

// Export configuration (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
