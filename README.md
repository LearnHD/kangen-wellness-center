# Kangen Wellness Center Website - Developer Guide

## Project Overview
This is a comprehensive website for Kangen Wellness Center in Barrie, located at 15 Cedar Pointe Drive. The website provides information about Kangen water, Enagic products, and wellness services while complying with Enagic's rules regarding online sales.

## Project Structure

```
kangen_website/
├── assets/                  # Additional assets directory
├── css/
│   └── styles.css           # Main stylesheet
├── images/                  # Image directory (needs to be populated)
├── js/
│   └── main.js              # JavaScript file with chatbot functionality
├── research/                # Research documents used to create content
├── *.html                   # HTML pages
├── sitemap.md               # Website structure documentation
├── todo.md                  # Development task list
└── README.md                # This file
```

## HTML Pages

- `index.html` - Homepage with introduction to Kangen Wellness Center
- `about.html` - Information about the center, team, and location
- `kangen-water.html` - Detailed information about Kangen water and its benefits
- `products.html` - Information about Kangen water machines, eMguard, and Ukon products
- `services.html` - Details about demos, deep cleaning, and other services
- `resources.html` - Educational articles, maintenance guides, and downloadable resources
- `contact.html` - Contact information and form

## How to Edit the Website

### Setting Up a Local Development Environment

1. Extract the zip file to your preferred location
2. To view the website locally, you can:
   - Open any HTML file directly in your browser
   - Use a local server (recommended for testing the chatbot):
     ```
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000` in your browser

### Making Common Modifications

#### Changing Text Content

1. Open the relevant HTML file in your editor
2. Locate the text you want to change
3. Edit the text between the HTML tags
4. Save the file and refresh your browser to see changes

#### Adding New Images

1. Add your image files to the `images/` directory
2. Reference them in HTML using:
   ```html
   <img src="images/your-image.jpg" alt="Description of image">
   ```

#### Modifying Styles

1. Open `css/styles.css` in your editor
2. Find the relevant CSS selector or add a new one
3. Modify or add CSS properties
4. Save the file and refresh your browser to see changes

#### Adding a New Page

1. Copy an existing HTML file as a template
2. Rename it to your new page name (e.g., `new-page.html`)
3. Update the content while keeping the header, footer, and navigation structure
4. Add a link to your new page in the navigation menu of all HTML files:
   ```html
   <li><a href="new-page.html">New Page</a></li>
   ```

### Modifying the Chatbot

The chatbot functionality is in `js/main.js`. To add or modify chatbot responses:

1. Open `js/main.js` in your editor
2. Locate the `knowledgeBase` object (around line 50)
3. Add new key-value pairs or modify existing ones:
   ```javascript
   "your keyword": "Your response text here",
   ```
4. Save the file and refresh your browser to test the changes

### Important Notes

1. **Enagic Compliance**: Remember that Enagic prohibits online sales of their products. The website should focus on education and driving customers to the physical location.

2. **Images**: The `images/` directory needs to be populated with appropriate images. You should add:
   - Logo images: `logo.png` and `logo-white.png`
   - Product images for each Kangen machine
   - Team member photos
   - Article and resource thumbnails
   - Background images for banners

3. **Form Functionality**: The contact form currently uses a simple JavaScript alert for demonstration. To make it functional, you'll need to implement server-side processing or connect it to a form service.

## Testing Your Changes

After making changes, always test your website by:

1. Viewing it in different browsers (Chrome, Firefox, Safari, Edge)
2. Testing on different screen sizes (desktop, tablet, mobile)
3. Checking all links to ensure they work correctly
4. Testing the chatbot with various queries
5. Verifying that forms submit correctly

## Deployment

To deploy the website to a live server:

1. Upload all files and directories to your web hosting service
2. Ensure the directory structure remains intact
3. Set the correct permissions for files and directories
4. Test the live website to ensure everything works as expected

## Additional Resources

The `research/` directory contains detailed information about:
- Kangen water benefits
- Kangen water machines
- eMguard products
- Ukon products
- Maintenance and cleaning procedures
- Enagic compliance rules

These files can be referenced when adding or updating content on the website.
