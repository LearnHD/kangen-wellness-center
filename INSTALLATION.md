# Installation and Dependencies Guide for Kangen Wellness Center Website

This document provides information about all dependencies and installation requirements needed to properly set up and run the Kangen Wellness Center website.

## Basic Requirements

The website is built with standard web technologies and has minimal dependencies:

- HTML5
- CSS3
- JavaScript (ES6+)

No server-side programming language is required for the basic functionality of the website.

## Local Development Environment Setup

### Option 1: Simple Browser Viewing

For basic viewing and editing:

1. A modern web browser (Chrome, Firefox, Safari, or Edge)
2. Any text editor or IDE (Visual Studio Code, Sublime Text, Atom, etc.)

### Option 2: Local Server Setup (Recommended)

For testing the chatbot and full functionality:

1. **Python** (for running a local server)
   - Python 3.x is recommended
   - Installation:
     - Windows: Download from [python.org](https://www.python.org/downloads/)
     - macOS: `brew install python` (using Homebrew) or download from python.org
     - Linux: `sudo apt install python3` (Ubuntu/Debian) or `sudo yum install python3` (CentOS/RHEL)

2. To start the local server:
   ```
   cd /path/to/kangen_website
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser

### Option 3: Node.js Development Environment

If you prefer using Node.js:

1. **Node.js and npm**
   - Installation:
     - Windows/macOS: Download from [nodejs.org](https://nodejs.org/)
     - Linux: `sudo apt install nodejs npm` (Ubuntu/Debian) or `sudo yum install nodejs npm` (CentOS/RHEL)

2. Install a simple HTTP server:
   ```
   npm install -g http-server
   ```

3. Start the server:
   ```
   cd /path/to/kangen_website
   http-server
   ```

## External Dependencies

The website uses the following external resources that are loaded via CDN (no installation required):

1. **Google Fonts**
   - Roboto font family
   - Automatically loaded via HTML link tag

2. **Font Awesome Icons**
   - Version 6.0.0-beta3
   - Automatically loaded via HTML link tag

## Adding Form Functionality

The contact form currently uses client-side JavaScript for demonstration. To make it fully functional, you have several options:

### Option 1: Email Form Service

1. **Formspree**
   - Free tier available
   - Update the form action to your Formspree endpoint:
     ```html
     <form action="https://formspree.io/f/your-form-id" method="POST">
     ```

### Option 2: Custom Backend

If you want to handle form submissions yourself:

1. **PHP**
   - Requires a PHP-enabled web server
   - Create a `process-form.php` file to handle submissions
   - Update form action to point to your PHP file

2. **Node.js**
   - Requires Node.js server
   - Install Express.js: `npm install express body-parser nodemailer`
   - Create a server.js file to handle form submissions

## Image Requirements

The website requires several images that need to be added to the `images/` directory:

1. **Logo Images**
   - `logo.png` - Main colored logo
   - `logo-white.png` - White version for footer

2. **Banner Images**
   - Recommended size: 1920x500px

3. **Product Images**
   - Images for each Kangen water machine
   - eMguard product images
   - Ukon product images

4. **Team Member Photos**
   - Recommended size: 400x400px

5. **Article and Resource Thumbnails**
   - Recommended size: 800x500px

## Browser Compatibility

The website is built with modern web standards and should work in:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

For older browser support, consider adding:
```
npm install --save-dev @babel/core @babel/preset-env babel-loader
```

## Deployment Requirements

For deploying to a live server:

1. **Web Hosting Service**
   - Any standard web hosting service that supports HTML/CSS/JavaScript
   - No special server requirements needed

2. **Domain Name** (optional)
   - Register a domain name for the website
   - Configure DNS settings to point to your hosting service

3. **SSL Certificate** (recommended)
   - For secure HTTPS connections
   - Many hosting providers offer free Let's Encrypt certificates

## Customization Tools

For advanced customization, these tools are recommended but not required:

1. **Sass Preprocessor**
   - For more organized CSS
   - Installation: `npm install -g sass`
   - Usage: `sass --watch css/source:css`

2. **Webpack or Parcel**
   - For bundling JavaScript
   - Installation: `npm install -g webpack` or `npm install -g parcel-bundler`

3. **Git**
   - For version control
   - Installation: Download from [git-scm.com](https://git-scm.com/downloads)

## Troubleshooting Common Issues

1. **Images not displaying**
   - Ensure image paths are correct
   - Check file permissions
   - Verify image files exist in the correct directory

2. **JavaScript not working**
   - Check browser console for errors
   - Ensure jQuery is loaded before custom scripts
   - Verify file paths are correct

3. **Local server not starting**
   - Check if the port is already in use
   - Try a different port: `python -m http.server 8080`
   - Ensure Python is installed correctly
