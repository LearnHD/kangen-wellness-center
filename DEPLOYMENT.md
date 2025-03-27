# Deployment Guide for Kangen Wellness Center Website

This guide provides detailed instructions for deploying the Kangen Wellness Center website using GitHub Pages, Vercel, Render, and Supabase.

## GitHub Pages Deployment

GitHub Pages is a free hosting service that allows you to publish your website directly from a GitHub repository.

### Setup Steps:

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/kangen-wellness-center.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "GitHub Pages" section
   - Select "main" branch as the source
   - Click "Save"

3. **Configure Custom Domain (Optional)**
   - In the GitHub Pages section, enter your custom domain
   - Create a CNAME record with your DNS provider pointing to `yourusername.github.io`
   - Add a file named `CNAME` to your repository with your domain name

4. **Access Your Website**
   - Your website will be available at `https://yourusername.github.io/kangen-wellness-center/` or your custom domain

### Updating Your Website:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

## Vercel Deployment

Vercel is a cloud platform for static sites and serverless functions that enables developers to host websites with zero configuration.

### Setup Steps:

1. **Create a Vercel Account**
   - Sign up at [vercel.com](https://vercel.com)

2. **Install Vercel CLI (Optional)**
   ```bash
   npm install -g vercel
   ```

3. **Deploy via GitHub Integration**
   - Connect your GitHub account to Vercel
   - Select your repository
   - Configure project settings:
     - Build Command: Leave empty (for static sites)
     - Output Directory: Leave empty (for static sites)
     - Install Command: Leave empty (for static sites)
   - Click "Deploy"

4. **Deploy via CLI (Alternative)**
   ```bash
   vercel login
   cd /path/to/kangen_website
   vercel
   ```

5. **Configure Custom Domain**
   - Go to your project settings in Vercel dashboard
   - Click on "Domains"
   - Add your custom domain
   - Follow the instructions to configure DNS settings

### Benefits of Vercel:
- Automatic HTTPS
- Global CDN
- Preview deployments for pull requests
- Serverless functions capability if you want to add backend features later

## Render Deployment

Render is a unified cloud for building and running apps and websites with free SSL.

### Setup Steps:

1. **Create a Render Account**
   - Sign up at [render.com](https://render.com)

2. **Create a New Static Site**
   - Click "New" and select "Static Site"
   - Connect your GitHub repository
   - Configure settings:
     - Name: `kangen-wellness-center`
     - Branch: `main`
     - Build Command: Leave empty (for static sites)
     - Publish Directory: `.` (root directory)
   - Click "Create Static Site"

3. **Configure Custom Domain**
   - Go to your static site's settings
   - Click on "Custom Domain"
   - Add your domain and follow the instructions to configure DNS settings

### Benefits of Render:
- Free SSL certificates
- Global CDN
- Automatic deployments on git push
- Easy custom domain setup

## Supabase Integration (for Enhanced Functionality)

While Supabase is primarily a backend service (Firebase alternative), you can use it to add dynamic functionality to your static site.

### Setup Steps:

1. **Create a Supabase Account**
   - Sign up at [supabase.com](https://supabase.com)

2. **Create a New Project**
   - Name your project
   - Set a secure database password
   - Choose a region close to your target audience

3. **Set Up Database Tables**
   - Create tables for storing form submissions, newsletter subscriptions, etc.
   - Example table for contact form:
     ```sql
     CREATE TABLE contact_submissions (
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       email TEXT NOT NULL,
       phone TEXT,
       subject TEXT NOT NULL,
       message TEXT NOT NULL,
       interest TEXT,
       newsletter BOOLEAN DEFAULT FALSE,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
     );
     ```

4. **Add Supabase JavaScript Client to Your Website**
   - Add the Supabase client library to your project:
     ```html
     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
     ```

5. **Initialize Supabase in Your JavaScript**
   - Add to your main.js or create a new file:
     ```javascript
     const supabaseUrl = 'https://your-project-url.supabase.co';
     const supabaseKey = 'your-anon-key';
     const supabase = supabase.createClient(supabaseUrl, supabaseKey);
     ```

6. **Implement Form Submission to Supabase**
   - Modify your contact form submission handler:
     ```javascript
     document.getElementById('contactForm').addEventListener('submit', async function(e) {
       e.preventDefault();
       
       const formData = {
         name: document.getElementById('name').value,
         email: document.getElementById('email').value,
         phone: document.getElementById('phone').value,
         subject: document.getElementById('subject').value,
         message: document.getElementById('message').value,
         interest: document.getElementById('interest').value,
         newsletter: document.getElementById('newsletter').checked
       };
       
       try {
         const { data, error } = await supabase
           .from('contact_submissions')
           .insert([formData]);
           
         if (error) throw error;
         
         alert('Thank you for your message! We will get back to you soon.');
         this.reset();
       } catch (error) {
         console.error('Error submitting form:', error);
         alert('There was an error submitting your message. Please try again later.');
       }
     });
     ```

### Additional Supabase Features You Can Implement:

1. **User Authentication**
   - Allow users to create accounts and log in
   - Restrict certain content to registered users

2. **Real-time Updates**
   - Implement real-time chat functionality
   - Show live updates for events or promotions

3. **Storage**
   - Allow users to upload files (e.g., for testimonials)
   - Store and serve images

## Combining Services for Optimal Setup

For the best setup, you can combine these services:

1. **GitHub** for version control and source code management
2. **Vercel or Render** for hosting the static website
3. **Supabase** for backend functionality (form handling, user authentication, etc.)

### Example Workflow:

1. Develop locally and push changes to GitHub
2. GitHub automatically triggers deployment to Vercel/Render
3. The static site communicates with Supabase for dynamic functionality

## Environment Variables and Security

When using services like Supabase, protect your API keys:

1. **For Vercel:**
   - Add environment variables in the Vercel dashboard
   - Access them in your code via `process.env.VARIABLE_NAME`

2. **For Render:**
   - Add environment variables in the Render dashboard
   - Access them in your code via `process.env.VARIABLE_NAME`

3. **For Local Development:**
   - Create a `.env` file (add to `.gitignore`)
   - Use a tool like `dotenv` to load variables

## Continuous Integration/Continuous Deployment (CI/CD)

All the mentioned platforms support CI/CD workflows:

1. **GitHub Actions** (for GitHub Pages)
   - Create a `.github/workflows/deploy.yml` file
   - Configure it to build and deploy on push

2. **Vercel and Render**
   - Automatically deploy when changes are pushed to the main branch
   - Create preview deployments for pull requests

## Monitoring and Analytics

Consider adding:

1. **Google Analytics**
   - Track visitor behavior
   - Monitor page performance

2. **Uptime Monitoring**
   - Use services like UptimeRobot (free tier available)
   - Get notified if your site goes down

3. **Error Tracking**
   - Implement Sentry or LogRocket for frontend error tracking
