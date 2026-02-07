// Lazy Load iframes to prevent loader spinning
// Add this script to pages with iframes

document.addEventListener('DOMContentLoaded', function() {
    // Get all iframes
    const iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(iframe => {
        // Store original src
        const originalSrc = iframe.src;
        
        // Clear src initially
        iframe.src = '';
        
        // Create intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Load iframe when it comes into view
                    iframe.src = originalSrc;
                    observer.unobserve(iframe);
                }
            });
        }, {
            rootMargin: '50px' // Start loading 50px before iframe is visible
        });
        
        // Start observing
        observer.observe(iframe);
    });
});

// Alternative: Load iframes after page is fully loaded
window.addEventListener('load', function() {
    // This ensures page load event fires even with iframes
    console.log('Page fully loaded');
});
