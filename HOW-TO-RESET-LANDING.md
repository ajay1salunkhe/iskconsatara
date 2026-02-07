# 🔄 How to Reset Landing Screen

## If You Want to See the Landing Screen Again

The website now remembers when you've entered the temple and skips the landing screen on future visits. If you want to see the landing screen again, here's how:

---

## Method 1: Clear localStorage (Recommended)

### Using Browser Console:

1. **Open Developer Tools:**
   - Press `F12` or `Ctrl+Shift+I` (Windows/Linux)
   - Press `Cmd+Option+I` (Mac)

2. **Go to Console Tab:**
   - Click on "Console" tab at the top

3. **Run this command:**
   ```javascript
   localStorage.clear()
   ```

4. **Reload the page:**
   - Press `F5` or `Ctrl+R`
   - You should see the landing screen again!

---

## Method 2: Clear Browser Cache

### Chrome:
1. Press `Ctrl+Shift+Delete` (Windows/Linux) or `Cmd+Shift+Delete` (Mac)
2. Select "Cookies and other site data"
3. Click "Clear data"
4. Reload the page

### Firefox:
1. Press `Ctrl+Shift+Delete` (Windows/Linux) or `Cmd+Shift+Delete` (Mac)
2. Select "Cookies" and "Site Data"
3. Click "Clear Now"
4. Reload the page

### Safari:
1. Go to Safari → Preferences → Privacy
2. Click "Manage Website Data"
3. Remove data for your site
4. Reload the page

---

## Method 3: Use Incognito/Private Mode

### Quick Test:
1. Open browser in Incognito/Private mode:
   - Chrome: `Ctrl+Shift+N`
   - Firefox: `Ctrl+Shift+P`
   - Safari: `Cmd+Shift+N`

2. Open `index.html`
3. You'll see the landing screen (no localStorage in private mode)

---

## Method 4: Add a Reset Button (For Developers)

If you want to add a button to reset the landing screen, add this to your website:

### HTML (add to footer):
```html
<button onclick="resetLanding()" class="reset-landing-btn">
    🔄 Show Landing Screen Again
</button>
```

### JavaScript (add to script.js):
```javascript
function resetLanding() {
    localStorage.removeItem('templeEntered');
    alert('Landing screen will show on next visit!');
    location.reload();
}
```

### CSS (add to styles.css):
```css
.reset-landing-btn {
    background: #ff6b35;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    margin: 10px;
}

.reset-landing-btn:hover {
    background: #f7931e;
}
```

---

## Understanding localStorage

### What is localStorage?
- Browser storage that persists data
- Survives page reloads and browser restarts
- Cleared only when user clears browser data
- Each website has its own storage

### What we store:
```javascript
Key: 'templeEntered'
Value: 'true'
```

### When it's set:
- When user clicks "मंदिरात प्रवेश करा" button
- Stored in browser immediately
- Checked on every page load

---

## For Testing/Development

### Quick Commands:

**Check if landing was entered:**
```javascript
localStorage.getItem('templeEntered')
// Returns: 'true' or null
```

**Reset landing screen:**
```javascript
localStorage.removeItem('templeEntered')
// Landing will show on next reload
```

**Clear all localStorage:**
```javascript
localStorage.clear()
// Clears everything
```

**See all stored data:**
```javascript
console.log(localStorage)
// Shows all key-value pairs
```

---

## Troubleshooting

### Landing screen not showing even after clearing?
1. Make sure you cleared localStorage (not just cache)
2. Try hard reload: `Ctrl+Shift+R` or `Cmd+Shift+R`
3. Check console for errors: `F12` → Console tab
4. Try incognito mode to test

### Landing screen showing every time?
1. Check if localStorage is enabled in browser
2. Check if you're in private/incognito mode
3. Check browser console for errors
4. Make sure JavaScript is enabled

---

## Browser Compatibility

✅ Chrome/Edge: Full support
✅ Firefox: Full support  
✅ Safari: Full support
✅ Opera: Full support
✅ Mobile browsers: Full support

localStorage is supported in all modern browsers!

---

## Privacy Note

- localStorage data stays on user's device only
- Not sent to any server
- User can clear it anytime
- No personal information stored
- Only stores: `templeEntered: 'true'`

---

**हरे कृष्ण! 🙏**
