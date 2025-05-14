# 6126 Hillview Ave - Property Website

A beautiful static website for showcasing the property at 6126 Hillview Ave, Alexandria, VA 22310, with lead capture and tour scheduling functionality.

## Overview

This website was created for Kellie Ortiz, Samson Properties, to help market the property and capture potential buyer information.

## Features

- Responsive design that looks great on all devices
- Property details and features showcase
- Image gallery with thumbnail navigation
- Lead capture form
- Tour scheduling functionality
- Clean, modern design

## Deployment to GitHub Pages

To deploy this website to GitHub Pages:

1. Create a new GitHub repository
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it something like "6126-hillview-property"
   - Make it public
   - Click "Create repository"

2. Initialize Git in your local project folder:
   ```bash
   cd /Users/mattortiz/PycharmProjects/realestate
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. Link your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/6126-hillview-property.git
   git branch -M main
   git push -u origin main
   ```

4. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll down to "GitHub Pages"
   - Under "Source", select "main" branch and the root folder
   - Click "Save"
   - Your site will be published at `https://yourusername.github.io/6126-hillview-property/`

## Form Submission Options

The forms currently simulate submissions in the browser. For actual lead capture, you can:

1. Use a form submission service like Formspree:
   - Sign up at [Formspree](https://formspree.io/)
   - Get your form endpoint
   - Update the form action in the HTML, for example:
     ```html
     <form action="https://formspree.io/f/yourformkey" method="POST">
     ```

2. Use GitHub form actions with a serverless function (more advanced):
   - Deploy to Netlify or Vercel
   - Set up serverless functions to handle form submissions
   - Update the JavaScript to send data to your functions

## Customization

- Images: Replace the Zillow image links with your own hosted images
- Contact information: Update all contact details in the HTML
- Social media: Add your social media links in the footer
- Colors: Modify the color scheme in `css/styles.css`

## License

This project is licensed for exclusive use by Kellie Ortiz, Samson Properties.
