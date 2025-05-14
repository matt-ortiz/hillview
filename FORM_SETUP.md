# Form Setup Instructions for Kellie

## Setting Up Email Forms with Formspree

These instructions will help you set up your property website so that form submissions are emailed directly to you.

### Step 1: Create a Formspree Account

1. Go to [Formspree.io](https://formspree.io/) and sign up for a free account
2. Verify your email address

### Step 2: Create a New Form

1. Log in to your Formspree account
2. Click on "New Form"
3. Name your form (e.g., "6126 Hillview Lead Form")
4. Enter your email address (kellie@kellieortiz.com) where you want to receive submissions
5. Click "Create Form"

### Step 3: Get Your Form ID

1. After creating the form, you'll be taken to the form dashboard
2. Look for the form endpoint URL, which looks like: `https://formspree.io/f/xxxxxxxx`
3. Copy the last part after the "f/" - this is your Form ID (it will be something like `xxxxxxxx`)

### Step 4: Update Your Website Code

1. Open the `index.html` file
2. Find this line (it appears twice, once for each form):
   ```html
   <form id="lead-form" action="https://formspree.io/f/FORM_ID" method="POST">
   ```
3. Replace `FORM_ID` with the ID you copied in Step 3
4. Do the same for the tour form (you may want to create a separate form in Formspree for this one)

### Step 5: Test Your Forms

1. Once your website is deployed to GitHub Pages, visit the site
2. Fill out and submit each form
3. Check your email (kellie@kellieortiz.com) to ensure you're receiving the submissions
4. Also check your spam folder if you don't see them at first

## Additional Form Options

### Spam Prevention

Formspree includes basic spam filtering. For additional protection:

1. In your Formspree dashboard, go to your form settings
2. Enable reCAPTCHA
3. Follow the instructions to add the reCAPTCHA code to your website

### Form Styling and Behavior

The forms are already styled to match your website. If you want to make changes:

- For visual changes: Edit the CSS in the `css/styles.css` file
- For behavior changes: Edit the JavaScript in the `js/main.js` file

### Receiving Notifications on Your Phone

To ensure you get timely notifications for leads:

1. Set up your email (kellie@kellieortiz.com) on your smartphone
2. Create a special rule or filter to highlight emails coming from Formspree
3. Set a unique notification sound for these emails

## Troubleshooting

If forms aren't working properly:

1. **Not receiving emails**: Check your spam folder or add Formspree to your contacts
2. **Form errors**: Make sure your Formspree account is verified
3. **Form not submitting**: Ensure the Form ID in the HTML is correct

For more help, visit Formspree's help center: https://help.formspree.io/
